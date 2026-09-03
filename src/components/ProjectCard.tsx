"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link href={`/works/${project.slug}`} data-cursor="View" className="group block">
        <div
          className="relative overflow-hidden rounded-[20px]"
          style={{ background: project.accent ?? "#ebe9e4" }}
        >
          <motion.div
            className="relative aspect-[4/3] w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              priority={index < 2}
            />
          </motion.div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[22px] font-medium tracking-tight md:text-[26px]">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-muted)]">
              {project.summary}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-[color:var(--color-line)] px-3 py-1 text-xs text-[color:var(--color-soft)]">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
