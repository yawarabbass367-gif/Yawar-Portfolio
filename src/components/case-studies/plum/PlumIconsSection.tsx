import { plumCopy } from "@/data/plum-case-study";
import { PlumIconGrid } from "./PlumIconGrid";

export function PlumIconsSection() {
  return (
    <section className="plum-icons-section" aria-labelledby="plum-icons-heading">
      <div className="plum-board">
        <h2 id="plum-icons-heading" className="plum-section-label">
          {plumCopy.sections.icons}
        </h2>
        <PlumIconGrid />
      </div>
    </section>
  );
}
