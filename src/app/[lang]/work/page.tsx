import WorkPage from "@/pageComponents/work/page";
import { buildMetadata } from "@/utils/metadata/metadata";
import { PageLang } from "@/models/pageLang.model";

export default async function Work({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return <WorkPage lang={lang} />;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return buildMetadata(lang, "work");
}
