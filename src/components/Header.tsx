'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use transparent style only on home page when not scrolled
  const useTransparentStyle = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparentStyle ? 'bg-black/20 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-[#2C2C2C] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>Free Delivery on Orders Above ₹25,000 | Pan-India Shipping</p>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#C9A86C] transition-colors">
            <Phone size={14} />
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Main header */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-10 h-10 bg-[#8B7355] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className={`text-xl font-semibold tracking-tight ${useTransparentStyle ? 'text-white' : 'text-[#2C2C2C]'}`}>
                Sangam
              </h1>
              <p className={`text-xs -mt-1 ${useTransparentStyle ? 'text-white/80' : 'text-[#6B7280]'}`}>
                FURNITURE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href === '/' && pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-sm font-medium transition-colors ${
                  useTransparentStyle ? 'text-white hover:text-[#C9A86C]' : 'text-[#2C2C2C] hover:text-[#8B7355]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                useTransparentStyle 
                  ? 'bg-white text-[#8B7355] hover:bg-[#FAF8F5]' 
                  : 'bg-[#8B7355] text-white hover:bg-[#6B5344]'
              }`}
            >
              <ShoppingBag size={16} />
              Enquire Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                useTransparentStyle ? 'text-white hover:bg-white/20' : 'text-[#2C2C2C] hover:bg-[#D4C4B0]/30'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '/' && pathname === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  className="block text-lg font-medium text-[#2C2C2C] hover:text-[#8B7355] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#8B7355] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[#6B5344] transition-colors"
              >
                Enquire Now
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-[#8B7355] font-medium"
              >
                <Phone size={16} />
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
