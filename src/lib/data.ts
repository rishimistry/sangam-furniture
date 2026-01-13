export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  specifications: {
    dimensions: string;
    material: string;
    finish: string;
    warranty: string;
    weight?: string;
    assembly?: string;
  };
  features: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  productPurchased: string;
  avatar?: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Living Room',
    slug: 'living-room',
    description: 'Elegant sofas, coffee tables, and entertainment units',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    productCount: 45
  },
  {
    id: '2',
    name: 'Bedroom',
    slug: 'bedroom',
    description: 'Comfortable beds, wardrobes, and dressers',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    productCount: 38
  },
  {
    id: '3',
    name: 'Office',
    slug: 'office',
    description: 'Professional desks, chairs, and storage solutions',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    productCount: 28
  },
  {
    id: '4',
    name: 'Dining',
    slug: 'dining',
    description: 'Beautiful dining tables and chairs for family gatherings',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    productCount: 22
  },
  {
    id: '5',
    name: 'Custom Furniture',
    slug: 'custom',
    description: 'Bespoke furniture tailored to your specifications',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
    productCount: 15
  },
  {
    id: '6',
    name: 'Storage',
    slug: 'storage',
    description: 'Smart storage solutions for every room',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    productCount: 32
  }
];


export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Teak Wood Sofa Set',
    slug: 'royal-teak-wood-sofa-set',
    category: 'Living Room',
    categorySlug: 'living-room',
    price: 89999,
    originalPrice: 110000,
    description: 'Experience unparalleled comfort with our Royal Teak Wood Sofa Set. Crafted from premium Burmese teak, this 3+1+1 seater set features hand-carved armrests and plush cushions upholstered in premium fabric. The natural wood grain adds warmth to any living space while the ergonomic design ensures lasting comfort.',
    shortDescription: 'Premium 3+1+1 teak wood sofa with hand-carved details',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80'
    ],
    specifications: {
      dimensions: '3-Seater: 200x85x90 cm, 1-Seater: 90x85x90 cm',
      material: 'Burmese Teak Wood, Premium Fabric',
      finish: 'Natural Polish with PU Coating',
      warranty: '10 Years on Frame, 2 Years on Upholstery',
      weight: '85 kg (total set)',
      assembly: 'Pre-assembled, Ready to use'
    },
    features: ['Termite Resistant', 'Stain-proof Fabric', 'High-density Foam', 'Removable Cushion Covers'],
    inStock: true,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '2',
    name: 'Milano King Size Bed',
    slug: 'milano-king-size-bed',
    category: 'Bedroom',
    categorySlug: 'bedroom',
    price: 65000,
    originalPrice: 78000,
    description: 'The Milano King Size Bed combines Italian design sensibilities with Indian craftsmanship. Featuring a stunning upholstered headboard and solid sheesham wood frame, this bed transforms your bedroom into a luxurious retreat. The hydraulic storage system provides ample space for bedding and seasonal items.',
    shortDescription: 'Italian-inspired king bed with hydraulic storage',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
      'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80'
    ],
    specifications: {
      dimensions: '198x183x120 cm (LxWxH)',
      material: 'Sheesham Wood, Leatherette Upholstery',
      finish: 'Walnut Matte Finish',
      warranty: '8 Years Comprehensive',
      weight: '120 kg',
      assembly: 'Easy DIY Assembly (30 mins)'
    },
    features: ['Hydraulic Storage', 'Orthopedic Support', 'Anti-skid Base', 'Soft-close Mechanism'],
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: '3',
    name: 'Executive Office Desk',
    slug: 'executive-office-desk',
    category: 'Office',
    categorySlug: 'office',
    price: 42000,
    description: 'Command your workspace with our Executive Office Desk. This L-shaped desk offers generous surface area for multiple monitors and documents. Built-in cable management keeps your setup clean, while the lockable drawers secure important files. Perfect for home offices and corporate settings.',
    shortDescription: 'L-shaped executive desk with cable management',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80'
    ],
    specifications: {
      dimensions: '180x150x75 cm (L-shaped)',
      material: 'Engineered Wood with Veneer',
      finish: 'Dark Oak Laminate',
      warranty: '5 Years',
      weight: '65 kg',
      assembly: 'Professional Assembly Included'
    },
    features: ['Cable Management System', 'Lockable Drawers', 'Keyboard Tray', 'Modular Design'],
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: '4',
    name: 'Heritage Dining Table Set',
    slug: 'heritage-dining-table-set',
    category: 'Dining',
    categorySlug: 'dining',
    price: 75000,
    originalPrice: 92000,
    description: 'Gather your family around our Heritage Dining Table Set. This 8-seater set features a solid mango wood table with intricate inlay work and matching chairs with comfortable cushioned seats. The traditional design pays homage to Indian craftsmanship while fitting seamlessly into modern homes.',
    shortDescription: '8-seater mango wood dining set with inlay work',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80'
    ],
    specifications: {
      dimensions: 'Table: 200x100x76 cm, Chair: 45x45x95 cm',
      material: 'Solid Mango Wood',
      finish: 'Honey Oak with Brass Inlay',
      warranty: '10 Years',
      weight: '150 kg (complete set)',
      assembly: 'Pre-assembled'
    },
    features: ['Brass Inlay Work', 'Cushioned Chairs', 'Scratch Resistant Top', 'Extendable Option Available'],
    inStock: true,
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 134
  },
  {
    id: '5',
    name: 'Modular Wardrobe System',
    slug: 'modular-wardrobe-system',
    category: 'Bedroom',
    categorySlug: 'bedroom',
    price: 55000,
    description: 'Organize your life with our Modular Wardrobe System. This customizable 4-door wardrobe features adjustable shelves, dedicated shoe racks, tie holders, and a full-length mirror. The soft-close hinges and premium hardware ensure smooth operation for years to come.',
    shortDescription: '4-door modular wardrobe with smart organization',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
      'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=800&q=80'
    ],
    specifications: {
      dimensions: '240x60x210 cm',
      material: 'PLPB with Laminate Finish',
      finish: 'Frosty White & Walnut Combo',
      warranty: '7 Years',
      weight: '180 kg',
      assembly: 'Professional Installation Included'
    },
    features: ['Soft-close Hinges', 'LED Interior Lighting', 'Full-length Mirror', 'Adjustable Shelves'],
    inStock: true,
    rating: 4.5,
    reviewCount: 98
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    category: 'Office',
    categorySlug: 'office',
    price: 18500,
    originalPrice: 24000,
    description: 'Work in comfort with our Ergonomic Office Chair. Designed with input from orthopedic specialists, this chair features adjustable lumbar support, 3D armrests, and a breathable mesh back. The synchronized tilt mechanism adapts to your movements throughout the day.',
    shortDescription: 'Premium ergonomic chair with lumbar support',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
      'https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=800&q=80',
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&q=80'
    ],
    specifications: {
      dimensions: '68x68x115-125 cm',
      material: 'Mesh Back, Foam Seat, Nylon Base',
      finish: 'Black with Chrome Accents',
      warranty: '3 Years',
      weight: '18 kg',
      assembly: 'Easy DIY (15 mins)'
    },
    features: ['Adjustable Lumbar Support', '3D Armrests', 'Synchronized Tilt', 'Height Adjustable'],
    inStock: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 267
  },
  {
    id: '7',
    name: 'Scandinavian Coffee Table',
    slug: 'scandinavian-coffee-table',
    category: 'Living Room',
    categorySlug: 'living-room',
    price: 15500,
    description: 'Add Nordic charm to your living room with our Scandinavian Coffee Table. The minimalist design features clean lines, tapered legs, and a spacious lower shelf for magazines and decor. Crafted from solid rubber wood with a natural finish that highlights the wood grain.',
    shortDescription: 'Minimalist coffee table with lower shelf',
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80',
      'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80',
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80'
    ],
    specifications: {
      dimensions: '120x60x45 cm',
      material: 'Solid Rubber Wood',
      finish: 'Natural Oak',
      warranty: '5 Years',
      weight: '22 kg',
      assembly: 'Easy DIY (20 mins)'
    },
    features: ['Lower Storage Shelf', 'Rounded Edges', 'Anti-slip Pads', 'Easy to Clean'],
    inStock: true,
    rating: 4.6,
    reviewCount: 145
  },
  {
    id: '8',
    name: 'Bookshelf with Study Unit',
    slug: 'bookshelf-study-unit',
    category: 'Storage',
    categorySlug: 'storage',
    price: 28000,
    description: 'Maximize your space with our Bookshelf with Study Unit. This versatile piece combines a spacious bookshelf with an integrated study desk, perfect for students and home offices. The ladder-style design adds visual interest while providing easy access to all shelves.',
    shortDescription: 'Space-saving bookshelf with integrated desk',
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80'
    ],
    specifications: {
      dimensions: '150x50x180 cm',
      material: 'Engineered Wood',
      finish: 'Columbia Walnut',
      warranty: '5 Years',
      weight: '55 kg',
      assembly: 'Professional Assembly Available'
    },
    features: ['Integrated Desk', 'Cable Management', 'Adjustable Shelves', 'Wall Mounting Option'],
    inStock: true,
    isNew: true,
    rating: 4.4,
    reviewCount: 76
  }
];


