"use client";
import { PageLang } from "@/models/pageLang.model";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Redirect({ lang }: { lang: PageLang }) {
  const router = useRouter();
  useEffect(() => {
    router.push(`/${lang}`)
  }, [])

  return <></>
}
