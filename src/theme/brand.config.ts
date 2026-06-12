// Single source of truth for the production URL.
// Override per-environment with NEXT_PUBLIC_SITE_URL (e.g. in .env / Vercel).
const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://nick-roofthooft.vercel.app").replace(/\/+$/, "") + "/";

export const brand = {
  defaultLanguage: "en",
  company: {
    site: SITE_URL,
    name: "Nick Roofthooft",
    logo: {
      src: "/static/picture_me_2.jpg",
      alt: "Nick Roofthooft",
    },
  },
};
