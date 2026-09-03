"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { nayapayFigmaAssets, nayapayHeroCopy } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

/**
 * Hero layout maps to Figma Group 1010108018 (668:3) at 1047×829.
 * Composition Group 1010108017 (668:2) is 660.78×572.63 at y≈257.
 * Headline (532:696) sits at y≈78; gap to composition ≈76px.
 */
export function NayapayHero() {
  const { background, composition } = nayapayFigmaAssets.hero;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--np-primary-bright,#ff5018)]">
      <NayapayFigmaImage
        src={background.src}
        alt=""
        width={background.width}
        height={background.height}
        fill
        priority
        className="-z-10 object-cover object-center"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1047px] px-5 pb-0 pt-6 md:px-8 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-white/95 md:text-xs"
        >
          <span>{nayapayHeroCopy.metaLeft}</span>
          <span>{nayapayHeroCopy.metaCenter}</span>
          <span>{nayapayHeroCopy.metaRight}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.75, ease: easeOut }}
          className="mx-auto mt-6 max-w-[870px] text-center text-[clamp(1.75rem,4.35vw,2.851375rem)] font-semibold leading-[1.125] tracking-[0.05px] text-white md:mt-8"
        >
          <span className="inline-block rounded-[4px] bg-black px-2 py-0.5">Simple</span> way to
          manage all
          <br className="hidden sm:block" />
          personal finances in{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative">
              one
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-1.5 -inset-y-0.5 rounded-[50%] border-[2.5px] border-[#ffb088]"
              />
            </span>{" "}
            app
          </span>
        </motion.h1>

        {/* Figma: ~76px from headline bottom to composition top */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.85, ease: easeOut }}
          className="relative mx-auto mt-[clamp(2.5rem,7.3vw,4.75rem)] flex w-full justify-center"
        >
          <NayapayFigmaImage
            src={composition.src}
            alt="NayaPay hero product composition with phone, notification, and price tag"
            width={composition.width}
            height={composition.height}
            priority
            className="nayapay-comp nayapay-comp--hero"
            sizes="(max-width: 767px) 360px, 661px"
            quality={100}
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}
