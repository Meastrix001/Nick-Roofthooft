"use client";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { ContactInfoList } from "./ContactInfoList/ContactInfoList";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

export default function ContactPage({ lang }: { lang: PageLang }) {
  return (
    <Container mt={"0"} width={{ lg: "100vw" }} height={{ lg: "100vh" }} className="contact">
      <Flex
        left={"0"}
        align={"center"}
        justify={"center"}
        position={"absolute"}
        width={"100%"}
      >
        <Heading align={"center"} as="h1" size={{ initial: "8", lg: "9" }}>
          <Link href={`/${lang}`} className="cursor" style={{ color: "inherit", textDecoration: "none" }}>
            {LanguageKeys[lang].constants.name}
          </Link>
        </Heading>
      </Flex>

      <Grid
        px={{ initial: "4", lg: "0" }}
        height={"100%"}
        columns={{ initial: "1", lg: "2" }}
        align={"center"}
        justify={"center"}
        gap={{ initial: "7", lg: "9" }}
        mt={{ initial: "7rem", lg: "0" }}
      >
        <InViewWrapper direction="left">
          <ContactInfoList lang={lang} />
        </InViewWrapper>

        <Box className="contact__dice">
          <InViewWrapper direction="right">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={"/static/contact_me.jpg"}
                alt="Nick Roofthooft"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </AspectRatio>
          </InViewWrapper>
        </Box>
      </Grid>
    </Container>
  );
}
