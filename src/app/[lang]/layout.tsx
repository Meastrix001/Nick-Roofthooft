import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand } from "@/theme/brand.config";
import { theme } from "@/constants/theme";
import { PageLang } from "@/models/pageLang.model";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";
import { BackBtn } from "@/components/backBtn/backBtn";

const LANGS: PageLang[] = ["en", "nl"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Only "en" / "nl" are valid; anything else 404s instead of rendering.
export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(brand.company.site),
  title: {
    default: "Nick Roofthooft — Freelance Full Stack Developer",
    template: "%s | Nick Roofthooft",
  },
  description:
    "Freelance Full Stack Developer building React, TypeScript, Node.js and Firebase apps, plus real-time tech for live gaming events like DreamHack and Spillexpo.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LANGS.includes(lang as PageLang)) notFound();

  return (
    <html lang={lang}>
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

              <Box flexGrow="1">
                {children}
                <SpeedInsights />
                <Analytics />
              </Box>
            </Flex>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
