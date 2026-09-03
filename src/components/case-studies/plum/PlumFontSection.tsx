import { plumCopy } from "@/data/plum-case-study";

export function PlumFontSection() {
  return (
    <section className="plum-font" aria-labelledby="plum-font-heading">
      <div className="plum-board">
        <h2 id="plum-font-heading" className="plum-section-label">
          {plumCopy.sections.font}
        </h2>

        <div className="plum-font__stage">
          <span className="plum-font__watermark" aria-hidden>
            Ab
          </span>
          <div className="plum-font__content">
            <p className="plum-font__name">{plumCopy.font.name}</p>
            <p className="plum-font__alphabet">{plumCopy.font.alphabet}</p>
            <div className="plum-font__weights">
              {plumCopy.font.weights.map((w) => (
                <span
                  key={w.label}
                  className="plum-font__weight"
                  style={{ fontWeight: w.weight }}
                >
                  {w.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
