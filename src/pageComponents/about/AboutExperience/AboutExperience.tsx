import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Card, Flex, Heading, Section, Text } from "@radix-ui/themes"

export const AboutExperience = ({ lang }: { lang: PageLang }) => {

    return <Section size={"1"} className="experience-section">
        <Heading as="h2" size="7" mb="4">
            {LanguageKeys[lang].about.sections.experience}
        </Heading>

        {LanguageKeys[lang].about.experiences.map((exp, index) => (
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
}