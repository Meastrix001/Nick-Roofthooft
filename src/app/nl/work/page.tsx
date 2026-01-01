import { Metadata } from "next";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { brand } from "@/theme/brand.config";
import WorkPage from "@/pageComponents/work/page";

const pageLanguage = "nl"


export default function WorkPageEn() {
    return <WorkPage lang={pageLanguage} />
}


export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}en/work`,
        languages: {
            en: `${brand.company.site}en/work`,
            nl: `${brand.company.site}nl/work`,
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

