"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { virtuePhase2Assets, virtueUsabilityStudyCopy } from "@/data/virtue-phase2-assets";

const iconMap = {
  studyType: virtuePhase2Assets.usability.icons.studyType,
  location: virtuePhase2Assets.usability.icons.location,
  participant: virtuePhase2Assets.usability.icons.participant,
} as const;

export function VirtueUsabilityStudy() {
  const { params } = virtueUsabilityStudyCopy;

  return (
    <section className="virtue-p2-usability-study bg-white py-14 md:py-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">
            {virtueUsabilityStudyCopy.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 md:mt-12">
          <div className="virtue-p2-params-grid">
            {params.map((param) => {
              const icon =
                param.iconKey === "length" ? null : iconMap[param.iconKey as keyof typeof iconMap];

              return (
                <article key={param.label} className="virtue-p2-param-card">
                  <div className="virtue-p2-param-card__icon-wrap">
                    {icon ? (
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                        className="virtue-p2-param-card__icon"
                        unoptimized
                      />
                    ) : (
                      <div className="virtue-p2-param-card__icon virtue-p2-param-card__icon--length" aria-hidden>
                        ⏲
                      </div>
                    )}
                  </div>

                  <h3 className="virtue-p2-param-card__label">{param.label}</h3>

                  {"value" in param ? (
                    <p className="virtue-p2-param-card__value">{param.value}</p>
                  ) : (
                    <div className="virtue-p2-param-card__chips">
                      {param.options.map((option) => (
                        <span
                          key={option}
                          className={`virtue-p2-param-chip ${
                            option === param.selected ? "virtue-p2-param-chip--active" : ""
                          }`}
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
