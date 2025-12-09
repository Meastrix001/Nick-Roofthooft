"use client";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import { LandingHero } from "./LandingHero/LandingHero";
import { LandingTech } from "./LandingTech/LandingTech";

export default function HomePage() {
  return (
    <Box className="landing">
      <Container px="6" height="100vh" width="100vw">
        {/* Outer Flex centers content both vertically and horizontally */}
        <Flex height="100%" align="center" justify="center" direction="column" gap="6">
          {/* Grid only takes the height it needs */}
          <Grid columns={{ initial: "1", lg: "2" }} gap={{ initial: "0", lg: "6" }} justify="between">
            <LandingHero />

            <Box display={{ initial: "none", lg: "block" }} className="landing__image-me" maxWidth="45vw" maxHeight="60vh">
              <img
                src="/static/image.webp"
                alt="Me"
                style={{
                  width: "100%",
                  height: "100%",
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
