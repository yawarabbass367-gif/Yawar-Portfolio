export const tawhaBrand = {
  green: "#1a7a4c",
  greenDeep: "#0f5c38",
  greenBright: "#2ea55c",
  greenText: "#1a7a4c",
  mint: "#f0f9f4",
  ink: "#0f172a",
  muted: "#64748b",
  line: "#e2e8f0",
  white: "#ffffff",
} as const;

type Img = { src: string; width: number; height: number; alt: string };

export const tawhaAssets = {
  heroComposition: {
    src: "/case-studies/tawha/assets/hero-composition.png",
    width: 1905,
    height: 1157,
    alt: "Tawha Pay app dashboard on a phone held in hand, with TAWHAPAY wordmark",
  } satisfies Img,
  notificationPhone: {
    src: "/case-studies/tawha/assets/notification-phone.png",
    width: 998,
    height: 522,
    alt: "Tawha Pay payment successful notification on iPhone lock screen",
  } satisfies Img,
  appIconPhone: {
    src: "/case-studies/tawha/assets/app-icon-phone.jpg",
    width: 1024,
    height: 522,
    alt: "Tawha Pay app icon on iPhone home screen",
  } satisfies Img,
  platformAndroid: {
    src: "/case-studies/tawha/assets/platform-android.png",
    width: 43,
    height: 43,
    alt: "Android",
  } satisfies Img,
  platformIos: {
    src: "/case-studies/tawha/assets/platform-ios.png",
    width: 43,
    height: 43,
    alt: "iOS",
  } satisfies Img,
  coreProblemsHub: {
    src: "/case-studies/tawha/assets/core-problems-hub.png",
    width: 489,
    height: 500,
    alt: "",
  } satisfies Img,
  featureBand: {
    src: "/case-studies/tawha/assets/design-opportunity.jpg.png",
    width: 2055,
    height: 1370,
    alt: "3D fintech icons — wallet, pay logo, analytics, growth, and cloud on pedestals",
  } satisfies Img,
  designTarget: {
    src: "/case-studies/tawha/assets/design-target.png",
    width: 550,
    height: 550,
    alt: "3D green target with arrow in the bullseye",
  } satisfies Img,
  segmentLogo: {
    src: "/case-studies/tawha/assets/segment-logo.png",
    width: 245,
    height: 247,
    alt: "Tawha Pay app icon",
  } satisfies Img,
  segmentUsers: {
    src: "/case-studies/tawha/assets/segment-users.png",
    width: 320,
    height: 320,
    alt: "Personal user 3D icon",
  } satisfies Img,
  segmentBusiness: {
    src: "/case-studies/tawha/assets/segment-business.png",
    width: 320,
    height: 320,
    alt: "Business user 3D icon",
  } satisfies Img,
  whoUsesBg: {
    src: "/case-studies/tawha/assets/who-uses-bg.jpg",
    width: 2718,
    height: 1336,
    alt: "",
  } satisfies Img,
  challenge1ConsumerPhone: {
    src: "/case-studies/tawha/assets/challenge1-consumer-phone.png",
    width: 524,
    height: 1032,
    alt: "Consumer dashboard on iPhone — balance, quick actions, and scheduled payments",
  } satisfies Img,
  challenge1BusinessPhone: {
    src: "/case-studies/tawha/assets/challenge1-business-phone.png",
    width: 472,
    height: 980,
    alt: "Business dashboard on iPhone — balance card, approvals, and Lendverse",
  } satisfies Img,
  challenge2Phones: [
    {
      src: "/case-studies/tawha/assets/challenge2-phone-u1.png",
      width: 341,
      height: 664,
      alt: "Manage Users screen with role filters and user list",
    },
    {
      src: "/case-studies/tawha/assets/challenge2-phone-u2.png",
      width: 341,
      height: 664,
      alt: "User Management screen describing Maker, Checker, and Viewer roles",
    },
    {
      src: "/case-studies/tawha/assets/challenge2-phone-u3.png",
      width: 342,
      height: 664,
      alt: "User Management form to add employee details and assign a role",
    },
    {
      src: "/case-studies/tawha/assets/challenge2-phone-a1.png",
      width: 341,
      height: 662,
      alt: "Admin Dashboard pending approvals for Checker role",
    },
    {
      src: "/case-studies/tawha/assets/challenge2-phone-a2.png",
      width: 341,
      height: 662,
      alt: "Create Payment screen for Maker role",
    },
    {
      src: "/case-studies/tawha/assets/challenge2-phone-a3.png",
      width: 342,
      height: 662,
      alt: "Review Payment screen with reject and approve actions",
    },
  ] as const satisfies readonly Img[],
} as const;

