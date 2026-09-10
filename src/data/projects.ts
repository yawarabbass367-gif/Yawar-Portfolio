export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  overview: string;
  cover: string;
  gallery: string[];
  accent?: string;
  /** Full-bleed case study as a long image (preferred when available) */
  caseStudyImage?: string;
  /** Ordered full-bleed JPG/PNG slides (fast alternative to PDF) */
  caseStudyImages?: string[];
  /** Full-bleed PDF when image conversion isn't available */
  caseStudyPdf?: string;
};

export const projects: Project[] = [
  {
    slug: "tawhapay",
    title: "Tawhapay case study",
    category: "Product Design",
    summary:
      "A financial operating system for businesses and consumers — UI/UX design for Tawha Pay.",
    client: "Tawha Pay",
    industry: "Fintech, Payments",
    timeline: "2024",
    role: "Product Designer",
    overview:
      "Tawhapay is a financial operations product spanning transfers, bill payments, collections, and business dashboards.",
    cover: "/case-studies/tawhapay-thumbnail.jpg",
    gallery: [],
    accent: "#1a7a4c",
  },
  {
    slug: "medico",
    title: "Medico",
    category: "UI & UX",
    summary:
      "Your personal health assistant in your pocket — booking doctors, ordering medicine, lab tests, and AI help in one healthcare app.",
    client: "Medico",
    industry: "Healthcare",
    timeline: "2 months",
    role: "Solo UI Designer, UX Designer, UX Researcher",
    overview:
      "Medico simplifies healthcare access in Pakistan by letting users book doctors, schedule tests, order medicine, and get help through an AI chat.",
    cover: "/case-studies/medico-thumbnail.jpg",
    gallery: [],
    accent: "#1a6dff",
  },
  {
    slug: "nayapay",
    title: "Nayapay case study",
    category: "Product Design",
    summary:
      "A simple way to manage all personal finances in one app — product design for a modern fintech experience.",
    client: "Nayapay",
    industry: "Fintech, Personal Finance",
    timeline: "2024",
    role: "Product Designer",
    overview:
      "Nayapay brings personal finance management into one clear mobile experience — balances, transfers, and transactions designed for everyday use.",
    cover: "/case-studies/nayapay-thumbnail.png",
    gallery: [],
    accent: "#ff5900",
  },
  {
    slug: "virtue",
    title: "Virtue Digital Wellbeing App",
    category: "UI & UX",
    summary:
      "A digital wellbeing experience that helps people manage screen time and build healthier phone habits.",
    client: "Virtue",
    industry: "Health & Wellness, Mobile",
    timeline: "2024",
    role: "Product Designer",
    overview:
      "Virtue is a digital wellbeing app focused on mindful phone use — login, habits, and controls designed for clarity and calm.",
    cover: "/case-studies/virtue-thumbnail.png",
    gallery: [],
    accent: "#111111",
  },
  {
    slug: "plum",
    title: "Plum",
    category: "UI & UX",
    summary:
      "Millions of songs, free on Plum — a music app experience designed around discovery, signup, and effortless listening.",
    client: "Plum",
    industry: "Music, Entertainment",
    timeline: "2024",
    role: "Product Designer",
    overview:
      "Plum is a music streaming product focused on a clear signup journey and a bold visual system for artists and listeners.",
    cover: "/case-studies/plum-thumbnail.png",
    gallery: [],
    accent: "#111111",
  },
  {
    slug: "marketmingle",
    title: "MarketMingle",
    category: "Marketing",
    summary:
      "MarketMingle sought to build a marketplace for startup ecosystems, connecting founders with local services and peers. I designed a platform to foster collaboration and resource-sharing.",
    client: "MarketMingle, an early-stage community startup",
    industry: "Marketplace, Networking",
    timeline: "8 weeks (2024)",
    role: "Lead Product Designer",
    overview:
      "MarketMingle sought to build a marketplace for startup ecosystems, connecting founders with local services and peers. I designed a platform to foster collaboration and resource-sharing.",
    cover: "https://framerusercontent.com/images/GfQF9MJTOQgip3GZt7WYQlFA.png",
    gallery: [
      "https://framerusercontent.com/images/SHIa3uWu2UD2oI3xk2CjDiAHAc.png",
      "https://framerusercontent.com/images/C0KvfmTftD3so0Yz3V52LgidE.png",
      "https://framerusercontent.com/images/Kjm316F3wf9TSJbhA0oEmjSPcRM.jpg",
    ],
    accent: "#fce4ec",
  },
];

export const homeProjects = projects.slice(0, 5);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
