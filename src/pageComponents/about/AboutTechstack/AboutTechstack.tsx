import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Badge, Box, Card, Flex, Heading, Section, Text } from "@radix-ui/themes"

export const AboutTechstack = ({ lang }: { lang: PageLang }) => {

    return <Section size={"1"} className="tech-stack-section">
        <Heading as="h2" size="7" mb="4">
            {LanguageKeys[lang].about.sections.techStack}
        </Heading>
        <Card className="skills-card">
            <Flex gap="2" wrap="wrap">
                {LanguageKeys[lang].about.skills.map((skill, index) => (
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
                    {LanguageKeys[lang].about.primaryStack.label}
                </Text>
                <Text as="p" size="2" color="gray">
                    {LanguageKeys[lang].about.primaryStack.stack}
                </Text>
            </Box>
        </Card>
    </Section>
}