import AboutPage from "@/pageComponents/about/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "nl"
export default function aboutPageEn() {
    return <AboutPage lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/about`,
        languages: {
            en: `${brand.company.site}en/about`,
            nl: `${brand.company.site}nl/about`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.about.title,
    description: LanguageKeys[pageLanguage].SEO.about.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.about.title,
        description: LanguageKeys[pageLanguage].SEO.about.desc,
        url: `${brand.company.site}${pageLanguage}/about`,
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


