
import Footer from "@/components/footer"
import CampusMap from "@/components/campus-map"
import CampusGallery from "@/components/campus-gallery"

export default function CampusesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f]">

      <div className="pt-16">
        <CampusMap />
        <CampusGallery />
      </div>
      <Footer />
    </div>
  )
}
