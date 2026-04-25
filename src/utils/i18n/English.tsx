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
    disclaimer: "I work in a start-up company, this means all company work I do falls under a NDA, and such I cannot show any work I have done at my work.",
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
    header: "Contact me"
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
        text: "Full Stack Developer with over 3.5 years of professional experience. I build React and TypeScript applications on the frontend and Node.js and Firebase services on the backend, mostly for live gaming events like DreamHack and Spillexpo that pull in 20,000+ visitors yearly. In 2025, I took over as BE developer and have been running both sides of the stack since, working closely with the CEO. Delivering software solutions for companies such as",
        companies: ["Elgiganten", "Logitech", "Lego", "TCL", "Keychron"],
        andMore: "and many more."
      }
    },
    sections: {
      experience: "Professional Experience",
      education: "Education",
      techStack: "Tech Stack & Skills",
      specializations: "Specializations"
    },
    experiences: [
      {
        role: "Full Stack Developer",
        company: "Brandweb OÜ",
        period: "Jan 2025 - Present",
        location: "Tallinn, Estonia (Hybrid)",
        highlights: [
          "Sole BE and partial FE developer behind the company's brand-new sales training platform, built from a whiteboard sketch to a complete product",
          "Converted the company's primary Electron apps from 10+ branches to a single monorepo using workspaces",
          "Took over complete backend ownership: building, maintaining, and refactoring TypeScript, Node.js, and Firebase services",
          "Design, develop, and deploy Electron applications for live game data tracking and internal event tools",
          "Set up Firebase security rules, Zod validation, and consistent CRUD patterns across multiple client projects",
          "Integrate open game APIs, telemetry feeds, and local servers to automate data handling during live events",
          "Develop custom CS2 maps and live 1v1 leaderboards for DreamHack and Spillexpo, hosting 20,000+ visitors yearly"
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
          "Created 10+ custom CS2 maps in Hammer Editor that worked with our in-house event software",
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
      title: "",
      desc: ""
    },

    work: {
      title: "",
      desc: ""
    },

    about: {
      title: "",
      desc: ""
    },

    contact: {
      title: "",
      desc: ""
    },

  }
};