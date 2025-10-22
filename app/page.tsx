"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import PrintingTypes from "@/components/printing-types"
import VideoShowcase from "@/components/video-showcase"
import FeaturedProducts from "@/components/featured-products"
import ManufacturingCapabilities from "@/components/manufacturing-capabilities"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <FeaturedProducts />
      <PrintingTypes />
      <ManufacturingCapabilities />
      <Footer />
    </main>
  )
}
