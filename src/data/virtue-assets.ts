/**
 * Virtue case study — asset map + copy from Figma / case study PDF.
 * Paths relative to /public.
 */
export type VirtueAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  role: "background" | "composition" | "decorative" | "icon";
};

export const virtueAssets = {
  hero: {
    logoMark: {
      src: "/case-studies/virtue/figma/hero/logo-mark.png",
      width: 56,
      height: 41,
      alt: "Virtue app logo",
      role: "icon",
    },
    phones: {
      src: "/case-studies/virtue/figma/hero/phones-3.png",
      width: 747,
      height: 742,
      alt: "Virtue app screens on three phones",
      role: "composition",
    },
    starLeft: {
      src: "/case-studies/virtue/figma/hero/vector-star-1.png",
      width: 41,
      height: 41,
      alt: "",
      role: "decorative",
    },
    starRight: {
      src: "/case-studies/virtue/figma/hero/vector-star-2.png",
      width: 41,
      height: 41,
      alt: "",
      role: "decorative",
    },
    wave: {
      src: "/case-studies/virtue/figma/hero/vector-wave.png",
      width: 71,
      height: 21,
      alt: "",
      role: "decorative",
    },
    arrowLeft: {
      src: "/case-studies/virtue/figma/hero/vector-arrow.png",
      width: 96,
      height: 101,
      alt: "",
      role: "decorative",
    },
    arrowRight: {
      src: "/case-studies/virtue/figma/hero/vector-star-4.png",
      width: 96,
      height: 101,
      alt: "",
      role: "decorative",
    },
  },
  section2: {
    bgShape: {
      src: "/case-studies/virtue/figma/section-2/bg-shape.png",
      width: 1752,
      height: 993,
      alt: "",
      role: "background",
    },
    icon3d: {
      src: "/case-studies/virtue/figma/section-2/icon-3d.png",
      width: 412,
      height: 510,
      alt: "",
      role: "composition",
    },
  },
  section3: {
    avatar: {
      src: "/case-studies/virtue/figma/section-3/avatar.png",
      width: 310,
      height: 326,
      alt: "3D avatar character",
      role: "composition",
    },
  },
  designProcess: {
    diagram: {
      src: "/case-studies/virtue/figma/design-process/diagram.png",
      width: 986,
      height: 315,
      alt: "",
      role: "composition",
    },
  },
  persona: {
    portrait: {
      src: "/case-studies/virtue/figma/persona/portrait.png",
      width: 284,
      height: 315,
      alt: "Jauhar Mustafa portrait",
      role: "composition",
    },
  },
} as const;

export const virtueHeroCopy = {
  brand: "Virtue Digital Wellbeing",
  title: "Case Study",
  subtitle: "Unlock a healthier you with our Digital Wellbeing app",
} as const;

export const virtueAboutCopy = {
  heading: "Business Profile & Objective",
  items: [
    {
      id: "name",
      title: "Name of the business",
      body: "The name of business is Virtue. Virtue is a mobile application which enables user to save time and reduce their habit of using mobile phones without any reason.",
    },
    {
      id: "slogan",
      title: "Slogan",
      body: "Empower Your Digital Health.",
    },
    {
      id: "type",
      title: "Type of business",
      body: "Service-based, focusing on digital well-being.",
    },
    {
      id: "products",
      title: "Products or Services",
      body: "A mobile application that helps manage and reduce unnecessary mobile phone usage through innovative deterrent options.",
    },
  ],
} as const;

export const virtueProblemCopy = {
  heading: "Problem Statement",
  body: "Virtue Digital Wellbeing aims to improve online habits but struggles with user engagement, habit change, and privacy concerns. This study examines how these issues impact its effectiveness.",
} as const;

export const virtueGoalCopy = {
  heading: "The Goal",
  body: "Virtue Digital Wellbeing helps users manage screen time, build healthy habits, and support mental well-being with intuitive, personalized tools.",
} as const;

