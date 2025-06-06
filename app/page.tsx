import Hero from "@/components/hero"
import Stats from "@/components/stats"
import ProjectGrid from "@/components/project-grid"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f]">
      <Navigation />
      <Hero />
      <Stats />
      <ProjectGrid />
      <Footer />
    </div>
  )
}
