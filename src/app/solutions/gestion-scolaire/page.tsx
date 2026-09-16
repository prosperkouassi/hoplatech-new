import type { Metadata } from 'next';
import GestionScolairePageClient from './GestionScolairePageClient';

const pageUrl = 'https://alteractweb.com/solutions/gestion-scolaire';

export const metadata: Metadata = {
  title: "Logiciel gestion scolaire Côte d’Ivoire | AlteractWeb",
  description:
    "Logiciel de gestion scolaire en Côte d’Ivoire : élèves, inscriptions, notes, absences, frais de scolarité, classes et communication avec les parents.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Logiciel de gestion scolaire en Côte d’Ivoire | AlteractWeb",
    description:
      "Centralisez élèves, inscriptions, notes, absences, frais scolaires et communication avec les familles dans une plateforme de gestion scolaire.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Logiciel de gestion scolaire en Côte d’Ivoire | AlteractWeb",
    description:
      "Une plateforme pour gérer élèves, inscriptions, notes, absences, classes, frais scolaires et communication avec les parents.",
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${pageUrl}#software`,
  name: 'Solution de gestion scolaire AlteractWeb',
  applicationCategory: 'EducationalApplication',
  applicationSubCategory: 'School Management Software',
  operatingSystem: 'Web',
  url: pageUrl,
  description:
    "Solution web de gestion scolaire conçue par AlteractWeb pour centraliser les élèves, inscriptions, classes, notes, absences, emplois du temps, frais de scolarité et communication avec les familles.",
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

export default function GestionScolairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <GestionScolairePageClient />
    </>
  );
}
