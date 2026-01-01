import { En_workCases } from "./English_workCases";

export const lang_en = {
  constants: {
    name: "Nick Roofthooft"
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
    exp: "5+ years of coding experience.",
    workExp: "Full-time employed for the last 3+ years.",
    discover: "Discover my work",
    offer: "Starting from 2026, I also offer freelance work on the side. contact me for more info or requests.",
    disclaimer: "I currently work in a start-up company, this means all work I do falls under a NDA, and such I cannot show any work I have done at my work.",
    list: "Below is a List of my freelance work.",

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
      title: "Full Stack Engineer",
      location: "Tallinn, Estonia"
    },
    badges: {
      experience: "5+ Years Experience",
      fullTime: "3+ Years Full-Time",
      specialist: "Gaming Events Specialist"
    },
    summary: {
      intro: "I moved to Estonia in 2022, In search for more digital life, future and career.",
      bio: {
        text: "TL;DR I am a Full Stack Engineer with extensive experience in building scalable web applications and custom gaming solutions for large-scale events. Specialized in and around the React ecosystem using TypeScript, and Firebase, Deliverying software solutions for events like Dreamhack, Spillexpo, Assembly and more, hosting 20,000+ attendees per event annually for companies such as",
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
        role: "Full Stack Engineer",
        company: "Brandweb OÜ",
        period: "Jan 2025 - Present",
        location: "Tallinn, Estonia (Hybrid)",
        highlights: [
          "Involved in the complete software/website development flow",
          "Build and maintain backend services with TypeScript, Node.js, and Firebase",
          "Develop Electron apps for game data tracking and event management",
          "Create CS2 custom maps and leaderboards for major gaming events",
          "Support events like Dreamhack, welcoming 20,000+ attendees yearly"
        ]
      },
      {
        role: "Junior Frontend Engineer",
        company: "Brandweb OÜ",
        period: "Nov 2022 - Jan 2025",
        location: "Tallinn, Estonia (Hybrid)",
        highlights: [
          "Improved codebase with multi-client solution in a single codebase",
          "Created custom CS2 maps using Hammer Editor for live gaming events",
          "Built leaderboards and scoreboards for racing setups and CS2 1v1 matches",
          "Provided on-site technical support at major gaming events",
          "Developed admin platform using Electron for company management"
        ]
      }
    ],
    education: [
      {
        degree: "Associate Degree in Programming, unfinished",
        school: "Arteveldehogeschool",
        period: "Sep 2020 - Aug 2022",
        location: "Ghent, Flanders, Belgium",
        description: "Comprehensive 2-year programming course covering full-stack web development fundamentals",
        note: "* Unfinished due to unplanned reasons, I moved to to Estonia faster that initialy planned.",
        skills: [
          "JavaScript, TypeScript, HTML, CSS/SCSS/Sass",
          "React, Vue.js frameworks",
          "Backend: Node.js, GraphQL, REST APIs, Firebase",
          "Database structuring and management",
          "Design tools: Adobe Suite, Blender, Figma",
          "Additional: PHP, Static Site Generators, GitHub Pages, CMS platforms"
        ]
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
      "Redux"
    ],
    primaryStack: {
      label: "Primary Stack:",
      stack: "React + TypeScript (strict) + Vite • Firebase • Node.js • Jotai • Electron • SCSS"
    },
    specializations: [
      {
        icon: "🎮",
        title: "Gaming Events",
        description: "Custom CS2 maps, leaderboards, and real-time event management systems for Dreamhack and other major gaming events"
      },
      {
        icon: "⚡",
        title: "Full Stack Development",
        description: "End-to-end development with TypeScript, React, Node.js, Firebase serverless functions, and Electron desktop apps"
      },
      {
        icon: "🔧",
        title: "Event Support",
        description: "On-site technical support and emergency handling during live gaming events with thousands of participants"
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