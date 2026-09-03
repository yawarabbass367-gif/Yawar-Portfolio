import Image from "next/image";
import { plumAssets, plumCopy } from "@/data/plum-case-study";
import { PlumWaveform } from "./PlumWaveform";

export function PlumHero() {
  const { intro } = plumCopy;
  const phone = plumAssets.heroPhone;

  return (
    <section className="plum-hero" aria-label="Plum hero">
      <div className="plum-board">
        <div className="plum-hero__stage">
          {/* Brand lockup anchored to the top of the phone (Figma) */}
          <div className="plum-hero__phone-wrap">
            <div className="plum-hero__brand">
              <PlumWaveform className="plum-hero__wave" bars={13} />
              <h1 className="plum-hero__title">{plumCopy.brand}</h1>
            </div>

            <div className="plum-hero__phone">
              <Image
                src={phone.src}
                alt={phone.alt}
                width={phone.width}
                height={phone.height}
                className="plum-hero__phone-img"
                sizes="(max-width: 768px) 200px, 280px"
                priority
              />
            </div>
          </div>
        </div>

        <p className="plum-hero__intro">
          <span className="plum-accent">Plum</span>
          {" is a "}
          <span className="plum-accent">{intro.highlight}</span>
          {intro.after}
        </p>
      </div>
    </section>
  );
}
