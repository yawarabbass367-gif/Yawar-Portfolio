/**
 * Figma-export asset map + case study copy for NayaPay visual reconstruction.
 * Paths are relative to /public.
 */
export type FigmaAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  role: "background" | "composition" | "icon" | "decorative";
};

export type NayapayStat = {
  value: string;
  label: string;
};

export type NayapayComparisonRow = {
  wallet: string;
  scheduledPayments: string;
  notes: string;
  highlight?: boolean;
};

export const nayapayFigmaAssets = {
  hero: {
    background: {
      src: "/case-studies/nayapay/figma/First-Section/hero bg.jpg",
      width: 1047,
      height: 829,
      alt: "",
      role: "background",
    },
    composition: {
      src: "/case-studies/nayapay/hero/hero-composition.png",
      width: 1322,
      height: 1146,
      alt: "NayaPay hero product composition",
      role: "composition",
    },
  },
  aboutGoalsBg: {
    src: "/case-studies/nayapay/figma/about-the-proejct-and-project-goals-bg-image/about the proejct and project goals bg image.jpg",
    width: 1045,
    height: 1108,
    alt: "",
    role: "background",
  },
  about: {
    composition: {
      src: "/case-studies/nayapay/figma/board/about-phone-2x.png",
      width: 594,
      height: 554,
      alt: "NayaPay top-up success phone composition",
      role: "composition",
    },
  },
  goals: {
    sendMoney: {
      src: "/case-studies/nayapay/figma/project-goals/Group 275.png",
      width: 130,
      height: 132,
      alt: "",
      role: "icon",
    },
    savings: {
      src: "/case-studies/nayapay/figma/project-goals/Group 285.png",
      width: 130,
      height: 132,
      alt: "",
      role: "icon",
    },
    budget: {
      src: "/case-studies/nayapay/figma/project-goals/Group 282.png",
      width: 122,
      height: 139,
      alt: "",
      role: "icon",
    },
    card: {
      src: "/case-studies/nayapay/figma/project-goals/Group 290.png",
      width: 115,
      height: 139,
      alt: "",
      role: "icon",
    },
    security: {
      src: "/case-studies/nayapay/figma/project-goals/Group 293.png",
      width: 130,
      height: 132,
      alt: "",
      role: "icon",
    },
  },
  feature1: {
    background: {
      src: "/case-studies/nayapay/figma/board/f1-blur-bg-2x.png",
      width: 2094,
      height: 804,
      alt: "",
      role: "background",
    },
    phone: {
      src: "/case-studies/nayapay/figma/board/feature1-phone-2x.png",
      width: 546,
      height: 1206,
      alt: "NayaPay for Business mobile screen",
      role: "composition",
    },
    whatItDoes: {
      src: "/case-studies/nayapay/figma/board/f1-what-it-does-2x.png",
      width: 934,
      height: 800,
      alt: "Decorative visual for What it does",
      role: "decorative",
    },
    paytmInspired: {
      src: "/case-studies/nayapay/figma/board/f1-paytm-2x.png",
      width: 931,
      height: 801,
      alt: "Merchant scanning NayaPay QR code",
      role: "composition",
    },
    merchantFlowsBg: {
      src: "/case-studies/nayapay/figma/6-section/merchant-flows-bg.jpg",
      width: 1024,
      height: 676,
      alt: "",
      role: "background",
    },
    merchantFlows: {
      src: "/case-studies/nayapay/figma/board/merchant-phones-2x.png",
      width: 1702,
      height: 2303,
      alt: "NayaPay for Business onboarding and merchant dashboard screens",
      role: "composition",
    },
  },
  feature2: {
    cardsStrip: {
      src: "/case-studies/nayapay/figma/board/cards-strip-2x.png",
      width: 2094,
      height: 335,
      alt: "NayaPay card designs",
      role: "composition",
    },
    phone: {
      src: "/case-studies/nayapay/figma/board/feature2-phone-2x.png",
      width: 423,
      height: 840,
      alt: "CNIC registration screen",
      role: "composition",
    },
    cnicScreen: {
      src: "/case-studies/nayapay/figma/board/cnic-screen-2x.png",
      width: 992,
      height: 1360,
      alt: "CNIC scan registration screen",
      role: "composition",
    },
    addressScreen: {
      src: "/case-studies/nayapay/figma/board/address-screen-2x.png",
      width: 1087,
      height: 1310,
      alt: "Google map address registration screen",
      role: "composition",
    },
    surveyBackground: {
      src: "/case-studies/nayapay/figma/board/survey-bg-2x.png",
      width: 2088,
      height: 2056,
      alt: "",
      role: "background",
    },
    surveyCharts: {
      src: "/case-studies/nayapay/figma/board/survey-charts-user.png",
      width: 2087,
      height: 1645,
      alt: "CNIC autofill quantitative survey charts",
      role: "composition",
    },
    currentSignIn: {
      src: "/case-studies/nayapay/figma/board/current-signin-2x.png",
      width: 1924,
      height: 1424,
      alt: "NayaPay current sign-in process screens",
      role: "composition",
    },
    newSignIn: {
      src: "/case-studies/nayapay/figma/board/new-signin-2x.png",
      width: 1626,
      height: 2006,
      alt: "NayaPay new sign-in process screens",
      role: "composition",
    },
    newSignInDiagram: {
      src: "/case-studies/nayapay/figma/board/new-signin-diagram-2x.png",
      width: 1678,
      height: 1554,
      alt: "NayaPay new sign-in process diagram",
      role: "composition",
    },
  },
  feature3: {
    phone: {
      src: "/case-studies/nayapay/figma/board/f3-phone-2x.png",
      width: 549,
      height: 1089,
      alt: "Scheduled payment feature phone",
      role: "composition",
    },
    problemPhone: {
      src: "/case-studies/nayapay/figma/board/f3-h6-2x.png",
      width: 701,
      height: 1146,
      alt: "Scheduled payments problem context screen",
      role: "composition",
    },
    solutionPhone: {
      src: "/case-studies/nayapay/figma/board/f3-h7-2x.png",
      width: 701,
      height: 1135,
      alt: "Scheduled payments solution screen",
      role: "composition",
    },
    whyImageCard: {
      src: "/case-studies/nayapay/figma/board/f1-what-it-does-2x.png",
      width: 934,
      height: 800,
      alt: "Why scheduled payments matter",
      role: "composition",
    },
    walletCard: {
      src: "/case-studies/nayapay/figma/board/f3-why-2x.png",
      width: 1002,
      height: 1454,
      alt: "Wallet with cards on orange background",
      role: "composition",
    },
    whyVisual: {
      src: "/case-studies/nayapay/figma/board/f3-why-2x.png",
      width: 1002,
      height: 1454,
      alt: "Scheduled payments why it matters visual",
      role: "composition",
    },
    surveyBackground: {
      src: "/case-studies/nayapay/figma/board/f3-survey-bg-2x.png",
      width: 1024,
      height: 845,
      alt: "",
      role: "background",
    },
    surveyCharts: {
      src: "/case-studies/nayapay/figma/board/f3-survey-charts-2x.png",
      width: 1024,
      height: 720,
      alt: "Scheduled payments quantitative survey charts",
      role: "composition",
    },
  },
  feature4: {
    phone: {
      src: "/case-studies/nayapay/figma/board/f4-phone-2x.png",
      width: 434,
      height: 675,
      alt: "NayaPay savings feature phone",
      role: "composition",
    },
    introBackground: {
      src: "/case-studies/nayapay/figma/board/f4-intro-bg-2x.png",
      width: 1024,
      height: 339,
      alt: "",
      role: "background",
    },
    persona: {
      src: "/case-studies/nayapay/figma/board/persona-portrait-2x.png",
      width: 350,
      height: 429,
      alt: "Halima Gohar — user persona portrait",
      role: "composition",
    },
    savingsPanels: [
      {
        src: "/case-studies/nayapay/figma/board/f4-savings-panel-goals-2x.png",
        width: 490,
        height: 566,
        alt: "My Goals savings dashboard screens",
        role: "composition",
      },
      {
        src: "/case-studies/nayapay/figma/board/f4-savings-panel-review-2x.png",
        width: 440,
        height: 566,
        alt: "Savings goal review screen",
        role: "composition",
      },
      {
        src: "/case-studies/nayapay/figma/board/f4-savings-panel-month-2x.png",
        width: 444,
        height: 566,
        alt: "Savings goal month selection screen",
        role: "composition",
      },
    ],
    savingsHelps: {
      src: "/case-studies/nayapay/figma/board/f4-savings-phones-2x.png",
      width: 1457,
      height: 1194,
      alt: "Goal-based savings app flow screens",
      role: "composition",
    },
  },
  closing: {
    hands: {
      src: "/case-studies/nayapay/figma/board/closing-hands-2x.png",
      width: 103,
      height: 84,
      alt: "",
      role: "decorative",
    },
    cardBackground: {
      src: "/case-studies/nayapay/figma/board/closing-bg-2x.png",
      width: 1024,
      height: 448,
      alt: "",
      role: "background",
    },
  },
  brandSystem: {
    accent: {
      src: "/case-studies/nayapay/figma/board/brand-accent-2x.png",
      width: 931,
      height: 850,
      alt: "",
      role: "decorative",
    },
    colorPalette: {
      src: "/case-studies/nayapay/figma/board/brand-color-palette-2x.png",
      width: 900,
      height: 1024,
      alt: "NayaPay brand color palette swatches",
      role: "composition",
    },
  },
} as const;

