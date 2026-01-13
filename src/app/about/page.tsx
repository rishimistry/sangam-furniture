import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Factory, Leaf, Heart, Target } from 'lucide-react';
import AnimatedStats from '@/components/AnimatedStats';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sangam Furniture - 25+ years of crafting premium handmade furniture in India. Discover our story, values, and commitment to quality.',
};

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '50000+', label: 'Happy Customers' },
  { number: '500+', label: 'Cities Served' },
  { number: '200+', label: 'Skilled Artisans' },
];

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on materials or craftsmanship. Every piece undergoes rigorous quality checks before leaving our workshop.',
  },
  {
    icon: Users,
    title: 'Customer Centric',
    description: 'Your satisfaction is our priority. We listen, adapt, and deliver furniture that exceeds expectations.',
  },
  {
    icon: Factory,
    title: 'Made in India',
    description: 'Proudly supporting local artisans and communities. Every purchase helps sustain traditional Indian craftsmanship.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'We source wood from certified sustainable forests and use eco-friendly finishes to minimize environmental impact.',
  },
  {
    icon: Heart,
    title: 'Passion for Design',
    description: 'Our designers blend traditional aesthetics with contemporary trends to create timeless furniture pieces.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Modern machinery meets traditional joinery techniques for furniture that lasts generations.',
  },
];

const timeline = [
  { year: '1998', title: 'The Beginning', description: 'Started as a small workshop in Mumbai with 5 skilled carpenters and a vision to create quality furniture.' },
  { year: '2005', title: 'First Showroom', description: 'Opened our flagship showroom in Mumbai, showcasing our complete range of handcrafted furniture.' },
  { year: '2012', title: 'Pan-India Expansion', description: 'Expanded delivery network to cover 200+ cities across India with dedicated logistics partners.' },
  { year: '2018', title: 'Custom Design Studio', description: 'Launched our bespoke furniture service, allowing customers to design their dream furniture.' },
  { year: '2023', title: 'Digital Transformation', description: 'Embraced technology with virtual showroom tours and AR-powered furniture visualization.' },
  { year: '2025', title: 'Sustainable Future', description: 'Committed to 100% sustainable sourcing and carbon-neutral operations by 2030.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Section with Stats */}
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1920&q=80"
            alt="Sangam Furniture Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Hero Content */}
        <div className="relative flex-1 flex items-center justify-center pt-28">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <span className="inline-block text-[#C9A86C] text-sm font-medium tracking-wider uppercase mb-4">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Crafting Dreams Into Reality
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              For over 25 years, we&apos;ve been transforming houses into homes with furniture 
              that tells a story of quality, tradition, and timeless design.
            </p>
          </div>
        </div>

        {/* Stats - At bottom of hero */}
        <AnimatedStats stats={stats} />
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
                Since 1998
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2 mb-6">
                A Legacy of Craftsmanship
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Sangam Furniture was born from a simple belief: every home deserves furniture 
                  that&apos;s built to last and designed to inspire. What started as a small workshop 
                  in Mumbai has grown into one of India&apos;s most trusted furniture brands.
                </p>
                <p>
                  Our founder, Mr. Ramesh Agarwal, learned the art of woodworking from his father 
                  and grandfather. This three-generation legacy of craftsmanship is embedded in 
                  every piece we create. We combine time-honored techniques with modern innovation 
                  to deliver furniture that stands the test of time.
                </p>
                <p>
                  Today, our team of 200+ skilled artisans continues this tradition, creating 
                  furniture that brings joy to over 50,000 homes across India. Each piece is 
                  crafted with the same attention to detail and passion that defined our humble 
                  beginnings.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80"
                  alt="Craftsman at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-4xl font-bold text-[#8B7355]">25+</p>
                <p className="text-[#6B7280]">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#FAF8F5] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#8B7355] rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">{value.title}</h3>
                <p className="text-[#6B7280]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section id="craftsmanship" className="py-20 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80"
                    alt="Wood selection"
                    fill
                    className="object-cover !relative"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=600&q=80"
                    alt="Finishing process"
                    fill
                    className="object-cover !relative"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80"
                    alt="Quality check"
                    fill
                    className="object-cover !relative"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                    alt="Final product"
                    fill
                    className="object-cover !relative"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-white">
              <span className="text-[#C9A86C] text-sm font-medium tracking-wider uppercase">
                The Art of Making
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Our Craftsmanship Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Wood Selection</h3>
                    <p className="text-gray-400">Hand-picked premium wood from sustainable sources, aged and treated for optimal durability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Design & Planning</h3>
                    <p className="text-gray-400">Expert designers create detailed blueprints, balancing aesthetics with functionality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Skilled Crafting</h3>
                    <p className="text-gray-400">Master artisans shape each piece using traditional joinery and modern precision tools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Finishing & Quality Check</h3>
                    <p className="text-gray-400">Multiple coats of eco-friendly finish and rigorous quality inspection before delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8B7355] text-sm font-medium tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#D4C4B0]" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <span className="text-[#8B7355] font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-semibold text-[#2C2C2C] mt-1">{item.title}</h3>
                    <p className="text-[#6B7280] mt-2">{item.description}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#8B7355] rounded-full -translate-x-1/2 border-4 border-[#FAF8F5]" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#8B7355]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Visit our showroom or browse our collection online. Our design consultants 
            are ready to help you find the perfect furniture for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center bg-white text-[#8B7355] px-8 py-4 rounded-full font-medium hover:bg-[#FAF8F5] transition-colors"
            >
              Browse Collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
