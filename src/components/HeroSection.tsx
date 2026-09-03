"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

type FloatingCard = {
  key: string;
  alt: string;
  className: string;
  delay: number;
  src?: string;
  custom?: "ableton";
};

const floatingCards: FloatingCard[] = [
  {
    key: "field",
    src: "/case-studies/photo-1723987513091-4cc24f8e5c71.avif",
    alt: "Editorial portrait in a field",
    className:
      "left-[3%] top-[17%] w-[148px] rotate-[17deg] sm:left-[5%] sm:w-[175px] md:left-[7%] md:top-[13%] md:w-[205px] lg:left-[10%] lg:w-[232px]",
    delay: 0.2,
  },
  {
    key: "cassie",
    src: "/case-studies/photo-1671519821564-ced7e41ee7ae.jpeg",
    alt: "Cassie and Henry poster",
    className:
      "right-[2%] top-[15%] w-[138px] -rotate-[15deg] sm:right-[4%] sm:w-[168px] md:right-[6%] md:top-[11%] md:w-[198px] lg:right-[9%] lg:w-[226px]",
    delay: 0.3,
  },
  {
    key: "abstract",
    src: "/case-studies/photo-1769123011272-197d95c2b71d.jpeg",
    alt: "Colorful abstract landscape",
    className:
      "bottom-[13%] left-[5%] w-[118px] -rotate-[11deg] sm:bottom-[15%] sm:left-[8%] sm:w-[140px] md:bottom-[17%] md:left-[11%] md:w-[158px] lg:left-[14%] lg:w-[172px]",
    delay: 0.4,
  },
  {
    key: "ableton",
    custom: "ableton",
    alt: "Ableton Springs and Summer",
    className:
      "bottom-[11%] right-[4%] w-[122px] rotate-[9deg] sm:bottom-[13%] sm:right-[7%] sm:w-[146px] md:bottom-[15%] md:right-[10%] md:w-[164px] lg:right-[13%] lg:w-[182px]",
    delay: 0.5,
  },
];

function CardFace({ card }: { card: FloatingCard }) {
  if (card.custom === "ableton") {
    return (
      <div className="relative flex aspect-[4/5] w-full flex-col justify-between bg-[linear-gradient(165deg,#d7e8ff_0%,#eef4ff_42%,#f7f0d8_100%)] p-[12%]">
        <p className="text-[clamp(0.95rem,1.6vw,1.35rem)] font-bold leading-tight text-[color:var(--color-navy)]">
          Ableton
          <br />
          Springs &amp;
          <br />
          Summer
        </p>
        <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]/70" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full">
      <Image
        src={card.src!}
        alt={card.alt}
        fill
        priority
        className="object-cover"
        sizes="240px"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[88px]">
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
        {floatingCards.map((card) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: card.delay, duration: 0.85, ease: easeOut }}
            className={`absolute ${card.className}`}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5.2 + card.delay * 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="overflow-hidden rounded-[3px] bg-white shadow-[0_16px_44px_rgba(0,26,68,0.12)] ring-1 ring-black/[0.04]"
            >
              <CardFace card={card} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-[720px] flex-col items-center justify-center px-6 pb-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11 } },
          }}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
            className="mb-5 text-[15px] text-[color:var(--color-muted)] md:mb-6 md:text-base"
          >
            Hi I am Yawar
            <br />
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 26 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
            }}
            className="text-[clamp(2.75rem,7.5vw,5.4rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[color:var(--color-navy)]"
          >
            Designing Products People Love to Use
          </motion.h1>
          

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
            }}
            className="mt-3 text-[clamp(1.35rem,3.2vw,2.25rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[color:var(--color-navy)]"
          >
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
            className="mt-6 text-[15px] text-[color:var(--color-muted)] md:text-base"
          >
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
            className="mt-9"
          >
            <Link
              href="/#works"
              data-cursor="Go"
              className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-accent)] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(255,89,0,0.3)] transition hover:brightness-110"
            >
              Get Started
              <span aria-hidden className="translate-y-[-1px] text-[15px] leading-none">
                ↗
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-14 flex w-full justify-center gap-3 overflow-x-auto pb-1 sm:hidden">
          {floatingCards.map((card) => (
            <div
              key={`mobile-${card.key}`}
              className="relative h-36 w-28 shrink-0 overflow-hidden rounded-[3px] shadow-md"
            >
              <CardFace card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
