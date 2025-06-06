"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useLanguage()

  const testimonials = t.testimonials.students.map((student, index) => ({
    id: index + 1,
    name: student.name,
    role: student.role,
    quote: student.quote,
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
  }))

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    if (isPlaying) {
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    if (isPlaying) {
      setIsPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-text mb-4">{t.testimonials.title}</h1>
          <p className="text-text/70 text-lg max-w-3xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image Section */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-bg-primary-20 bg-gradient-to-br from-[#0a192f] to-[#020c1b]">
                {/* Video Player */}
                <div className="relative aspect-video">
                  <img
                    src={testimonials[activeIndex].videoThumbnail || "/placeholder.svg"}
                    alt={`${testimonials[activeIndex].name} testimonial`}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      onClick={toggleVideo}
                      size="lg"
                      className="w-20 h-20 rounded-full bg-bg-primary-20 backdrop-blur-sm border border-[#00ff8c] text-primary hover:bg-bg-primary-30 hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>

                  {/* Terminal-style decorative elements */}
                  <div className="absolute top-4 left-4 opacity-70">
                    <div className="font-mono text-xs text-primary">{"> video.play()"}</div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-70">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Student Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#020c1b] to-transparent">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00ff8c]">
                      <img
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-primary">{testimonials[activeIndex].name}</h3>
                      <p className="text-text/70 text-sm">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="space-y-8">
              <div className="relative">
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                <blockquote className="text-2xl md:text-3xl font-mono text-text leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="absolute -top-4 -right-4 opacity-20">
                  <Quote className="w-24 h-24 text-primary transform rotate-180" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-bg-primary-30">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-mono font-bold text-primary">{testimonials[activeIndex].name}</h4>
                  <p className="text-text/70">{testimonials[activeIndex].role}</p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "bg-[#00ff8c]" : "bg-bg-primary-30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`group cursor-pointer bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border p-6 transition-all duration-300 hover:border-[#00ff8c]/60 hover:transform hover:scale-105 ${
                index === activeIndex ? "border-[#00ff8c] ring-2 ring-bg-primary-30" : "border-bg-primary-20"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-bg-primary-30">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-text group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-text/70 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-text/70 text-sm leading-relaxed line-clamp-3">{testimonial.quote}</p>

              {/* Play Icon */}
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 rounded-full bg-bg-primary-10 border border-bg-primary-30 flex items-center justify-center group-hover:bg-bg-primary-20 transition-colors">
                  <Play className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
