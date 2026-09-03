"use client";

import { Reveal } from "@/components/Reveal";
import { virtueAboutCopy, virtueAssets } from "@/data/virtue-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtueAbout() {
  const { bgShape, icon3d } = virtueAssets.section2;

  return (
    <section className="virtue-about relative z-[2] overflow-x-clip pb-16 pt-0 md:pb-24">
      <div aria-hidden className="virtue-about__bg-wrap pointer-events-none absolute inset-0 z-0">
        <VirtueFigmaImage
          src={bgShape.src}
          alt=""
          width={bgShape.width}
          height={bgShape.height}
          fill
          className="virtue-about__bg object-cover object-top"
          sizes="100vw"
          unoptimized
        />
      </div>

      <div className="virtue-board relative z-[1] mx-auto px-[var(--vt-gutter)] pb-4 pt-[clamp(6.5rem,14vw,10.5rem)]">
        <Reveal className="text-center">
          <h2 className="virtue-section-title">{virtueAboutCopy.heading}</h2>
        </Reveal>

        <div className="virtue-about__layout relative mt-10 md:mt-12">
          <Reveal className="virtue-about__copy max-w-[667px] space-y-[clamp(1.75rem,3.5vw,2.75rem)]">
            {virtueAboutCopy.items.map((item) => (
              <div key={item.id}>
                <h3 className="virtue-subheading">{item.title}</h3>
                <p className="virtue-body mt-2">{item.body}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.06} className="virtue-about__icon">
            <VirtueFigmaImage
              src={icon3d.src}
              alt=""
              width={icon3d.width}
              height={icon3d.height}
              className="virtue-about__icon-img h-auto w-full"
              sizes="(max-width: 1024px) 55vw, 280px"
              quality={100}
              unoptimized
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
