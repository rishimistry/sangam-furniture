import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#D4C4B0]">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#8B7355] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6B5344] transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/catalogue"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#8B7355] px-6 py-3 rounded-full font-medium hover:bg-[#FAF8F5] transition-colors border border-[#8B7355]"
          >
            <ArrowLeft size={18} />
            Browse Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}
