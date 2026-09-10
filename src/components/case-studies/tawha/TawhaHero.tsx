"use client";

import Link from "next/link";
import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaHero() {
  const { heroWordmark, heroPhoneHand } = tawhaAssets;

  return (
    <section className="tawha-hero" aria-labelledby="tawha-hero-tagline">
      <div className="tawha-hero__stage">
        <div className="tawha-hero__nav tawha-board">
          <Link href="/works" data-cursor="Back" className="tawha-hero__nav-link">
            ← All Works
          </Link>
          <p className="tawha-hero__nav-label">Tawha Pay Case Study</p>
        </div>

        <p id="tawha-hero-tagline" className="tawha-hero__tagline">
          {tawhaCopy.heroTagline}
        </p>

        <div className="tawha-hero__art">
          <Image
            src={heroWordmark.src}
            alt=""
            width={heroWordmark.width}
            height={heroWordmark.height}
            className="tawha-hero__wordmark"
            priority
            aria-hidden
            sizes="(max-width: 640px) 100vw, 1100px"
          />
          <Image
            src={heroPhoneHand.src}
            alt={heroPhoneHand.alt}
            width={heroPhoneHand.width}
            height={heroPhoneHand.height}
            className="tawha-hero__phone"
            priority
            sizes="(max-width: 640px) 70vw, 420px"
          />
        </div>

        <p className="tawha-hero__credit">UI/UX Design</p>
      </div>
    </section>
  );
}
