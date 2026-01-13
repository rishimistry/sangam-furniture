'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  CheckCircle, AlertCircle, Plus, X
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 22 1234 5678'],
    action: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@sangamfurniture.com', 'sales@sangamfurniture.com'],
    action: 'mailto:info@sangamfurniture.com',
  },
  {
    icon: MapPin,
    title: 'Showroom',
    details: ['123 Furniture Lane, Industrial Area', 'Mumbai, Maharashtra 400001'],
    action: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 6:00 PM'],
    action: null,
  },
];

const faqs = [
  {
    question: 'What is your delivery timeline?',
    answer: 'Standard delivery takes 7-14 business days depending on your location. Custom furniture orders may take 4-6 weeks. We provide real-time tracking for all orders.',
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Yes, we provide free professional installation for all furniture above ₹25,000. Our trained technicians will assemble and set up your furniture at your preferred time.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy for standard products in original condition. Custom-made furniture is non-returnable but covered under our comprehensive warranty.',
  },
  {
    question: 'Can I customize furniture designs?',
    answer: 'Absolutely! Our custom design service allows you to modify dimensions, materials, finishes, and fabrics. Schedule a consultation with our design team to get started.',
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We offer up to 10 years warranty on solid wood frames and 2-5 years on upholstery and hardware depending on the product. Warranty covers manufacturing defects.',
  },
  {
    question: 'Do you offer EMI options?',
    answer: 'Yes, we offer 0% EMI on orders above ₹30,000 with select credit cards. No-cost EMI options are available for 3, 6, and 12-month tenures.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, you would send this to your backend
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mt-2 mb-4">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Have questions about our furniture? Need help with an order? 
            Our team is here to assist you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#8B7355] rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#2C2C2C] mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                info.action ? (
                  <a
                    key={i}
                    href={info.action}
                    className="block text-[#6B7280] hover:text-[#8B7355] transition-colors"
                  >
                    {detail}
                  </a>
                ) : (
                  <p key={i} className="text-[#6B7280]">{detail}</p>
                )
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="delivery">Delivery & Shipping</option>
                    <option value="warranty">Warranty & Returns</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-[#8B7355] text-white px-6 py-4 rounded-xl font-medium hover:bg-[#6B5344] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl">
                  <CheckCircle size={20} />
                  Thank you! We&apos;ll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl">
                  <AlertCircle size={20} />
                  Something went wrong. Please try again.
                </div>
              )}
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-[#6B7280] mb-4">Prefer instant messaging?</p>
              <a
                href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20question%20about%20your%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl overflow-hidden h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sangam Furniture Location"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-[#2C2C2C] pr-4">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#8B7355] text-white flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                  {openFaq === index ? <X size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
