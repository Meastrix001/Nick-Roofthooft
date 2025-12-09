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
                    5+ years of coding experience
                </Text>{" "}

                <Text as="p" color="gray">
                    Full-time employed for the last 3+ years.
                </Text>

                <Heading as="h2" size={"8"}>
                    Discover my work
                </Heading>

                <Section>
                    <Text as="p" color="gray">
                        I currently work in a start-up company, this means all work I do falls under a NDA, and such I cannot show any work I have done at my work.
                    </Text>
                    <Text as="p" color="gray" mb={"4"}>
                        Below is a List of my freelance work.
                    </Text>
                    <WorkList />
                </Section>
            </Box>
        </Container>
    );
}
