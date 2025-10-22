"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Oversized T-Shirt",
    description: "Premium comfort with a modern oversized fit. Perfect for casual wear and custom printing.",
    image: "/oversized-tshirt.png",
    slug: "oversized-tshirt",
  },
  {
    id: 2,
    name: "Acid Wash T-Shirt",
    description: "Trendy acid-washed design with vintage appeal. Ideal for fashion-forward collections.",
    image: "/acid-wash-tshirt.jpg",
    slug: "acid-wash-tshirt",
  },
  {
    id: 3,
    name: "Hoodie",
    description: "Cozy and stylish hoodie perfect for branding and custom designs. Premium fabric quality.",
    image: "/cozy-hoodie.png",
    slug: "hoodie",
  },
  {
    id: 4,
    name: "Sweatshirt",
    description: "Classic sweatshirt with excellent durability. Great for embroidery and printing.",
    image: "/cozy-sweatshirt.png",
    slug: "sweatshirt",
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    description: "Luxurious oversized hoodie for maximum comfort. Premium material and construction.",
    image: "/oversized-hoodie.png",
    slug: "oversized-hoodie",
  },
  {
    id: 6,
    name: "Premium Polo",
    description: "Elegant polo shirt for professional and casual settings. Perfect for corporate branding.",
    image: "/premium-polo-shirt.png",
    slug: "premium-polo",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Product Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our premium range of wholesale clothing items, all available for custom printing and embroidery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
