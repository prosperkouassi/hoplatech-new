import type { Metadata } from 'next';
import AubergeCityToursPageClient from './AubergeCityToursPageClient';

const pageUrl =
  'https://alteractweb.com/solutions-digitales/auberge-citytours';

export const metadata: Metadata = {
  title: "Site web auberge & City Tours Côte d’Ivoire | AlteractWeb",
  description:
    "Création de sites web pour auberges et City Tours en Côte d’Ivoire : hébergements, circuits, réservation directe, paiement et SEO touristique.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Création de site web pour auberge & City Tours | AlteractWeb",
    description:
      "Valorisez vos hébergements, circuits et expériences touristiques en Côte d’Ivoire avec un site conçu pour développer les réservations directes.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Site web pour auberge & City Tours en Côte d’Ivoire | AlteractWeb",
    description:
      "Hébergements, circuits, réservation directe, paiement et SEO touristique : développez votre activité avec AlteractWeb.",
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: "Création de site web pour auberge et City Tours en Côte d’Ivoire",
  alternateName: [
    'Création de site internet pour auberge',
    'Création de site web pour City Tours',
    'Création de site web touristique',
  ],
  serviceType:
    'Conception de site web pour hébergement et activité touristique',
  url: pageUrl,
  description:
    "AlteractWeb conçoit des sites web pour auberges, maisons d’hôtes, City Tours, guides et activités touristiques en Côte d’Ivoire avec réservation directe, paiement et référencement touristique.",
  areaServed: {
    '@type': 'Country',
    name: "Côte d’Ivoire",
  },
  provider: {
    '@type': 'Organization',
    '@id': 'https://alteractweb.com/#organization',
    name: 'AlteractWeb',
    url: 'https://alteractweb.com',
  },
};

export default function AubergeCityToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <AubergeCityToursPageClient />
    </>
  );
}
