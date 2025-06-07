"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Info, Clock, Monitor, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Add type definition for Campus
interface Campus {
  name: string
  coordinates: { x: number; y: number }
  description: string
  address: string
  equipment: string
  features: string[]
}

export default function CampusMap() {
  const [activeCampus, setActiveCampus] = useState("khouribga")
  const mapRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const campuses: Record<string, Campus> = {
    khouribga: {
      name: t.campuses.locations.khouribga.name,
      coordinates: { x: 30, y: 40 },
      description: t.campuses.locations.khouribga.description,
      address: t.campuses.locations.khouribga.address,
      equipment: t.campuses.locations.khouribga.equipment,
      features: t.campuses.locations.khouribga.features,
    },
    benguerir: {
      name: t.campuses.locations.benguerir.name,
      coordinates: { x: 50, y: 50 },
      description: t.campuses.locations.benguerir.description,
      address: t.campuses.locations.benguerir.address,
      equipment: t.campuses.locations.benguerir.equipment,
      features: t.campuses.locations.benguerir.features,
    },
    tetouan: {
      name: t.campuses.locations.tetouan.name,
      coordinates: { x: 70, y: 20 },
      description: t.campuses.locations.tetouan.description,
      address: t.campuses.locations.tetouan.address,
      equipment: t.campuses.locations.tetouan.equipment,
      features: t.campuses.locations.tetouan.features,
    },
    rabat: {
      name: t.campuses.locations.rabat.name,
      coordinates: { x: 50, y: 10 },
      description: t.campuses.locations.rabat.description,
      address: t.campuses.locations.rabat.address,
      equipment: t.campuses.locations.rabat.equipment,
      features: t.campuses.locations.rabat.features || [],
    },
  }

  // Simulated 3D effect with parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mapRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = mapRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const pins = document.querySelectorAll(".map-pin")
      const glow = document.querySelectorAll(".map-glow")
      const connections = document.querySelectorAll(".map-connection")

      pins.forEach((pin) => {
        ;(pin as HTMLElement).style.transform = `translate(${x * -15}px, ${y * -15}px)`
      })

      glow.forEach((g) => {
        ;(g as HTMLElement).style.transform = `translate(${x * -5}px, ${y * -5}px)`
      })

      connections.forEach((conn) => {
        ;(conn as HTMLElement).style.transform = `translate(${x * -10}px, ${y * -10}px)`
      })

      mapRef.current.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * -5}deg)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-text mb-4">{t.campuses.title}</h1>
          <p className="text-text/70 text-lg max-w-3xl mx-auto">{t.campuses.subtitle}</p>
        </div>

        {/* 3D Map */}
        <div className="mb-16">
          <div
            ref={mapRef}
            className="relative h-[800px] bg-gradient-to-br from-[#0a192f] to-[#020c1b] rounded-3xl border border-bg-primary-20 overflow-hidden transition-transform duration-300 ease-out"
          >
            {/* Map Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=1000')] bg-cover opacity-10"></div>
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array.from({ length: 400 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-[0.5px] border-[#00ff8c]/5"
                    style={{
                      gridColumn: `${(i % 20) + 1} / span 1`,
                      gridRow: `${Math.floor(i / 20) + 1} / span 1`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Map Pins */}
            {Object.entries(campuses).map(([id, campus]) => (
              <div
                key={id}
                className="absolute map-pin transition-all duration-300"
                style={{ left: `${campus.coordinates.x}%`, top: `${campus.coordinates.y}%` }}
              >
                <button
                  onClick={() => setActiveCampus(id)}
                  className={`relative group ${activeCampus === id ? "scale-125" : "scale-100"}`}
                >
                  <div
                    className={`absolute inset-0 rounded-full map-glow ${
                      activeCampus === id ? "bg-bg-primary-30" : "bg-bg-primary-10"
                    } blur-md`}
                  ></div>
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      activeCampus === id
                        ? "bg-[#00ff8c] border-[#00ff8c] text-[#020c1b]"
                        : "bg-primary-light border-bg-primary-50 text-primary"
                    } transition-all duration-300 hover:bg-[#00ff8c] hover:text-[#020c1b]`}
                  >
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap font-mono text-sm ${
                      activeCampus === id ? "text-primary" : "text-text/70"
                    }`}
                  >
                    {campus.name}
                  </div>
                </button>
              </div>
            ))}

            {/* Map Connections */}
            <svg
              className="absolute inset-0 w-full h-full map-connection"
              style={{ zIndex: 0 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1={`${campuses.khouribga.coordinates.x + 5}%`}
                y1={`${campuses.khouribga.coordinates.y}%`}
                x2={`${campuses.benguerir.coordinates.x}%`}
                y2={`${campuses.benguerir.coordinates.y}%`}
                stroke="#00ff8c"
                strokeWidth="1"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
              />
              <line
                x1={`${campuses.benguerir.coordinates.x}%`}
                y1={`${campuses.benguerir.coordinates.y}%`}
                x2={`${campuses.tetouan.coordinates.x}%`}
                y2={`${campuses.tetouan.coordinates.y}%`}
                stroke="#00ff8c"
                strokeWidth="1"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
              />
              <line
                x1={`${campuses.tetouan.coordinates.x}%`}
                y1={`${campuses.tetouan.coordinates.y}%`}
                x2={`${campuses.khouribga.coordinates.x + 5}%`}
                y2={`${campuses.khouribga.coordinates.y}%`}
                stroke="#00ff8c"
                strokeWidth="1"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
              />
              <line
                x1={`${campuses.rabat.coordinates.x}%`}
                y1={`${campuses.rabat.coordinates.y + 10}%`}
                x2={`${campuses.khouribga.coordinates.x + 5}%`}
                y2={`${campuses.khouribga.coordinates.y}%`}
                stroke="#00ff8c"
                strokeWidth="1"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
              />
              <line
                x1={`${campuses.rabat.coordinates.x}%`}
                y1={`${campuses.rabat.coordinates.y + 10}%`}
                x2={`${campuses.tetouan.coordinates.x}%`}
                y2={`${campuses.tetouan.coordinates.y}%`}
                stroke="#00ff8c"
                strokeWidth="1"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
              />
            </svg>

            {/* Campus Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#020c1b] to-transparent">
              <div className="max-w-3xl mx-auto bg-primary-light/90 backdrop-blur-md rounded-xl border border-bg-primary-30 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-mono font-bold text-primary mb-2">
                      {campuses[activeCampus as keyof typeof campuses].name}
                    </h3>
                    <p className="text-text/70 mb-4">
                      {campuses[activeCampus as keyof typeof campuses].description}
                    </p>
                    <div className="flex items-center text-text/70 text-sm mb-2">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      {campuses[activeCampus as keyof typeof campuses].address}
                    </div>
                    <div className="flex items-center text-text/70 text-sm">
                      <Monitor className="w-4 h-4 text-primary mr-2" />
                      {campuses[activeCampus as keyof typeof campuses].equipment}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="space-y-2">
                      <div className="text-text/70 text-sm font-mono uppercase tracking-wide">Features:</div>
                      <div className="space-y-1">
                        {campuses[activeCampus as keyof typeof campuses].features.map((feature, index) => (
                          <div key={index} className="flex items-center text-text/70 text-sm">
                            <div className="w-1 h-1 bg-[#00ff8c] rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal-style decorative elements */}
            <div className="absolute top-4 left-4 opacity-70">
              <div className="font-mono text-xs text-primary">{" map.render()"}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-70">
              <div className="font-mono text-xs text-primary">{" campuses.length: 4"}</div>
            </div>
          </div>
        </div>

        {/* Campus Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(campuses).map(([id, campus]) => (
            <Button
              key={id}
              onClick={() => setActiveCampus(id)}
              variant={activeCampus === id ? "default" : "outline"}
              className={`font-mono ${
                activeCampus === id
                  ? "bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90"
                  : "border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
              }`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {campus.name}
            </Button>
          ))}
        </div>

        {/* Campus Overview */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-bg-primary-10 border border-bg-primary-30 rounded-full text-primary text-sm font-mono">
            <Clock className="w-4 h-4 mr-2" />
            {t.campuses.accessNote}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary-light/50 rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-bg-primary-10 rounded-lg border border-bg-primary-30">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-mono font-semibold text-text">{t.campuses.overview.equipment.title}</h3>
            </div>
            <p className="text-text/70 text-sm leading-relaxed">{t.campuses.overview.equipment.description}</p>
          </div>

          <div className="bg-primary-light/50 rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-bg-primary-10 rounded-lg border border-bg-primary-30">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-mono font-semibold text-text">{t.campuses.overview.collaboration.title}</h3>
            </div>
            <p className="text-text/70 text-sm leading-relaxed">{t.campuses.overview.collaboration.description}</p>
          </div>

          <div className="bg-primary-light/50 rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-bg-primary-10 rounded-lg border border-bg-primary-30">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-mono font-semibold text-text">{t.campuses.overview.amenities.title}</h3>
            </div>
            <p className="text-text/70 text-sm leading-relaxed">{t.campuses.overview.amenities.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
