import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniture Catalogue',
  description: 'Browse our complete collection of premium handcrafted furniture. Shop sofas, beds, dining tables, office furniture and more with free delivery across India.',
  openGraph: {
    title: 'Furniture Catalogue | Sangam Furniture',
    description: 'Browse our complete collection of premium handcrafted furniture.',
  },
};

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
