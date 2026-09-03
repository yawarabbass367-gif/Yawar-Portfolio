"use client";

import { Reveal } from "@/components/Reveal";
import { virtueAssets, virtueDesignProcessCopy } from "@/data/virtue-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

const stepPositions = [
  { className: "virtue-process__label--1", step: virtueDesignProcessCopy.steps[0] },
  { className: "virtue-process__label--2", step: virtueDesignProcessCopy.steps[1] },
  { className: "virtue-process__label--3", step: virtueDesignProcessCopy.steps[2] },
  { className: "virtue-process__label--4", step: virtueDesignProcessCopy.steps[3] },
  { className: "virtue-process__label--5", step: virtueDesignProcessCopy.steps[4] },
] as const;

export function VirtueDesignProcess() {
  const diagram = virtueAssets.designProcess.diagram;

  return (
    <section className="virtue-process bg-white pb-14 pt-4 md:pb-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal className="text-center">
          <h2 className="virtue-section-title virtue-section-title--center">{virtueDesignProcessCopy.heading}</h2>
          <p className="virtue-body mx-auto mt-5 max-w-[741px]">{virtueDesignProcessCopy.intro}</p>
        </Reveal>

        <Reveal delay={0.05} className="virtue-process__diagram mx-auto mt-10 md:mt-12">
          <div className="virtue-process__diagram-inner">
            <VirtueFigmaImage
              src={diagram.src}
              alt=""
              width={diagram.width}
              height={diagram.height}
              className="virtue-process__diagram-img block h-auto w-full"
              sizes="(max-width: 768px) 100vw, 986px"
              unoptimized
            />
            <div className="virtue-process__labels" aria-hidden>
              {stepPositions.map(({ className, step }) => (
                <span key={step} className={`virtue-process__label ${className}`}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08} className="virtue-process__panel-wrap mt-10 md:mt-14">
        <div className="virtue-process__panel">
          <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
            <p className="virtue-body mx-auto max-w-[955px] text-center">{virtueDesignProcessCopy.body}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
