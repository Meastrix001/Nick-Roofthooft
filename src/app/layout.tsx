import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Box, Flex, Theme } from "@radix-ui/themes";
import { brand } from "@/theme/brand.config";
import { BuildSiteMap } from "@/utils/sitemap/sitemap.builder";
import { SiteHead } from "@/providers/headLinks";
import { theme } from "@/constants/theme"
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";
import { BackBtn } from "@/components/backBtn/backBtn";

BuildSiteMap()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang={brand.defaultLanguage}>
      <SiteHead />
      <body>
        <Theme {...theme}>
          <Box>
            <Flex direction="column" minHeight="100vh">

              <Flex align={"center"} justify={"between"}>
                <Flex align={"end"} justify={"end"} mb={{ initial: "4", lg: "0" }} position={{ initial: "relative", lg: "absolute" }} top={"4"} left={"4"} style={{ zIndex: 1000 }}>
                  <BackBtn />
                </Flex>

                <Flex align={"end"} justify={"end"} mb={{ initial: "4", lg: "0" }} position={{ initial: "relative", lg: "absolute" }} top={"4"} right={"4"} style={{ zIndex: 1000 }}>
                  <LanguageSwitcher />
                </Flex>

              </Flex>

              <Box flexGrow="1">{children}
                <SpeedInsights />
                <Analytics />
              </Box>


            </Flex>
          </Box>
        </Theme>
      </body>
    </html >
  );
}


