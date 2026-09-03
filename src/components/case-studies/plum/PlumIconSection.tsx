import { plumCopy } from "@/data/plum-case-study";
import { PlumWaveform } from "./PlumWaveform";

export function PlumIconSection() {
  return (
    <section className="plum-icon-section" aria-labelledby="plum-icon-heading">
      <div className="plum-board">
        <h2 id="plum-icon-heading" className="plum-section-label">
          {plumCopy.sections.icon}
        </h2>
        <div className="plum-icon-section__mark" aria-hidden>
          <PlumWaveform className="plum-icon-section__wave" bars={15} />
        </div>
      </div>
    </section>
  );
}
