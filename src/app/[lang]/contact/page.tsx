import ContactPage from "@/pageComponents/contact/page";
import { buildMetadata } from "@/utils/metadata/metadata";
import { PageLang } from "@/models/pageLang.model";

export default async function Contact({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return <ContactPage lang={lang} />;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: PageLang }> }) {
  const { lang } = await params;
  return buildMetadata(lang, "contact");
}
