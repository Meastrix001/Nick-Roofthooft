"use client";
import { Box, Container, Heading, Section, Text } from "@radix-ui/themes";
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
                <Text as="p" color="gray">
                    {LanguageKeys[lang].work.exp}
                </Text>{" "}

                <Text as="p" color="gray">
                    {LanguageKeys[lang].work.workExp}
                </Text>

                <Heading as="h2" size={"8"}>
                    {LanguageKeys[lang].work.discover}
                </Heading>

                <Text as="p" color="gold">
                    {LanguageKeys[lang].work.offer}
                </Text>

                <Section>
                    <Text as="p" color="gray">
                        {LanguageKeys[lang].work.disclaimer}                    </Text>
                    <Text as="p" color="gray" mb={"4"}>
                        {LanguageKeys[lang].work.list}
                    </Text>
                    <WorkList lang={lang} />
                </Section>
            </Box>
        </Container>
    );
}
