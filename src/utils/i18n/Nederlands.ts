import { Nl_workCases } from "./Nederlands_workCases";
import { MixIcon, RocketIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { coding, fullTime } from "@/utils/experienceYears";

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
        exp: `${coding.years} jaar ${coding.months} maanden ervaring met programmeren.`,
        workExp: `Voltijds werknemend voor de laatste ${fullTime.years} jaar ${fullTime.months} maanden.`,
        discover: "Ontdek mijn werk",
        offer:
            "",

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
            title: "Full Stack Developer",
            location: "Saue, Estland",
        },
        badges: {
            experience: `${coding.years} Jaar ${coding.months} Maanden Ervaring`,
            fullTime: `${fullTime.years} Jaar ${fullTime.months} Maanden Fulltime`,
            specialist: "Specialist Gaming Events",
        },
        summary: {
            intro:
                "In 2022 ben ik naar Estland verhuisd, op zoek naar een meer digitaal leven, toekomst en carrière.",
            bio: {
                text: "Full Stack Developer met meer dan 3,5 jaar professionele ervaring. Ik bouw React- en TypeScript-applicaties aan de frontend en Node.js- en Firebase-diensten aan de backend, voornamelijk voor live gaming-evenementen zoals DreamHack en Spillexpo met meer dan 20.000 bezoekers per jaar. In 2025 heb ik de backendrol overgenomen en ben ik sindsdien verantwoordelijk voor beide kanten van de stack. Ik lever softwareoplossingen voor bedrijven zoals",
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
                role: "Full Stack Developer",
                company: "Brandweb OÜ",
                period: "Jan 2025 - Heden",
                location: "Tallinn, Estland (Hybride)",
                highlights: [
                    "Enige BE- en gedeeltelijke FE-ontwikkelaar achter het nieuwe verkooptrainingsplatform van het bedrijf, gebouwd van een whiteboard-schets tot een volledig product",
                    "Omgezet van 10+ branches naar één monorepo met workspaces voor de Electron-apps van het bedrijf",
                    "Volledige backend-verantwoordelijkheid overgenomen: bouwen, onderhouden en refactoren van TypeScript-, Node.js- en Firebase-services",
                    "Electron-applicaties ontwerpen, ontwikkelen en deployen voor live gamedata-tracking en interne evenementtools",
                    "Firebase-beveiligingsregels, Zod-validatie en consistente CRUD-patronen opgezet voor meerdere klantprojecten",
                    "Open game-API’s, telemetryfeeds en lokale servers geïntegreerd voor geautomatiseerde dataverwerking tijdens live evenementen",
                    "Custom CS2-maps en live 1v1-leaderboards ontwikkeld voor DreamHack en Spillexpo, met 20.000+ bezoekers per jaar",
                ],
            },
            {
                role: "Frontend Developer",
                company: "Brandweb OÜ",
                period: "Nov 2022 - Jan 2025",
                location: "Tallinn, Estland (Hybride)",
                highlights: [
                    "Gedeelde codebase gebouwd en onderhouden voor meerdere klantwebsites en -apps, ter vervanging van aparte branches",
                    "Designmockups omgezet naar responsieve productie-webapps",
                    "Gewerkt met Firebase-authenticatie, Cloud Functions en externe API’s voor klantprojecten",
                    "Evenement-leaderboards gebouwd, waaronder racing-telemetry-setups en CS2 1v1-scoreboards",
                    "Meer dan 10 custom CS2-maps gemaakt in Hammer Editor die samenwerkten met onze in-house eventsoftware",
                    "Legacy code opgeschoond, hosting geoptimaliseerd en GitHub-setup overzichtelijk gehouden",
                    "On-site technische ondersteuning verleend bij DreamHack en Spillexpo",
                ],
            },
            {
                role: "Customer Support Agent",
                company: "Webhelp Enterprise",
                period: "Okt 2022 - Nov 2022",
                location: "Tallinn, Estland",
                highlights: [
                    "Eerstelijnscustomerservice voor Webhelp Nordic",
                    "Kortdurende overbruggingsfunctie na de verhuizing naar Estland, in afwachting van een developersfunctie",
                ],
            },
            {
                role: "Deeltijds Productiemedewerker",
                company: "Inex NV",
                period: "Mei 2017 - Mei 2022",
                location: "België",
                highlights: [
                    "Werkte avonden, weekenden en zomers tijdens de middelbare school en de programmeerrichting, vaak nachtshifts terwijl ik overdag les volgde",
                    "Wisselde door vrijwel elke machine en rol op de werkvloer door de jaren heen",
                    "Groeide uit tot een van de meest flexibele en betrouwbare medewerkers van het team",
                ],
            },
        ],
        education: [
            {
                degree: "Associate Degree in Programming (cursuswerk voltooid)",
                school: "Artevelde University",
                period: "Sep 2020 - Aug 2022",
                location: "Gent, België",
                description:
                    "Full-stack webdevelopment-cursussen met zowel frontend- als backendtechnologieën",
                note: "* Goede resultaten gedurende de gehele opleiding. Verhuisd naar Estland voor het behalen van het certificaat.",
                skills: [
                    "HTML5, CSS en SCSS, JavaScript, TypeScript",
                    "React, Node.js, GraphQL, REST API’s, Firebase",
                    "PHP, databaseontwerp, static site generators, CMS-platformen",
                    "Figma, Blender, Adobe suite",
                ],
            },
            {
                degree: "Secundair Onderwijs, Elektriciteit",
                school: "Technische Middelbare School",
                period: "2014 - 2020",
                location: "België",
                description: "Technisch diploma in elektrische installaties",
                note: "",
                skills: [],
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
            "Zustand",
            "Zod",
            "Radix UI",
            "Vue.js",
        ],
        primaryStack: {
            label: "Primaire Stack:",
            stack:
                "React + TypeScript (strict) + Vite • Firebase • Node.js • Jotai • Zustand • Electron • SCSS",
        },
        specializations: [
            {
                icon: RocketIcon,
                title: "Gaming Events",
                description:
                    "Custom CS2-maps, live leaderboards en realtime eventmanagementsystemen voor DreamHack, Spillexpo en andere grote gaming-evenementen",
                color: "violet",
            },
            {
                icon: MixIcon,
                title: "Full Stack Development",
                description:
                    "End-to-end ontwikkeling met volledige verantwoordelijkheid voor frontend en backend: TypeScript, React, Node.js, Firebase en Electron",
                color: "cyan",
            },
            {
                icon: StarFilledIcon,
                title: "Event Support",
                description:
                    "On-site technische ondersteuning en live probleemoplossing tijdens gaming-evenementen met 20.000+ deelnemers",
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
