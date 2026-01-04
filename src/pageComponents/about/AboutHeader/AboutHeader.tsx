"use client"
import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Avatar, Box, Flex, Heading, Text } from "@radix-ui/themes"
import { useRouter } from "next/navigation";

export const AboutHeader = ({ lang }: { lang: PageLang }) => {
    const router = useRouter();

    return <Box className="hero-section">
        <Heading
            className="cursor main-heading"
            align={"center"}
            as="h1"
            size={{ initial: "8", lg: "9" }}
            onClick={() => router.push(`/${lang}`)}
        >
            {LanguageKeys[lang].about.hero.name}
        </Heading>

        <Flex align={"center"} justify={"center"} mb={"4"}>
            <Avatar radius="full" src="/static/picture_me_2.jpg" fallback="Picture me" size={"9"} />
        </Flex>

        <Text as="p" align="center" className="subtitle" size="5">
            {LanguageKeys[lang].about.hero.title}
        </Text>
        <Text as="p" align="center" color="gray" className="location">
            📍 {LanguageKeys[lang].about.hero.location}
        </Text>
    </Box>
}