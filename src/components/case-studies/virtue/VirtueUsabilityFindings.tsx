"use client";

import { Reveal } from "@/components/Reveal";
import { virtueUsabilityFindingsCopy } from "@/data/virtue-phase2-assets";

export function VirtueUsabilityFindings() {
  return (
    <section className="virtue-p2-findings bg-white pb-14 pt-4 md:pb-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">
            {virtueUsabilityFindingsCopy.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="virtue-p2-findings__grid mt-10 md:mt-12">
          {virtueUsabilityFindingsCopy.findings.map((finding) => (
            <article key={finding.number} className="virtue-p2-finding-card">
              <div className="virtue-p2-finding-card__badge" aria-hidden>
                {finding.number}
              </div>
              <h3 className="virtue-persona__label mt-4">Finding</h3>
              <p className="virtue-body mt-3">{finding.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
