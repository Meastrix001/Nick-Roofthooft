import AboutPage from "@/pageComponents/about/page";
import { buildMetadata } from "@/utils/metadata/metadata";
import { PageLang } from "@/models/pageLang.model";

export default async function About({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return <AboutPage lang={lang} />;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return buildMetadata(lang, "about");
}