export type NayapayGoalPlacement = {
  id: string;
  title: string;
  description: string;
  iconKey: keyof typeof nayapayFigmaAssets.goals;
  desktop: { top: string; left: string };
};

export const nayapayGoalsLayout: NayapayGoalPlacement[] = [
  {
    id: "send-money",
    title: "Send Money",
    description: "Faster and easier than using cards or cash",
    iconKey: "sendMoney",
    // Figma 330:702 Group 275 @ x=207.8 y=1568.5 (cluster origin y=1531.5)
    desktop: { top: "11.5%", left: "19.8%" },
  },
  {
    id: "savings",
    title: "Savings",
    description: "Your own hands with easy-access investment tools.",
    iconKey: "savings",
    // Figma 330:713 Group 285 @ x=642.1 y=1531.5
    desktop: { top: "0%", left: "61.3%" },
  },
  {
    id: "budget",
    title: "Budget set",
    description: "Never overspend again with smart budgeting",
    iconKey: "budget",
    // Figma 330:725 Group 282 @ x=440.9 y=1631.3
    desktop: { top: "31%", left: "42.1%" },
  },
  {
    id: "card",
    title: "Card",
    description:
      "Add a card with no effort, never miss a due date and take more control over your card with Nayapay.",
    iconKey: "card",
    // Figma 330:754 Group 290 @ x=207.8 y=1733.4
    desktop: { top: "63%", left: "19.8%" },
  },
  {
    id: "security",
    title: "Security",
    description:
      "Get peace of mind with our strong end-to-security systems and trusted partners.",
    iconKey: "security",
    // Figma 330:741 Group 293 @ x=642.1 y=1760.1
    desktop: { top: "71.5%", left: "61.3%" },
  },
];

