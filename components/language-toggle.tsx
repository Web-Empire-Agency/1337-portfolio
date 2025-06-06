"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/content"

export default function LanguageToggle() {
  const { currentLang, setCurrentLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const languages = [
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
    { code: "ar" as Language, name: "العربية", flag: "🇲🇦" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main toggle button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3 py-2 rounded-full bg-[#0a192f]/50 backdrop-blur-sm border border-[#00ff8c]/20 hover:border-[#00ff8c]/40 transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#00ff8c] group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden md:inline-block font-medium text-[#ccd6f6] group-hover:text-[#00ff8c] transition-colors">
            {currentLanguage?.name}
          </span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-[#00ff8c] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </Button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-xl overflow-hidden bg-[#0a192f]/95 backdrop-blur-md border border-[#00ff8c]/20 shadow-lg shadow-[#00ff8c]/5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setCurrentLang(language.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentLang === language.code
                    ? "bg-[#00ff8c]/20 text-[#00ff8c] font-medium"
                    : "text-[#ccd6f6] hover:bg-[#00ff8c]/10 hover:text-[#00ff8c]"
                }`}
                dir={language.code === "ar" ? "rtl" : "ltr"}
              >
                <span className="text-lg transform transition-transform hover:scale-110">
                  {language.flag}
                </span>
                <span className="font-mono text-sm tracking-wide">
                  {language.name}
                </span>
                {currentLang === language.code && (
                  <span className="ml-auto text-[#00ff8c]">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