export const tawhaCopy = {
  brand: "Tawha Pay",
  heroTagline: "A Financial Operating System For Businesses And Consumers",
  intro: {
    headlineBefore: "A financial operating system that combines ",
    headlineHighlight:
      "banking, payments, collections, reporting, user management and embedded lending",
    headlineAfter: " into a single platform.",
    subheadline:
      "Intuitive workflows, seamless financial operations, and a modern interface empower individuals and businesses to manage payments, banking, and finances with confidence.",
    stats: [
      { value: "175", label: "hours of work" },
      { value: "200+", label: "screens" },
      { value: "100", label: "components" },
    ],
    appIconBadge: "app icon",
    appIconBody:
      "The app icon reflects Tawha’s core values: clarity, stability, and trust. Its minimal form and balanced proportions ensure strong recognition across all devices.",
  },
  problemDiscovery: {
    title: "Problem Discovery",
    lead:
      "Modern businesses rely on multiple financial tools for banking, payments, collections, payroll, reporting, and lending. As these functions operate across separate platforms, financial workflows become fragmented, increasing complexity and limiting visibility for finance teams.",
    businessTools: [
      "Banking Portals",
      "Payroll Systems",
      "ERP Systems",
      "Lending Platforms",
      "Reporting Tools",
    ],
    consumerIntro: "Meanwhile consumers use separate apps for:",
    consumerTools: ["Transfers", "Bill Payments", "Cards", "Lending"],
    closing: "This fragmentation creates operational complexity and poor visibility.",
    understanding: {
      title: "Initial Understanding",
      lead:
        "Based on the product requirements and discussions with internal Product Managers, several initial challenges were identified:",
      items: [
        {
          icon: "🏦",
          title: "Multiple Platforms:",
          body:
            "Finance teams switched between banking portals, ERP systems, and reporting tools for routine tasks.",
        },
        {
          icon: "⏳",
          title: "Slow Approvals:",
          body: "Disconnected payment workflows delayed business operations.",
        },
        {
          icon: "👁️",
          title: "Limited Visibility:",
          body: "Financial data was scattered across platforms, reducing transparency.",
        },
        {
          icon: "📱",
          title: "Fragmented Experience:",
          body: "Consumers relied on separate apps for payments, transfers, cards, and lending.",
        },
      ],
    },
  },
  coreProblems: {
    title: "Core Problems",
    items: [
      {
        position: "top",
        title: "Different User Needs",
        body:
          "Consumers needed simplicity, while businesses required control—making a unified experience challenging.",
      },
      {
        position: "left",
        title: "Fragmented Financial Ecosystem",
        body:
          "Financial operations were spread across multiple platforms, forcing users to constantly switch contexts.",
      },
      {
        position: "right",
        title: "Limited Financial Visibility",
        body:
          "Businesses struggled to gain a complete view of their accounts, payments, reports, and collections in one place.",
      },
      {
        position: "bottom",
        title: "Complex Approval Processes",
        body:
          "Enterprise payment approvals involved multiple stakeholders, making transactions slower and harder to track.",
      },
    ],
  },
  designOpportunity: {
    opportunity: {
      title: "Design Opportunity",
      body:
        "The challenge wasn't to create another banking application it was to design a unified financial operating system capable of supporting both consumers and businesses without compromising usability. The opportunity was to simplify complex financial operations by bringing banking, payments, collections, reporting, user management, and embedded lending into a single platform while tailoring the experience to the unique goals and workflows of each user type.",
    },
    objectives: {
      title: "Design Objectives",
      items: [
        {
          icon: "🎯",
          title: "Unified Experience :",
          body:
            "Bring financial activities together while maintaining clear context across accounts, transactions and services.",
        },
        {
          icon: "🔗",
          title: "Reduce Operational Friction:",
          body:
            "Minimise unnecessary steps, repetitive tasks and context switching across financial workflows.",
        },
        {
          icon: "🛡️",
          title: "Enable Control Without Complexity:",
          body:
            "Support permissions, approvals and multi-account operations without overwhelming business users.",
        },
        {
          icon: "⚖️",
          title: "Balance Simplicity and Capability:",
          body:
            "Keep everyday financial activities simple for Personal users while supporting advanced operational needs for Business users.",
        },
      ],
    },
  },
  userSegmentation: {
    title: "User Segmentation",
    personal: {
      label: "Personal",
      context: "Every Day Finance",
      user: "Individual User",
    },
    business: {
      label: "Business",
      context: "Financial operations",
      user: "Business Users",
      userTypes: {
        title: "Users Types",
        items: ["Business Owner", "Finance Manager", "Finance team"],
      },
      systemTypes: {
        title: "System Types",
        items: ["Maker", "Checker", "Approver"],
      },
    },
    note: {
      title: "Designing for Two Different Financial Contexts",
      body:
        "During product discovery, the requirements revealed two fundamentally different financial contexts within Tawha Pay: Personal and Business. Personal users primarily need quick access to everyday financial activities, while Business users operate within more complex financial workflows involving visibility, collaboration, approvals, and operational controls. Treating both contexts as a single experience would introduce unnecessary complexity. This led us to structure Tawha Pay around two tailored experiences while maintaining a consistent product ecosystem.",
    },
  },
  whoUses: {
    title: "Who Uses Tawha Pay?",
    roles: [
      {
        id: "cfo",
        title: "CFO",
        needs: ["Visibility", "Controls", "Reports"],
      },
      {
        id: "business-owner",
        title: "Business Owner",
        needs: ["Payments", "Collections", "Reports"],
      },
      {
        id: "consumer",
        title: "Consumer",
        needs: ["Transfer Money", "Pay Bills", "Manage Bills"],
      },
      {
        id: "finance-manager",
        title: "Finance Manager",
        needs: ["Bulk Transfers", "Payroll"],
      },
      {
        id: "approver",
        title: "Approver",
        needs: ["Review Transactions"],
      },
    ],
  },
  challenge1: {
    title: "Serving Consumers And Businesses In One Product",
    subtitle: "Serving Consumers And Businesses In One Product",
    badge: "Challenge 1",
    consumerLabel: "Consumer Dashboard",
    businessLabel: "Business Dashboard",
    whyTitle: "Why they are different.:",
    whyBody:
      "Tawha Pay is built for two types of users: individual consumers and businesses. Consumers use it for their everyday financial needs, while companies like Engro Corporation, Nishat Linen, Khaadi, and other businesses use it to manage their financial operations. Since both user groups have different goals and workflows, we designed two separate dashboards to provide a simpler and more relevant experience for each.",
  },
  challenge2: {
    title: "Complex Financial Approval Workflows",
    subtitle: "Approve Finances with three simple steps",
    badge: "Challenge 2",
    roles: ["Maker", "Checker", "Approver"],
    whyTitle: "Explanation:-",
    whyBody:
      "Every business follows an approval workflow for financial transactions. A Maker creates the payment, a Checker reviews and verifies it, and an Approver gives the final authorization before it is processed. To support this standard financial workflow, Tawha Pay assigns these responsibilities to three dedicated user roles: Maker, Checker, and Approver.",
  },
} as const;
