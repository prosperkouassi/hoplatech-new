import type { Metadata } from 'next';
import GestionAssoPageClient from './GestionAssoPageClient';

const pageUrl = 'https://alteractweb.com/solutions/gestion-asso';

export const metadata: Metadata = {
  title: "Logiciel gestion association Côte d’Ivoire | AlteractWeb",
  description:
    "Logiciel de gestion associative en Côte d’Ivoire : adhérents, cotisations, paiements, événements, communication et suivi financier avec AlteractWeb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Logiciel de gestion associative en Côte d’Ivoire | AlteractWeb",
    description:
      "Centralisez vos adhérents, cotisations, paiements, événements et communications dans une plateforme de gestion associative simple et complète.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Logiciel de gestion associative en Côte d’Ivoire | AlteractWeb",
    description:
      "Une plateforme pour gérer vos adhérents, cotisations, paiements, événements, communications et suivi financier.",
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${pageUrl}#software`,
  name: 'Solution de gestion associative AlteractWeb',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Association Management Software',
  operatingSystem: 'Web',
  url: pageUrl,
  description:
    "Solution web de gestion associative conçue par AlteractWeb pour centraliser les adhérents, cotisations, paiements, événements, communications et informations financières des associations.",
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

export default function GestionAssoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <GestionAssoPageClient />
    </>
  );
}
