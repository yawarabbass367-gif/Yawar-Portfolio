"use client";

import { Reveal } from "@/components/Reveal";
import { virtueResearchCopy } from "@/data/virtue-assets";

export function VirtueUserResearch() {
  return (
    <section className="virtue-research bg-white py-14 md:py-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">{virtueResearchCopy.heading}</h2>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="virtue-research__panel-wrap mt-8 md:mt-10">
        <div className="virtue-research__panel">
          <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
            <ul className="virtue-research__list mx-auto max-w-[990px] space-y-5 md:space-y-6">
              {virtueResearchCopy.methods.map((method) => (
                <li key={method.title} className="virtue-body">
                  {method.title}: {method.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
