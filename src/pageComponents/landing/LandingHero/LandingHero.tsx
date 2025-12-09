"use client";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import {
    Box,
    Button,
    Em,
    Flex,
    Heading,
    Section,
    Text,
} from "@radix-ui/themes";
import Link from "next/link";

export const LandingHero = () => {
    return (
        <Flex align={"center"} className="landing__hero">
            <Box className="hero">
                <Box className="hero__titles" width={"fit-content"}>
                    <InViewWrapper>
                        <Heading as="h1" mb={"0"} size={{ initial: "8", lg: "9" }}>
                            Nick Roofthooft
                        </Heading>
                    </InViewWrapper>

                    <InViewWrapper direction="top" delay={0.25}>
                        <Text as="p" size={"5"} align={"right"} color="gray">
                            Freelance
                        </Text>
                    </InViewWrapper>

                    <InViewWrapper direction="left" delay={0.5}>
                        <Em>
                            <Text as="p" color="gray" size={{ initial: "7", lg: "8" }}>
                                Full Stack Developer
                            </Text>
                        </Em>
                    </InViewWrapper>
                </Box>

                <Section>
                    <Flex
                        gap={"6"}
                        direction={"row"}
                        width={"100%"}
                        align={"center"}
                        mb={"4"}
                    >
                        <Box width={"100%"}>
                            <InViewWrapper direction="left" delay={0.75}>
                                <Button style={{ width: "100%" }} variant="outline" size={{ initial: "2", lg: "4" }}>
                                    <Link href={"/en/work"}>
                                        <Text>See my work</Text>
                                    </Link>
                                </Button>
                            </InViewWrapper>

                        </Box>

                        <Box width={"100%"}>
                            <InViewWrapper direction="right" delay={0.75}>
                                <Button style={{ width: "100%" }} variant="soft" size={{ initial: "2", lg: "4" }}>
                                    <Link href={"/en/contact"}>
                                        <Text>Contact me</Text>
                                    </Link>
                                </Button>
                            </InViewWrapper>
                        </Box>
                    </Flex>

                    <Box width={"100%"}>
                        <InViewWrapper direction="bottom" delay={0.75}>
                            <Button style={{ width: "100%" }} variant="solid" size={{ initial: "2", lg: "4" }}>
                                <Link href={"/en/about"}>
                                    <Text>More about me</Text>
                                </Link>
                            </Button>
                        </InViewWrapper>

                    </Box>


                </Section>
            </Box>
        </Flex>
    );
};
