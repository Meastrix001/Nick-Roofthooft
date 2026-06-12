import { Metadata } from "next";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { PageLang } from "@/models/pageLang.model";

export type SeoKey = "landing" | "work" | "about" | "contact";

// Maps an SEO key to its URL segment ("" = root landing page).
const PATH: Record<SeoKey, string> = {
  landing: "",
  work: "work",
  about: "about",
  contact: "contact",
};

const urlFor = (lang: PageLang, seoKey: SeoKey) => {
  const segment = PATH[seoKey];
  return `${brand.company.site}${lang}${segment ? `/${segment}` : "/"}`;
};

/**
 * Builds consistent per-page metadata (title, description, canonical,
 * hreflang alternates and Open Graph) from the i18n SEO strings.
 */
export const buildMetadata = (lang: PageLang, seoKey: SeoKey): Metadata => {
  const seo = LanguageKeys[lang].SEO[seoKey];
  const canonical = urlFor(lang, seoKey);

  return {
    title: seo.title,
    description: seo.desc,
    alternates: {
      canonical,
      languages: {
        en: urlFor("en", seoKey),
        nl: urlFor("nl", seoKey),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.desc,
      url: canonical,
      siteName: brand.company.name,
      locale: lang === "nl" ? "nl_BE" : "en_US",
      type: "website",
      images: [
        {
          url: brand.company.logo.src,
          alt: brand.company.name,
        },
      ],
    },
  };
};
