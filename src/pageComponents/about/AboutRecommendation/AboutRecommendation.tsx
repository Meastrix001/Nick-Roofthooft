"use client"
import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Button, Card, Flex, Heading, Section, Text } from "@radix-ui/themes"

const RECOMMENDATION_PDF = "/static/Nick_Roofthooft_Letter_of_Recommendation.pdf";

export const AboutRecommendation = ({ lang }: { lang: PageLang }) => {
    const t = LanguageKeys[lang].about.recommendation;

    return <Section size={"1"} className="experience-section">
        <Flex
            align={{ initial: "start", sm: "center" }}
            justify={"between"}
            direction={{ initial: "column", sm: "row" }}
            gap={"3"}
            mb={"4"}
        >
            <Box>
                <Heading as="h2" size="7">
                    {t.heading}
                </Heading>
                <Text as="p" size="2" color="gray" mt="1">
                    {t.subtitle}
                </Text>
            </Box>

            <Button asChild size={{ initial: "2", lg: "3" }} color="gold" className="cursor">
                <a href={RECOMMENDATION_PDF} target="_blank" rel="noopener noreferrer">
                    {t.openInNewTab}
                </a>
            </Button>
        </Flex>

        <Card className="gold-border">
            <Box
                style={{
                    width: "100%",
                    height: "min(80vh, 1000px)",
                    minHeight: "480px",
                }}
            >
                <object
                    data={`${RECOMMENDATION_PDF}#view=FitH`}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    style={{ display: "block", borderRadius: "var(--radius-2)" }}
                >
                    <Flex align={"center"} justify={"center"} height={"100%"} p={"4"}>
                        <Text size={"3"} align={"center"}>
                            <a
                                href={RECOMMENDATION_PDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor text-gold"
                            >
                                {t.fallback}
                            </a>
                        </Text>
                    </Flex>
                </object>
            </Box>
        </Card>
    </Section>
}