export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    comment: 'Absolutely thrilled with my Royal Teak Sofa Set! The craftsmanship is exceptional and it has transformed our living room. The delivery team was professional and set everything up perfectly.',
    productPurchased: 'Royal Teak Wood Sofa Set'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi NCR',
    rating: 5,
    comment: 'We furnished our entire home with Sangam Furniture. From bedroom to dining, every piece exceeded our expectations. The quality-to-price ratio is unbeatable in the market.',
    productPurchased: 'Complete Home Package'
  },
  {
    id: '3',
    name: 'Anita Desai',
    location: 'Bangalore, Karnataka',
    rating: 4,
    comment: 'The Milano bed is gorgeous and the hydraulic storage is a game-changer for our apartment. Minor delay in delivery but the product quality made up for it.',
    productPurchased: 'Milano King Size Bed'
  },
  {
    id: '4',
    name: 'Vikram Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    comment: 'As an interior designer, I recommend Sangam Furniture to all my clients. Their custom furniture service is outstanding - they brought my designs to life perfectly.',
    productPurchased: 'Custom Furniture'
  },
  {
    id: '5',
    name: 'Meera Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    comment: 'The Heritage Dining Set is the centerpiece of our home. Every guest compliments the beautiful inlay work. Worth every rupee spent!',
    productPurchased: 'Heritage Dining Table Set'
  },
  {
    id: '6',
    name: 'Arjun Reddy',
    location: 'Hyderabad, Telangana',
    rating: 4,
    comment: 'Great ergonomic chair for my home office. My back pain has reduced significantly since I started using it. Excellent build quality.',
    productPurchased: 'Ergonomic Office Chair'
  }
];

