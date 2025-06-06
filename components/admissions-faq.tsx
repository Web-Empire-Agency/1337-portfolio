"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function AdmissionsFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0)
  const { t } = useLanguage()

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="py-20 bg-primary-dark/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text mb-4">{t.admissions.faq.title}</h2>
          <p className="text-text/70 text-lg">{t.admissions.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.admissions.faq.items.map((item, index) => (
            <div
              key={index}
              className="bg-primary-light/50 backdrop-blur-sm rounded-xl border border-bg-primary-20 overflow-hidden transition-all duration-300"
            >
              <Button
                variant="ghost"
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left font-mono font-semibold text-text hover:text-primary hover:bg-transparent"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openItem === index ? "transform rotate-180" : ""}`}
                />
              </Button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openItem === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-text/70">{item.answer}</p>
              </div>

              {/* Terminal-style decorative elements */}
              <div className="absolute top-4 left-4 opacity-20">
                <div className="font-mono text-xs text-primary">{"> faq.item"}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-text/70 mb-4">{t.admissions.faq.contactCta}</p>
          <Button className="bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90 font-mono font-semibold">
            {t.admissions.faq.contactButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
