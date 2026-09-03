"use client";

import { Reveal } from "@/components/Reveal";
import { virtueTakeawaysCopy } from "@/data/virtue-phase2-assets";

export function VirtueTakeaways() {
  return (
    <section className="virtue-p2-takeaways">
      <div className="virtue-p2-takeaways__panel">
        <div className="virtue-board mx-auto">
        <Reveal>
          <h2 className="virtue-section-title">{virtueTakeawaysCopy.heading}</h2>
        </Reveal>

        <Reveal delay={0.04} className="mt-10 max-w-[1193px] md:mt-12">
          <h3 className="virtue-subheading">{virtueTakeawaysCopy.learnedHeading}</h3>
          <p className="virtue-body mt-4">{virtueTakeawaysCopy.learnedBody}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 max-w-[1094px] md:mt-12">
          <h3 className="virtue-subheading">{virtueTakeawaysCopy.impactHeading}</h3>
          <p className="virtue-body mt-4">{virtueTakeawaysCopy.impactBody}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 max-w-[1042px] md:mt-12">
          <p className="virtue-body">{virtueTakeawaysCopy.closingQuote}</p>
          <p className="virtue-body mt-8 text-center font-semibold text-[var(--vt-text)] md:text-left">
            {virtueTakeawaysCopy.signOff}
          </p>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
