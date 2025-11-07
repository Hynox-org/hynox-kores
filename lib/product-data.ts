export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  colors: { name: string; hex: string; image: string; }[];
  sizes: string[];
  material: string;
  weight: string;
  careInstructions: string;
  moq: number; // Added MOQ property
  slug: string; // Added slug property
}

export const products: Product[] = [
  {
    id: '1',
    name: '240 GSM Oversized T-Shirt',
    category: '240 GSM Oversized',
    description: 'Premium 240 GSM oversized t-shirt for ultimate comfort and style.',
    price: 799,
    colors: [
      { name: 'Black', hex: '#000000', image: '/black-oversized.jpg' },
      { name: 'White', hex: '#FFFFFF', image: '/white-oversized.jpg' },
      { name: 'Beige', hex: '#F5F5DC', image: '/beige-oversized.jpg' },
      { name: 'Gray', hex: '#808080', image: '/gray-oversized.jpg' },
      { name: 'Navy Blue', hex: '#000080', image: '/navy-blue-oversized.jpg' },
      { name: 'Royal Blue', hex: '#4169E1', image: '/royal-blue-oversized.jpg' },
      { name: 'Green', hex: '#008000', image: '/green-oversized.jpg' },
      { name: 'Orange', hex: '#FFA500', image: '/orange-oversized.jpg' },
      { name: 'Lavender', hex: '#E6E6FA', image: '/lavender-oversized.jpg' },
      { name: 'Grapes', hex: '#6F2DA8', image: '/grapes-oversized.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Combed Cotton',
    weight: '240 GSM',
    careInstructions: 'Machine wash cold, tumble dry low',
    moq: 5,
    slug: '240-gsm-oversized-t-shirt',
  },
  {
    id: '2',
    name: '180 GSM Half Sleeve T-Shirt',
    category: '180 GSM Half Sleeve',
    description: 'Comfortable 180 GSM half sleeve t-shirt, perfect for everyday wear.',
    price: 599,
    colors: [
      { name: 'Black', hex: '#000000', image: '/black-oversized.jpg' },
      { name: 'White', hex: '#FFFFFF', image: '/white-oversized.jpg' },
      { name: 'Gray', hex: '#808080', image: '/gray-oversized.jpg' },
      { name: 'Navy Blue', hex: '#000080', image: '/navy-blue-oversized.jpg' },
      { name: 'Red', hex: '#FF0000', image: '/oversized-tshirt.png' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Cotton',
    weight: '180 GSM',
    careInstructions: 'Machine wash cold, do not bleach',
    moq: 5,
    slug: '180-gsm-half-sleeve-t-shirt',
  },
  {
    id: '3',
    name: '300 GSM Sweatshirt',
    category: '300 GSM Sweatshirt',
    description: 'Warm and cozy 300 GSM sweatshirt for cooler days.',
    price: 1299,
    colors: [
      { name: 'Black', hex: '#000000', image: '/cozy-sweatshirt.png' },
      { name: 'White', hex: '#FFFFFF', image: '/cozy-sweatshirt.png' },
      { name: 'Lavender', hex: '#E6E6FA', image: '/purple-sweatshirt.jpg' },
      { name: 'Navy Blue', hex: '#000080', image: '/cozy-sweatshirt.png' }, 
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '80% Cotton, 20% Polyester',
    weight: '300 GSM',
    careInstructions: 'Machine wash cold, gentle cycle',
    moq: 5,
    slug: '300-gsm-sweatshirt',
  },
  {
    id: '4',
    name: '300 GSM Hoodie',
    category: '300 GSM Hoodie',
    description: 'Stylish 300 GSM hoodie with a comfortable fit.',
    price: 1499,
    colors: [
      { name: 'Black', hex: '#000000', image: '/cozy-hoodie.png' },
      { name: 'White', hex: '#FFFFFF', image: '/cozy-hoodie.png' },
      { name: 'Lavender', hex: '#E6E6FA', image: '/cozy-hoodie.png' },
      { name: 'Navy Blue', hex: '#000080', image: '/cozy-hoodie.png' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '80% Cotton, 20% Polyester',
    weight: '300 GSM',
    careInstructions: 'Machine wash cold, do not iron on print',
    moq: 5,
    slug: '300-gsm-hoodie',
  },
  {
    id: '5',
    name: '400 GSM Oversized Hoodie',
    category: '400 GSM Hoodie',
    description: 'Ultra-heavyweight 400 GSM hoodie for maximum warmth and durability.',
    price: 1899,
    colors: [
      { name: 'Black', hex: '#000000', image: '/oversized-hoodie.png' },
      { name: 'White', hex: '#FFFFFF', image: '/oversized-hoodie.png' },
      { name: 'Lavender', hex: '#E6E6FA', image: '/oversized-hoodie.png' },
      { name: 'Navy Blue', hex: '#000080', image: '/oversized-hoodie.png' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    material: '70% Cotton, 30% Polyester',
    weight: '400 GSM',
    careInstructions: 'Machine wash cold, hang dry',
    moq: 5,
    slug: '400-gsm-hoodie',
  },
  {
    id: '6',
    name: '240 GSM Acid Wash Oversized T-Shirt',
    category: '240 Acid wash oversized',
    description: 'Unique acid wash oversized t-shirt with a vintage feel.',
    price: 899,
    colors: [
      { name: 'Black Acid Wash', hex: '#36454F', image: '/black-acidwash-oversized.jpg' },
      { name: 'Gray Acid Wash', hex: '#696969', image: '/acid-wash-tshirt.jpg' },
      { name: 'Blue Acid Wash', hex: '#4682B4', image: '/acid-wash-tshirt.jpg' },
      { name: 'Green Acid Wash', hex: '#5F9EA0', image: '/acid-wash-tshirt.jpg' },
      { name: 'Purple Acid Wash', hex: '#6A5ACD', image: '/acid-wash-tshirt.jpg' },
      { name: 'Brown Acid Wash', hex: '#A52A2A', image: '/acid-wash-tshirt.jpg' },
      { name: 'Red Acid Wash', hex: '#B22222', image: '/acid-wash-tshirt.jpg' },
      { name: 'Yellow Acid Wash', hex: '#DAA520', image: '/acid-wash-tshirt.jpg' },
      { name: 'Orange Acid Wash', hex: '#FF8C00', image: '/acid-wash-tshirt.jpg' },
      { name: 'Pink Acid Wash', hex: '#FF69B4', image: '/acid-wash-tshirt.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Cotton',
    weight: '240 GSM',
    careInstructions: 'Machine wash cold, wash separately',
    moq: 5,
    slug: '240-acid-wash-oversized-t-shirt',
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
