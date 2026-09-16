import type { Metadata } from 'next';
import UiUxDesignPageClient from './UiUxDesignPageClient';

const pageUrl =
  'https://alteractweb.com/solutions-digitales/ui-ux-design';

export const metadata: Metadata = {
  title: "Agence UI/UX Design Côte d’Ivoire & Figma | AlteractWeb",
  description:
    "Agence UI/UX Design en Côte d’Ivoire : wireframes, maquettes Figma, prototypes web et mobile, design systems et handoff développeur avec AlteractWeb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Agence UI/UX Design en Côte d’Ivoire | AlteractWeb",
    description:
      "Transformez votre idée en interface web ou mobile claire et prête à être développée grâce à notre expertise UX/UI et Figma.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agence UI/UX Design en Côte d’Ivoire | AlteractWeb",
    description:
      "UX Design, UI Design, wireframes, maquettes Figma, prototypes et design systems pour vos produits digitaux.",
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: "UI/UX Design et conception Figma en Côte d’Ivoire",
  alternateName: [
    'Agence UI/UX Design',
    'Conception UX/UI',
    'Création de maquettes Figma',
  ],
  serviceType: 'Conception UX/UI, prototypage et design system',
  url: pageUrl,
  description:
    "AlteractWeb conçoit à Abidjan et en Côte d’Ivoire des interfaces UX/UI pour sites web, applications mobiles et produits digitaux avec wireframes, maquettes Figma, prototypes et design systems.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <UiUxDesignPageClient />
    </>
  );
}
