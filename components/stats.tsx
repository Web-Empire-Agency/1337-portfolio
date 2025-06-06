"use client"

import { useEffect, useState } from "react"
import { Monitor, Clock, GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Monitor,
      number: t.stats.items.imacs.number,
      label: t.stats.items.imacs.label,
      description: t.stats.items.imacs.description,
    },
    {
      icon: Clock,
      number: t.stats.items.access.number,
      label: t.stats.items.access.label,
      description: t.stats.items.access.description,
    },
    {
      icon: GraduationCap,
      number: t.stats.items.skills.number,
      label: t.stats.items.skills.label,
      description: t.stats.items.skills.description,
    },
    {
      icon: MapPin,
      number: t.stats.items.locations.number,
      label: t.stats.items.locations.label,
      description: t.stats.items.locations.description,
    },
  ]

  return (
    <section id="stats-section" className="py-20 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text mb-4">{t.stats.title}</h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto">{t.stats.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-[#0a192f] to-[#020c1b] rounded-2xl border border-bg-primary-20 hover:border-[#00ff8c]/60 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#00ff8c]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30 group-hover:border-[#00ff8c] transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-mono font-bold text-primary group-hover:animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-text">{stat.label}</div>
                  <p className="text-text/70 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>

              {/* Terminal-style border animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ff8c] rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ff8c] rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ff8c] rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ff8c] rounded-br-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
