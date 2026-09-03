"use client";

import { Reveal } from "@/components/Reveal";
import { virtueAssets, virtuePersonaCopy } from "@/data/virtue-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtuePersona() {
  const portrait = virtueAssets.persona.portrait;

  return (
    <section className="virtue-persona bg-white py-14 md:py-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title">{virtuePersonaCopy.heading}</h2>
          <p className="virtue-body mt-3 max-w-[541px]">{virtuePersonaCopy.intro}</p>
        </Reveal>

        <div className="virtue-persona__grid mt-10 lg:mt-12">
          <Reveal delay={0.04} className="virtue-persona__left">
            <VirtueFigmaImage
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              className="virtue-persona__portrait block h-auto w-full max-w-[284px] rounded-[16.587px] object-cover"
              sizes="284px"
              quality={100}
              unoptimized
            />

            <h3 className="virtue-persona__name mt-[59px]">{virtuePersonaCopy.name}</h3>
            <p className="virtue-body mt-2 max-w-[445px]">&ldquo;{virtuePersonaCopy.quote}&rdquo;</p>

            <h4 className="virtue-persona__label mt-8">{virtuePersonaCopy.demographics.heading}</h4>
            <dl className="virtue-body mt-3 space-y-1">
              {virtuePersonaCopy.demographics.items.map((item) => (
                <div key={item.label}>
                  <dt className="inline">{item.label}: </dt>
                  <dd className="inline">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="virtue-persona__sliders mt-8 max-w-[373px] space-y-5">
              {virtuePersonaCopy.personality.map((trait) => (
                <div key={trait.left} className="virtue-slider">
                  <div className="virtue-slider__labels">
                    <span>{trait.left}</span>
                    <span>{trait.right}</span>
                  </div>
                  <div className="virtue-slider__track">
                    <span className="virtue-slider__fill" style={{ width: `${trait.value}%` }} />
                    <span className="virtue-slider__thumb" style={{ left: `${trait.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="virtue-persona__right">
            <div>
              <h4 className="virtue-persona__label">{virtuePersonaCopy.bio.heading}</h4>
              <p className="virtue-body mt-3 max-w-[736px]">{virtuePersonaCopy.bio.body}</p>
            </div>

            <div className="mt-8">
              <h4 className="virtue-persona__label">{virtuePersonaCopy.painPoints.heading}</h4>
              <ul className="virtue-persona__bullets mt-4 space-y-4">
                {virtuePersonaCopy.painPoints.items.map((item) => (
                  <li key={item} className="virtue-body virtue-persona__bullet-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="virtue-persona__label">{virtuePersonaCopy.personalGoals.heading}</h4>
              <ul className="virtue-persona__bullets mt-4 space-y-3">
                {virtuePersonaCopy.personalGoals.items.map((item) => (
                  <li key={item} className="virtue-body virtue-persona__bullet-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
