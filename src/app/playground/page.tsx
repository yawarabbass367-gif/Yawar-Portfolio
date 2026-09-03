"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { playgroundItems } from "@/data/content";
import { ContactSection } from "@/components/ContactSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { easeOut } from "@/lib/motion";

export default function PlaygroundPage() {
  return (
    <main className="pt-[88px]">
      <section className="container-artemis py-20 md:py-28">
        <RevealGroup className="mb-14 max-w-3xl md:mb-20">
          <RevealItem>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-soft)]">
              Experiments
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="text-5xl font-medium tracking-tight md:text-7xl">Playground</h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-[color:var(--color-muted)] md:text-xl">
              Experimental designs and side projects crafted to push boundaries for emerging
              ventures.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {playgroundItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.08, ease: easeOut }}
              className="mb-5 break-inside-avoid"
            >
              <div
                className="group relative overflow-hidden rounded-[22px]"
                data-cursor="Peek"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-12 opacity-0 transition group-hover:opacity-100">
                  <div className="text-sm font-medium text-white">{item.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-20 rounded-[28px] bg-[color:var(--color-ink)] px-8 py-14 text-center text-[color:var(--color-bg)] md:px-16">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Love what you see?
          </h2>
          <p className="mt-4 text-[color:var(--color-stone)]">Let&apos;s connect!</p>
          <Link
            href="/#works"
            data-cursor="Go"
            className="mt-8 inline-flex rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-medium text-white"
          >
            Start a project
          </Link>
        </Reveal>
      </section>
      <ContactSection />
    </main>
  );
}
