"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Product } from "@/lib/product-data"

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/products/${product.slug}`} className="h-full block">
      <div
        className="group h-full bg-card rounded-lg sm:rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 animate-scale-in cursor-pointer flex flex-col"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Mobile-Optimized Image Container - Square Aspect Ratio */}
        <div className="relative overflow-hidden aspect-square sm:aspect-[4/5] md:h-64 lg:h-72 flex-shrink-0">
          <img
            src={product.colors[0]?.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
        </div>

        {/* Compact Content for Mobile */}
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
          {/* Product Name - Larger and More Prominent on Mobile */}
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
          
          {/* Description - Hidden on Mobile, Shown on Tablet+ */}
          <p className="hidden sm:block text-muted-foreground text-xs sm:text-sm mb-3 md:mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Mobile-Friendly View Details */}
          <div className="flex items-center text-primary font-medium sm:font-semibold text-xs sm:text-sm md:text-base group-hover:gap-1 sm:group-hover:gap-2 transition-all mt-auto pt-2 sm:pt-0">
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">View</span>
            <ChevronRight size={14} className="sm:size-[18px] ml-0.5 sm:ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
