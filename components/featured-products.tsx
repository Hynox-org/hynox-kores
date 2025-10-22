"use client"

import ProductCard from "./product-card"

const featuredProducts = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    description: "High-quality 100% cotton t-shirts perfect for printing and embroidery",
    image: "/oversized-tshirt.png",
    slug: "premium-cotton-tshirt",
  },
  {
    id: 2,
    name: "Cozy Hoodie",
    description: "Comfortable fleece-lined hoodies ideal for custom branding",
    image: "/cozy-hoodie.png",
    slug: "cozy-hoodie",
  },
  {
    id: 3,
    name: "Premium Polo Shirt",
    description: "Elegant polo shirts with superior fabric quality",
    image: "/premium-polo-shirt.png",
    slug: "premium-polo-shirt",
  },
  {
    id: 4,
    name: "Oversized Hoodie",
    description: "Trendy oversized hoodies for wholesale bulk orders",
    image: "/oversized-hoodie.png",
    slug: "oversized-hoodie",
  },
  {
    id: 5,
    name: "Cozy Sweatshirt",
    description: "Soft and durable sweatshirts for all seasons",
    image: "/cozy-sweatshirt.png",
    slug: "cozy-sweatshirt",
  },
  {
    id: 6,
    name: "Acid Wash T-Shirt",
    description: "Trendy acid wash collection with unique designs",
    image: "/acid-wash-tshirt.jpg",
    slug: "acid-wash-tshirt",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our premium collection of wholesale clothing items, all ready for custom printing and embroidery
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
