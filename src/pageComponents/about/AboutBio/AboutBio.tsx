import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Badge, Box, Flex, Section, Text } from "@radix-ui/themes"

export const AboutBio = ({ lang }: { lang: PageLang }) => {

    return <Section size={"1"} className="summary-section">
        <Box className="summary-card">
            <Flex gap="4" wrap="wrap" justify="center" mb="4">
                <Badge size="3" color="blue">
                    {LanguageKeys[lang].about.badges.experience}
                </Badge>
                <Badge size="3" color="green">
                    {LanguageKeys[lang].about.badges.fullTime}
                </Badge>
                <Badge size="3" color="orange">
                    {LanguageKeys[lang].about.badges.specialist}
                </Badge>
            </Flex>

            <Text as="p" color="gold" mb={"4"} align={"center"}>
                {LanguageKeys[lang].about.summary.intro}
            </Text>

            <Text as="p" size="4" className="bio">
                {LanguageKeys[lang].about.summary.bio.text}{" "}
                <Text color="gold">{LanguageKeys[lang].about.summary.bio.companies[0]}</Text>,{" "}
                <Text color="gold">{LanguageKeys[lang].about.summary.bio.companies[1]}</Text>,{" "}
                <Text color="gold">{LanguageKeys[lang].about.summary.bio.companies[2]}</Text>,{" "}
                <Text color="gold">{LanguageKeys[lang].about.summary.bio.companies[3]}</Text>{" "}
                {LanguageKeys[lang].about.summary.bio.andMore}
            </Text>
        </Box>
    </Section>
}