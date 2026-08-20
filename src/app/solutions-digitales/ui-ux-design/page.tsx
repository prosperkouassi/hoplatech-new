// src/app/solutions-digitales/ui-ux-design/page.tsx
import type { Metadata } from 'next';
import UiUxDesignPageClient from './UiUxDesignPageClient';

export const metadata: Metadata = {
  title: "Agence UI/UX Design et conception Figma à Abidjan | AlteractWeb",
  description:
    "AlteractWeb conçoit à Abidjan des interfaces UI/UX sur Figma : recherche, wireframes, maquettes web et mobile, prototypes, design systems et handoff développeur.",
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales/ui-ux-design',
  },
  openGraph: {
    title: "Agence UI/UX Design et conception Figma à Abidjan | AlteractWeb",
    description:
      "Transformez votre idée en une interface claire, esthétique et prête à être développée.",
    url: 'https://alteractweb.com/solutions-digitales/ui-ux-design',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UI/UX Design et conception Figma à Abidjan',
  serviceType: 'Conception UX/UI, prototypage et design system',
  url: 'https://alteractweb.com/solutions-digitales/ui-ux-design',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle différence entre UX Design et UI Design ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L’UX structure l’expérience, les parcours et la facilité d’utilisation. L’UI définit l’apparence visuelle et les interactions. Les deux disciplines sont complémentaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels types de projets pouvez-vous concevoir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AlteractWeb conçoit des sites web, applications mobiles, plateformes SaaS, tableaux de bord, boutiques e-commerce, landing pages, prototypes et design systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que contient le livrable Figma ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon le périmètre, le livrable peut inclure wireframes, maquettes, composants, styles, prototype interactif, assets et spécifications utiles à l’intégration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le développement est-il inclus dans la prestation UI/UX ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La conception et le développement sont deux prestations distinctes. AlteractWeb peut néanmoins assurer l’intégration ou collaborer avec l’équipe technique du client selon le périmètre retenu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je demander des modifications ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Les validations et cycles de révision sont organisés à chaque étape. Leur nombre et leur périmètre sont précisés dans la proposition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure un projet UI/UX ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée dépend du nombre d’écrans, des parcours, du niveau de recherche, des composants et des validations. Un calendrier est défini après le cadrage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pouvez-vous travailler avec notre identité visuelle existante ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Les interfaces peuvent décliner une charte existante ou nécessiter la définition préalable d’une direction visuelle et de règles digitales complémentaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qui possède les fichiers de conception après la livraison ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les droits, les accès au fichier Figma et les conditions d’utilisation ou de cession sont définis clairement dans la proposition et le contrat avant le démarrage.',
      },
    },
  ],
};

export default function UiUxDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <UiUxDesignPageClient />
    </>
  );
}