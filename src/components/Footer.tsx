'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Living Room', href: '/catalogue?category=living-room' },
    { name: 'Bedroom', href: '/catalogue?category=bedroom' },
    { name: 'Office', href: '/catalogue?category=office' },
    { name: 'Dining', href: '/catalogue?category=dining' },
    { name: 'Custom Furniture', href: '/catalogue?category=custom' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Craftsmanship', href: '/about#craftsmanship' },
    { name: 'Careers', href: '/contact' },
    { name: 'Press', href: '/contact' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/contact#faq' },
    { name: 'Shipping Info', href: '/contact' },
    { name: 'Returns Policy', href: '/contact' },
    { name: 'Warranty', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#8B7355] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Sangam</h2>
                <p className="text-xs -mt-1 text-gray-400">FURNITURE</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Crafting premium furniture since 1998. We blend traditional Indian craftsmanship 
              with contemporary design to create pieces that last generations.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A86C] transition-colors">
                <Phone size={18} />
                +91 98765 43210
              </a>
              <a href="mailto:info@sangamfurniture.com" className="flex items-center gap-3 text-gray-300 hover:text-[#C9A86C] transition-colors">
                <Mail size={18} />
                info@sangamfurniture.com
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Furniture Lane, Industrial Area,<br />Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#C9A86C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#C9A86C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#C9A86C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sangam Furniture. All rights reserved. Made with ❤️ in India.
        </div>
      </div>
    </footer>
  );
}
