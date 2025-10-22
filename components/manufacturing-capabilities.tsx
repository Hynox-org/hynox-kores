"use client"

import { Zap, Package, Shirt, Truck } from "lucide-react"

export default function ManufacturingCapabilities() {
  const capabilities = [
    {
      icon: Shirt,
      title: "Complete Manufacturing",
      description: "From knitting to finished product, we handle every step of the manufacturing process",
    },
    {
      icon: Package,
      title: "All Product Types",
      description: "We manufacture all types of clothing products - t-shirts, hoodies, sweatshirts, and more",
    },
    {
      icon: Zap,
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions to meet your specific business requirements",
    },
    {
      icon: Truck,
      title: "Dropshipping Support",
      description: "Full dropshipping support available for wholesale partners and resellers",
    },
  ]

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Kores Fabric</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are a complete manufacturer from knitting to finished product. All types of products can be manufactured
            with our expertise and state-of-the-art facilities.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </div>
            )
          })}
        </div>

        {/* Highlight Box */}
        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-xl text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-2">Dropshipping Support Available</h3>
          <p className="text-muted-foreground mb-6">
            Looking to start your own clothing business? We offer complete dropshipping support with flexible minimum
            order quantities and competitive pricing.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started with Dropshipping
          </a>
        </div>
      </div>
    </section>
  )
}