export const nayapayHeroCopy = {
  brand: "NayaPay",
  year: "2025",
  discipline: "UI/UX",
  metaLeft: "Mobile App",
  metaCenter: "2025",
  metaRight: "UI/UX",
  headline: "Simple way to manage all personal finances in one app",
};

export const nayapayAboutCopy = {
  titleLead: "About",
  titleMid: "the",
  titleEnd: "Project",
  intro: "So... what's this case study all about?",
  paragraphs: [
    "We all deal with money every day — sending it, spending it, tracking it (or trying to). And while NayaPay already makes a lot of that easier, this project explores how it could become even better.",
    "By studying leading fintech apps across Asia, I've gathered ideas and insights into features that could make NayaPay even more accessible, intuitive, and helpful for users. From smoother user flows to new functionalities that boost convenience — this case study is all about showing what's possible.",
    "Because let's face it — managing your money should feel empowering, not overwhelming. 🙂",
  ],
  highlights: ["NayaPay", "easier", "money should feel empowering"] as const,
};

export const nayapayGoalsCopy = {
  title: "Project Goals",
  intro:
    "This case study looks at how NayaPay can improve its features to better support users while opening up new opportunities in the fintech space.",
};

export const nayapayFeature1Copy = {
  index: "Feature 1",
  title: "NayaPay for Business",
  subtitle: "Nayapay for business",
  heading: "A Vision for the Future",
  body: "Empowering small businesses with fast, secure QR payments. Perfect for everyday transactions without complex setup.",
  whatItDoes:
    "NayaPay Merchant lets local businesses accept payments via a simple QR code, making transactions cashless and easy.",
  surveyInsights:
    "According to a survey conducted through Google Forms, 10 out of 30 respondents (30%) suggested that this feature should be included in the NayaPay app, highlighting a demand for easier payment options among small vendors.",
  paytmInspired:
    "NayaPay Merchant lets local businesses accept payments via a simple QR code, making transactions cashless and easy.",
  valueItems: [
    "Wider Userbase",
    "Increased Transactions",
    "Ecosystem Growth",
    "Data Driven Service",
  ],
  outlook:
    "In the long term, as Pakistan moves towards a cashless economy, NayaPay could be the first app in Pakistan to lead the charge, helping vendors transition to digital payments. This feature could not only help address the growing cash circulation issue but also assist the government in achieving a cashless economy.",
  conclusion: [
    "Inspired by Paytm's success with 100M users and ₹9,978 crore revenue, NayaPay has the potential to lead Pakistan's digital payment shift.",
    "As the first mover in QR-based merchant payments, NayaPay can empower small businesses and gain a strong foothold in the underserved market.",
    "With 9.4 trillion PKR in cash circulation, NayaPay could drive the country's move toward a cashless economy.",
  ],
};

