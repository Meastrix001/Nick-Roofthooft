"use client";

import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useRouter, usePathname } from "next/navigation";

export const BackBtn = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Determine if we are on a subpage
    const isOnSubPage =
        pathname.includes("/work") ||
        pathname.includes("/contact") ||
        pathname.includes("/about");

    if (!isOnSubPage) return null;

    // Extract the language from the URL: default to "en"
    const langMatch = pathname.match(/^\/(en|nl)/);
    const lang = langMatch ? langMatch[1] : "en";

    return (
        <Button
            className="cursor"
            onClick={() => router.push(`/${lang}`)} // navigate to /en or /nl
            size={{ initial: "1", lg: "3" }}
            color="gold"
            variant="solid"
        >
            <ChevronLeftIcon width={20} height={20} />
            {LanguageKeys[lang as PageLang].constants.backBtn}
        </Button>
    );
};
