import { En_workCases } from "./English_workCases";
import { MixIcon, RocketIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { coding, fullTime } from "@/utils/experienceYears";

export const lang_en = {
  constants: {
    name: "Nick Roofthooft",
    backBtn: "Back home"
  },

  landing: {
    name: "Nick Roofthooft",
    workType: "Freelance",
    jobType: "Full Stack Developer",
    tagline: "I build real-time systems for live gaming events with 20,000+ visitors.",

    buttons: {
      work: "See my work",
      contact: "Contact me",
      more: "More about me"
    }
  },

  work: {
    name: "Nick Roofthooft",
    exp: `${coding.years} years ${coding.months} months of coding experience.`,
    workExp: `Full-time employed for the last ${fullTime.years} years ${fullTime.months} months.`,
    discover: "Discover my freelance work",
    offer: "",
    disclaimer: "I work full-time at a startup, so that work is under an NDA and can't be shown here. Everything below is my own freelance and side-project work.",
    list: "",

    labels: {
      dateReason: "Date & Reason:",
      techUsed: "Tech used",
      clickToPreview: "Click to Preview."
    }
  },

  workItems: [
    ...En_workCases
  ],


  contact: {
    header: "Contact me",
    cta: "Email me"
  },

  about: {
    hero: {
      name: "Nick Roofthooft",
      title: "Full Stack Developer",
      location: "Saue, Estonia"
    },
    badges: {
      experience: `${coding.years} Years ${coding.months} Months Experience`,
      fullTime: `${fullTime.years} Years ${fullTime.months} Months Full-Time`,
      specialist: "Gaming Events Specialist"
    },
    summary: {
      intro: "I moved to Estonia in 2022, in search of a more digital life, future, and career.",
      bio: {
        text: "Full Stack Developer with over 3.5 years of professional experience. I build React and TypeScript frontends and Node.js and Firebase backends, mostly for live gaming events like DreamHack and Spillexpo that pull in 20,000+ visitors yearly. In 2025 I took over backend ownership while staying the primary frontend developer, and have since rebuilt the company's core systems into white-label platforms: 13 branded Electron apps from one monorepo, 8 retail brands served by one web codebase, and a backend that does more with roughly 38% less code. Delivering software solutions for companies such as",
        companies: ["Elgiganten", "Logitech", "Lego", "TCL", "Keychron", "Hisense", "Samsung"],
        andMore: "and many more."
      }
    },
    sections: {
      experience: "Professional Experience",
      education: "Education",
      techStack: "Tech Stack & Skills",
      specializations: "Specializations"
    },
    recommendation: {
      heading: "Letter of Recommendation",
      subtitle: "A signed reference from Brandweb OÜ.",
      openInNewTab: "Open full screen",
      fallback: "Your browser can't display the PDF here. Open the Letter of Recommendation."
    },
    experiences: [
      {
        role: "Full Stack Developer",
        company: "Brandweb OÜ",
        period: "Jan 2025 - Present",
        location: "Tallinn, Estonia (Hybrid)",
        highlights: [
          "Co-developed a B2B sales training platform with the CEO, from a whiteboard sketch to production: multi-tenant architecture, 7 user roles, training and quiz builder, role-based analytics, and an AI support chatbot (Anthropic/OpenAI APIs)",
          "Sole frontend developer on the company's Electron tracker apps and big-screen leaderboards; re-architected the trackers from 10+ branches into one monorepo, 13 branded apps sharing roughly 90% of their code",
          "Built live telemetry integrations for 8 games (F1, Forza, Gran Turismo 7, CS2, Fall Guys), reading UDP packets and game APIs in real time",
          "Took over complete backend ownership and rebuilt it in TypeScript and Firebase: 38% less code than the legacy system, with Zod validation on every endpoint, multi-tenant data isolation, rate limiting, centralized error logging, and GDPR flows",
          "Built an offline-first score pipeline for unreliable venue networks: IndexedDB queue, background sync, and bounded retries",
          "Set up CI/CD with GitHub Actions: zero-warning lint gates, TypeScript build checks, and versioned deployments with rollback",
          "Develop custom CS2 maps and live 1v1 leaderboards for DreamHack and Spillexpo, running in front of 20,000+ visitors a year"
        ]
      },
      {
        role: "Frontend Developer",
        company: "Brandweb OÜ",
        period: "Nov 2022 - Jan 2025",
        location: "Tallinn, Estonia (Hybrid)",
        highlights: [
          "Built and maintained a shared codebase powering multiple client websites and apps, replacing many separate branches",
          "Turned design mockups into responsive production web apps",
          "Worked with Firebase authentication, Cloud Functions, and third-party APIs across client projects",
          "Built event leaderboards including racing telemetry setups and CS2 1v1 scoreboards",
          "Created 10+ custom CS2 1v1 and time trial maps in Hammer Editor (Source 2) that worked with our in-house event software",
          "Built an internal Electron admin app used by the dev team and event staff during live events",
          "Cleaned up legacy code, optimized hosting, and maintained a clean GitHub setup for the team",
          "Provided on-site technical and development support at DreamHack and Spillexpo"
        ]
      },
      {
        role: "Customer Support Agent",
        company: "Webhelp Enterprise",
        period: "Oct 2022 - Nov 2022",
        location: "Tallinn, Estonia",
        highlights: [
          "First-level customer support for Webhelp Nordic",
          "Short bridge role taken after moving to Estonia while looking for a developer position"
        ]
      },
      {
        role: "Part-Time Production Worker",
        company: "Inex NV",
        period: "May 2017 - May 2022",
        location: "Belgium",
        highlights: [
          "Worked evenings, weekends, and summers throughout high school and programming course, often night shifts while attending classes during the day",
          "Rotated across nearly every machine and role on site over the years",
          "Became one of the more flexible and reliable workers on the team"
        ]
      }
    ],
    education: [
      {
        degree: "Associate Degree in Programming (coursework completed)",
        school: "Artevelde University",
        period: "Sep 2020 - Aug 2022",
        location: "Ghent, Belgium",
        description: "Full-stack web development coursework covering both frontend and backend technologies",
        note: "* Good grades throughout. Moved to Estonia before the final certification.",
        skills: [
          "HTML5, CSS and SCSS, JavaScript, TypeScript",
          "React, Node.js, GraphQL, REST APIs, Firebase",
          "PHP, database design, static site generators, CMS platforms",
          "Figma, Blender, Adobe suite"
        ]
      },
      {
        degree: "Secondary Education, Electricity",
        school: "Technical High School",
        period: "2014 - 2020",
        location: "Belgium",
        description: "Graduated with a technical degree in electrical systems",
        note: "",
        skills: []
      }
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Firebase",
      "Vite",
      "Jotai",
      "Electron",
      "SCSS",
      "Redux",
      "Zustand",
      "Zod",
      "Radix UI",
      "Vue.js"
    ],
    primaryStack: {
      label: "Primary Stack:",
      stack: "React + TypeScript (strict) + Vite • Firebase • Node.js • Jotai • Zustand • Electron • SCSS"
    },
    specializations: [
      {
        icon: RocketIcon,
        title: "Gaming Events",
        description: "Custom CS2 maps, live leaderboards, and real-time event management systems for DreamHack, Spillexpo, and other major gaming events",
        color: "violet"
      },
      {
        icon: MixIcon,
        title: "Full Stack Development",
        description: "End-to-end development owning both frontend and backend: TypeScript, React, Node.js, Firebase, and Electron desktop apps",
        color: "cyan"
      },
      {
        icon: StarFilledIcon,
        title: "Event Support",
        description: "On-site technical support and live problem-solving during gaming events with 20,000+ participants",
        color: "gold"
      }
    ]
  },

  SEO: {
    landing: {
      title: "Freelance Full Stack Developer",
      desc: "Nick Roofthooft, freelance Full Stack Developer building React, TypeScript, Node.js and Firebase apps, plus real-time tech for live gaming events like DreamHack and Spillexpo."
    },

    work: {
      title: "Work & Projects",
      desc: "Selected freelance and side projects by Nick Roofthooft, built with Next.js, React, TypeScript, Radix UI, Firebase and Electron."
    },

    about: {
      title: "About",
      desc: "Full Stack Developer based in Estonia with 3.5+ years of experience building web and Electron apps and real-time systems for major gaming events."
    },

    contact: {
      title: "Contact",
      desc: "Get in touch with Nick Roofthooft, freelance Full Stack Developer. LinkedIn, GitHub and email."
    },

  }
};