"use client"

import { Zap, Sparkles, BedDouble as Needle, Palette } from "lucide-react"
import React, { useRef, useEffect } from "react"

const printingTypes = [
  {
    id: 1,
    name: "DTF Printing",
    description: "Direct-to-Film printing for vibrant, detailed designs with excellent color accuracy and durability.",
    icon: Zap,
    color: "text-primary",
  },
  {
    id: 2,
    name: "Puff Print",
    description: "Three-dimensional printing technique that creates a raised, textured effect on garments.",
    icon: Sparkles,
    color: "text-accent",
  },
  {
    id: 3,
    name: "Embroidery",
    description: "Premium embroidered designs for a sophisticated, professional look on any fabric.",
    icon: Needle,
    color: "text-primary",
  },
  {
    id: 4,
    name: "Custom Printing",
    description: "Tailored printing solutions to match your unique brand identity and requirements.",
    icon: Palette,
    color: "text-accent",
  },
]

export default function PrintingTypes() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 1 // Adjust scroll speed as needed
    const scrollInterval = 50 // Milliseconds per scroll step

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0 // Reset to beginning
      } else {
        scrollContainer.scrollLeft += scrollSpeed
      }
    }, scrollInterval)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Printing Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of professional printing and embroidery services
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide" ref={scrollRef}>
          {printingTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={type.id}
                className="flex-none w-64 p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors`}
                >
                  <Icon className={`${type.color} group-hover:scale-110 transition-transform`} size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {type.name}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Company Info */}
        <div className="mt-20 p-8 bg-card rounded-xl border border-border animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">About Kores Fabric</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Based in Tirupur, India's textile hub, Kores Fabric has been delivering premium wholesale clothing and
            professional printing services for over 15 years. We combine traditional craftsmanship with modern
            technology to create exceptional products for wholesale buyers worldwide.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for
            businesses looking for reliable, premium fabric solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
