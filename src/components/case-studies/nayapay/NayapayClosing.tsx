"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { nayapayClosingCopy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

/** Figma closing card — dark rounded plate, hands icon, orange title + CTA */
export function NayapayClosing() {
  const { hands } = nayapayFigmaAssets.closing;

  return (
    <section className="nayapay-closing relative isolate overflow-hidden bg-[#f8f6f3] py-16 md:py-24">
      <div aria-hidden className="nayapay-closing__dot pointer-events-none absolute right-[8%] top-[12%] hidden h-3 w-3 rounded-full bg-[#1a1a1a] md:block" />

      <div className="mx-auto w-full max-w-[1047px] px-5 md:px-10">
        <Reveal className="mx-auto flex justify-center">
          <div className="nayapay-closing__card w-full max-w-[900px]">
            <NayapayFigmaImage
              src={hands.src}
              alt=""
              width={hands.width}
              height={hands.height}
              className="nayapay-closing__hands mx-auto h-auto w-[103px]"
              sizes="103px"
              quality={100}
              unoptimized
            />

            <h2 className="nayapay-closing__title mt-6 text-center md:mt-7">
              <span className="block">{nayapayClosingCopy.titleLine1}</span>
              <span className="block">{nayapayClosingCopy.titleLine2}</span>
            </h2>

            <button
              type="button"
              className="nayapay-closing__cta mt-5 md:mt-6"
            >
              {nayapayClosingCopy.cta}
            </button>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Link
            href="/works"
            data-cursor="Back"
            className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
          >
            ← Back to All Works
          </Link>
        </div>
      </div>
    </section>
  );
}
