"use client";

import { Reveal } from "@/components/Reveal";
import { virtueProblemCopy } from "@/data/virtue-assets";

export function VirtueProblem() {
  return (
    <section className="virtue-problem bg-white pb-14 pt-12 md:pb-20 md:pt-16">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">{virtueProblemCopy.heading}</h2>
          <p className="virtue-body mt-6 max-w-[920px]">{virtueProblemCopy.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
