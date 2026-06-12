"use client"
import { contactData } from "@/constants/contact"
import { InViewWrapper } from "@/hooks/InViewWrapper"
import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"

export const ContactInfoList = ({ lang }: { lang: PageLang }) => {
    const emailHref = contactData.find((c) => c.value.startsWith("mailto:"))?.value;
    return <Flex direction={"column"} gap={"5"}>
        <Heading as="h2" size={{ initial: "8", lg: "9" }}>{LanguageKeys[lang].contact.header}</Heading>
        <Card className="gold-border">
            <Flex direction={"column"}>
                {contactData.map((contact, i) => {
                    const isExternal = contact.value.startsWith("http");
                    return <InViewWrapper key={i} delay={(0.25 + i) / 7}>
                        <a
                            href={contact.value || undefined}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className={contact.value ? "cursor" : undefined}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <Flex align={"center"} gap={"3"}>
                                <Box>{contact.icon}</Box>
                                <Text size={"5"}>{contact.key}</Text>
                            </Flex>
                        </a>
                    </InViewWrapper>
                })}
            </Flex>
        </Card >

        {emailHref && (
            <InViewWrapper delay={0.5}>
                <Button asChild size={{ initial: "3", lg: "4" }} color="gold" className="cursor" style={{ width: "100%" }}>
                    <a href={emailHref}>{LanguageKeys[lang].contact.cta}</a>
                </Button>
            </InViewWrapper>
        )}
    </Flex >
}