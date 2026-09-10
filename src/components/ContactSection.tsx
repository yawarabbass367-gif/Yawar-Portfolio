"use client";

import { contactLinks } from "@/data/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section className="border-t border-[color:var(--color-line)] bg-[color:var(--color-ink)] text-[color:var(--color-bg)]">
      <div className="container-artemis py-24 md:py-32">
        <RevealGroup>
          <RevealItem>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
              Contact
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
              Leaving so soon?
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-xl text-lg text-[color:var(--color-stone)]">
              No worries—let&apos;s build something next time you drop by.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={0.05 * i}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor="Go"
                className="group block rounded-2xl border border-white/10 p-5 transition hover:border-white/30 hover:bg-white/5"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-stone)]">
                  {link.label}
                </div>
                <div className="mt-3 break-all text-base transition group-hover:text-[color:var(--color-sky)]">
                  {link.value}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
