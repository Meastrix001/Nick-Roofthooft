// stores/useLanguageStore.ts
"use client"

import { PageLang } from "@/models/pageLang.model"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"



type LanguageStore = {
    language: PageLang
    setLanguage: (val: PageLang) => void
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set) => ({
            language: "en",
            setLanguage: (language) => set({ language }),
        }),
        {
            name: "language-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
)