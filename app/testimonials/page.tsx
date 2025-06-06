
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import SuccessStories from "@/components/success-stories"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f]">

      <div className="pt-16">
        <TestimonialCarousel />
        <SuccessStories />
      </div>
      <Footer />
    </div>
  )
}
