'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Truck, Shield, RotateCcw, 
  ChevronLeft, ChevronRight, MessageCircle, Phone,
  Check, Minus, Plus, ZoomIn
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getRelatedProducts, formatPrice } from '@/lib/data';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.categorySlug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${product.name} (${formatPrice(product.price)}). Can you provide more details?`
  );

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 overflow-x-auto">
          <ol className="flex items-center gap-2 text-sm text-[#6B7280] whitespace-nowrap min-w-max">
            <li><Link href="/" className="hover:text-[#8B7355]">Home</Link></li>
            <li>/</li>
            <li><Link href="/catalogue" className="hover:text-[#8B7355]">Catalogue</Link></li>
            <li>/</li>
            <li className="hidden sm:block"><Link href={`/catalogue?category=${product.categorySlug}`} className="hover:text-[#8B7355]">{product.category}</Link></li>
            <li className="hidden sm:block">/</li>
            <li className="text-[#2C2C2C] font-medium truncate max-w-[150px] sm:max-w-[200px]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={`${product.name} - Image ${selectedImage + 1}`}
                    fill
                    className={`object-cover transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                    onClick={() => setIsZoomed(!isZoomed)}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Zoom indicator */}
              <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} />
                Click to zoom
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestSeller && (
                  <span className="bg-[#C9A86C] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    Best Seller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-[#8B7355] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    New Arrival
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-18 h-18 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImage === index ? 'border-[#8B7355]' : 'border-transparent'
                    }`}
                    style={{ width: '72px', height: '72px' }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <div>
              <p className="text-[#8B7355] text-sm font-medium uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-[#C9A86C] text-[#C9A86C]' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-1 font-medium">{product.rating}</span>
                </div>
                <span className="text-[#6B7280] text-sm">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-2xl font-bold text-[#2C2C2C]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-[#6B7280] line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-green-600 font-medium text-sm">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              <p className="text-[#6B7280] leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 4).map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 bg-[#D4C4B0]/30 text-[#6B5344] text-sm px-3 py-1.5 rounded-full"
                >
                  <Check size={14} />
                  {feature}
                </span>
              ))}
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#2C2C2C]">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#8B7355] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#6B5344] transition-colors"
                >
                  <Phone size={18} />
                  Enquire Now
                </Link>
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-[#8B7355]" />
                <p className="text-xs text-[#6B7280]">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-[#8B7355]" />
                <p className="text-xs text-[#6B7280]">{product.specifications.warranty.split(' ').slice(0, 2).join(' ')}</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-[#8B7355]" />
                <p className="text-xs text-[#6B7280]">Easy Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#8B7355] rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C]">Specifications</h2>
              <p className="text-sm text-[#6B7280]">Detailed product information</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#D4C4B0]/30 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4C4B0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Dimensions</p>
                  <p className="font-medium text-[#2C2C2C]">{product.specifications.dimensions}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D4C4B0]/30 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4C4B0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Material</p>
                  <p className="font-medium text-[#2C2C2C]">{product.specifications.material}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D4C4B0]/30 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4C4B0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Finish</p>
                  <p className="font-medium text-[#2C2C2C]">{product.specifications.finish}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D4C4B0]/30 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4C4B0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#8B7355]" />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] mb-1">Warranty</p>
                  <p className="font-medium text-[#2C2C2C]">{product.specifications.warranty}</p>
                </div>
              </div>
            </div>

            {product.specifications.weight && (
              <div className="bg-white rounded-2xl p-6 border border-[#D4C4B0]/30 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4C4B0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Weight</p>
                    <p className="font-medium text-[#2C2C2C]">{product.specifications.weight}</p>
                  </div>
                </div>
              </div>
            )}

            {product.specifications.assembly && (
              <div className="bg-white rounded-2xl p-6 border border-[#D4C4B0]/30 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4C4B0]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Assembly</p>
                    <p className="font-medium text-[#2C2C2C]">{product.specifications.assembly}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#2C2C2C]">You May Also Like</h2>
              <Link
                href={`/catalogue?category=${product.categorySlug}`}
                className="text-[#8B7355] font-medium hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
