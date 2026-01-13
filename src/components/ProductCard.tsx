'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product, formatPrice } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/product/${product.slug}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isBestSeller && (
              <span className="bg-[#C9A86C] text-white text-xs font-medium px-2.5 py-1 rounded-full">
                Best Seller
              </span>
            )}
            {product.isNew && (
              <span className="bg-[#8B7355] text-white text-xs font-medium px-2.5 py-1 rounded-full">
                New
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-[#8B7355] font-medium uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-[#2C2C2C] mb-2 line-clamp-1 group-hover:text-[#8B7355] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-[#6B7280] mb-3 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-[#C9A86C] text-[#C9A86C]" />
              <span className="text-sm font-medium text-[#2C2C2C]">{product.rating}</span>
            </div>
            <span className="text-xs text-[#6B7280]">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#2C2C2C]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[#6B7280] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="aspect-[4/3] skeleton" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-20 skeleton rounded" />
        <div className="h-5 w-full skeleton rounded" />
        <div className="h-4 w-3/4 skeleton rounded" />
        <div className="h-4 w-1/2 skeleton rounded" />
        <div className="h-6 w-24 skeleton rounded" />
      </div>
    </div>
  );
}
