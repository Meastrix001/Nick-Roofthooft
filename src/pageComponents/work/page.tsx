"use client";
import {
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    Section,
    Text,
} from "@radix-ui/themes";
import { WorkList } from "./WorkList/WorkList";
import { useRouter } from "next/navigation";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

export default function WorkPage({ lang }: { lang: PageLang }) {
    const router = useRouter();

    return (
        <Container px={"4"} mt={"0"} width={{ lg: "100vw" }} className="contact">
            <Box>
                <Heading
                    className="cursor"
                    align={"center"}
                    as="h1"
                    size={{ initial: "8", lg: "9" }}
                    onClick={() => router.push(`/${lang}`)}
                >
                    {LanguageKeys[lang].work.name}
                </Heading>
            </Box>

            <Box>
                <Flex gap="4" wrap="wrap" justify="center" mb="4">
                    <Badge size="3" color="blue">
                        {LanguageKeys[lang].about.badges.experience}
                    </Badge>
                    <Badge size="3" color="green">
                        {LanguageKeys[lang].about.badges.fullTime}
                    </Badge>
                </Flex>

                <Text size={"4"} as="p" color="gold" align={"center"}>
                    {LanguageKeys[lang].work.offer}
                </Text>

                <Section>
                    <Heading as="h2" size={"8"}>
                        {LanguageKeys[lang].work.discover}
                    </Heading>
                    <Text mb={"4"} as="p" color="gray">
                        {LanguageKeys[lang].work.disclaimer}{" "}
                    </Text>

                    <Text size={"5"} as="p" color="green" mb={"2"}>
                        {LanguageKeys[lang].work.list}
                    </Text>
                    <WorkList lang={lang} />
                </Section>
            </Box>
        </Container>
    );
}
