import Home from "@/pageComponents/landing/page";
import { buildMetadata } from "@/utils/metadata/metadata";
import { PageLang } from "@/models/pageLang.model";

export default async function LandingPage({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return <Home lang={lang} />;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return buildMetadata(lang, "landing");
}
