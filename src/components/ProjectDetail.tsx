"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAdjacentProjects, getProject } from "@/data/projects";
import { ContactSection } from "@/components/ContactSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { easeOut } from "@/lib/motion";

function CaseStudyPdfViewer({ title, pdfSrc }: { title: string; pdfSrc: string }) {
  return (
    <main className="pt-[88px]">
      <section className="w-full bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--color-line)] px-5 py-3 md:px-8">
          <p className="text-sm text-[color:var(--color-muted)]">{title}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="text-sm font-medium text-[color:var(--color-accent)] transition hover:brightness-110"
            >
              Open in new tab ↗
            </a>
            <Link
              href="/works"
              data-cursor="Back"
              className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
            >
              ← All Works
            </Link>
          </div>
        </div>
        <iframe
          src={`${pdfSrc}#view=FitH`}
          title={title}
          className="h-[calc(100svh-88px-49px)] w-full border-0"
        />
      </section>
    </main>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;

  if (project.caseStudyPdf) {
    return <CaseStudyPdfViewer title={project.title} pdfSrc={project.caseStudyPdf} />;
  }

  if (project.caseStudyImages?.length || project.caseStudyImage) {
    const slides = project.caseStudyImages?.length
      ? project.caseStudyImages
      : project.caseStudyImage
        ? [project.caseStudyImage]
        : [];

    return (
      <main className="pt-[88px]">
        <section className="w-full bg-white">
          {slides.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`${project.title} — page ${i + 1}`}
              className="block h-auto w-full"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="border-t border-[color:var(--color-line)] px-5 py-6 text-center md:px-8">
            <Link
              href="/works"
              data-cursor="Back"
              className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
            >
              ← Back to All Works
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="pt-[88px]">
      <section className="container-artemis py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <div className="mb-6 inline-flex rounded-full border border-[color:var(--color-line)] px-3 py-1 text-xs text-[color:var(--color-soft)]">
            {project.category}
          </div>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)] md:text-xl">
            {project.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.85, ease: easeOut }}
          className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[28px]"
          style={{ background: project.accent }}
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1120px"
          />
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealGroup>
            <RevealItem>
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Project Overview</h2>
            </RevealItem>
            <RevealItem>
              <dl className="mt-8 space-y-5 text-[15px]">
                {[
                  ["Client", project.client],
                  ["Industry", project.industry],
                  ["Timeline", project.timeline],
                  ["My Role", project.role],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[110px_1fr] gap-3 border-b border-[color:var(--color-line)] pb-4"
                  >
                    <dt className="text-[color:var(--color-soft)]">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.1}>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Design Solution</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-muted)] md:text-lg">
              {project.overview}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--color-line)] pt-8">
          <Link
            href="/works"
            data-cursor="Back"
            className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
          >
            ← Back to All Works
          </Link>
          <div className="flex gap-6">
            {prev ? (
              <Link
                href={`/works/${prev.slug}`}
                data-cursor="Prev"
                className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
              >
                ← {prev.title}
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/works/${next.slug}`}
                data-cursor="Next"
                className="text-sm font-medium transition hover:text-[color:var(--color-accent)]"
              >
                {next.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
