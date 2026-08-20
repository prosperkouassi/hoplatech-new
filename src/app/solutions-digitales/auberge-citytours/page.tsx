// src/app/solutions-digitales/auberge-citytours/page.tsx
import type { Metadata } from 'next';
import AubergeCityToursPageClient from './AubergeCityToursPageClient';

export const metadata: Metadata = {
  title: "Création de site web pour auberge et City Tours | AlteractWeb",
  description:
    "AlteractWeb crée des sites pour auberges et City Tours en Côte d’Ivoire : hébergements, circuits, réservation, paiement et SEO touristique.",
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales/auberge-citytours',
  },
  openGraph: {
    title: "Création de site web pour auberge et City Tours | AlteractWeb",
    description:
      "Valorisez vos hébergements, circuits et expériences touristiques avec un site immersif pensé pour la réservation.",
    url: 'https://alteractweb.com/solutions-digitales/auberge-citytours',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Création de site web pour auberge et City Tours en Côte d’Ivoire",
  serviceType: 'Conception de site web pour hébergement et activité touristique',
  url: 'https://alteractweb.com/solutions-digitales/auberge-citytours',
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

export default function AubergeCityToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AubergeCityToursPageClient />
    </>
  );
}