export const virtueDesignProcessCopy = {
  heading: "Design Process",
  intro:
    "I use the UX design framework known as designing thinking. This approach puts the user at the center of the design process and create a solution.",
  body: "The design process focused on user-centric principles, starting with research through surveys and interviews to understand digital habits. Insights shaped features like customizable screen time tools and wellness trackers. Prototypes were tested and refined iteratively to ensure a seamless, user-friendly experience.",
  steps: ["Empathize", "Define", "Ideate", "Prototype", "Test"] as const,
} as const;

export const virtueResearchCopy = {
  heading: "User Research",
  intro: "",
  methods: [
    {
      title: "Surveys and Questionnaires",
      body: "Gathered data on digital habits and well-being concerns.",
    },
    {
      title: "User Interviews",
      body: "Uncovered user challenges and expectations.",
    },
    {
      title: "Focus Groups",
      body: "Explored diverse views on digital health.",
    },
    {
      title: "Usage Data Analysis",
      body: "Spotted pain points from usage trends.",
    },
  ],
} as const;

export const virtueCompetitiveCopy = {
  heading: "Competitive Analysis",
  intro:
    "After conducting my user research. I decided to conduct a competitive audit. This involves analyzing a computers app that closely aligns with my design. I aim to uncover their strength, weaknesses, and opportunities. Here are a few of the competitors im looking at.",
  columns: ["Competitors", "What it does", "Strengths", "Weakness", "Opportunities"] as const,
  rows: [
    {
      name: "Zario",
      whatItDoes:
        "Offers a personal journey with psychology-backed challenges to improve phone use and lifestyle.",
      strengths: "Unique approach with engaging, personalized challenges.",
      weakness: "May not cater to all user preferences or needs.",
      opportunities: "Expansion to include more diverse aspects of digital wellbeing.",
    },
    {
      name: "Paradym",
      whatItDoes: "Helps improve emotional wellbeing and understand emotional patterns.",
      strengths: "Effective in increasing wellbeing more than traditional therapy.",
      weakness: "Limited appeal if users prefer in-person therapy.",
      opportunities: "Integration with other wellness methods and platforms.",
    },
    {
      name: "Moodie",
      whatItDoes: "Enables mood changes through customized actions and routines.",
      strengths: "Intuitive and user-friendly with a focus on mood improvement.",
      weakness: "May not be comprehensive in addressing deeper mental health issues.",
      opportunities: "Potential for incorporating broader mental health tools and resources.",
    },
  ],
} as const;

export const virtuePersonaCopy = {
  heading: "User persona",
  intro: "I created a fictional user persona to identify my target audience.",
  name: "Jauhar Mustafa",
  quote:
    "Cannot get my hands off while using phone because thereis so much crisp to watch",
  demographics: {
    heading: "Demographics",
    items: [
      { label: "Ages", value: "21" },
      { label: "Profession", value: "Software Engineer" },
      { label: "Marital status", value: "Single" },
      { label: "City of residence", value: "Ohio" },
    ],
  },
  bio: {
    heading: "Bio",
    body: "Jauher, a Software engineer at Contour Software, loves football, painting, and running. An avid social media user, he often loses track of time and seeks app recommendations from friends to stay productive.",
  },
  painPoints: {
    heading: "Pain Points",
    items: [
      "He is a very demanding person he spent most of his time using phone and does not realize how much time he spents while using phone .",
      "He feels like he should use less screen so that it might not affect his health.",
      "He is very anxious and wants quick solutions.",
    ],
  },
  personalGoals: {
    heading: "Personal goals",
    items: ["Worked as a employee at Mac Donald", "Loves travelling"],
  },
  personality: [
    { left: "Introverted", right: "Extroverted", value: 84 },
    { left: "Analytical", right: "Creative", value: 29 },
    { left: "Busy", right: "Leisure", value: 29 },
    { left: "Messy", right: "Organized", value: 43 },
    { left: "Independant", right: "Friendly", value: 84 },
  ],
} as const;
