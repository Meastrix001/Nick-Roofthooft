"use client";

import { PageLang } from "@/models/pageLang.model";
import { useLanguageStore } from "@/store/appStore";
import { LanguageOptions } from "@/utils/i18n/LanguageKeys";
import { Button, Flex, Spinner } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const [hydrated, setHydrated] = useState(false);

  const handleLanguageChange = async (lang: PageLang) => {
    if (typeof window === "undefined") return;

    const currentPathname = window.location.pathname;
    setLanguage(lang);

    // Handle root paths
    if (currentPathname === "/" || currentPathname === "/en" || currentPathname === "/nl") {
      if (lang === "en") {
        router.push("/");
      } else {
        router.push(`/${lang}`);
      }
      return;
    }

    // Remove language prefix - make trailing slash optional
    const cleanPath = currentPathname.replace(/^\/(nl|en)\/?/, "");

    // Build new path
    if (lang === "en") {
      router.push(`/${cleanPath}`);
    } else {
      router.push(`/${lang}/${cleanPath}`);
    }
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <Spinner />;

  return (
    <Flex justify={{ initial: "center", lg: "end" }} gap="4">
      {Object.entries(LanguageOptions).map(([key, value]) => {
        return (
          <Button
            key={key}
            className="cursor"
            size={{ initial: "1", lg: "2" }}
            variant={language === value ? "solid" : "outline"}
            color="gold"
            onClick={() => handleLanguageChange(value as PageLang)}
          >
            {key}
          </Button>
        );
      })}
    </Flex>
  );
}