import type { Metadata } from 'next';
import GestionLocativePageClient from './GestionLocativePageClient';

const pageUrl = 'https://alteractweb.com/solutions/gestion-locative';

export const metadata: Metadata = {
  title: "Logiciel gestion locative Côte d’Ivoire | AlteractWeb",
  description:
    "Logiciel de gestion locative en Côte d’Ivoire : biens, locataires, loyers, contrats, paiements, maintenance et suivi financier avec AlteractWeb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Logiciel de gestion locative en Côte d’Ivoire | AlteractWeb",
    description:
      "Centralisez vos biens, locataires, loyers, contrats, paiements et interventions dans une plateforme de gestion locative complète.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Logiciel de gestion locative en Côte d’Ivoire | AlteractWeb",
    description:
      "Une plateforme pour gérer vos biens immobiliers, locataires, loyers, contrats, paiements et interventions.",
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${pageUrl}#software`,
  name: 'Solution de gestion locative AlteractWeb',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Property Management Software',
  operatingSystem: 'Web',
  url: pageUrl,
  description:
    "Solution web de gestion locative conçue par AlteractWeb pour centraliser les biens immobiliers, locataires, loyers, contrats, paiements, interventions et informations financières.",
  areaServed: {
    '@type': 'Country',
    name: "Côte d’Ivoire",
  },
  author: {
    '@type': 'Organization',
    '@id': 'https://alteractweb.com/#organization',
    name: 'AlteractWeb',
    url: 'https://alteractweb.com',
  },
};

export default function GestionLocativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <GestionLocativePageClient />
    </>
  );
}
