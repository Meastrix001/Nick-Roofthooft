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
        tagline: "Ik bouw realtime systemen voor live gaming-evenementen met 20.000+ bezoekers.",

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
            "Ik werk fulltime bij een start-up, dus dat werk valt onder een NDA en kan ik hier niet tonen. Alles hieronder is mijn eigen freelance- en zijprojectwerk.",
        list: "",

        labels: {
            dateReason: "Datum & Reden:",
            techUsed: "Gebruikte technologie",
            clickToPreview: "Klik om te bekijken.",
        },
    },

    workItems: [...Nl_workCases],

    contact: {
        header: "Neem contact op",
        cta: "Mail me",
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
                text: "Full Stack Developer met meer dan 3,5 jaar professionele ervaring. Ik bouw React- en TypeScript-frontends en Node.js- en Firebase-backends, voornamelijk voor live gaming-evenementen zoals DreamHack en Spillexpo met meer dan 20.000 bezoekers per jaar. In 2025 heb ik de backend overgenomen terwijl ik de primaire frontend-developer bleef, en heb sindsdien de kernsystemen van het bedrijf herbouwd tot white-label platformen: 13 branded Electron-apps vanuit één monorepo, 8 retailmerken bediend door één web-codebase, en een backend die meer doet met ongeveer 38% minder code. Ik lever softwareoplossingen voor bedrijven zoals",
                companies: ["Elgiganten", "Logitech", "Lego", "TCL", "Keychron", "Hisense", "Samsung"],
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
                    "Samen met de CEO een B2B-verkooptrainingsplatform ontwikkeld, van whiteboard-schets tot productie: multi-tenant architectuur, 7 gebruikersrollen, training- en quizbuilder, rolgebaseerde analytics en een AI-supportchatbot (Anthropic/OpenAI API's)",
                    "Enige frontend-developer van de Electron tracker-apps en grote leaderboard-schermen; de trackers geherstructureerd van 10+ branches naar één monorepo, 13 branded apps die ongeveer 90% van hun code delen",
                    "Live telemetrie-integraties gebouwd voor 8 games (F1, Forza, Gran Turismo 7, CS2, Fall Guys), met realtime uitlezen van UDP-pakketten en game-API's",
                    "Volledige backend-verantwoordelijkheid overgenomen en herbouwd in TypeScript en Firebase: 38% minder code dan het legacy-systeem, met Zod-validatie op elk endpoint, multi-tenant data-isolatie, rate limiting, gecentraliseerde error logging en GDPR-flows",
                    "Een offline-first score-pipeline gebouwd voor onbetrouwbare evenementnetwerken: IndexedDB-wachtrij, achtergrondsynchronisatie en begrensde retries",
                    "CI/CD opgezet met GitHub Actions: lint gates zonder warnings, TypeScript build-checks en versiebeheerde deployments met rollback",
                    "Custom CS2-maps en live 1v1-leaderboards ontwikkeld voor DreamHack en Spillexpo, draaiend voor 20.000+ bezoekers per jaar",
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
                    "Meer dan 10 custom CS2 1v1- en time trial-maps gemaakt in Hammer Editor (Source 2) die samenwerkten met onze in-house eventsoftware",
                    "Een interne Electron-adminapp gebouwd die door het devteam en eventpersoneel wordt gebruikt tijdens live evenementen",
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
                note: "* Goede resultaten gedurende de hele opleiding. Verhuisd naar Estland vóór de finale certificering.",
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
            title: "Freelance Full Stack Developer",
            desc: "Nick Roofthooft, freelance Full Stack Developer die React-, TypeScript-, Node.js- en Firebase-apps bouwt, plus realtime tech voor live gaming-evenementen zoals DreamHack en Spillexpo.",
        },
        work: {
            title: "Werk & Projecten",
            desc: "Geselecteerde freelance- en zijprojecten van Nick Roofthooft, gebouwd met Next.js, React, TypeScript, Radix UI, Firebase en Electron.",
        },

        about: {
            title: "Over mij",
            desc: "Full Stack Developer gevestigd in Estland met 3,5+ jaar ervaring in het bouwen van web- en Electron-apps en realtime systemen voor grote gaming-evenementen.",
        },

        contact: {
            title: "Contact",
            desc: "Neem contact op met Nick Roofthooft, freelance Full Stack Developer. LinkedIn, GitHub en e-mail.",
        },
    },
};
