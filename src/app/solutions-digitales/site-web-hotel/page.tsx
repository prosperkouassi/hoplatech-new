// src/app/solutions-digitales/site-web-hotel/page.tsx
import type { Metadata } from 'next';
import HotelWebsitePageClient from './HotelWebsitePageClient';

export const metadata: Metadata = {
  title: "Création de site web pour hôtel en Côte d’Ivoire | AlteractWeb",
  description:
    "AlteractWeb crée des sites web pour hôtels en Côte d’Ivoire : chambres, réservation directe, galerie immersive, SEO local et expérience mobile.",
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales/site-web-hotel',
  },
  openGraph: {
    title: "Création de site web pour hôtel en Côte d’Ivoire | AlteractWeb",
    description:
      "Transformez la présence digitale de votre hôtel en moteur de visibilité et de réservations directes.",
    url: 'https://alteractweb.com/solutions-digitales/site-web-hotel',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Création de site web pour hôtel en Côte d’Ivoire",
  serviceType: 'Conception et développement de site web hôtelier',
  url: 'https://alteractweb.com/solutions-digitales/site-web-hotel',
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

export default function SiteWebHotelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HotelWebsitePageClient />
    </>
  );
}