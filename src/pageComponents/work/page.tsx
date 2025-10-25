"use client";
import { Box, Container, Heading, Section, Text } from "@radix-ui/themes";
import { WorkList } from "./WorkList/WorkList";
import { useRouter } from "next/navigation";

export default function WorkPage() {
    const router = useRouter();
    return (
        <Container px={"4"} mt={"0"} width={{ lg: "100vw" }} className="contact">
            <Box>
                <Heading
                    className="cursor"
                    align={"center"}
                    as="h1"
                    size={{ initial: "8", lg: "9" }}
                    onClick={() => router.push("/")}
                >
                    Nick Roofthooft
                </Heading>
            </Box>

            <Box>
                <Text as="p" color="gray">
                    7 years of development experience
                </Text>{" "}
                <Text as="p" color="gray">
                    Full-time employed for the last 3 years.
                </Text>
                <Heading as="h2" size={"8"}>
                    Discover my work
                </Heading>
                <Text as="p" color="gray">
                    List of all my freelance work.
                </Text>
                <Section>
                    <WorkList />
                </Section>
            </Box>
        </Container>
    );
}
