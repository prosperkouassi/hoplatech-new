// src/app/solutions-digitales/page.tsx
import type { Metadata } from 'next';
import SolutionsDigitalesPageClient from './SolutionsDigitalesPageClient';

export const metadata: Metadata = {
  title: 'Solutions digitales et création sur mesure | AlteractWeb',
  description:
    'Découvrez les solutions digitales AlteractWeb : sites pour hôtels, restaurants et tourisme, sites corporate, e-commerce, applications mobiles et UI/UX Design.',
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales',
  },
  openGraph: {
    title: 'Solutions digitales et création sur mesure | AlteractWeb',
    description:
      'Des expériences web et mobiles conçues pour valoriser votre activité, simplifier les parcours et générer des opportunités.',
    url: 'https://alteractweb.com/solutions-digitales',
    type: 'website',
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