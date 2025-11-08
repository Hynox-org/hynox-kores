"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/product-data"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-14 animate-fade-in-up">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-4 px-2">
              Our <span className="text-primary">Product Collection</span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Explore our premium range of wholesale clothing items
            </p>
          </div>

          {/* Mobile-Optimized 2-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
