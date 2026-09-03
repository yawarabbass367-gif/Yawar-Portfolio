"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { easeOut } from "@/lib/motion";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-artemis py-24 md:py-32">
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[color:var(--color-soft)]">
          FAQs
        </p>
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Got questions? <span className="text-emphasis">I&apos;ve got answers.</span>
        </h2>
      </Reveal>

      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.question} delay={i * 0.05}>
              <div className="border-b border-[color:var(--color-line)]">
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor={isOpen ? "Close" : "Open"}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium tracking-tight md:text-xl">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-5 w-5 shrink-0"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[color:var(--color-ink)]" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--color-ink)]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[color:var(--color-muted)] md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
