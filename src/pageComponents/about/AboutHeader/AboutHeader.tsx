import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Avatar, Box, Flex, Heading, Text } from "@radix-ui/themes"
import Link from "next/link";

export const AboutHeader = ({ lang }: { lang: PageLang }) => {
    return <Box className="hero-section">
        <Heading
            className="main-heading"
            align={"center"}
            as="h1"
            size={{ initial: "8", lg: "9" }}
        >
            <Link href={`/${lang}`} className="cursor" style={{ color: "inherit", textDecoration: "none" }}>
                {LanguageKeys[lang].about.hero.name}
            </Link>
        </Heading>

        <Flex align={"center"} justify={"center"} mb={"4"}>
            <Avatar radius="full" src="/static/picture_me_2.jpg" fallback="NR" size={"9"} />
        </Flex>

        <Text as="p" align="center" className="subtitle" size="5">
            {LanguageKeys[lang].about.hero.title}
        </Text>
        <Text as="p" align="center" color="gray" className="location">
            📍 {LanguageKeys[lang].about.hero.location}
        </Text>
    </Box>
}
