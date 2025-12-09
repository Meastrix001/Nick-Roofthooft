"use client";
import {
    Box,
    Container,
    Heading,
    Section,
    Text,
    Flex,
    Badge,
    Card,
    Grid,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    const skills = [
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
    ];

    const experiences = [
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
                "Support events like Dreamhack, welcoming 20,000+ attendees yearly",
            ],
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
                "Developed admin platform using Electron for company management",
            ],
        },
    ];

    const education = [
        {
            degree: "Associate Degree in Programming, unfinished",
            school: "Arteveldehogeschool",
            period: "Sep 2020 - Aug 2022",
            location: "Ghent, Flanders, Belgium",
            description:
                "Comprehensive 2-year programming course covering full-stack web development fundamentals",
            skills: [
                "JavaScript, TypeScript, HTML, CSS/SCSS/Sass",
                "React, Vue.js frameworks",
                "Backend: Node.js, GraphQL, REST APIs, Firebase",
                "Database structuring and management",
                "Design tools: Adobe Suite, Blender, Figma",
                "Additional: PHP, Static Site Generators, GitHub Pages, CMS platforms",
            ],
        },
    ];

    return (
        <Container px={"4"} mt={"0"} width={{ lg: "100vw" }} className="about-page">
            <Box className="hero-section">
                <Heading
                    className="cursor main-heading"
                    align={"center"}
                    as="h1"
                    size={{ initial: "8", lg: "9" }}
                    onClick={() => router.push("/")}
                >
                    Nick Roofthooft
                </Heading>
                <Text as="p" align="center" className="subtitle" size="5">
                    Full Stack Engineer
                </Text>
                <Text as="p" align="center" color="gray" className="location">
                    📍 Tallinn, Estonia
                </Text>
            </Box>

            <Section size={"1"} className="summary-section">
                <Box className="summary-card">
                    <Flex gap="4" wrap="wrap" justify="center" mb="4">
                        <Badge size="3" color="blue">
                            5+ Years Experience
                        </Badge>
                        <Badge size="3" color="green">
                            3+ Years Full-Time
                        </Badge>
                        <Badge size="3" color="orange">
                            Gaming Events Specialist
                        </Badge>
                    </Flex>

                    <Text as="p" color="gold" mb={"4"} align={"center"}>
                        I moved to Estonia in 2022, In search for more digital life, future
                        and career.
                    </Text>

                    <Text as="p" size="4" className="bio">
                        TL;DR I am a Full Stack Engineer with extensive experience in
                        building scalable web applications and custom gaming solutions for
                        large-scale events. Specialized in and around the React ecosystem
                        using TypeScript, and Firebase, Deliverying software solutions for
                        events hosting 20,000+ attendees annually for companies such as{" "}
                        <Text color="gold">Logitech</Text>, <Text color="gold">Lego</Text>,{" "}
                        <Text color="gold">TCL</Text>, <Text color="gold">Keychron</Text>{" "}
                        and many more.
                    </Text>
                </Box>
            </Section>
            <Section size={"1"} className="experience-section">
                <Heading as="h2" size="7" mb="4">
                    Professional Experience
                </Heading>

                {experiences.map((exp, index) => (
                    <Card key={index} className="experience-card" mb="4">
                        <Flex direction="column" gap="2">
                            <Heading as="h3" size="5">
                                {exp.role}
                            </Heading>
                            <Text size="3" weight="medium" color="blue">
                                {exp.company}
                            </Text>
                            <Text size="2" color="gray">
                                {exp.period} • {exp.location}
                            </Text>

                            <Box mt="3">
                                <ul className="highlights-list">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx}>
                                            <Text size="2">{highlight}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Flex>
                    </Card>
                ))}
            </Section>

            <Section size={"1"} className="experience-section">
                <Heading as="h2" size="7" mb="4">
                    Education
                </Heading>

                {education.map((exp, index) => (
                    <Card key={index} className="experience-card" mb="4">
                        <Flex direction="column" gap="2">
                            <Heading as="h3" size="5">
                                {exp.degree}
                            </Heading>
                            <Text size="3" weight="medium" color="blue">
                                {exp.school}
                            </Text>
                            <Text size="2" color="gray">
                                {exp.period} • {exp.location}
                            </Text>
                            <Text size="2" color="gold">
                                {exp.description}
                            </Text>

                            <Box mt="3">
                                <ul className="highlights-list">
                                    {exp.skills.map((highlight, idx) => (
                                        <li key={idx}>
                                            <Text size="2">{highlight}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Flex>
                    </Card>
                ))}
            </Section>

            <Section size={"1"} className="tech-stack-section">
                <Heading as="h2" size="7" mb="4">
                    Tech Stack & Skills
                </Heading>
                <Card className="skills-card">
                    <Flex gap="2" wrap="wrap">
                        {skills.map((skill, index) => (
                            <Badge
                                key={index}
                                size="2"
                                variant="soft"
                                className="skill-badge"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </Flex>

                    <Box mt="4">
                        <Text as="p" size="2" color="gray" weight="medium" mb="2">
                            Primary Stack:
                        </Text>
                        <Text as="p" size="2" color="gray">
                            React + TypeScript (strict) + Vite • Firebase • Node.js • Jotai •
                            Electron • SCSS
                        </Text>
                    </Box>
                </Card>
            </Section>

            <Section
                size={{ initial: "2", lg: "1" }}
                className="specializations-section"
            >
                <Heading as="h2" size="7" mb="4">
                    Specializations
                </Heading>

                <Grid columns={"3"} gap="6">
                    <Card className="spec-card" size={"5"}>
                        <Flex align={"center"} direction={"column"}>
                            <Heading as="h3" size="5" mb="2" align={"center"}>
                                🎮 Gaming Events
                            </Heading>
                            <Text align={"center"} size="2" color="gray">
                                Custom CS2 maps, leaderboards, and real-time event management
                                systems for Dreamhack and other major gaming events
                            </Text>
                        </Flex>
                    </Card>

                    <Card className="spec-card" size={"5"}>
                        <Flex align={"center"} direction={"column"}>
                            <Heading as="h3" size="5" mb="2" align={"center"}>
                                ⚡ Full Stack Development
                            </Heading>
                            <Text align={"center"} size="2" color="gray">
                                End-to-end development with TypeScript, React, Node.js, Firebase
                                serverless functions, and Electron desktop apps
                            </Text>
                        </Flex>
                    </Card>

                    <Card className="spec-card" size={"5"}>
                        <Flex align={"center"} direction={"column"}>
                            <Heading as="h3" size="5" mb="2" align={"center"}>
                                🔧 Event Support
                            </Heading>
                            <Text align={"center"} size="2" color="gray">
                                On-site technical support and emergency handling during live
                                gaming events with thousands of participants
                            </Text>
                        </Flex>
                    </Card>
                </Grid>
            </Section>
        </Container>
    );
}
