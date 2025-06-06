"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal, Users, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([])
  const { t } = useLanguage()

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)
  }, [])

  const codeSnippets = [
    "const future = await learn();",
    "function innovate() { return creativity; }",
    "while(learning) { grow(); }",
    "class Developer extends Student",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#00ff8c] rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}

        {/* Floating Code Snippets */}
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="absolute text-primary/20 font-mono text-sm animate-float"
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + index * 15}%`,
              animationDelay: `${index * 2}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      <div className="relative  z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-bg-primary-10 border border-bg-primary-30 rounded-full text-primary text-sm font-mono">
              <Terminal className="w-4 h-4 mr-2" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-text leading-tight">
              {t.hero.title}
              <span className="block text-primary relative">
                {t.hero.titleHighlight}
                <div className="absolute inset-0 bg-[#00ff8c] opacity-20 blur-2xl" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text/80 max-w-3xl mx-auto leading-relaxed">{t.hero.subtitle}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary">3</div>
              <div className="text-text/80">{t.hero.stats.campuses}</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary">24/7</div>
              <div className="text-text/80">{t.hero.stats.access}</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary">100%</div>
              <div className="text-text/80">{t.hero.stats.free}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90 font-mono font-semibold px-8 py-3 text-lg group">
              {t.hero.ctaPrimary}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-[#00ff8c] text-primary hover:bg-bg-primary-10 font-mono font-semibold px-8 py-3 text-lg"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-3 p-6 bg-primary-light/50 rounded-lg border border-bg-primary-20 hover:border-bg-primary-40 transition-colors">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <h3 className="text-lg font-mono font-semibold text-text">{t.hero.features.peerLearning.title}</h3>
              <p className="text-text/70 text-sm">{t.hero.features.peerLearning.description}</p>
            </div>

            <div className="text-center space-y-3 p-6 bg-primary-light/50 rounded-lg border border-bg-primary-20 hover:border-bg-primary-40 transition-colors">
              <Terminal className="w-8 h-8 text-primary mx-auto" />
              <h3 className="text-lg font-mono font-semibold text-text">{t.hero.features.projectBased.title}</h3>
              <p className="text-text/70 text-sm">{t.hero.features.projectBased.description}</p>
            </div>

            <div className="text-center space-y-3 p-6 bg-primary-light/50 rounded-lg border border-bg-primary-20 hover:border-bg-primary-40 transition-colors">
              <Globe className="w-8 h-8 text-primary mx-auto" />
              <h3 className="text-lg font-mono font-semibold text-text">{t.hero.features.globalNetwork.title}</h3>
              <p className="text-text/70 text-sm">{t.hero.features.globalNetwork.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
