"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/50">
              <span className="text-sm font-semibold text-accent">Premium Wholesale Fabrics</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Elevate Your <span className="text-primary">Fashion</span> Game
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover premium wholesale clothing and professional printing services from Tirupur. We deliver excellence
              in every stitch and print.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Explore Products
                <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Quality Assured</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src="/premium-fabric-clothing-collection.jpg"
                alt="Premium Fabric Collection"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
