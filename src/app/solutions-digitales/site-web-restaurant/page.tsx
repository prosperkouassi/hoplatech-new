// src/app/solutions-digitales/site-web-restaurant/page.tsx
import type { Metadata } from 'next';
import RestaurantWebsitePageClient from './RestaurantWebsitePageClient';

export const metadata: Metadata = {
  title: "Création de site web pour restaurant en Côte d’Ivoire | AlteractWeb",
  description:
    "AlteractWeb crée des sites web pour restaurants en Côte d’Ivoire : menu digital, réservation, click & collect, galerie culinaire et SEO local.",
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales/site-web-restaurant',
  },
  openGraph: {
    title: "Création de site web pour restaurant en Côte d’Ivoire | AlteractWeb",
    description:
      "Prolongez l’excellence de votre table avec un site pensé pour séduire, réserver et commander.",
    url: 'https://alteractweb.com/solutions-digitales/site-web-restaurant',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Création de site web pour restaurant en Côte d’Ivoire",
  serviceType: 'Conception et développement de site web pour restaurant',
  url: 'https://alteractweb.com/solutions-digitales/site-web-restaurant',
  areaServed: {
    '@type': 'Country',
    name: "Côte d’Ivoire",
  },
  provider: {
    '@type': 'Organization',
    name: 'AlteractWeb',
    url: 'https://alteractweb.com',
  },
};

export default function SiteWebRestaurantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RestaurantWebsitePageClient />
    </>
  );
}