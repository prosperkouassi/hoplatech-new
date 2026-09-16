import type { Metadata } from 'next';
import CorporateWebsitePageClient from './CorporateWebsitePageClient';

const pageUrl =
  'https://alteractweb.com/solutions-digitales/site-vitrine-corporate';

export const metadata: Metadata = {
  title: "Création site internet entreprise Côte d’Ivoire | AlteractWeb",
  description:
    "Création de sites internet professionnels en Côte d’Ivoire : site vitrine sur mesure, design, SEO, performance et administration simple avec AlteractWeb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Création de site internet pour entreprise en Côte d’Ivoire | AlteractWeb",
    description:
      "Valorisez votre entreprise et générez des contacts avec un site vitrine professionnel, rapide et conçu sur mesure par AlteractWeb.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Création de site internet pour entreprise en Côte d’Ivoire | AlteractWeb",
    description:
      "Site vitrine professionnel, responsive, performant et optimisé pour le référencement naturel.",
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: "Création de site internet pour entreprise en Côte d’Ivoire",
  alternateName: [
    'Création de site vitrine professionnel',
    'Création de site web pour entreprise',
    'Conception de site corporate',
  ],
  serviceType: 'Création et développement de site internet professionnel',
  url: pageUrl,
  description:
    "AlteractWeb conçoit des sites internet professionnels et sites vitrines sur mesure pour les entreprises en Côte d’Ivoire, avec design responsive, performance et optimisation SEO.",
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

export default function SiteVitrineCorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <CorporateWebsitePageClient />
    </>
  );
}
