"use client";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
} from "@radix-ui/themes";
import { ContactInfoList } from "./ContactInfoList/ContactInfoList";
import { useRouter } from "next/navigation";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

export default function ContactPage({ lang }: { lang: PageLang }) {
  const Router = useRouter();

  return (
    <Container mt={"0"} width={{ lg: "100vw" }} height={{ lg: "100vh" }} className="contact">
      <Flex
        left={"0"}
        align={"center"}
        justify={"center"}
        position={"absolute"}
        width={"100%"}
        className="cursor"
      >
        <Heading
          onClick={() => Router.push(`/${lang}`)}
          align={"center"}
          as="h1"
          size={{ initial: "8", lg: "9" }}
        >
          {LanguageKeys[lang].constants.name}
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
              <img
                src={"/static/contact_me.jpg"}
                width={"100%"}
                height={"100%"}
                style={{ filter: "grayscale(100%)" }}
              />
            </AspectRatio>
          </InViewWrapper>
        </Box>
      </Grid>
    </Container>
  );
}
