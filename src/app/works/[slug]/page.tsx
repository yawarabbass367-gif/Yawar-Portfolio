import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";
import { MedicoCaseStudy } from "@/components/case-studies/MedicoCaseStudy";
import { NayapayCaseStudy } from "@/components/case-studies/NayapayCaseStudy";
import { PlumCaseStudy } from "@/components/case-studies/PlumCaseStudy";
import { TawhaPayCaseStudy } from "@/components/case-studies/TawhaPayCaseStudy";
import { VirtueCaseStudy } from "@/components/case-studies/VirtueCaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (slug === "nayapay") {
    return <NayapayCaseStudy />;
  }

  if (slug === "virtue") {
    return <VirtueCaseStudy />;
  }

  if (slug === "plum") {
    return <PlumCaseStudy />;
  }

  if (slug === "medico") {
    return <MedicoCaseStudy />;
  }

  if (slug === "tawhapay") {
    return <TawhaPayCaseStudy />;
  }

  return <ProjectDetail slug={slug} />;
}
