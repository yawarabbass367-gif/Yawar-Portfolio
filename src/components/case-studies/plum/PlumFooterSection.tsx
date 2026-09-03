import { plumCopy } from "@/data/plum-case-study";
import { PlumWaveform } from "./PlumWaveform";

export function PlumFooterSection() {
  return (
    <section className="plum-footer-section" aria-label="Case study closing">
      <div className="plum-footer-section__accent" aria-hidden />
      <div className="plum-board plum-footer-section__inner">
        <div className="plum-footer-section__brand">
          <p className="plum-footer-section__title">{plumCopy.brand}</p>
          <PlumWaveform className="plum-footer-section__wave" bars={13} />
        </div>
        <div className="plum-footer-section__thanks">
          <p className="plum-footer-section__thank-you">{plumCopy.footer.thankYou}</p>
          <p className="plum-footer-section__disclaimer">{plumCopy.footer.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
