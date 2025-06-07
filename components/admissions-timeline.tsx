"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Calendar, Users, Code, Brain, Terminal, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AdmissionsTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("timeline-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      id: "register",
      title: t.admissions.steps.register.title,
      description: t.admissions.steps.register.description,
      icon: Terminal,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      details: t.admissions.steps.register.details,
    },
    {
      id: "tests",
      title: t.admissions.steps.tests.title,
      description: t.admissions.steps.tests.description,
      icon: Brain,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      details: t.admissions.steps.tests.details,
    },
    {
      id: "checkin",
      title: t.admissions.steps.checkin.title,
      description: t.admissions.steps.checkin.description,
      icon: MapPin,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      details: t.admissions.steps.checkin.details,
    },
    {
      id: "pool",
      title: t.admissions.steps.pool.title,
      description: t.admissions.steps.pool.description,
      icon: Code,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
      details: t.admissions.steps.pool.details,
    },
    {
      id: "admission",
      title: t.admissions.steps.admission.title,
      description: t.admissions.steps.admission.description,
      icon: CheckCircle2,
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30",
      details: t.admissions.steps.admission.details,
    },
  ]

  const ActiveStepIcon = steps[activeStep].icon

  return (
    <section id="timeline-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-text mb-4">{t.admissions.title}</h1>
          <p className="text-text/70 text-lg max-w-3xl mx-auto">{t.admissions.subtitle}</p>
        </div>

        {/* Timeline Steps */}
        <div className="relative mb-16">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00ff8c]/50 to-transparent"></div>

          {/* Timeline navigation buttons */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="flex flex-wrap justify-center gap-6">
              {steps.map((step, index) => (
                <Button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  variant={activeStep === index ? "default" : "outline"}
                  className={`group relative flex items-center space-x-3 px-6 py-3 font-mono transition-all duration-300 ${
                    activeStep === index
                      ? "bg-[#00ff8c] text-[#020c1b] shadow-lg shadow-[#00ff8c]/20 hover:bg-[#00ff8c]/90"
                      : "border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
                  }`}
                >
                  {/* Step number indicator */}
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    activeStep === index 
                      ? "border-[#020c1b] bg-[#020c1b] text-[#00ff8c]" 
                      : "border-current group-hover:border-[#00ff8c]"
                  }`}>
                    {index + 1}
                  </span>
                  {/* Step title */}
                  <span className={`font-medium transition-colors duration-300 ${
                    activeStep === index ? "text-[#020c1b]" : "group-hover:text-[#00ff8c]"
                  }`}>
                    {step.title}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  } transition-all duration-500 ease-out`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex justify-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index <= activeStep
                          ? "bg-[#00ff8c] text-[#020c1b]"
                          : "bg-primary-light border-2 border-bg-primary-30 text-primary"
                      }`}
                    >
                      {index < activeStep ? <CheckCircle2 className="w-5 h-5" /> : <span>{index + 1}</span>}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`bg-gradient-to-br ${step.color} backdrop-blur-sm rounded-2xl ${
                      step.borderColor
                    } border p-6 h-full ${
                      index === activeStep ? "ring-2 ring-[#00ff8c] transform scale-105" : "opacity-70"
                    } transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${
                          index === activeStep
                            ? "bg-bg-primary-20 border border-[#00ff8c]"
                            : "bg-bg-primary-10 border border-bg-primary-30"
                        }`}
                      >
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3
                        className={`font-mono font-semibold ${
                          index === activeStep ? "text-primary" : "text-text"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-text/70 text-sm leading-relaxed mb-4">{step.description}</p>

                    {index === activeStep && (
                      <div className="space-y-2 mt-4">
                        <div className="text-text/50 text-xs font-mono uppercase tracking-wide">
                          {t.admissions.keyPoints}
                        </div>
                        <ul className="space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-text/70 text-sm">
                              <div className="w-1 h-1 bg-[#00ff8c] rounded-full mt-1.5 mr-2"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Progress Indicator */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-bg-primary-50 to-bg-primary-10"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-primary-light/50 backdrop-blur-sm rounded-3xl border border-bg-primary-20 p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <ActiveStepIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-mono font-bold text-primary">{steps[activeStep].title}</h2>
                <p className="text-text/70">
                  Step {activeStep + 1} of {steps.length}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-text text-lg leading-relaxed">{steps[activeStep].description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeStep === 0 && (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">
                          {t.admissions.timeline.registrationPeriod}
                        </h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.registrationDesc}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">{t.admissions.timeline.eligibility}</h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.eligibilityDesc}
                      </p>
                    </div>
                  </>
                )}

                {activeStep === 1 && (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Brain className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">{t.admissions.timeline.testFormat}</h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.testFormatDesc}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">{t.admissions.timeline.preparation}</h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.preparationDesc}
                      </p>
                    </div>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">
                          {t.admissions.timeline.campusOptions}
                        </h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.campusOptionsDesc}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">{t.admissions.timeline.scheduling}</h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.schedulingDesc}
                      </p>
                    </div>
                  </>
                )}

                {activeStep === 3 && (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">
                          {t.admissions.timeline.poolStructure}
                        </h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.poolStructureDesc}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">
                          {t.admissions.timeline.accommodation}
                        </h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.accommodationDesc}
                      </p>
                    </div>
                  </>
                )}

                {activeStep === 4 && (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">
                          {t.admissions.timeline.selectionCriteria}
                        </h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">
                        {t.admissions.timeline.selectionCriteriaDesc}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h3 className="font-mono font-semibold text-text">{t.admissions.timeline.nextSteps}</h3>
                      </div>
                      <p className="text-text/70 text-sm leading-relaxed">{t.admissions.timeline.nextStepsDesc}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <div className="text-2xl font-mono font-bold text-primary">0$</div>
              </div>
              <h3 className="text-xl font-mono font-semibold text-text">{t.admissions.keyInfo.tuition.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{t.admissions.keyInfo.tuition.description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <div className="text-2xl font-mono font-bold text-primary">18-30</div>
              </div>
              <h3 className="text-xl font-mono font-semibold text-text">{t.admissions.keyInfo.age.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{t.admissions.keyInfo.age.description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <div className="text-2xl font-mono font-bold text-primary">4</div>
              </div>
              <h3 className="text-xl font-mono font-semibold text-text">{t.admissions.keyInfo.duration.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{t.admissions.keyInfo.duration.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
