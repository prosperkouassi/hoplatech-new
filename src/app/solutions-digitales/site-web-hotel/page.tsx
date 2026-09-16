import type { Metadata } from 'next';
import HotelWebsitePageClient from './HotelWebsitePageClient';

const pageUrl =
  'https://alteractweb.com/solutions-digitales/site-web-hotel';

export const metadata: Metadata = {
  title: "Création site web pour hôtel en Côte d’Ivoire | AlteractWeb",

  description:
    "Création de sites web pour hôtels en Côte d’Ivoire : chambres, réservation directe, SEO hôtelier, mobile et espace de gestion. Découvrez AlteractWeb.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Création de site web pour hôtel en Côte d’Ivoire | AlteractWeb",

    description:
      "Valorisez votre hôtel, développez vos réservations directes et améliorez votre visibilité avec un site hôtelier conçu par AlteractWeb.",

    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      "Création de site web pour hôtel en Côte d’Ivoire | AlteractWeb",

    description:
      "Site hôtelier, réservation directe, expérience mobile et référencement local : développez la présence digitale de votre hôtel avec AlteractWeb.",
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  '@id': `${pageUrl}#service`,

  name: "Création de site web pour hôtel en Côte d’Ivoire",

  alternateName: [
    'Création de site internet pour hôtel',
    'Conception de site web hôtelier',
  ],

  serviceType: 'Création et développement de site web pour hôtel',

  url: pageUrl,

  description:
    "AlteractWeb conçoit des sites web pour hôtels en Côte d’Ivoire avec présentation des chambres, réservation directe, expérience mobile et optimisation du référencement naturel.",

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

export default function SiteWebHotelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <HotelWebsitePageClient />
    </>
  );
}