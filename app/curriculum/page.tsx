
import Footer from "@/components/footer"
import SkillTree from "@/components/skill-tree"

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f]">

      <div className="pt-16">
        <SkillTree />
      </div>
      <Footer />
    </div>
  )
}
