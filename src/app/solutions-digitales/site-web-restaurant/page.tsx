import type { Metadata } from 'next';
import RestaurantWebsitePageClient from './RestaurantWebsitePageClient';

const pageUrl =
  'https://alteractweb.com/solutions-digitales/site-web-restaurant';

export const metadata: Metadata = {
  title: "Création site web pour restaurant en Côte d’Ivoire | AlteractWeb",
  description:
    "Création de sites web pour restaurants en Côte d’Ivoire : menu digital, réservation de table, commande en ligne, mobile et SEO local avec AlteractWeb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Création de site web pour restaurant en Côte d’Ivoire | AlteractWeb",
    description:
      "Valorisez votre restaurant, facilitez les réservations et commandes et améliorez votre visibilité avec un site conçu par AlteractWeb.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Création de site web pour restaurant en Côte d’Ivoire | AlteractWeb",
    description:
      "Menu digital, réservation, commande en ligne, expérience mobile et SEO local pour votre restaurant.",
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: "Création de site web pour restaurant en Côte d’Ivoire",
  alternateName: [
    'Création de site internet pour restaurant',
    'Conception de site web pour restaurant',
  ],
  serviceType: 'Création et développement de site web pour restaurant',
  url: pageUrl,
  description:
    "AlteractWeb conçoit des sites web pour restaurants en Côte d’Ivoire avec menu digital, réservation de table, commande en ligne, expérience mobile et optimisation du référencement naturel.",
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
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: pageUrl,
  },
};

export default function SiteWebRestaurantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <RestaurantWebsitePageClient />
    </>
  );
}
