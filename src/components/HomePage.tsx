"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeProjects } from "@/data/projects";
import {
  aboutImages,
  brands,
  skills,
  testimonials,
} from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Marquee } from "@/components/Marquee";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { easeOut } from "@/lib/motion";

function highlightQuote(quote: string, highlight?: string) {
  if (!highlight || !quote.includes(highlight)) return quote;
  const [before, after] = quote.split(highlight);
  return (
    <>
      {before}
      <span className="text-emphasis text-[color:var(--color-ink)]">{highlight}</span>
      {after}
    </>
  );
}

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <Reveal className="container-artemis pb-6 pt-2 md:pb-10">
        <p className="text-sm text-[color:var(--color-soft)]">Sneak peak of my works</p>
        <div className="mt-3 h-px w-full bg-[color:var(--color-line)]">
          <motion.div
            className="h-px origin-left bg-[color:var(--color-ink)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}
          />
        </div>
      </Reveal>

      {/* Works */}
      <section id="works" className="container-artemis py-20 md:py-28">
        <RevealGroup className="mb-12 md:mb-16">
          <RevealItem>
            <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
              Design in <span className="text-emphasis">action</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 max-w-xl text-lg text-[color:var(--color-muted)]">
              Crafting functional, stunning products with founders.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {homeProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link
            href="/works"
            data-cursor="More"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] px-6 py-3 text-sm transition hover:border-[color:var(--color-ink)]"
          >
            Load More
            <span aria-hidden>↓</span>
          </Link>
        </Reveal>
      </section>

      <Marquee items={skills} />

      {/* What I bring */}
      <section className="container-artemis py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-soft)]">
            Capabilities
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            What I bring to the table
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
            Digital experiences that engage users and help your startup stand out from day one
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { title: "Product Strategy", body: "Clarify the problem, map journeys, and prioritize what ships." },
            { title: "Visual Systems", body: "Typography, color, and components that scale with your brand." },
            { title: "Founder Velocity", body: "Fast cycles from sketch to polished screens without the fluff." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-[22px] border border-[color:var(--color-line)] bg-white/40 p-7 transition hover:border-[color:var(--color-stone)] hover:bg-white/70">
                <div className="mb-6 text-xs text-[color:var(--color-accent)]">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-muted)]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="overflow-hidden bg-[color:var(--color-line-soft)]/60 py-24 md:py-32">
        <div className="container-artemis">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <RevealGroup>
              <RevealItem>
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-soft)]">
                  Behind the canvas
                </p>
              </RevealItem>
              <RevealItem>
                <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                  Finally, meet the designer passionate about helping startups succeed —{" "}
                  <span className="text-emphasis">a quick peek into my world</span>
                </h2>
              </RevealItem>
              <RevealItem>
                <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-[color:var(--color-muted)] md:text-lg">
                  <p>
                    I help startups turn big ideas into designs that actually work. Whether you need
                    an MVP that converts or a pitch deck that closes funding, I focus on results over
                    pretty pixels.
                  </p>
                  <p>
                    When I&apos;m not designing, you&apos;ll find me stargazing or hunting for the
                    perfect coffee. I believe great design should solve real problems fast—no endless
                    revisions, no designer ego, just stuff that works.
                  </p>
                </div>
              </RevealItem>
              <RevealItem>
                <a
                  href="https://framer.com/marketplace/templates/artemis/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Remix"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-medium text-white"
                >
                  Remix for Free!
                </a>
              </RevealItem>
            </RevealGroup>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: aboutImages.cat, label: "A cat person", delay: 0 },
                { src: aboutImages.hiking, label: "Enjoy hiking", delay: 0.1 },
                { src: aboutImages.coffee, label: "Hi, it's me :)", delay: 0.15, span: true },
              ].map((item) => (
                <Reveal
                  key={item.label}
                  delay={item.delay}
                  className={item.span ? "col-span-2" : ""}
                >
                  <div className="group relative overflow-hidden rounded-[22px]">
                    <div className={`relative ${item.span ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="absolute bottom-3 left-3 rounded-full bg-[color:var(--color-bg)]/90 px-3 py-1.5 text-xs backdrop-blur">
                      {item.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-artemis py-24 md:py-32">
        <Reveal className="mb-14 text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Kind words from <span className="text-emphasis">Clients</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[24px] border border-[color:var(--color-line)] bg-white/50 p-7">
                <p className="flex-1 text-[17px] leading-relaxed text-[color:var(--color-muted)]">
                  “{highlightQuote(t.quote, t.highlight)}”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[color:var(--color-line)]">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-[color:var(--color-soft)]">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="pb-10">
        <Reveal className="container-artemis mb-10 text-center">
          <h3 className="text-xl font-medium md:text-2xl">Brands I&apos;ve Worked With</h3>
        </Reveal>
        <Marquee items={brands} />
      </section>

      <FaqSection />
      <ContactSection />
    </main>
  );
}
