import { tawhaCopy } from "@/data/tawha-case-study";

export function TawhaClosing() {
  const { closing } = tawhaCopy;

  return (
    <section className="tawha-closing" aria-labelledby="tawha-closing-heading">
      <div className="tawha-board tawha-closing__panel">
        <h2 id="tawha-closing-heading" className="tawha-closing__title">
          {closing.title}
        </h2>
        <p className="tawha-closing__body">{closing.body}</p>
        <span className="tawha-closing__emoji" aria-hidden>
          {closing.emoji}
        </span>
      </div>
    </section>
  );
}
