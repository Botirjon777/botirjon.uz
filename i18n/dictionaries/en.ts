/** A line with one word set in italic orange: before + <em>em</em> + after. */
export type Em = { before: string; em: string; after?: string };

const en = {
  common: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      experience: "Experience",
      education: "Education",
      services: "Services",
      skills: "Skills",
      blog: "Blog",
      contact: "Contact",
      privacy: "Privacy",
    },
    letsTalk: "Let's talk",
    toggleMenu: "Toggle menu",
    language: "Language",
    backHome: "Back to home",
    name: "Botirjon Shokirov",
  },

  meta: {
    siteTitle: "Botirjon Shokirov | Founder of Bronit, full-stack engineer",
    siteDescription:
      "Botirjon Shokirov is the founder of Bronit and a full-stack software engineer based in Uzbekistan, working with TypeScript, React, Next.js and Python.",
    about: {
      title: "About | Botirjon Shokirov",
      description: "Who Botirjon Shokirov is: founder of Bronit and full-stack engineer in Uzbekistan.",
    },
    projects: {
      title: "Bronit | Botirjon Shokirov",
      description:
        "Bronit, software for hotels and restaurants in Uzbekistan: management, QR menu, POS, in-room TV and an AI chat bot in one system.",
    },
    experience: {
      title: "Experience | Botirjon Shokirov",
      description: "Where Botirjon Shokirov has worked and what he built there.",
    },
    education: {
      title: "Education | Botirjon Shokirov",
      description: "Botirjon Shokirov's academic background in computer science.",
    },
    services: {
      title: "Services | Botirjon Shokirov",
      description: "Landing pages, web apps and full-stack systems built by Botirjon Shokirov.",
    },
    skills: {
      title: "Skills | Botirjon Shokirov",
      description: "Technologies and tools Botirjon Shokirov works with.",
    },
    blog: {
      title: "Blog | Botirjon Shokirov",
      description: "Notes on building Bronit: product, architecture and the engineering behind it.",
    },
    contact: {
      title: "Contact | Botirjon Shokirov",
      description: "Get in touch with Botirjon Shokirov on Telegram, Instagram or email.",
    },
  },

  home: {
    eyebrow: "Founder of Bronit · Software engineer",
    timeIn: "in Tashkent",
    // The headline is split so one word can be set in italic orange.
    headline: { before: "I build software\nthat ", em: "runs", after: " real\nbusinesses." },
    intro: {
      before: "I'm Botirjon Shokirov, a full-stack engineer. For {years}+ years I've shipped web apps, APIs and AI features, and I'm the founder of ",
      link: "Bronit",
      after: ", a system for hotels and restaurants in Uzbekistan.",
    },
    seeWork: "See the work",
    getInTouch: "Get in touch",
    companyEyebrow: "My company",
    openShowcase: "Open the showcase",
    visit: "Visit",
    whatIDo: "What I do",
    whatIDoTitle: { before: "The whole stack, ", em: "end to end." } as Em,
    disciplines: [
      {
        title: "Frontend",
        text: "Interfaces in React and Next.js that load fast, read clearly and hold up on a phone at a hotel reception desk.",
      },
      {
        title: "Backend",
        text: "APIs, data models and the boring parts that keep a product alive: auth, payments, queues, deploys.",
      },
      {
        title: "AI & automation",
        text: "Chat bots, face recognition and LLM features that do a real job for staff instead of sitting in a demo.",
      },
    ],
    stats: {
      years: "Years shipping",
      projects: "Projects delivered",
      clients: "Clients served",
      products: "Products inside Bronit",
    },
    technologies: "Technologies",
    followEyebrow: "Follow along",
    followTitle: { before: "I build ", em: "in public." } as Em,
    channels: {
      instagram: "Short videos about building software and the engineer's day to day.",
      youtube: "Longer walkthroughs: real projects, tools and how things are built.",
      channel: "A running log of what I'm shipping, learning and thinking about.",
    },
    latestPosts: "From the blog",
    allPosts: "All posts",
  },

  bronit: {
    tagline: "One system for the whole hotel.",
    summary:
      "Bronit is software for hotels and restaurants in Uzbekistan. Bookings and the calendar, a QR menu that takes room-service orders, the TVs in the rooms, the till and room bills: it connects reception, the kitchen and the guest in one window.",
    facts: [
      { label: "Role", value: "Founder & engineer" },
      { label: "Type", value: "SaaS platform" },
      { label: "For", value: "Hotels & restaurants" },
      { label: "Market", value: "Uzbekistan · EN / UZ / RU" },
    ],
    products: [
      {
        name: "Management",
        kind: "Web dashboard",
        text: "Bookings, services, client contracts and reports on one dashboard, with a capacity-aware calendar, payments and deposits, and staff roles per hotel.",
      },
      {
        name: "QR Menu",
        kind: "Guest web app",
        text: "Guests scan a code in the room and order. Staff get it in Telegram straight away, and the guest follows the order on their phone.",
      },
      {
        name: "POS",
        kind: "Touchscreen terminal",
        text: "Tables, orders and receipts for the restaurant and the kitchen, running on a Windows till in kiosk mode.",
      },
      {
        name: "TV",
        kind: "In-room Android TV",
        text: "The screen in every room: live TV, hotel information, room services, a city guide, weather and Wi-Fi by QR code.",
      },
      {
        name: "AI chat bot",
        kind: "Guest assistant",
        text: "Answers guests around the clock and passes real requests to the staff who can act on them.",
      },
      {
        name: "Telegram alerts",
        kind: "Staff notifications",
        text: "A new booking or a room-service order reaches the right team in seconds, with buttons to take it and mark it done.",
      },
    ],
    results: [
      { value: "15 min", label: "saved per booking at the front desk" },
      { value: "+30%", label: "more guest ordering through TV and QR menu" },
      { value: "70%", label: "of guest requests routed automatically" },
    ],
  },

  projects: {
    eyebrow: "Founded by me",
    ideaEyebrow: "The idea",
    idea: {
      before: "Many hotels here still run on paper journals and Excel sheets. Bronit replaces them with ",
      em: "one system",
      after: " that reception, the kitchen and the guest all share.",
    },
    insideEyebrow: "Inside the platform",
    insideTitle: { before: "Six products, ", em: "one login." } as Em,
    ordersTitle: "Orders, live",
    ordersText:
      "A guest orders from the room on their phone. Staff get it in Telegram at once and move it along with one tap: accepted, ready, delivered. The guest's screen follows every step.",
    resultsEyebrow: "What it changes for a hotel",
    resultsSource: "Figures as published on",
    builtWith: "Built with",
    ctaTitle: { before: "See it ", em: "running." } as Em,
    ctaText: "Bronit is live and in use by hotels today. The best way to judge the work is to open it.",
    altHome: "The Bronit website: Your whole hotel in one system",
    altErp: "Bronit ERP order board next to the guest QR menu on a phone",
    altProducts: "Bronit products: ERP implementation, Management system and Custom solutions",
    altPlatform: "Bronit: hotel operations around one platform",
    openSite: "Open",
  },

  services: {
    eyebrow: "What I offer",
    title: { before: "Services for ", em: "your product." } as Em,
    intro:
      "From a single landing page to a full system with an admin panel, I build products that are fast, reliable and easy to use.",
    items: [
      {
        title: "Landing pages",
        description:
          "Fast, SEO-ready landing pages that explain what you sell and turn visitors into enquiries.",
        features: ["SEO setup", "Fast load times", "Works on every screen", "Custom animation"],
      },
      {
        title: "Web apps",
        description:
          "Interactive web applications in React and Next.js that feel quick and stay simple for the people using them.",
        features: ["React / Next.js", "State management", "Smooth transitions", "API integration"],
      },
      {
        title: "Full-stack systems",
        description:
          "End-to-end products: backend, database, auth and an admin panel your team can actually run the business from.",
        features: ["Database design", "Secure auth", "Admin panels", "Telegram integrations"],
      },
    ],
    discuss: "Discuss a project",
    pricingTitle: "Pricing",
    pricingText:
      "Every project is different, so I price by scope. Tell me what you need and I'll come back with a clear estimate.",
    discussTelegram: "Write on Telegram",
  },

  about: {
    eyebrow: "About",
    title: { before: "Building software that ", em: "matters." } as Em,
    paragraphs: [
      "I'm a software engineer from Uzbekistan and the founder of Bronit, a system that hotels and restaurants use to run bookings, room service, in-room TVs and the till from one place.",
      "I started in January 2023, helping university students and taking freelance work, and have since worked across the full stack: React and Next.js on the front, Node.js and Python on the back, PostgreSQL and MongoDB underneath.",
      "I studied computer science, with a focus on machine learning, cloud web applications and artificial intelligence. Outside of work I play chess and ping pong.",
    ],
    facts: {
      location: "Uzbekistan",
      experience: "{years} years of experience",
      role: "Founder & full-stack engineer",
    },
    available: "Open to new projects",
    techTitle: "Tech I use",
  },

  experience: {
    eyebrow: "Experience",
    title: { before: "Where I've ", em: "worked." } as Em,
    current: "Current",
    items: [
      {
        role: "Founder",
        company: "Bronit",
        period: "Now",
        location: "Uzbekistan",
        current: true,
        highlights: [
          "Building Bronit, software for hotels and restaurants: management, QR menu, POS, in-room TV, AI chat bot and Telegram alerts.",
          "Responsible for product and engineering across the platform.",
        ],
      },
      {
        role: "Software Engineer",
        company: "AVADirect Custom Computers",
        period: "June 2025 – Present",
        location: "On site",
        current: true,
        highlights: [
          "Building custom computer configuration and e-commerce systems.",
          "Full-stack development with modern web technologies.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Freelance",
        period: "Jan 2023 – Present",
        location: "Remote",
        current: true,
        highlights: [
          "Worked with 50+ university students on JavaScript, Python, machine learning and virtual machine projects, all delivered successfully.",
          "Look after 15+ active clients with software built for their needs.",
          "Clear communication with clients and turning requirements into working software.",
          "Debugging, optimisation and end-to-end implementation.",
        ],
      },
      {
        role: "Software Engineer · Backend Developer",
        company: "Premium Soft",
        period: "March 2025 – May 2025",
        location: "Remote",
        current: false,
        highlights: [
          "Developed and maintained backend services and REST APIs.",
          "Worked with cross-functional teams to deliver reliable backend solutions.",
        ],
      },
      {
        role: "Software Engineer",
        company: "RadCode",
        period: "Sep 2022 – Dec 2023",
        location: "Warsaw, Poland",
        current: false,
        highlights: [
          "Wrote clean, reusable code that was easier to maintain.",
          "Migrated legacy styles to MUI 5, improving app speed and appearance by 55%.",
          "Worked extensively with Prisma ORM and migrated parts of the codebase from TypeORM to Prisma.",
          "Optimised code performance under senior guidance, achieving a 30% improvement.",
        ],
      },
    ],
  },

  education: {
    eyebrow: "Education",
    title: { before: "Where I ", em: "studied." } as Em,
    university: "University of Economics and Humanities",
    degree: "B.Sc. Computer Science",
    period: "Mar 2022 – Feb 2026",
    location: "Warsaw, Poland",
    coursesTitle: "Relevant courses",
    courses: [
      "Algorithms & Data Structures",
      "Computer Systems Architecture",
      "REST API Development",
      "Databases",
      "Machine Learning",
      "Deep Learning",
      "Cloud-Oriented Web Apps",
      "Operating Systems",
      "Network Technologies",
      "Object-Oriented Programming",
      "Software Engineering",
      "Artificial Intelligence",
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: { before: "Tools I ", em: "work with." } as Em,
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      ai: "AI & ML",
      devops: "DevOps & tools",
      other: "Other",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: { before: "Let's build\nsomething ", em: "real." } as Em,
    intro: "I answer fastest on Telegram and Instagram. Write about a project, a role, or just to say hi.",
    labels: {
      telegram: "Telegram",
      instagram: "Instagram",
      email: "Email",
      channel: "Telegram channel",
      youtube: "YouTube",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  footer: {
    title: { before: "Have a product\nto ", em: "build?" } as Em,
    cta: "Start a conversation",
    pages: "Pages",
    elsewhere: "Elsewhere",
  },

  blog: {
    eyebrow: "Blog",
    title: { before: "Notes from ", em: "building Bronit." } as Em,
    intro: "How the product works, why it is built the way it is, and what I learn along the way.",
    readPost: "Read",
    minRead: "min read",
    backToBlog: "All posts",
    morePosts: "More posts",
    empty: "No posts yet.",
    simplified: "Simplified",
  },
};

export default en;
export type Dictionary = typeof en;
