import { Metadata } from "next";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { brand } from "@/theme/brand.config";
import Home from "@/pageComponents/landing/page";
import { PageLang } from "@/models/pageLang.model";

const pageLanguage = "nl" as PageLang


export default function LandingPageEn() {
    return <Home lang={pageLanguage} />
}


export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}en/`,
        languages: {
            en: `${brand.company.site}en/`,
            nl: `${brand.company.site}nl/`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.landing.title,
    description: LanguageKeys[pageLanguage].SEO.landing.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.landing.title,
        description: LanguageKeys[pageLanguage].SEO.landing.desc,
        url: `${brand.company.site}en/`,
        siteName: brand.company.name,
        images: [
            {
                url: brand.company.logo.src,
                width: 1200,
                height: 630,
                alt: `${brand.company.name} hero image`,
            },
        ],
        type: "website",
    },
};

