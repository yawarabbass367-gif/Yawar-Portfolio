import { plumCopy } from "@/data/plum-case-study";

export function PlumColorsSection() {
  return (
    <section className="plum-colors" aria-labelledby="plum-colors-heading">
      <div className="plum-board">
        <h2 id="plum-colors-heading" className="plum-section-label">
          {plumCopy.sections.colors}
        </h2>
        <ul className="plum-colors__row" aria-label="Brand color palette">
          {plumCopy.colors.map((c) => (
            <li key={c.name} className="plum-colors__swatch" title={`${c.name} ${c.hex}`}>
              <span
                className="plum-colors__disc"
                style={{ backgroundColor: c.hex }}
                aria-hidden
              />
              <span className="sr-only">
                {c.name}: {c.hex}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
