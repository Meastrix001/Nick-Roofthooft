import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Card, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes"

export const AboutSpecialized = ({ lang }: { lang: PageLang }) => {

    return <Section
        size={{ initial: "2", lg: "1" }}
        className="specializations-section"
    >
        <Heading as="h2" size="7" mb="4">
            {LanguageKeys[lang].about.sections.specializations}
        </Heading>

        <Grid columns={"3"} gap="6">
            {LanguageKeys[lang].about.specializations.map((spec, index) => (
                <Card key={index} className="spec-card" size={"5"}>
                    <Flex align={"center"} direction={"column"}>
                        <Heading as="h3" size="5" mb="2" align={"center"}>
                            {spec.icon} {spec.title}
                        </Heading>
                        <Text align={"center"} size="2" color="gray">
                            {spec.description}
                        </Text>
                    </Flex>
                </Card>
            ))}
        </Grid>
    </Section>
}