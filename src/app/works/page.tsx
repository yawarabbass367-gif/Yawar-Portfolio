"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export default function WorksPage() {
  return (
    <main className="pt-[88px]">
      <section className="container-artemis py-20 md:py-28">
        <RevealGroup className="mb-14 max-w-3xl md:mb-20">
          <RevealItem>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-soft)]">
              Selected work
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="text-5xl font-medium tracking-tight md:text-7xl">Works</h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-[color:var(--color-muted)] md:text-xl">
              From concept to launch — projects that helped startups grow, scale, and succeed.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
