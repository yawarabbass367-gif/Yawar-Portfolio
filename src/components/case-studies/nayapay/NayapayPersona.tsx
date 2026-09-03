"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFigmaAssets, nayapayPersonaCopy } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

const personaDetails = [
  { label: "Name", value: nayapayPersonaCopy.name },
  { label: "Age", value: nayapayPersonaCopy.age },
  { label: "Occupation", value: nayapayPersonaCopy.occupation },
  { label: "Education", value: nayapayPersonaCopy.education },
  { label: "Location", value: nayapayPersonaCopy.location },
] as const;

export function NayapayPersona() {
  const portrait = nayapayFigmaAssets.feature4.persona;

  return (
    <section className="nayapay-persona bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <Reveal>
          <h3 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">
            👥 {nayapayPersonaCopy.title}
          </h3>
          <p className="mt-2 text-[15px] text-[var(--np-text-secondary,#666)] md:text-base">
            {nayapayPersonaCopy.tagline}
          </p>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:mt-5 md:text-base">
            {nayapayPersonaCopy.intro}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,233px)_minmax(0,1fr)] lg:items-start lg:gap-x-10 xl:gap-x-14">
          <Reveal delay={0.05} className="nayapay-persona__left mx-auto w-full max-w-[233px] lg:mx-0">
            <div className="overflow-hidden rounded-[20px]">
              <NayapayFigmaImage
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                className="nayapay-persona__portrait block h-auto w-full"
                sizes="233px"
                quality={100}
                unoptimized
              />
            </div>

            <dl className="mt-4 space-y-1 text-[13px] leading-relaxed text-[var(--np-text,#333)] md:text-[14px]">
              {personaDetails.map(({ label, value }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="font-semibold">{label}:</span> {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="nayapay-persona__right space-y-6 md:space-y-7">
            <div>
              <h4 className="text-base font-semibold tracking-tight text-[var(--np-text,#333)] md:text-lg">
                Background
              </h4>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-[15px]">
                {nayapayPersonaCopy.background}
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold tracking-tight text-[var(--np-text,#333)] md:text-lg">
                Goals
              </h4>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[14px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-[15px]">
                {nayapayPersonaCopy.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-base font-semibold tracking-tight text-[var(--np-text,#333)] md:text-lg">
                Pain Points
              </h4>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[14px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-[15px]">
                {nayapayPersonaCopy.painPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
