"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Briefcase, Trophy, Users, Code } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { t } = useLanguage()

  const successStories = [
    {
      id: 1,
      name: "Omar Benali",
      title: "Senior Software Engineer",
      company: "Microsoft",
      category: "career",
      story:
        "After graduating from 1337, Omar joined Microsoft as a software engineer. His project-based learning experience and problem-solving skills made him stand out during the interview process.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Promoted to Senior Engineer in 18 months",
      skills: ["C++", "System Design", "Cloud Computing"],
    },
    {
      id: 2,
      name: "Aicha Mansouri",
      title: "Cybersecurity Entrepreneur",
      company: "SecureNet Morocco",
      category: "startup",
      story:
        "Aicha founded her own cybersecurity startup after discovering her passion during the security projects at 1337. Her company now protects over 100 Moroccan businesses.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Founded successful cybersecurity startup",
      skills: ["Security", "Network Admin", "Business Development"],
    },
    {
      id: 3,
      name: "Youssef Alami",
      title: "Full Stack Developer",
      company: "Careem",
      category: "career",
      story:
        "From zero coding experience to full stack developer at Careem. Youssef's journey through 1337's peer learning model prepared him for the fast-paced tech industry.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Lead developer on major mobile features",
      skills: ["React", "Node.js", "Mobile Development"],
    },
    {
      id: 4,
      name: "Salma Idrissi",
      title: "AI Research Intern",
      company: "Google Research",
      category: "research",
      story:
        "Salma's work on the Gomoku AI project at 1337 caught the attention of Google Research. She's now contributing to cutting-edge machine learning research.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Published research paper on game theory AI",
      skills: ["Python", "Machine Learning", "Algorithms"],
    },
    {
      id: 5,
      name: "Mehdi Chakir",
      title: "DevOps Engineer",
      company: "OCP Group",
      category: "career",
      story:
        "Mehdi's expertise in system programming and Docker from 1337 led to a DevOps role at OCP Group, where he now manages cloud infrastructure for mining operations.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Reduced deployment time by 70%",
      skills: ["Docker", "Kubernetes", "System Programming"],
    },
    {
      id: 6,
      name: "Nadia Benjelloun",
      title: "Game Developer",
      company: "Indie Game Studio",
      category: "startup",
      story:
        "Inspired by creating 1337run during her studies, Nadia co-founded an indie game studio. Their first mobile game has over 500K downloads.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Game featured on App Store",
      skills: ["OpenGL", "Game Design", "Mobile Development"],
    },
  ]

  const categories = [
    { id: "all", label: t.testimonials.successStories.categories.all, icon: Users },
    { id: "career", label: t.testimonials.successStories.categories.career, icon: Briefcase },
    { id: "startup", label: t.testimonials.successStories.categories.startup, icon: Trophy },
    { id: "research", label: t.testimonials.successStories.categories.research, icon: Code },
  ]

  const filteredStories =
    activeCategory === "all" ? successStories : successStories.filter((story) => story.category === activeCategory)

  return (
    <section className="py-20 bg-primary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text mb-4">
            {t.testimonials.successStories.title}
          </h2>
          <p className="text-text/70 text-lg max-w-3xl mx-auto">{t.testimonials.successStories.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center space-x-2 font-mono ${
                activeCategory === category.id
                  ? "bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90"
                  : "border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              className="group bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 overflow-hidden hover:border-[#00ff8c]/60 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent"></div>

                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 bg-bg-primary-20 backdrop-blur-sm border border-bg-primary-30 rounded-full px-3 py-1">
                  <span className="text-primary text-xs font-mono">{story.category}</span>
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-mono font-bold text-text group-hover:text-primary transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-text/70 text-sm">{story.title}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-primary font-mono font-semibold">{story.company}</span>
                </div>

                <p className="text-text/70 text-sm leading-relaxed">{story.story}</p>

                {/* Achievement */}
                <div className="bg-bg-primary-10 border border-bg-primary-30 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-primary font-mono text-sm font-semibold">
                      {t.testimonials.successStories.keyAchievement}
                    </span>
                  </div>
                  <p className="text-text/70 text-sm">{story.achievement}</p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <div className="text-text/50 text-xs font-mono uppercase tracking-wide">
                    {t.testimonials.successStories.skillsUsed}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {story.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-bg-primary-10 border border-bg-primary-30 rounded text-primary text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-primary hover:bg-bg-primary-10 font-mono group"
                >
                  {t.common.readMore}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>

              {/* Terminal-style decorative elements */}
              <div className="absolute top-4 left-4 opacity-20">
                <div className="font-mono text-xs text-primary">{"> success.story"}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-3xl border border-bg-primary-20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-mono font-bold text-text mb-4">
              {t.testimonials.successStories.cta.title}
            </h3>
            <p className="text-text/70 mb-6">{t.testimonials.successStories.cta.description}</p>
            <Button className="bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90 font-mono font-semibold px-8 py-3 text-lg">
              {t.testimonials.successStories.cta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
