import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Card, Flex, Heading, Section, Text } from "@radix-ui/themes"

export const AboutEducation = ({ lang }: { lang: PageLang }) => {

    return <Section size={"1"} className="experience-section">
        <Heading as="h2" size="7" mb="4">
            {LanguageKeys[lang].about.sections.education}
        </Heading>

        {LanguageKeys[lang].about.education.map((exp, index) => (
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
                    <Text size="2" color="blue">
                        {exp.note}
                    </Text>
                </Flex>
            </Card>
        ))}
    </Section>
}