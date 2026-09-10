"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeProjects } from "@/data/projects";
import { aboutImages, skills } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Marquee } from "@/components/Marquee";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { easeOut } from "@/lib/motion";

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
                  I pay attention to the details{" "}
                  <span className="text-emphasis">standard design overlooks.</span>
                </h2>
              </RevealItem>
              <RevealItem>
                <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-[color:var(--color-muted)] md:text-lg">
                  <p>
                    I didn&apos;t start with a cinematic &ldquo;aha!&rdquo; moment that led me into
                    product design—I just paid attention, and life took care of the rest.
                  </p>
                  <p>
                    If you put me in a room, I&apos;m the person who notices the subtle habits, hidden
                    friction points, and small behaviors everyone else skips past. I genuinely love
                    watching how people work and finding ways to make their everyday tasks
                    effortless. That observational mindset—combined with a deep curiosity for complex
                    systems (whether that&apos;s software architectures or astrophysics)—is how I
                    approach product design: grounded, empathetic, and detail-obsessed.
                  </p>
                </div>
              </RevealItem>
            </RevealGroup>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: aboutImages.topLeft,
                  label: "Always noticing",
                  alt: "Childhood portrait",
                  delay: 0,
                },
                {
                  src: aboutImages.topRight,
                  label: "Atomic Habits",
                  alt: "Atomic Habits book cover by James Clear",
                  delay: 0.1,
                },
                {
                  src: aboutImages.bottomLeft,
                  label: "Good food",
                  alt: "Mediterranean salad with pita chips in a wooden bowl",
                  delay: 0.15,
                },
                {
                  src: aboutImages.bottomRight,
                  label: "Coffee ritual",
                  alt: "Chocolate milkshake with candy bar toppings",
                  delay: 0.2,
                },
              ].map((item) => (
                <Reveal key={item.label} delay={item.delay}>
                  <div className="group relative overflow-hidden rounded-[22px]">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={item.src}
                        alt={item.alt}
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
      <ContactSection />
    </main>
  );
}
