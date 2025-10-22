"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  image: string
  slug: string
}

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div
        className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-2xl transition-all duration-300 animate-scale-in cursor-pointer"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative overflow-hidden h-64">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

          <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            View Details
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
