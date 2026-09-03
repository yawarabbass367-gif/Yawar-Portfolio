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
              Ready to build something{" "}
              <span className="text-emphasis text-[color:var(--color-sky)]">amazing?</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-[color:var(--color-stone)]">
              I&apos;d love to connect with you!
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="mt-3 text-base transition group-hover:text-[color:var(--color-sky)]">
                  {link.value}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href="https://framer.com/marketplace/templates/artemis/"
            target="_blank"
            rel="noreferrer"
            data-cursor="Get"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            Download this template
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://www.framer.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="Open"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-[color:var(--color-bg)] transition hover:border-white/50"
          >
            Use For Free
          </a>
        </Reveal>
      </div>
    </section>
  );
}
