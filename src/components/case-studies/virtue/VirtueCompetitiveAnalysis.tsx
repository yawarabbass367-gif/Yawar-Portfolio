"use client";

import { Reveal } from "@/components/Reveal";
import { virtueCompetitiveCopy } from "@/data/virtue-assets";

export function VirtueCompetitiveAnalysis() {
  return (
    <section className="virtue-competitive bg-white pb-16 pt-4 md:pb-24">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">{virtueCompetitiveCopy.heading}</h2>
          <p className="virtue-body mt-6 max-w-[920px]">{virtueCompetitiveCopy.intro}</p>
        </Reveal>

        <Reveal delay={0.06} className="virtue-competitive__table-wrap mt-10 overflow-x-auto md:mt-12">
          <table className="virtue-competitive__table">
            <thead>
              <tr>
                {virtueCompetitiveCopy.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {virtueCompetitiveCopy.rows.map((row) => (
                <tr key={row.name}>
                  <th scope="row" className="virtue-competitive__name">
                    {row.name}
                  </th>
                  <td>{row.whatItDoes}</td>
                  <td>{row.strengths}</td>
                  <td>{row.weakness}</td>
                  <td>{row.opportunities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
