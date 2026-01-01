import { Nl_workCases } from "./Nederlands_workCases";
import { MixIcon, RocketIcon, StarFilledIcon } from "@radix-ui/react-icons";

export const lang_nl = {
    constants: {
        name: "Nick Roofthooft",
        backBtn: "Startpagina"
    },

    landing: {
        name: "Nick Roofthooft",
        workType: "Freelance",
        jobType: "Full Stack Developer",

        buttons: {
            work: "Mijn cases",
            contact: "Contact",
            more: "Meer info over mij",
        },
    },

    work: {
        name: "Nick Roofthooft",
        exp: "5+ jaar ervaring met programmeren.",
        workExp: "Voltijds werknemend voor de laatste 3+ jaar.",
        discover: "Ontdek mijn werk",
        offer:
            "Beginnent van 2026, Bied ik ook freelance werk aan als bijberoep. neem contact op voor mee info of offertes.",

        disclaimer:
            "Ik werk full-time voor een opstarted prive bedrijf. Daardoor valt all dat werk onder een NDA, waardoor ik dit niet kan tonen.",
        list: "",

        labels: {
            dateReason: "Datum & Reden:",
            techUsed: "Gebruikte technology",
            clickToPreview: "Klik om te bekijken.",
        },
    },

    workItems: [...Nl_workCases],

    contact: {
        header: "Neem contact op",
    },

    about: {
        hero: {
            name: "Nick Roofthooft",
            title: "Full Stack Engineer",
            location: "Tallinn, Estland",
        },
        badges: {
            experience: "5+ Jaar Ervaring",
            fullTime: "3+ Jaar Fulltime",
            specialist: "Specialist Gaming Events",
        },
        summary: {
            intro:
                "In 2022 ben ik naar Estland verhuisd, op zoek naar een meer digitale levensstijl, toekomst en carrière.",
            bio: {
                text: "TL;DR Ik ben een Full Stack Engineer met uitgebreide ervaring in het bouwen van webapplicaties en gaming-oplossingen voor grootschalige evenementen zoals Dreamhack, Spillexpo en meer. Gespecialiseerd in en rond het React-ecosysteem met TypeScript en Firebase, en het leveren van softwareoplossingen voor evenementen zoals Dreamhack, Spillexpo, Assembly en meer met jaarlijks 20.000+ bezoekers per evenement voor bedrijven zoals",
                companies: ["Elgiganten", "Logitech", "Lego", "TCL", "Keychron"],
                andMore: "en nog veel meer.",
            },
        },
        sections: {
            experience: "Professionele Ervaring",
            education: "Opleiding",
            techStack: "Tech Stack & Vaardigheden",
            specializations: "Specialisaties",
        },
        experiences: [
            {
                role: "Full Stack Engineer",
                company: "Brandweb OÜ",
                period: "Jan 2025 - Heden",
                location: "Tallinn, Estland (Hybride)",
                highlights: [
                    "Betrokken bij het volledige software-/websiteontwikkelingsproces",
                    "Bouwen en onderhouden van backendservices met TypeScript, Node.js en Firebase",
                    "Ontwikkelen van Electron-apps voor game-datatracking en eventmanagement",
                    "Maken van CS2 custom maps en leaderboards voor grote gaming events",
                    "Ondersteuning van evenementen zoals Dreamhack, met jaarlijks 20.000+ bezoekers",
                ],
            },
            {
                role: "Junior Frontend Engineer",
                company: "Brandweb OÜ",
                period: "Nov 2022 - Jan 2025",
                location: "Tallinn, Estland (Hybride)",
                highlights: [
                    "Verbeterde de codebase met een multi-clientoplossing binnen één codebase",
                    "Ontwikkelde custom CS2 maps met Hammer Editor voor live gaming events",
                    "Bouwde leaderboards en scoreboards voor racing-opstellingen en CS2 1v1-wedstrijden",
                    "Verleende on-site technische ondersteuning tijdens grote gaming events",
                    "Ontwikkelde een adminplatform met Electron voor bedrijfsbeheer",
                ],
            },
        ],
        education: [
            {
                degree: "Associate Degree in Programming, niet afgerond",
                school: "Arteveldehogeschool",
                period: "Sep 2020 - Aug 2022",
                location: "Gent, Vlaanderen, België",
                description:
                    "Uitgebreide 2-jarige programmeeropleiding met focus op full-stack webdevelopment",
                note: "* Niet afgerond wegens ongeplande omstandigheden, Ik ben sneller naar Estland moeten verhuizen dan gepland.",
                skills: [
                    "JavaScript, TypeScript, HTML, CSS/SCSS/Sass",
                    "React, Vue.js frameworks",
                    "Backend: Node.js, GraphQL, REST API’s, Firebase",
                    "Database-structurering en -beheer",
                    "Design tools: Adobe Suite, Blender, Figma",
                    "Aanvullend: PHP, Static Site Generators, GitHub Pages, CMS-platformen",
                ],
            },
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
        ],
        primaryStack: {
            label: "Primaire Stack:",
            stack:
                "React + TypeScript (strict) + Vite • Firebase • Node.js • Jotai • Electron • SCSS",
        },
        specializations: [
            {
                icon: RocketIcon,
                title: "Gaming Events",
                description:
                    "Custom CS2 maps, leaderboards en realtime eventmanagementsystemen voor Dreamhack en andere grote gaming events",
                color: "violet",
            },
            {
                icon: MixIcon,
                title: "Full Stack Development",
                description:
                    "End-to-end ontwikkeling met TypeScript, React, Node.js, Firebase serverless functies en Electron desktop apps",
                color: "cyan",
            },
            {
                icon: StarFilledIcon,
                title: "Event Support",
                description:
                    "On-site technische ondersteuning en probleemoplossing tijdens live gaming events met duizenden deelnemers",
                color: "gold",
            },
        ],
    },

    SEO: {
        landing: {
            title: "",
            desc: "",
        },
        work: {
            title: "",
            desc: "",
        },

        about: {
            title: "",
            desc: "",
        },

        contact: {
            title: "",
            desc: "",
        },
    },
};
