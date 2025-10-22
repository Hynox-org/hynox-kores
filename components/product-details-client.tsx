"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MessageCircle, Check } from "lucide-react"
import { Product } from "@/lib/product-data"

interface ProductDetailsClientProps {
  slug: string;
  product: Product;
}

export default function ProductDetailsClient({ slug, product }: ProductDetailsClientProps) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  const whatsappMessage = `Hi! I'm interested in ordering ${product.name} in ${selectedColor}, size ${selectedSize}. Could you provide more details and pricing?`
  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-slide-in-right">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.fullDescription}</p>

              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">Select Color</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === color ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg gap-2"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>

              {/* Features */}
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Why Choose This Product?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={18} className="text-primary" />
                    Premium quality materials
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={18} className="text-primary" />
                    Perfect for custom printing & embroidery
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={18} className="text-primary" />
                    Wholesale pricing available
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={18} className="text-primary" />
                    Fast delivery to your location
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
