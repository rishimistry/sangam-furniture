import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sangam Furniture. Visit our showroom in Mumbai, call us, or send a message. We are here to help with all your furniture needs.',
  openGraph: {
    title: 'Contact Us | Sangam Furniture',
    description: 'Get in touch with Sangam Furniture for all your furniture needs.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
