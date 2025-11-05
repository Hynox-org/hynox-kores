interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  name: string;
  price: string;
  description: string;
  fullDescription: string;
  image: string;
  thumbnailImages: string[];
  sizes: string[];
  colors: string[];
  specs: ProductSpecs;
}

export const productDetails: Record<string, Product> = {
  "oversized-tshirt": {
    name: "Oversized T-Shirt",
    price: "Custom Quote",
    description: "Premium comfort with a modern oversized fit. Perfect for casual wear and custom printing.",
    fullDescription:
      "Our oversized t-shirts are crafted from premium 100% cotton fabric, offering exceptional comfort and durability. The relaxed fit makes them perfect for casual wear, while the quality construction ensures they maintain their shape wash after wash.",
    image: "/oversized-tshirt.png",
    thumbnailImages: ["/oversized-tshirt.png"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "White", "Navy", "Gray", "Charcoal", "Olive"],
    specs: {
      Material: "100% Premium Cotton",
      Weight: "180 GSM",
      Fit: "Oversized",
      Care: "Machine wash cold, tumble dry low",
      MOQ: "5",
    },
  },
  "acid-wash-tshirt": {
    name: "Acid Wash T-Shirt",
    price: "Custom Quote",
    description: "Trendy acid-washed design with vintage appeal. Ideal for fashion-forward collections.",
    fullDescription:
      "Featuring a unique acid-wash treatment, these t-shirts combine vintage aesthetics with modern comfort. Each piece has a distinctive pattern, making them perfect for brands looking to stand out.",
    image: "/acid-wash-tshirt.jpg",
    thumbnailImages: ["/acid-wash-tshirt.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black Acid", "Blue Acid", "Purple Acid", "Gray Acid"],
    specs: {
      Material: "100% Cotton with Acid Wash",
      Weight: "175 GSM",
      Fit: "Regular",
      Care: "Wash separately, cold water recommended",
      MOQ: "5",
    },
  },
  "cozy-hoodie": {
    name: "Hoodie",
    price: "Custom Quote",
    description: "Cozy and stylish hoodie perfect for branding and custom designs. Premium fabric quality.",
    fullDescription:
      "Our premium hoodies are designed for comfort and style. Made from high-quality fleece, they feature a spacious kangaroo pocket and adjustable drawstrings, perfect for custom embroidery or printing.",
    image: "/cozy-hoodie.png",
    thumbnailImages: ["/cozy-hoodie.png"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "White", "Navy", "Gray", "Charcoal", "Burgundy"],
    specs: {
      Material: "80% Cotton, 20% Polyester Fleece",
      Weight: "280 GSM",
      Features: "Kangaroo pocket, adjustable drawstrings",
      Care: "Machine wash warm, tumble dry medium",
      MOQ: "5",
    },
  },
  "cozy-sweatshirt": {
    name: "Sweatshirt",
    price: "Custom Quote",
    description: "Classic sweatshirt with excellent durability. Great for embroidery and printing.",
    fullDescription:
      "A timeless classic, our sweatshirts are perfect for any season. Made from premium fleece material, they offer excellent durability and are ideal for custom branding.",
    image: "/cozy-sweatshirt.png",
    thumbnailImages: ["/cozy-sweatshirt.png"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray", "Heather Gray"],
    specs: {
      Material: "80% Cotton, 20% Polyester",
      Weight: "260 GSM",
      Fit: "Regular",
      Care: "Machine wash warm, tumble dry medium",
      MOQ: "5",
    },
  },
  "oversized-hoodie": {
    name: "Oversized Hoodie",
    price: "Custom Quote",
    description: "Luxurious oversized hoodie for maximum comfort. Premium material and construction.",
    fullDescription:
      "Experience ultimate comfort with our oversized hoodie. The relaxed fit and premium fleece material make it perfect for loungewear or casual outings. Ideal for custom designs and branding.",
    image: "/oversized-hoodie.png",
    thumbnailImages: ["/oversized-hoodie.png"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    colors: ["Black", "White", "Navy", "Gray", "Charcoal", "Sage"],
    specs: {
      Material: "85% Cotton, 15% Polyester Fleece",
      Weight: "300 GSM",
      Fit: "Oversized",
      Care: "Machine wash warm, tumble dry low",
      MOQ: "5",
    },
  },
  "premium-polo-shirt": {
    name: "Premium Polo",
    price: "Custom Quote",
    description: "Elegant polo shirt for professional and casual settings. Perfect for corporate branding.",
    fullDescription:
      "Our premium polo shirts combine elegance with comfort. Made from high-quality pique cotton, they are perfect for corporate events, team uniforms, or casual professional wear.",
    image: "/premium-polo-shirt.png",
    thumbnailImages: ["/premium-polo-shirt.png"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Red", "Green", "Gray"],
    specs: {
      Material: "100% Pique Cotton",
      Weight: "200 GSM",
      Features: "Collar, button placket",
      Care: "Machine wash warm, tumble dry medium",
      MOQ: "5",
    },
  },
  "premium-cotton-tshirt": {
    name: "Premium Cotton T-Shirt",
    price: "Custom Quote",
    description: "High-quality, soft, and durable cotton t-shirt. Ideal for everyday wear and custom designs.",
    fullDescription:
      "Experience ultimate comfort with our premium cotton t-shirts. Made from 100% combed cotton, these t-shirts are incredibly soft, breathable, and built to last. Perfect for custom printing, embroidery, or as a staple in any wardrobe.",
    image: "/premium-fabric-clothing-collection.jpg",
    thumbnailImages: ["/premium-fabric-clothing-collection.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    colors: ["White", "Black", "Navy", "Heather Grey", "Royal Blue", "Forest Green"],
    specs: {
      Material: "100% Combed Cotton",
      Weight: "180 GSM",
      Fit: "Regular",
      Care: "Machine wash cold, tumble dry low",
      MOQ: "5",
    },
  },
}