export const whyChooseUs = [
  {
    title: 'Premium Materials',
    description: 'We source only the finest teak, sheesham, and mango wood from sustainable forests across India.',
    icon: 'wood'
  },
  {
    title: 'Master Craftsmanship',
    description: '25+ years of expertise with skilled artisans who blend traditional techniques with modern design.',
    icon: 'craft'
  },
  {
    title: 'Customization',
    description: 'Get furniture tailored to your exact specifications - size, finish, fabric, and design.',
    icon: 'custom'
  },
  {
    title: 'Warranty Assured',
    description: 'Up to 10 years warranty on frames and comprehensive after-sales support across India.',
    icon: 'warranty'
  },
  {
    title: 'Pan-India Delivery',
    description: 'Free delivery and professional installation in 500+ cities with real-time tracking.',
    icon: 'delivery'
  },
  {
    title: 'Easy EMI Options',
    description: 'Flexible payment plans with 0% EMI options available on all major credit cards.',
    icon: 'emi'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'all') return products;
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNew);
}

export function getRelatedProducts(productId: string, categorySlug: string): Product[] {
  // First, get products from the same category
  const sameCategoryProducts = products.filter(p => p.categorySlug === categorySlug && p.id !== productId);
  
  // If we have 4 or more, return the first 4
  if (sameCategoryProducts.length >= 4) {
    return sameCategoryProducts.slice(0, 4);
  }
  
  // Otherwise, fill with products from other categories
  const otherProducts = products.filter(p => p.categorySlug !== categorySlug && p.id !== productId);
  const combined = [...sameCategoryProducts, ...otherProducts];
  
  return combined.slice(0, 4);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}
