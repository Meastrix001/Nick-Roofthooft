import {
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    Section,
    Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { WorkList } from "./WorkList/WorkList";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

export default function WorkPage({ lang }: { lang: PageLang }) {
    const t = LanguageKeys[lang];

    return (
        <Container px={"4"} mt={"0"} width={{ lg: "100vw" }} className="contact">
            <Box>
                <Heading align={"center"} as="h1" size={{ initial: "8", lg: "9" }}>
                    <Link href={`/${lang}`} className="cursor" style={{ color: "inherit", textDecoration: "none" }}>
                        {t.work.name}
                    </Link>
                </Heading>
            </Box>

            <Box>
                <Flex gap="4" wrap="wrap" justify="center" mb="4">
                    <Badge size="3" color="blue">
                        {t.about.badges.experience}
                    </Badge>
                    <Badge size="3" color="green">
                        {t.about.badges.fullTime}
                    </Badge>
                </Flex>

                {t.work.offer && (
                    <Text size={"4"} as="p" color="gold" align={"center"}>
                        {t.work.offer}
                    </Text>
                )}

                <Section>
                    <Heading as="h2" size={"8"}>
                        {t.work.discover}
                    </Heading>
                    <Text mb={"4"} as="p" color="gray">
                        {t.work.disclaimer}
                    </Text>

                    {t.work.list && (
                        <Text size={"5"} as="p" color="green" mb={"2"}>
                            {t.work.list}
                        </Text>
                    )}
                    <WorkList lang={lang} />
                </Section>
            </Box>
        </Container>
    );
}
