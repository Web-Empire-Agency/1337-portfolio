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
      name: "Oumaima Essayeh",
      title: "Software Engineer",
      company: "Agile Solutions",
      category: "career",
      story: "Transitioned from 1337 to professional software engineering, crediting peer-learning methodology for developing real-world problem-solving abilities and collaborative skills essential in tech teams.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Featured alumni spotlight for technical excellence",
      skills: ["Full-stack Development", "Team Collaboration", "Agile Methodologies"],
      source: "https://x.com/1337FIL/status/1925206301161791932"
    },
    {
      id: 2,
      name: "Jamal Chadi",
      title: "Full-Stack Developer",
      company: "VO2 Group",
      category: "career",
      story: "Leveraged 1337's project-based curriculum to master full-stack development, now creating enterprise solutions at VO2 Group with focus on scalable web applications.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Key contributor to VO2 Group's e-commerce platform redesign",
      skills: ["JavaScript", "React", "Node.js", "API Design"],
      source: "https://x.com/1337FIL/status/1899444666581373069"
    },
    {
      id: 3,
      name: "Youssef Baddi",
      title: "DevOps Engineer",
      company: "Google",
      category: "career",
      story: "Transformed gaming passion into cloud infrastructure expertise through 1337's flexible learning model. Developed critical monitoring systems at Google Cloud after mastering Linux and automation during studies.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Implemented cost-saving infrastructure monitoring solution",
      skills: ["Cloud Infrastructure", "Linux", "Automation", "Containerization"],
      source: "https://youtu.be/J7rAK2Ds6wU"
    },
    {
      id: 4,
      name: "Mehdi El Gaham",
      title: "AI Research Engineer",
      company: "DeepMind",
      category: "research",
      story: "Applied 1337's competitive programming experience to advance machine learning research. Contributes to natural language processing breakthroughs at DeepMind, focusing on ethical AI development.",
      image: "/placeholder.svg?height=300&width=300",
      achievement: "Published novel transformer architecture at NeurIPS conference",
      skills: ["Machine Learning", "Python", "TensorFlow", "Algorithm Design"],
      source: "https://youtu.be/6-XlNySUMDk"
    }
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
