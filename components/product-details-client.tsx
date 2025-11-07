"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MessageCircle, Check } from "lucide-react"
import { Product } from "@/lib/product-data"

interface ProductDetailsClientProps {
  slug: string;
  product: Product;
}

const colorMap: { [key: string]: string } = {
  "Black": "#000000",
  "White": "#FFFFFF",
  "Red": "#FF0000",
  "Blue": "#0000FF",
  "Green": "#008000",
  "Yellow": "#FFFF00",
  "Gray": "#808080",
  "Navy": "#000080",
  "Maroon": "#800000",
  "Purple": "#800080",
  "Orange": "#FFA500",
  "Pink": "#FFC0CB",
  "Brown": "#A52A2A",
  "Charcoal": "#36454F",
  "Heather Grey": "#B2B2B2",
  // Add more colors as needed
};

export default function ProductDetailsClient({ slug, product }: ProductDetailsClientProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState(product?.colors?.[0]?.image || "/placeholder.svg")

  useEffect(() => {
    if (product?.colors?.[0]?.image) {
      setSelectedImage(product.colors[0].image);
    }
  }, [product?.colors]);

  const handleSizeSelection = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const handleColorSelection = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="py-12 sm:py-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Product not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  const detailsParts: string[] = [];
  if (selectedColors.length > 0) {
    detailsParts.push(`colors: ${selectedColors.join(", ")}`);
  }
  if (selectedSizes.length > 0) {
    detailsParts.push(`sizes: ${selectedSizes.join(", ")}`);
  }

  const detailsText = detailsParts.length > 0 ? ` with ${detailsParts.join(" and ")}` : "";
  const whatsappMessage = `Hi! I'm interested in ordering ${product.name}${detailsText}. Could you provide more details and pricing?`;
  const whatsappLink = `https://wa.me/919500989894?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="animate-slide-in-left w-full">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl mb-3 sm:mb-4">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-auto object-cover max-h-[400px] sm:max-h-[500px] md:max-h-none" 
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide touch-pan-x">
                {product.colors.map((colorOption, index: number) => (
                  <div
                    key={index}
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 cursor-pointer transition-all touch-manipulation ${
                      selectedImage === colorOption.image
                        ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "border-border hover:border-primary active:border-primary"
                    }`}
                    onClick={() => setSelectedImage(colorOption.image)}
                  >
                    <img
                      src={colorOption.image}
                      alt={`${product.name} ${colorOption.name} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-slide-in-right w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Size Selection */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm sm:text-base font-semibold text-foreground mb-2 sm:mb-3">
                  Available Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelection(size)}
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-md sm:rounded-lg border-2 transition-all text-sm sm:text-base font-medium touch-manipulation min-w-[44px] min-h-[44px] ${
                        selectedSizes.includes(size)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-primary active:border-primary active:bg-primary/10"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm sm:text-base font-semibold text-foreground mb-2 sm:mb-3">
                  Available Color
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.colors.length > 0 ? (
                    product.colors.map((colorOption) => (
                      <div
                        key={colorOption.name}
                        onClick={() => handleColorSelection(colorOption.name)}
                        className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 cursor-pointer transition-all flex items-center justify-center touch-manipulation ${
                          selectedColors.includes(colorOption.name)
                            ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                            : "border-border hover:border-primary active:border-primary active:scale-105"
                        }`}
                        style={{ backgroundColor: colorOption.hex }}
                        title={colorOption.name}
                        aria-label={`Select ${colorOption.name} color`}
                      >
                        {selectedColors.includes(colorOption.name) && (
                          <Check
                            size={20}
                            className={`text-white ${colorOption.hex === "#FFFFFF" ? "text-gray-800" : ""}`}
                          />
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm sm:text-base">No colors available for this product.</p>
                  )}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-card rounded-lg border border-border">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  Specifications
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-semibold text-foreground text-right ml-2">{product.material}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-semibold text-foreground text-right ml-2">{product.weight}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Care Instructions</span>
                    <span className="font-semibold text-foreground text-right ml-2">{product.careInstructions}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">MOQ (Minimum Order Quantity)</span>
                    <span className="font-semibold text-foreground text-right ml-2">{product.moq}</span>
                  </div>
                </div>
              </div>

              {/* Order Button - Fixed on mobile */}
              <div className="sticky bottom-0 left-0 right-0 md:static bg-background md:bg-transparent pt-4 pb-4 md:pb-0 -mx-3 px-3 sm:-mx-4 sm:px-4 md:mx-0 md:px-0 border-t md:border-t-0 border-border z-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-all hover:shadow-lg active:shadow-md gap-2 text-base sm:text-lg touch-manipulation min-h-[48px]"
                >
                  <MessageCircle size={20} className="sm:w-5 sm:h-5" />
                  Order on WhatsApp
                </a>
              </div>

              {/* Features */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-muted/50 rounded-lg mb-20 md:mb-0">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  Why Choose This Product?
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  <li className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Premium quality materials</span>
                  </li>
                  <li className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Perfect for custom printing & embroidery</span>
                  </li>
                  <li className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Wholesale pricing available</span>
                  </li>
                  <li className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Fast delivery to your location</span>
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
