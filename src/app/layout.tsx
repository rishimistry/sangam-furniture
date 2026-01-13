import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sangamfurniture.com'),
  title: {
    default: 'Sangam Furniture | Premium Handcrafted Furniture in India',
    template: '%s | Sangam Furniture',
  },
  description: 'Discover premium handcrafted furniture at Sangam Furniture. Shop living room, bedroom, office & dining furniture with 10-year warranty. Free delivery across India.',
  keywords: ['furniture', 'Indian furniture', 'handcrafted furniture', 'teak wood furniture', 'sofa', 'bed', 'dining table', 'office furniture', 'custom furniture', 'Mumbai furniture'],
  authors: [{ name: 'Sangam Furniture' }],
  creator: 'Sangam Furniture',
  publisher: 'Sangam Furniture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sangamfurniture.com',
    siteName: 'Sangam Furniture',
    title: 'Sangam Furniture | Premium Handcrafted Furniture in India',
    description: 'Discover premium handcrafted furniture at Sangam Furniture. Shop living room, bedroom, office & dining furniture with 10-year warranty.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sangam Furniture - Premium Handcrafted Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sangam Furniture | Premium Handcrafted Furniture',
    description: 'Discover premium handcrafted furniture with 10-year warranty. Free delivery across India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B7355" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FurnitureStore',
              name: 'Sangam Furniture',
              image: 'https://sangamfurniture.com/og-image.jpg',
              '@id': 'https://sangamfurniture.com',
              url: 'https://sangamfurniture.com',
              telephone: '+91-98765-43210',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Furniture Lane, Industrial Area',
                addressLocality: 'Mumbai',
                addressRegion: 'Maharashtra',
                postalCode: '400001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 19.076,
                longitude: 72.8777,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '10:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '11:00',
                  closes: '18:00',
                },
              ],
              priceRange: '₹₹₹',
              servesCuisine: 'Furniture',
            }),
          }}
        />
      </body>
    </html>
  );
}
