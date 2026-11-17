"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GripHorizontal } from "lucide-react";

type Offset = { x: number; y: number };

const HOLD_MS = 280; // touch: how long to hold before the card lifts
const MOVE_TOLERANCE = 8; // touch: movement allowed during the hold before it counts as a scroll
const NAV_HEIGHT = 64;
const EDGE = 12;
const KEY_STEP = 24;

/**
 * The hero intro card. It can be picked up and moved anywhere inside the hero:
 * mouse — press and drag; touch — tap and hold, then drag (a quick swipe still scrolls the page);
 * the grip in the corner drags straight away and also moves the card with the arrow keys.
 * Double-click the card (or press Home/Escape on the grip) to put it back.
 */
export default function HeroCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const offset = useRef<Offset>({ x: 0, y: 0 });
  const drag = useRef<{ id: number | "touch"; px: number; py: number; ox: number; oy: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [moved, setMoved] = useState(false);

  // Keep the whole card inside the hero and below the nav.
  const clamp = useCallback((o: Offset): Offset => {
    const card = ref.current;
    const hero = card?.closest(".hero");
    if (!card || !hero) return o;
    const h = hero.getBoundingClientRect();
    const r = card.getBoundingClientRect();
    const naturalX = r.left - offset.current.x;
    const naturalY = r.top - offset.current.y;
    const minX = h.left + EDGE - naturalX;
    const maxX = h.right - EDGE - r.width - naturalX;
    const minY = h.top + NAV_HEIGHT + EDGE - naturalY;
    const maxY = h.bottom - EDGE - r.height - naturalY;
    return {
      x: Math.round(Math.max(Math.min(o.x, maxX), Math.min(minX, maxX))),
      y: Math.round(Math.max(Math.min(o.y, maxY), Math.min(minY, maxY))),
    };
  }, []);

  const apply = useCallback((o: Offset) => {
    offset.current = o;
    ref.current?.style.setProperty("translate", `${o.x}px ${o.y}px`);
    setMoved(o.x !== 0 || o.y !== 0);
  }, []);

  const begin = useCallback((id: number | "touch", px: number, py: number) => {
    drag.current = { id, px, py, ox: offset.current.x, oy: offset.current.y };
    setDragging(true);
  }, []);

  const follow = useCallback(
    (px: number, py: number) => {
      const d = drag.current;
      if (!d) return;
      apply(clamp({ x: d.ox + px - d.px, y: d.oy + py - d.py }));
    },
    [apply, clamp],
  );

  const finish = useCallback(() => {
    drag.current = null;
    setDragging(false);
  }, []);

  const reset = useCallback(() => apply({ x: 0, y: 0 }), [apply]);

  // Mouse and pen anywhere on the card, plus touch on the grip: drag straight away.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const onGrip = Boolean(target.closest(".hero-card-grip"));
    if (e.pointerType === "touch" && !onGrip) return; // touch elsewhere uses tap-and-hold
    if (e.button !== 0 || (!onGrip && target.closest("a, button"))) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    begin(e.pointerId, e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current?.id === e.pointerId) follow(e.clientX, e.clientY);
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current?.id === e.pointerId) finish();
  };

  // Touch anywhere else on the card: hold still briefly, then drag. A quick swipe scrolls as usual.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let origin: { x: number; y: number } | null = null;

    const cancelHold = () => {
      clearTimeout(timer);
      origin = null;
    };

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || (e.target as HTMLElement).closest("a, button")) return;
      const t = e.touches[0];
      origin = { x: t.clientX, y: t.clientY };
      timer = setTimeout(() => {
        if (!origin) return;
        if ("vibrate" in navigator) navigator.vibrate(8);
        begin("touch", origin.x, origin.y);
      }, HOLD_MS);
    };

    const onMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (drag.current?.id === "touch") {
        e.preventDefault(); // the card is lifted: stop the page from scrolling
        follow(t.clientX, t.clientY);
      } else if (origin && Math.hypot(t.clientX - origin.x, t.clientY - origin.y) > MOVE_TOLERANCE) {
        cancelHold(); // moved too soon: it's a scroll
      }
    };

    const onEnd = () => {
      cancelHold();
      if (drag.current?.id === "touch") finish();
    };

    const onContextMenu = (e: Event) => {
      if (origin || drag.current) e.preventDefault();
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("touchcancel", onEnd);
    el.addEventListener("contextmenu", onContextMenu);
    return () => {
      cancelHold();
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
      el.removeEventListener("contextmenu", onContextMenu);
    };
  }, [begin, follow, finish]);

  // Layout changes (resize, rotation, breakpoints) must not strand the card outside the hero.
  useEffect(() => {
    const onResize = () => apply(clamp(offset.current));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [apply, clamp]);

  const onGripKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? KEY_STEP * 4 : KEY_STEP;
    const moves: Record<string, Offset> = {
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 },
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
    };
    if (moves[e.key]) {
      e.preventDefault();
      const m = moves[e.key];
      apply(clamp({ x: offset.current.x + m.x, y: offset.current.y + m.y }));
    } else if (e.key === "Home" || e.key === "Escape") {
      e.preventDefault();
      reset();
    }
  };

  return (
    <div
      ref={ref}
      className="hero-card"
      data-dragging={dragging}
      data-moved={moved}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onDoubleClick={(e) => {
        if (!(e.target as HTMLElement).closest("a, button")) reset();
      }}
    >
      <button
        type="button"
        className="hero-card-grip"
        aria-label="Move this card. Drag it, or use the arrow keys. Home puts it back."
        title="Drag to move"
        onKeyDown={onGripKey}
      >
        <GripHorizontal aria-hidden="true" />
      </button>
      {children}
    </div>
  );
}
