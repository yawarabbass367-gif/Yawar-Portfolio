export const medicoBrand = {
  blue: "#1a6dff",
  blueDeep: "#0d4fd6",
  blueSoft: "#e8f1ff",
  blueMist: "#f3f7ff",
  orange: "#ff8a3d",
  ink: "#0f172a",
  muted: "#64748b",
  line: "#e2e8f0",
  white: "#ffffff",
  black: "#0b1220",
} as const;

type Img = { src: string; width: number; height: number; alt: string };

export const medicoAssets = {
  brandMark: {
    src: "/case-studies/medico/assets/brand-mark.png",
    width: 512,
    height: 512,
    alt: "Medico brand mark",
  } satisfies Img,
  brandLockup: {
    src: "/case-studies/medico/assets/brand-lockup.png",
    width: 416,
    height: 95,
    alt: "Medico",
  } satisfies Img,
  heroComposition: {
    src: "/case-studies/medico/assets/hero-composition.png",
    width: 1024,
    height: 774,
    alt: "Medico app hero — home screen with doctor booking card and symptoms checker",
  } satisfies Img,
  phoneHome: {
    src: "/case-studies/medico/assets/phone-home.png",
    width: 860,
    height: 2140,
    alt: "Medico home screen — location, search, doctor booking, and nearby pharmacies",
  } satisfies Img,
  phoneUpload: {
    src: "/case-studies/medico/assets/phone-upload.png",
    width: 860,
    height: 2170,
    alt: "Doctor search results — book appointment",
  } satisfies Img,
  appointmentBandBg: {
    src: "/case-studies/medico/assets/appointment-band-bg.jpg",
    width: 1024,
    height: 349,
    alt: "",
  } satisfies Img,
  appointmentPhones: {
    src: "/case-studies/medico/assets/appointment-phones.png",
    width: 1820,
    height: 1080,
    alt: "Medico appointment flow — doctor profile, search results, and time slot selection",
  } satisfies Img,
  uploadPhone: {
    src: "/case-studies/medico/assets/upload-phone.png",
    width: 508,
    height: 1024,
    alt: "Medico upload prescription screen — checklist, camera, and gallery options",
  } satisfies Img,
  uploadArrow: {
    src: "/case-studies/medico/assets/upload-arrow.png",
    width: 282,
    height: 89,
    alt: "",
  } satisfies Img,
  rxFlowBg: {
    src: "/case-studies/medico/assets/rx-flow-bg.jpg",
    width: 1024,
    height: 349,
    alt: "",
  } satisfies Img,
  rxFlowPhones: {
    src: "/case-studies/medico/assets/rx-flow-phones.png",
    width: 821,
    height: 1024,
    alt: "Medico prescription flow — upload progress, order medicine, prescription process, and order delivered",
  } satisfies Img,
  symptomsPhone: {
    src: "/case-studies/medico/assets/symptoms-phone.png",
    width: 503,
    height: 1024,
    alt: "Medico Health tools — symptoms checker and medication reminders",
  } satisfies Img,
  symptomsArrow: {
    src: "/case-studies/medico/assets/symptoms-arrow.png",
    width: 283,
    height: 89,
    alt: "",
  } satisfies Img,
  phoneSymptoms: {
    src: "/case-studies/medico/assets/phone-symptoms.png",
    width: 860,
    height: 1864,
    alt: "Symptoms checker screen",
  } satisfies Img,
  phoneExp1: {
    src: "/case-studies/medico/assets/phone-exp-1.png",
    width: 860,
    height: 2248,
    alt: "Medico experience — consultation booking",
  } satisfies Img,
  phoneExp2: {
    src: "/case-studies/medico/assets/phone-exp-2.png",
    width: 860,
    height: 2248,
    alt: "Medico experience — pharmacies and doctors",
  } satisfies Img,
  phoneSm1: {
    src: "/case-studies/medico/assets/phone-sm-1.png",
    width: 430,
    height: 955,
    alt: "Medico mobile screen",
  } satisfies Img,
  phoneSm2: {
    src: "/case-studies/medico/assets/phone-sm-2.png",
    width: 430,
    height: 955,
    alt: "Medico mobile screen",
  } satisfies Img,
  phoneFinal: {
    src: "/case-studies/medico/assets/phone-final.png",
    width: 1290,
    height: 2880,
    alt: "Medico final product screen",
  } satisfies Img,
  showcaseBg: {
    src: "/case-studies/medico/assets/bg-phone.png",
    width: 764,
    height: 1024,
    alt: "",
  } satisfies Img,
  showcasePhones: {
    src: "/case-studies/medico/assets/phone-mockups.png",
    width: 2038,
    height: 2373,
    alt: "Medico product screens — medicine orders, video consult, and prescription upload",
  } satisfies Img,
  backgroundPhotosPair: {
    src: "/case-studies/medico/assets/background-photos-pair.png",
    width: 747,
    height: 449,
    alt: "Healthcare professionals caring for patients",
  } satisfies Img,
  backgroundPhotosTrio: {
    src: "/case-studies/medico/assets/background-photos-trio.png",
    width: 1024,
    height: 364,
    alt: "Healthcare settings — hospital care and community health",
  } satisfies Img,
  backgroundProblemsPhone: {
    src: "/case-studies/medico/assets/background-problems-phone.png",
    width: 507,
    height: 1024,
    alt: "Medico home screen — location, search, doctor booking, and nearby pharmacies",
  } satisfies Img,
  problemsBg: {
    src: "/case-studies/medico/assets/problems-bg.png",
    width: 1024,
    height: 349,
    alt: "",
  } satisfies Img,
  solutionPhoneArc: {
    src: "/case-studies/medico/assets/solution-phone-arc.png",
    width: 726,
    height: 982,
    alt: "Medico app — nearby pharmacies, available doctors, and medicine offers",
  } satisfies Img,
  highlightsRoad: {
    src: "/case-studies/medico/assets/highlights-road.png",
    width: 1059,
    height: 858,
    alt: "",
  } satisfies Img,
  sitemapDiagram: {
    src: "/case-studies/medico/assets/sitemap-diagram.png",
    width: 1024,
    height: 375,
    alt: "Medico app sitemap — homepage branching into doctor booking, consultation, medicine, lab tests, and notifications",
  } satisfies Img,
  personaTaha: {
    src: "/case-studies/medico/assets/persona-taha.png",
    width: 413,
    height: 549,
    alt: "Persona portrait — Taha Shabbir",
  } satisfies Img,
  photoTeam: {
    src: "/case-studies/medico/assets/photo-team.png",
    width: 600,
    height: 400,
    alt: "Healthcare professionals with a patient",
  } satisfies Img,
  photoCare1: {
    src: "/case-studies/medico/assets/photo-care-1.png",
    width: 1024,
    height: 683,
    alt: "Healthcare care context",
  } satisfies Img,
  photoCare2: {
    src: "/case-studies/medico/assets/photo-care-2.png",
    width: 2000,
    height: 1333,
    alt: "Healthcare care context",
  } satisfies Img,
  photoCare3: {
    src: "/case-studies/medico/assets/photo-care-3.png",
    width: 1024,
    height: 683,
    alt: "Healthcare care context",
  } satisfies Img,
  photoCare4: {
    src: "/case-studies/medico/assets/photo-care-4.png",
    width: 960,
    height: 720,
    alt: "Medical camp — patients waiting in line",
  } satisfies Img,
  photoCare5: {
    src: "/case-studies/medico/assets/photo-care-5.png",
    width: 1936,
    height: 1288,
    alt: "Doctor consultation with patients",
  } satisfies Img,
  photoBg1: {
    src: "/case-studies/medico/assets/photo-bg-1.png",
    width: 846,
    height: 588,
    alt: "Medical context photo",
  } satisfies Img,
  photoBg2: {
    src: "/case-studies/medico/assets/photo-bg-2.png",
    width: 774,
    height: 516,
    alt: "Medical context photo",
  } satisfies Img,
  heroDocAvatar: {
    src: "/case-studies/medico/assets/hero-doc-avatar.png",
    width: 68,
    height: 68,
    alt: "Dr. Jitendar Ver",
  } satisfies Img,
  heroCalendar: {
    src: "/case-studies/medico/assets/hero-calendar.png",
    width: 200,
    height: 150,
    alt: "",
  } satisfies Img,
} as const;

