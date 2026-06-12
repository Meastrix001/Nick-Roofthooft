import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { LandingHero } from "./LandingHero/LandingHero";
import { LandingTech } from "./LandingTech/LandingTech";
import { PageLang } from "@/models/pageLang.model";

export default function HomePage({ lang }: { lang: PageLang }) {
  return (
    <Box className="landing">
      <Container px="6" height="100vh" width="100vw">
        <Flex height="100%" align="center" justify="center" direction="column" gap="6">
          <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: "0", lg: "6" }} justify="between">
            <LandingHero lang={lang} />

            <Box display={{ initial: "none", lg: "block" }} className="landing__image-me" maxWidth="45vw" maxHeight="60vh">
              <Image
                src="/static/image.webp"
                alt="Portrait of Nick Roofthooft"
                width={800}
                height={1000}
                priority
                sizes="45vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "60vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          <Box>
            <LandingTech />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
