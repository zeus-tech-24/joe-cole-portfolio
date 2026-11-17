/** Big uppercase section title whose words rise into place, like the hero name. */
export default function DisplayTitle({ id, words }: { id: string; words: string[] }) {
  return (
    <h2 id={id} className="display-title" data-reveal="words">
      {words.map((word, i) => (
        <span key={word}>
          {i > 0 && " "}
          <span className="dt-word">
            <span style={{ ["--w" as string]: i }}>{word}</span>
          </span>
        </span>
      ))}
    </h2>
  );
}
