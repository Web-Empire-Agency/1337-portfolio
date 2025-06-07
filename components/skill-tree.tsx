"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Cpu, Shield, Database, Globe, Gamepad2, Brain, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function SkillTree() {
  const [selectedPillar, setSelectedPillar] = useState("programming")
  const { t } = useLanguage()

  const pillars = {
    programming: {
      title: t.curriculum.pillars.programming.title,
      icon: Code,
      color: "from-[#020c1b]/80 to-[#0a192f]/80",
      borderColor: "border-[#00ff8c]/20",
      skills: [
        {
          name: t.curriculum.pillars.programming.skills.imperative.name,
          project: t.curriculum.pillars.programming.skills.imperative.project,
          description: t.curriculum.pillars.programming.skills.imperative.description,
          level: 1,
          prerequisites: [],
          icon: Gamepad2,
        },
        {
          name: t.curriculum.pillars.programming.skills.functional.name,
          project: t.curriculum.pillars.programming.skills.functional.project,
          description: t.curriculum.pillars.programming.skills.functional.description,
          level: 2,
          prerequisites: [t.curriculum.pillars.programming.skills.imperative.name],
          icon: Brain,
        },
        {
          name: t.curriculum.pillars.programming.skills.oop.name,
          project: t.curriculum.pillars.programming.skills.oop.project,
          description: t.curriculum.pillars.programming.skills.oop.description,
          level: 3,
          prerequisites: [t.curriculum.pillars.programming.skills.functional.name],
          icon: Code,
        },
        {
          name: t.curriculum.pillars.programming.skills.algorithms.name,
          project: t.curriculum.pillars.programming.skills.algorithms.project,
          description: t.curriculum.pillars.programming.skills.algorithms.description,
          level: 4,
          prerequisites: [t.curriculum.pillars.programming.skills.oop.name],
          icon: Brain,
        },
        {
          name: t.curriculum.pillars.programming.skills.graphics.name,
          project: t.curriculum.pillars.programming.skills.graphics.project,
          description: t.curriculum.pillars.programming.skills.graphics.description,
          level: 5,
          prerequisites: [t.curriculum.pillars.programming.skills.algorithms.name],
          icon: Zap,
        },
      ],
    },
    innovation: {
      title: t.curriculum.pillars.innovation.title,
      icon: Zap,
      color: "from-[#020c1b]/80 to-[#0a192f]/80",
      borderColor: "border-[#00ff8c]/20",
      skills: [
        {
          name: t.curriculum.pillars.innovation.skills.creativity.name,
          project: t.curriculum.pillars.innovation.skills.creativity.project,
          description: t.curriculum.pillars.innovation.skills.creativity.description,
          level: 1,
          prerequisites: [],
          icon: Brain,
        },
        {
          name: t.curriculum.pillars.innovation.skills.web.name,
          project: t.curriculum.pillars.innovation.skills.web.project,
          description: t.curriculum.pillars.innovation.skills.web.description,
          level: 2,
          prerequisites: [t.curriculum.pillars.innovation.skills.creativity.name],
          icon: Globe,
        },
        {
          name: t.curriculum.pillars.innovation.skills.integration.name,
          project: t.curriculum.pillars.innovation.skills.integration.project,
          description: t.curriculum.pillars.innovation.skills.integration.description,
          level: 3,
          prerequisites: [t.curriculum.pillars.innovation.skills.web.name],
          icon: Cpu,
        },
      ],
    },
    infrastructure: {
      title: t.curriculum.pillars.infrastructure.title,
      icon: Shield,
      color: "from-[#020c1b]/80 to-[#0a192f]/80",
      borderColor: "border-[#00ff8c]/20",
      skills: [
        {
          name: t.curriculum.pillars.infrastructure.skills.system.name,
          project: t.curriculum.pillars.infrastructure.skills.system.project,
          description: t.curriculum.pillars.infrastructure.skills.system.description,
          level: 1,
          prerequisites: [],
          icon: Code,
        },
        {
          name: t.curriculum.pillars.infrastructure.skills.network.name,
          project: t.curriculum.pillars.infrastructure.skills.network.project,
          description: t.curriculum.pillars.infrastructure.skills.network.description,
          level: 2,
          prerequisites: [t.curriculum.pillars.infrastructure.skills.system.name],
          icon: Globe,
        },
        {
          name: t.curriculum.pillars.infrastructure.skills.security.name,
          project: t.curriculum.pillars.infrastructure.skills.security.project,
          description: t.curriculum.pillars.infrastructure.skills.security.description,
          level: 3,
          prerequisites: [t.curriculum.pillars.infrastructure.skills.network.name],
          icon: Shield,
        },
        {
          name: t.curriculum.pillars.infrastructure.skills.bigData.name,
          project: t.curriculum.pillars.infrastructure.skills.bigData.project,
          description: t.curriculum.pillars.infrastructure.skills.bigData.description,
          level: 4,
          prerequisites: [t.curriculum.pillars.infrastructure.skills.security.name],
          icon: Database,
        },
        {
          name: t.curriculum.pillars.infrastructure.skills.parallel.name,
          project: t.curriculum.pillars.infrastructure.skills.parallel.project,
          description: t.curriculum.pillars.infrastructure.skills.parallel.description,
          level: 5,
          prerequisites: [t.curriculum.pillars.infrastructure.skills.bigData.name],
          icon: Cpu,
        },
      ],
    },
  }

  // Get the current pillar data
  const currentPillar = pillars[selectedPillar as keyof typeof pillars]
  const PillarIcon = currentPillar.icon

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-text mb-4">{t.curriculum.title}</h1>
          <p className="text-text/70 text-lg max-w-3xl mx-auto">{t.curriculum.subtitle}</p>
        </div>

        {/* Pillar Selection */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          {Object.entries(pillars).map(([key, pillar]) => {
            const ButtonIcon = pillar.icon
            return (
              <Button
                key={key}
                onClick={() => setSelectedPillar(key)}
                variant={selectedPillar === key ? "default" : "outline"}
                className={`flex items-center space-x-2 px-6 py-3 font-mono text-lg ${
                  selectedPillar === key
                    ? "bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90"
                    : "border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
                }`}
              >
                <ButtonIcon className="w-5 h-5" />
                <span>{pillar.title}</span>
              </Button>
            )
          })}
        </div>

        {/* Skill Tree Visualization */}
        <div className="relative">
          <div
            className={`bg-gradient-to-br ${currentPillar.color} backdrop-blur-sm rounded-3xl border ${currentPillar.borderColor} p-8`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30 mb-4">
                <PillarIcon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-mono font-bold text-text mb-2">{currentPillar.title}</h2>
              <p className="text-text/70">{currentPillar.skills.length} Skills • Progressive Difficulty</p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPillar.skills.map((skill, index) => {
                const SkillIcon = skill.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-[#020c1b]/50 rounded-2xl border border-[#00ff8c]/20 hover:border-[#00ff8c]/60 p-6 transition-all duration-500 hover:transform hover:scale-105"
                  >
                    {/* Level Indicator */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#00ff8c] text-[#020c1b] rounded-full flex items-center justify-center font-mono font-bold text-sm">
                      {skill.level}
                    </div>

                    {/* Skill Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-bg-primary-10 rounded-lg border border-bg-primary-30">
                          <SkillIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-mono font-semibold text-text group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                          <div className="text-primary text-sm font-mono">{skill.project}</div>
                        </div>
                      </div>

                      <p className="text-text/70 text-sm leading-relaxed">{skill.description}</p>

                      {/* Prerequisites */}
                      {skill.prerequisites.length > 0 && (
                        <div className="space-y-2">
                          <div className="text-text/50 text-xs font-mono uppercase tracking-wide">
                            {t.curriculum.prerequisites}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {skill.prerequisites.map((prereq, prereqIndex) => (
                              <span
                                key={prereqIndex}
                                className="px-2 py-1 bg-bg-primary-10 border border-bg-primary-20 rounded text-primary text-xs font-mono"
                              >
                                {prereq}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Connection Lines (for visual flow) */}
                    {index < currentPillar.skills.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-px h-6 bg-gradient-to-b from-bg-primary-50 to-transparent" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Internship Info */}
            <div className="mt-12 p-6 bg-[#020c1b]/50 rounded-2xl border border-[#00ff8c]/20">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-mono font-bold text-text">{t.curriculum.internships.title}</h3>
                <p className="text-text/70 max-w-2xl mx-auto">{t.curriculum.internships.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-bg-primary-10 border border-bg-primary-30 rounded-full text-primary text-sm font-mono">
                  {t.curriculum.internships.badge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
