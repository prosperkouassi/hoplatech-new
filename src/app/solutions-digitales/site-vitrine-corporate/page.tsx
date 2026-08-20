// src/app/solutions-digitales/site-vitrine-corporate/page.tsx
import type { Metadata } from 'next';
import CorporateWebsitePageClient from './CorporateWebsitePageClient';

export const metadata: Metadata = {
  title: "Création de site vitrine corporate en Côte d’Ivoire | AlteractWeb",
  description:
    "AlteractWeb conçoit des sites vitrines corporate sur mesure en Côte d’Ivoire : design professionnel, performance, SEO, sécurité et administration simplifiée.",
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales/site-vitrine-corporate',
  },
  openGraph: {
    title: "Création de site vitrine corporate en Côte d’Ivoire | AlteractWeb",
    description:
      "Valorisez votre entreprise, vos expertises et votre image de marque avec un site corporate rapide, crédible et conçu sur mesure.",
    url: 'https://alteractweb.com/solutions-digitales/site-vitrine-corporate',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Création de site vitrine corporate en Côte d’Ivoire",
  serviceType: 'Conception et développement de site web vitrine corporate',
  url: 'https://alteractweb.com/solutions-digitales/site-vitrine-corporate',
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

export default function SiteVitrineCorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CorporateWebsitePageClient />
    </>
  );
}