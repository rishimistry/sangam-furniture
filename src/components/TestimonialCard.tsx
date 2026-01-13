'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <Quote size={32} className="text-[#D4C4B0] mb-4" />
      
      <p className="text-[#2C2C2C] mb-4 leading-relaxed">
        &ldquo;{testimonial.comment}&rdquo;
      </p>
      
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? 'fill-[#C9A86C] text-[#C9A86C]' : 'text-gray-300'}
          />
        ))}
      </div>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#D4C4B0] flex items-center justify-center">
          <span className="text-[#8B7355] font-semibold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-[#2C2C2C]">{testimonial.name}</h4>
          <p className="text-sm text-[#6B7280]">{testimonial.location}</p>
        </div>
      </div>
      
      <p className="text-xs text-[#8B7355] mt-3 pt-3 border-t border-gray-100">
        Purchased: {testimonial.productPurchased}
      </p>
    </motion.div>
  );
}