export const nayapayFeature2Copy = {
  index: "Feature 2",
  title: "Auto-Fill CNIC Registration",
  intro:
    "Empowering small businesses with fast, secure QR payments. Perfect for everyday transactions without complex setup.",
  introduction:
    "The goal of this enhancement was to simplify the sign-in process by introducing autofill from CNIC and the ability to paste a Google map link for addresses, making registration quicker and easier.",
  descriptionBullets: [
    "Autofill: Scanning or entering CNIC auto-fills user details from NADRA.",
    "Google Map Address: Users can paste a map link instead of typing their address.",
  ],
  surveyIntro:
    "I surveyed 20 participants to test the new autofill CNIC and Google map link features in the sign-up process. The goal was to see how easy they were to use, how effective they were, and how satisfied users were with them.",
  stats: [
    { value: "90%", label: "users found CNIC autofill time-saving and accurate" },
    { value: "90%", label: "preferred Google map link paste over typing addresses" },
    { value: "95%", label: "preferred the new sign-up flow" },
    { value: "85%", label: "rated sign-up easy or very easy" },
  ],
  painPoints: [
    "Manual data entry is time-consuming and error-prone.",
    "Long sign-up times lead to frustration.",
    "Lack of guidance causes confusion, especially for non-tech-savvy users.",
  ],
};

export const nayapayFeature3Copy = {
  index: "Feature 3",
  title: "Schedule Payment",
  intro:
    "Empowering small businesses with fast, secure QR payments. Perfect for everyday transactions without complex setup.",
  problem:
    "NayaPay users currently make the same payments (bills, fees, top-ups) manually every month. This leads to missed deadlines, user frustration, and unnecessary friction — a gap that no major local wallet has addressed.",
  solution:
    "I introduced a Scheduled Payments feature that allows users to automate recurring transactions directly from the app. With just a few taps, users can view bills, set payment dates, and track all scheduled activity — no reminders needed.",
  advantage:
    "None of Pakistan's top digital wallets (JazzCash, Easypaisa, SadaPay) offer scheduled payments. This gives NayaPay a first-mover edge, positioning it as a smarter, more innovative player in the fintech space.",
  whyOverlayIntro:
    "This feature saves time, increases reliability, builds trust, and boosts retention by automating repeat tasks and ensuring timely payments.",
  strategicAdvantageCard:
    "NayaPay is the first in Pakistan to offer true scheduled payments, giving it a smart edge over JazzCash, Easypaisa, and SadaPay in the growing fintech space.",
  whyBullets: [
    "Saves time by eliminating repeat tasks",
    "Increases reliability, reducing missed payments",
    "Builds user trust by offering financial control",
    "Supports user retention, as users stay engaged monthly",
  ],
  comparison: [
    {
      wallet: "JazzCash",
      scheduledPayments: "Not Available",
      notes: "Has bill payment reminders but no auto-scheduling or repeat payments",
    },
    {
      wallet: "Easypaisa",
      scheduledPayments: "Not Available",
      notes: "Offers frequent payment templates, but no true scheduling option",
    },
    {
      wallet: "SadaPay",
      scheduledPayments: "Not Available",
      notes: "Focused on debit card services; lacks advanced automation features",
    },
    {
      wallet: "NayaPay",
      scheduledPayments: "Not yet",
      notes: "Your new feature could fill this gap",
      highlight: true,
    },
  ],
};

