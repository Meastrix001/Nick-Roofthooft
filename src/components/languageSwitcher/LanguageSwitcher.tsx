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

  const handleLanguageChange = (lang: PageLang) => {
    if (typeof window === "undefined") return;

    setLanguage(lang);

    // Strip any existing language prefix, then re-prefix.
    // Both languages live under a prefix (/en, /nl) — there is no unprefixed root.
    const cleanPath = window.location.pathname.replace(/^\/(nl|en)\/?/, "");
    router.push(cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`);
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