export const medicoCopy = {
  brand: "MEDICO",
  subtitle: "Your Personal Health Assistant in Your Pocket",
  badge: "UI/UX Case Study",
  background: {
    title: "Background",
    body: "This app simplifies healthcare in Pakistan, letting you book doctors, schedule tests, order medicine, and get help from an AI chat—all in one place. Less stress, more focus on feeling better!",
  },
  problem: {
    title: "Problems",
    headline: "People find it hard accessing quality healthcare services.",
    body: "For a long time healthcare sector has struggled to keep up with quality of providing healthcare services. This rises a crucial question.",
    question: "How can this pressing be addressed effectively?",
  },
  solution: {
    title: "Solutions",
    headline: "Providing seamless way to access healthcare services",
    intro:
      "Say hello to Medico—the app that’s got your back! Need a lab report or meds? No problem, we’ve got it all sorted!",
    calloutTitle: "So what exactly is Medico?",
    calloutBody:
      "Medico is your go-to healthcare app—book doctors, order meds, schedule tests, and more, all in one spot!",
  },
  overview: {
    title: "Highlights",
    items: [
      { label: "Industry", value: "Healthcare" },
      { label: "Timeline", value: "2 months" },
      {
        label: "Role",
        value: "Solo UI Designer, UX Designer, UX Researcher",
      },
    ],
    process: [
      {
        title: "EMPATHIZE",
        items: ["User research", "Pain points"],
      },
      {
        title: "DEFINE",
        items: ["User persona", "User Journey Map", "Competitive Analysis"],
      },
      {
        title: "IDEATE",
        items: ["How might we", "Features"],
      },
      {
        title: "PROTOTYPE",
        items: [
          "Information Architecture",
          "UI Style guide",
          "Branding",
          "Low fidelity wireframe",
          "High fidelity wireframe",
        ],
      },
      {
        title: "TEST",
        items: ["Usability Test", "Test analysis", "measuring success"],
      },
    ],
  },
  research: {
    phase: "Empathize",
    title: "User research",
    intro:
      "To stay focused, I made a research plan and ran an online survey, asking people using healthcare services about their experiences and needs.",
    themes: [
      "Rising Costs of Healthcare Services",
      "Lack of medical awareness",
      "Healthcare accessibility issues",
    ],
    charts: [
      {
        title: "Healthcare access",
        segments: [
          { label: "Doesn’t have access to healthcare", value: 50, tone: "orange" as const },
          { label: "Have access to healthcare", value: 50, tone: "blue" as const },
        ],
      },
      {
        title: "Care frequency",
        segments: [
          { label: "72% access medical care weekly", value: 72, tone: "orange" as const },
          { label: "28% access medical care monthly", value: 28, tone: "blue" as const },
        ],
      },
      {
        title: "Medical awareness",
        segments: [
          { label: "Are not medically aware", value: 25, tone: "orange" as const },
          { label: "Are medically aware", value: 75, tone: "blue" as const },
        ],
      },
    ],
  },
  insights: {
    title: "Insights",
    intro:
      "After the survey, I interviewed 15 people aged 18–25, matching the user demographic, to dive deeper into their healthcare experiences.",
    askedLead: "I asked them about:",
    askedAbout: [
      "Their current healthcare situation",
      "Goals and challenges in healthcare",
      "How they access healthcare services",
      "Thoughts on using a mobile app for their needs",
    ],
    summaryLead: "These are some insights that i gathered through my research",
    items: [
      "People prioritize fitness and mental health but struggle with time and money.",
      "While in-person care is preferred, telehealth is gaining interest.",
      "Privacy matters, and features like booking and AI advice are highly valued.",
      "Many find healthcare inaccessible, so an app could make a big difference.",
    ],
  },
  painPoints: {
    title: "User Pain Points",
    intro:
      "After the survey, I interviewed 15 people aged 18–65 from the target demographic to explore their healthcare experiences.",
    items: [
      "Rising costs of healthcare services",
      "Lack of medical awareness",
      "Doesn’t have access to healthcare / accessibility issues",
    ],
  },
  persona: {
    phase: "Define",
    title: "User Persona",
    subtitle: "Clarifying my target audience, needs and pain points",
    intro:
      "Based on my research, I created a persona to represent my target users, helping me better understand their personalities, goals, and frustrations that align with their needs.",
    name: "Taha Shabbir",
    age: "23",
    occupation: "Administrator at Aptech",
    weight: "110 pounds",
    location: "Karachi, Pakistan",
    background:
      "Taha is a young admin at Aptech, facing high stress from his demanding job. He struggles with family-related hair loss, weight management, and smokes to cope with the pressure.",
    goals: [
      "Consult a doctor for hair loss and weight management.",
      "Improve physical fitness despite current limitations.",
      "Reduce dependence on smoking for stress relief.",
    ],
    pains: [
      "Balancing work with health appointments.",
      "Physical limitations due to weight and smoking.",
      "Overwhelmed by health options and uncertain where to start.",
    ],
  },
  journey: {
    title: "User Journey Map",
    intro:
      "I created a user journey map to track how users interact with Medico, from discovery to booking appointments. This helped me spot issues and design a smoother, more user-friendly experience.",
    task: "Onboarding the app and scheduling an online consultation",
    stages: [
      {
        stage: "Discovery",
        actions:
          "Hears about the app through a friend or ad. Visits app store to explore. Compares features and reads reviews.",
        emotions: "Curious, Interested / Cautious, Evaluative",
        painPoints: "Concerns about privacy and choice overload. Uncertainty about reliability.",
        opportunities:
          "Clear value proposition and positive reviews. Highlight privacy/security features.",
      },
      {
        stage: "Onboarding",
        actions: "Installs and sets up account. Completes health preferences and notifications.",
        emotions: "Hopeful, Slightly anxious",
        painPoints: "Overwhelming setup process.",
        opportunities: "Streamline onboarding with clear steps.",
      },
      {
        stage: "Booking Appointments",
        actions: "Searches for doctors, selects a time, and books an appointment.",
        emotions: "Relieved, Empowered",
        painPoints: "Unclear profiles or too many options.",
        opportunities: "Easy-to-navigate profiles and filters.",
      },
      {
        stage: "Live Video Consultation",
        actions: "Starts video consultation at the scheduled time.",
        emotions: "Anxious, then Relieved",
        painPoints: "Video/audio issues or tech anxiety.",
        opportunities: "Test video/audio in advance and reassure users.",
      },
      {
        stage: "Uploading Prescription",
        actions: "Takes a photo of prescription and uploads it.",
        emotions: "Confident, Satisfied",
        painPoints: "Difficult image capture.",
        opportunities: "Auto-correction for clear images.",
      },
      {
        stage: "Ordering Medicines",
        actions: "Orders prescribed medicines, adds to cart, and checks out.",
        emotions: "Efficient, Satisfied",
        painPoints: "Uncertainty about availability or checkout.",
        opportunities: "Real-time availability and simple checkout.",
      },
      {
        stage: "Lab Test Services",
        actions: "Books a lab test, selects a time, and confirms.",
        emotions: "Curious, Cautious",
        painPoints: "Lack of test details or unclear pricing.",
        opportunities: "Transparent test info and pricing.",
      },
      {
        stage: "Post Consultation Follow-up",
        actions: "Receives reminders and tracks progress.",
        emotions: "Supported, Satisfied",
        painPoints: "Forgetting medication schedules.",
        opportunities: "Push notifications and progress tracking.",
      },
      {
        stage: "Referral & Feedback",
        actions: "Shares app with friends or leaves a review.",
        emotions: "Happy, Appreciated",
        painPoints: "Lack of engagement post-use.",
        opportunities: "Incentivize referrals and personalized feedback.",
      },
    ],
  },
  hmw: {
    phase: "Ideate",
    title: "How Might We?",
    intro:
      "These HMW questions help me focus on users' key needs—accessibility, affordability, trust, and essential features—so I can design Medico to truly meet their expectations.",
    questions: [
      "How might we make healthcare more accessible and affordable for users with time and financial constraints?",
      "How might we offer features that support both in-person and telehealth visits to suit different preferences?",
      "How might we address privacy and data security concerns to build trust and encourage app adoption?",
      "How might we prioritize key features like appointment booking, AI health advice, and video consultations to improve the user experience?",
      "How might we improve healthcare accessibility to close gaps and increase user satisfaction?",
    ],
  },
  competitive: {
    title: "Competitive Analysis",
    headline: "Existing products lack an all-in-one solution for healthcare needs.",
    body: "I studied competitors to understand their healthcare offerings, which helped me find opportunities for Medico to stand out with unique, research-driven features.",
    competitors: [
      {
        name: "dp",
        src: "/case-studies/medico/assets/competitor-dp.png",
        width: 264,
        height: 264,
      },
      {
        name: "M",
        src: "/case-studies/medico/assets/competitor-m.png",
        width: 264,
        height: 264,
      },
      {
        name: "oladoc",
        src: "/case-studies/medico/assets/competitor-oladoc.png",
        width: 264,
        height: 264,
      },
      {
        name: "UniDoc Health",
        src: "/case-studies/medico/assets/competitor-unidoc.png",
        width: 264,
        height: 264,
      },
    ],
  },
  features: {
    title: "Features",
    intro:
      "Based on my insights, I prioritized features that directly address users' goals and pain points. I focused on what people need, what competitors offer, and what would truly make an impact. Here's what I decided to prioritize:",
    items: [
      "I'm adding a price filter and quick virtual check-ins to make fitness and mental health care more affordable.",
      "I added AI to suggest telehealth or in-person visits, both bookable from the doctor's profile.",
      "Users can control their data, and we ensure privacy with HIPAA-compliant video calls.",
      "Medico simplifies healthcare with quick doctor bookings, video consultations, prescription tracking, and an AI chatbot.",
    ],
  },
  sitemap: {
    phase: "Prototype",
    title: "Sitemap",
    intro:
      "I designed a user flow that outlines the functionality and structure guiding the user's journey within the app, ensuring a seamless and intuitive experience throughout.",
    root: "Homepage",
    branches: [
      {
        title: "Find Nearby Doctor",
        children: [
          "Map for finding neaarby doctor",
          "Select Doctor online/physical consultation",
        ],
      },
      {
        title: "Doctor Booking",
        children: [
          "Find doctor according to category",
          "List of doctors available",
          "Select doctor and select date & time",
          "Payment for the doctor",
        ],
      },
      {
        title: "Online Consultation",
        children: [
          "Find doctor according to category",
          "List of doctors available",
          "Select doctor and select date & time",
          "Payment for the doctor",
        ],
      },
      {
        title: "Order medicine",
        children: ["select medicine", "select pharmacy", "Order details", "Payment"],
      },
      {
        title: "Lab Test",
        children: ["Select type of test", "select labortory", "Order details", "Payment"],
      },
      {
        title: "Notification",
        children: [],
      },
    ],
  },
  experience: {
    title: "Medico Experience",
    headline: "Healthcare professional at your fingertips",
    sub: "Schedule consultation with ease",
    gallery: [
      "photoCare2",
      "photoCare3",
      "photoCare4",
      "photoCare5",
    ] as const,
    points: [
      {
        title: "Location and Search",
        body: "Displays the user’s location and a search bar for quick access to medicine and location-based services.",
      },
      {
        title: "Key Actions",
        body: "Large, colorful buttons for essential services like doctor consultations and prescription uploads enhance usability.",
      },
      {
        title: "Nearby Pharmacies",
        body: "Shows nearby pharmacies with images, allowing users to explore local options easily with a “View All” link.",
      },
    ],
  },
  upload: {
    title: "Upload prescription",
    headline: "Upload prescription and let our AI do the job",
    points: [
      {
        title: "Instant",
        body: "Snap a picture of your prescription, and the app instantly identifies the medicines for you.",
      },
      {
        title: "Clarity",
        body: "No more guessing—upload your prescription and see exactly what’s written.",
      },
      {
        title: "Breakdown",
        body: "Get a clear breakdown of your doctor’s notes with just one upload.",
      },
    ],
  },
  symptoms: {
    title: "Symptoms checker & Medication reminder",
    headline: "Not feeling well?",
    sub: "Let our AI be your doctor",
    points: [
      {
        title: "Symptom",
        body: "Got symptoms? Let our AI help you figure out what might be going on.",
      },
      {
        title: "Reminder",
        body: "Never miss your meds again—just set a reminder, and we’ll notify you right on time.",
      },
      {
        title: "Health",
        body: "Manage your health smarter with AI symptom checks and medication alerts.",
      },
    ],
  },
  usability: {
    title: "Usability Testing",
    intro: "I tested a high-fidelity prototype with 5 users to gather feedback on usability and design.",
    goals: [
      "Test the ease of signing up.",
      "Get overall usability feedback.",
      "Gauge user opinions on design and features.",
    ],
    tasks: [
      "Sign up and explore onboarding.",
      "Book a doctor’s appointment.",
      "Find the nearest hospital.",
      "Rate the app (satisfied to “meh”).",
      "Suggest improvements.",
    ],
  },
  analysis: {
    title: "Test Analysis",
    body: "The usability test revealed strong potential, with users praising the intuitive design despite minor issues like internet delays and AI chat closures. Future success will depend on enhancing efficiency, user satisfaction, and meeting business goals.",
  },
  conclusion: {
    title: "Conclusion",
    workedTitle: "What Worked Well",
    worked: [
      "The booking feature was simple.",
      "Video consultations were convenient.",
      "Privacy options met user needs.",
      "AI advice met user needs.",
    ],
    needsTitle: "What Needs Work",
    needs: [
      "Privacy settings were hard to find.",
      "Navigation labels need to be clearer.",
      "First-time users need tooltips or a walkthrough.",
    ],
  },
  recommendations: {
    title: "Recommendations",
    items: [
      "Reorganize menus for key features.",
      "Improve the AI tool to save session history.",
      "Test with less tech-savvy users to improve usability and adoption.",
    ],
  },
  thankYou: {
    title: "Thank You!!",
  },
  hero: {
    doctor: {
      name: "Dr. Jitendar Ver",
      specialty: "General Physician (5 year Exp)",
      meta: "(5 year Exp) · General Physician · 5★",
      status: "Available Now",
      mode: "Video Consult",
      feeLabel: "Consultation Fee",
      fee: "$50.99",
      cta: "Book Appointment",
    },
    symptoms: {
      title: "Symptoms Checker",
      placeholder: "Enter symptoms",
      how: "How it works",
    },
  },
} as const;
