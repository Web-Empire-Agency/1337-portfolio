
import Footer from "@/components/footer"
import AdmissionsTimeline from "@/components/admissions-timeline"
import AdmissionsFAQ from "@/components/admissions-faq"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f]">
      
      <div className="pt-16">
        <AdmissionsTimeline />
        <AdmissionsFAQ />
      </div>
      <Footer />
    </div>
  )
}
