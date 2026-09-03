"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { virtueHifiCopy, virtuePhase2Assets } from "@/data/virtue-phase2-assets";

export function VirtueHighFidelity() {
  const phones = virtuePhase2Assets.hifi.phones;

  return (
    <section className="virtue-p2-hifi">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal className="virtue-p2-screens-header">
          <h2 className="virtue-section-title virtue-section-title--decorated">
            {virtueHifiCopy.heading}
          </h2>
          <div className="virtue-p2-hifi__desc">
            <p className="virtue-body">{virtueHifiCopy.body}</p>
          </div>
        </Reveal>
      </div>

      <div className="virtue-p2-screens-bleed" aria-label="High fidelity screens">
        <div className="virtue-p2-hifi-stage">
          {phones.map((phone) => (
            <Image
              key={phone.src}
              src={phone.src}
              alt=""
              width={phone.width}
              height={phone.height}
              className="virtue-p2-hifi-stage__phone"
              style={{
                left: `${phone.left}%`,
                top: `${phone.top}%`,
              }}
              sizes="(max-width: 768px) 40vw, 289px"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  );
}
