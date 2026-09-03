/**
 * Plum Music App case study — editable copy + individual asset paths.
 * Source of truth for layout: public/case-studies/plum-case-study.pdf
 */

export const plumBrand = {
  green: "#3df676",
  black: "#000000",
  ink: "#ffffff",
  muted: "rgba(255, 255, 255, 0.72)",
  soft: "rgba(255, 255, 255, 0.45)",
  surface: "#252527",
  surfaceDeep: "#1a1a1c",
  gray1: "#2a2a2c",
  gray2: "#5a5a5c",
  gray3: "#b0b0b2",
} as const;

export const plumAssets = {
  waveformMark: {
    src: "/case-studies/plum/assets/waveform-mark.png",
    width: 107,
    height: 53,
    alt: "Plum waveform logo",
  },
  heroPhone: {
    src: "/case-studies/plum/assets/hero-phone.png",
    width: 300,
    height: 640,
    alt: "Plum welcome screen — Millions of songs. Free on Plum.",
  },
  phoneRocky: {
    src: "/case-studies/plum/assets/phone-rocky.png",
    width: 760,
    height: 880,
    alt: "Plum splash screen on a rocky surface",
  },
  showcaseSearch: {
    src: "/case-studies/plum/assets/showcase-search-green.png",
    width: 1570,
    height: 1020,
    alt: "Plum search screen in a green 3D environment",
  },
  wireframesGrid: {
    src: "/case-studies/plum/assets/wireframes-grid.png",
    width: 1590,
    height: 2000,
    alt: "Plum low-fidelity wireframe screens",
  },
  wireframesExtra: {
    src: "/case-studies/plum/assets/wireframes-row-extra.png",
    width: 1590,
    height: 560,
    alt: "Additional Plum wireframe screens",
  },
  phoneNotifications: {
    src: "/case-studies/plum/assets/phone-notifications.png",
    width: 470,
    height: 780,
    alt: "Lock screen with Plum Music App notification",
  },
  phoneApps: {
    src: "/case-studies/plum/assets/phone-apps-folder.png",
    width: 470,
    height: 720,
    alt: "Home screen folder showing the Plum app icon",
  },
  phonesWelcome: {
    src: "/case-studies/plum/assets/phones-welcome-cluster.png",
    width: 1250,
    height: 880,
    alt: "Welcome and sign-up phone mockups",
  },
  mobileBgLeft: {
    src: "/case-studies/plum/assets/mobile-bg-left.png",
    width: 991,
    height: 1024,
    alt: "",
  },
  mobileBgRight: {
    src: "/case-studies/plum/assets/mobile-bg-right.png",
    width: 967,
    height: 1024,
    alt: "",
  },
  /** Top row — individual phones (equal CSS size) */
  mobilePhonesTop: [
    {
      src: "/case-studies/plum/assets/mobile-phone-top-1.png",
      width: 436,
      height: 872,
      alt: "Plum now-playing screen",
    },
    {
      src: "/case-studies/plum/assets/mobile-phone-top-2.png",
      width: 439,
      height: 885,
      alt: "Plum signup screen",
    },
    {
      src: "/case-studies/plum/assets/mobile-phone-top-3.png",
      width: 435,
      height: 872,
      alt: "Plum discovery screen",
    },
  ],
  /** Middle row — individual phones (equal CSS size; glow stripped) */
  mobilePhonesMid: [
    {
      src: "/case-studies/plum/assets/mobile-phone-mid-1.png",
      width: 428,
      height: 869,
      alt: "Plum Your Library screen",
    },
    {
      src: "/case-studies/plum/assets/mobile-phone-mid-2.png",
      width: 438,
      height: 883,
      alt: "Plum Settings screen",
    },
    {
      src: "/case-studies/plum/assets/mobile-phone-mid-3.png",
      width: 432,
      height: 869,
      alt: "Plum Recently played screen",
    },
  ],
  /** Bottom row — individual phones (equal CSS size) */
  mobilePhonesBot: [
    {
      src: "/case-studies/plum/assets/mobile-phone-bot-1.png",
      width: 434,
      height: 881,
      alt: "Plum What's New — Music empty state",
    },
    {
      src: "/case-studies/plum/assets/mobile-phone-bot-2.png",
      width: 436,
      height: 880,
      alt: "Plum What's New — Podcasts empty state",
    },
  ],
  phonesMobile: {
    src: "/case-studies/plum/assets/phones-mobile-row.png",
    width: 1440,
    height: 920,
    alt: "Mobile screens showcase with player, signup, and discovery",
  },
  phonesFinal: {
    src: "/case-studies/plum/assets/phones-final-grid.png",
    width: 1610,
    height: 1100,
    alt: "Final high-fidelity Plum app screens",
  },
} as const;

export const plumCopy = {
  brand: "PLUM",
  intro: {
    /** Full sentence with green spans applied in PlumHero */
    highlight: "music platform",
    after:
      " that has collected a large media library and allows you to know all of the main music news.",
  },
  sections: {
    icon: "Icon",
    colors: "Colors",
    icons: "Icons",
    font: "Font",
    welcome: "Welcome page and sign up",
    mobileScreens: "Mobile Screens",
  },
  font: {
    name: "Poppins",
    alphabet: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz",
    weights: [
      { label: "Regular", weight: 400 },
      { label: "Medium", weight: 500 },
      { label: "Semibold", weight: 600 },
    ] as const,
  },
  colors: [
    { name: "Green", hex: "#3df676" },
    { name: "White", hex: "#ffffff" },
    { name: "Charcoal", hex: "#2a2a2c" },
    { name: "Gray", hex: "#5a5a5c" },
    { name: "Silver", hex: "#b0b0b2" },
  ] as const,
  quotes: [
    {
      text: '"Without a song, the day would never end; without a song, a man ain\'t got a friend; without a song, the road would never bend without a song." So I keep singing a song. Goodnight. Thank you.',
      author: "Elvis Presley",
      align: "left" as const,
    },
    {
      text: '"One good thing about music, when it hits you, you feel no pain."',
      author: "Bob Marley",
      align: "right" as const,
    },
    {
      text: '"That\'s the amazing thing about music: there\'s a song for every emotion. Can you imagine a world with no music? It would suck."',
      author: "Harry Styles",
      align: "left" as const,
    },
  ],
  features: {
    notifications: {
      before: "Get ",
      highlight: "notifications",
      after: " and be aware of all the latest music events",
    },
    apps: {
      before: "Get ",
      highlight: "apps",
      after: " and be aware of all the latest music events",
    },
  },
  footer: {
    thankYou: "Thank you",
    disclaimer:
      "All materials belongs to the owner of this product. They can be used for educational and non organizational purposes",
  },
} as const;
