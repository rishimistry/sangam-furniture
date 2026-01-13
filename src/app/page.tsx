'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, Palette, Award, CreditCard, Headphones } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import { categories, getBestSellers, testimonials, whyChooseUs } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  wood: <Award className="w-8 h-8" />,
  craft: <Palette className="w-8 h-8" />,
  custom: <Palette className="w-8 h-8" />,
  warranty: <Shield className="w-8 h-8" />,
  delivery: <Truck className="w-8 h-8" />,
  emi: <CreditCard className="w-8 h-8" />,
};

export default function HomePage() {
  const bestSellers = getBestSellers();

  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Elegant living room with premium furniture"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[#C9A86C] text-sm font-medium tracking-wider uppercase mb-4">
              Crafted with Passion Since 1998
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Furniture That Tells Your Story
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Transform your space with handcrafted furniture that blends timeless Indian 
              craftsmanship with contemporary design. Every piece is made to last generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center gap-2 bg-[#8B7355] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6B5344] transition-colors"
              >
                Explore Collection
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/30"
              >
                Visit Showroom
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
              Browse by Room
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">
              Shop by Category
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
          >
            <div>
              <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
                Customer Favorites
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">
                Best Selling Products
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 text-[#8B7355] font-medium hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#C9A86C] text-sm font-medium tracking-wider uppercase">
              The Sangam Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#8B7355] rounded-2xl flex items-center justify-center text-white">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
              Happy Customers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#8B7355] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#8B7355]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience our furniture collection in person. Our design consultants are ready 
              to help you find the perfect pieces for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#8B7355] px-8 py-4 rounded-full font-medium hover:bg-[#FAF8F5] transition-colors"
              >
                <Headphones size={18} />
                Book a Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors border-2 border-white"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[#8B7355]">25+</p>
              <p className="text-[#6B7280]">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#8B7355]">50,000+</p>
              <p className="text-[#6B7280]">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#8B7355]">500+</p>
              <p className="text-[#6B7280]">Cities Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#8B7355]">10 Years</p>
              <p className="text-[#6B7280]">Warranty</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
