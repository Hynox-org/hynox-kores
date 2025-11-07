import { products, Product } from "@/lib/product-data"
import ProductDetailsClient from "@/components/product-details-client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const product: Product | undefined = products.find(p => p.slug === resolvedParams.slug);

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

  return <ProductDetailsClient slug={params.slug} product={product} />
}
