"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Code2, Gamepad2, Shield, Database } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ProjectGrid() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: t.projects.items.rushArkanoid.title,
      category: "programming",
      description: t.projects.items.rushArkanoid.description,
      tech: t.projects.items.rushArkanoid.tech,
      icon: Gamepad2,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-500",
    },
    {
      id: 2,
      title: t.projects.items.amazing.title,
      category: "programming",
      description: t.projects.items.amazing.description,
      tech: t.projects.items.amazing.tech,
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30 hover:border-blue-500",
    },
    {
      id: 3,
      title: t.projects.items.redTetris.title,
      category: "innovation",
      description: t.projects.items.redTetris.description,
      tech: t.projects.items.redTetris.tech,
      icon: Play,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30 hover:border-red-500",
    },
    {
      id: 4,
      title: t.projects.items.run1337.title,
      category: "programming",
      description: t.projects.items.run1337.description,
      tech: t.projects.items.run1337.tech,
      icon: Gamepad2,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30 hover:border-green-500",
    },
    {
      id: 5,
      title: t.projects.items.virusProtection.title,
      category: "infrastructure",
      description: t.projects.items.virusProtection.description,
      tech: t.projects.items.virusProtection.tech,
      icon: Shield,
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30 hover:border-yellow-500",
    },
    {
      id: 6,
      title: t.projects.items.bigData.title,
      category: "infrastructure",
      description: t.projects.items.bigData.description,
      tech: t.projects.items.bigData.tech,
      icon: Database,
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30 hover:border-indigo-500",
    },
  ]

  const filters = [
    { id: "all", label: t.projects.filters.all },
    { id: "programming", label: t.projects.filters.programming },
    { id: "innovation", label: t.projects.filters.innovation },
    { id: "infrastructure", label: t.projects.filters.infrastructure },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-20 bg-gradient-to-b from-[#020c1b] to-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text mb-4">{t.projects.title}</h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto mb-8">{t.projects.subtitle}</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`font-mono ${
                  activeFilter === filter.id
                    ? "bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90"
                    : "border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br ${project.color} backdrop-blur-sm rounded-2xl border ${project.borderColor} transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00ff8c]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-8 space-y-6">
                {/* Project Icon */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-bg-primary-10 rounded-lg border border-bg-primary-30 group-hover:border-[#00ff8c] transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="ghost" className="text-text hover:text-primary p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-text hover:text-primary p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-mono font-bold text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text/70 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-bg-primary-10 border border-bg-primary-30 rounded-full text-primary text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Terminal-style decorative elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff8c] rounded-tl-2xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff8c] rounded-br-2xl animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button className="bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90 font-mono font-semibold px-8 py-3 text-lg group">
            {t.projects.viewAll}
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