export const nayapayFeature4Copy = {
  index: "Feature 4",
  title: "Savings",
  subtitle: "Nayapay for Savings",
  intro: "",
  heading: "Helping Users Save for What Matters Most",
  headingLine1: "Helping Users Save for",
  headingLine2: "What Matters Most",
  helpsTitle: "How NayaPay’s Goal-Based Savings Feature Helps",
  cards: [
    {
      id: "milestones",
      title: "Clear Milestones",
      body: "Halima can set specific savings goals for her trip, track her progress, and see how close she is to achieving her financial target for the vacation.",
      bg: "#fff8ec",
    },
    {
      id: "automatic",
      title: "Automatic Savings",
      body: "With the app’s automatic savings feature, Halima can set up recurring contributions each month, which ensures that she meets her goals even when life gets busy.",
      bg: "#fff0f1",
    },
    {
      id: "retention",
      title: "Higher Retention & Loyalty",
      body: "Users with savings goals are 40% more likely to stay active after 6 months, boosting retention and lifetime value (based on Chime and Revolut data).",
      bg: "#eef5ff",
    },
    {
      id: "notifications",
      title: "Goal Completion Notifications",
      body: "She can set reminders and receive notifications to stay motivated and on track.",
      bg: "#f5f0ff",
    },
    {
      id: "engagement",
      title: "Increased User Engagement",
      body: "Apps with goal-based savings see 25–30% higher daily usage, as users regularly track progress and engage keeping NayaPay top of mind.",
      bg: "#ecf9f1",
    },
    {
      id: "inclusion",
      title: "Financial Inclusion",
      body: "Over 100 million Pakistanis are unbanked or underserved (World Bank). This feature supports financial inclusion and positions NayaPay as a leader aligned with national goals.",
      bg: "#f7f5f2",
    },
  ],
};

export const nayapayPersonaCopy = {
  title: "User Persona",
  tagline: "The Goal-Oriented Traveler",
  intro:
    "Based on my research, I created a persona to represent my target users, helping me better understand their personalities, goals, and frustrations that align with their needs.",
  name: "Halima Gohar",
  age: "26",
  occupation: "School Teacher",
  education: "MSC",
  location: "Karachi, Pakistan",
  background:
    "Halima Gohar, a 26-year-old school teacher from Pakistan, loves to travel and explore new cultures. Despite being tech-savvy, she struggles with consistent saving and needs a more structured way to manage her finances.",
  goals: [
    "Halima wants to travel abroad and experience new places.",
    "She aims to develop a more structured savings plan for future goals.",
    "Halima aims to meet specific financial milestones without being overwhelmed by unplanned expenses.",
  ],
  painPoints: [
    "Halima struggles to maintain a consistent savings routine due to her unpredictable schedule.",
    "She finds it hard to save a fixed amount each month because of spontaneous expenses.",
    "While she has savings goals, Halima often finds it difficult to break them into smaller, actionable milestones.",
  ],
};

export const nayapayClosingCopy = {
  titleLine1: "Thank you for",
  titleLine2: "watching",
  cta: "Download the app",
};

export const nayapayBrandSystemCopy = {
  fontName: "Plus Jakarta Sans",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbols: "0123456789/*-+",
  colors: [
    { hex: "#000000", label: "Black" },
    { hex: "#20B47A", label: "Green" },
    { hex: "#EB882D", label: "Orange" },
    { hex: "#EC403C", label: "Red" },
  ],
} as const;
