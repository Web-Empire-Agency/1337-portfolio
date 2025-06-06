"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Language, getContent } from "./content"

interface LanguageContextType {
  currentLang: Language
  setCurrentLang: (lang: Language) => void
  t: ReturnType<typeof getContent>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const t = getContent(currentLang)

  return <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
