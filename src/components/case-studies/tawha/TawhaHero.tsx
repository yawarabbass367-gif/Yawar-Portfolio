"use client";

import Link from "next/link";
import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaHero() {
  const { heroComposition } = tawhaAssets;

  return (
    <section className="tawha-hero" aria-labelledby="tawha-hero-tagline">
      <div className="tawha-hero__stage">
        <div className="tawha-hero__nav tawha-board">
          <Link
            href="/works"
            data-cursor="Back"
            className="tawha-hero__nav-link"
          >
            ← All Works
          </Link>
          <p className="tawha-hero__nav-label">Tawha Pay Case Study</p>
        </div>

        <p id="tawha-hero-tagline" className="tawha-hero__tagline">
          {tawhaCopy.heroTagline}
        </p>

        <Image
          src={heroComposition.src}
          alt={heroComposition.alt}
          width={heroComposition.width}
          height={heroComposition.height}
          className="tawha-hero__composition"
          priority
          sizes="(max-width: 640px) 100vw, 1200px"
        />
      </div>
    </section>
  );
}
