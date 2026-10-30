// src/app/solutions-digitales/page.tsx
import type { Metadata } from 'next';
import SolutionsDigitalesPageClient from './SolutionsDigitalesPageClient';


export const metadata: Metadata = {
  title: "Création de site web professionnel en Côte d'Ivoire | AlteractWeb",

  description:
    "AlteractWeb accompagne les entreprises en Côte d'Ivoire dans la création de sites web professionnels : vitrines, e-commerce et solutions sur mesure.",

  alternates: {
    canonical: "https://alteractweb.com/solutions-digitales",
  },

  openGraph: {
    title: "Création de site web professionnel en Côte d'Ivoire | AlteractWeb",
    description:
      "AlteractWeb accompagne les entreprises en Côte d'Ivoire dans la création de sites web professionnels : vitrines, e-commerce et solutions sur mesure.",
    url: "https://alteractweb.com/solutions-digitales",
    siteName: "AlteractWeb",
    locale: "fr_CI",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Solutions digitales AlteractWeb',
  url: 'https://alteractweb.com/solutions-digitales',
  description:
    'Catalogue des services de création digitale et des offres sectorielles AlteractWeb.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      ['Site web pour hôtel', 'site-web-hotel'],
      ['Site web pour restaurant', 'site-web-restaurant'],
      ['Site web pour auberge et City Tours', 'auberge-citytours'],
      ['Site vitrine corporate', 'site-vitrine-corporate'],
      ['Site e-commerce', 'site-ecommerce'],
      ['Application mobile', 'application-mobile'],
      ['UI/UX Design', 'ui-ux-design'],
    ].map(([name, slug], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: `https://alteractweb.com/solutions-digitales/${slug}`,
    })),
  },
};

export default function SolutionsDigitalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <SolutionsDigitalesPageClient />
    </>
  );
}