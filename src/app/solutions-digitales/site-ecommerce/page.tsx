import type { Metadata } from 'next';
import EcommerceWebsitePageClient from './EcommerceWebsitePageClient';

const pageUrl =
  'https://alteractweb.com/solutions-digitales/site-ecommerce';

export const metadata: Metadata = {
  title: "Création site e-commerce Côte d’Ivoire | AlteractWeb",
  description:
    "Création de sites e-commerce en Côte d’Ivoire : boutique en ligne, Mobile Money, paiement, commandes, livraison et SEO avec AlteractWeb.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Création de site e-commerce en Côte d’Ivoire | AlteractWeb",
    description:
      "Créez une boutique en ligne rapide et rassurante avec catalogue, paiement, Mobile Money, gestion des commandes et livraison.",
    url: pageUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Création de site e-commerce en Côte d’Ivoire | AlteractWeb",
    description:
      "Boutique en ligne sur mesure, Mobile Money, commandes, livraison et référencement naturel.",
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: "Création de site e-commerce en Côte d’Ivoire",
  alternateName: [
    'Création de boutique en ligne',
    'Création de site marchand',
    'Développement de boutique e-commerce',
  ],
  serviceType: 'Création et développement de boutique en ligne',
  url: pageUrl,
  description:
    "AlteractWeb conçoit des sites e-commerce et boutiques en ligne en Côte d’Ivoire avec catalogue, paiement en ligne, Mobile Money, gestion des commandes, livraison et optimisation SEO.",
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
      name: 'Quels moyens de paiement peuvent être intégrés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La boutique peut intégrer des solutions compatibles avec les cartes bancaires, le Mobile Money, le paiement à la livraison ou le virement selon le marché ciblé et les prestataires disponibles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des commissions sur les ventes ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AlteractWeb ne prélève pas automatiquement de commission sur chaque vente. Les prestataires de paiement et certains services externes peuvent appliquer leurs propres frais, présentés avant leur intégration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourrai-je gérer les produits et les commandes moi-même ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Une interface d’administration peut permettre de gérer les produits, prix, stocks, promotions, commandes et clients selon le périmètre du projet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment sont gérées la livraison et les zones desservies ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les règles de livraison sont configurées selon les zones, tarifs, seuils et partenaires retenus. Une intégration avec un service logistique est possible lorsque celui-ci propose une solution compatible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je utiliser mon nom de domaine et mon hébergement actuels ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, après vérification de leur compatibilité avec les besoins de performance, de sécurité, de stockage et de trafic de la boutique.',
      },
    },
    {
      '@type': 'Question',
      name: 'La boutique est-elle sécurisée ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le projet intègre les bonnes pratiques de sécurité, le HTTPS et une configuration adaptée. Les paiements sont traités par les prestataires agréés retenus et non stockés directement par la boutique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qui ajoute les produits et les contenus au lancement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le nombre de produits intégrés et le travail sur les textes ou visuels sont définis dans le périmètre. Une importation ou une prestation de création de contenus peut être prévue.',
      },
    },
    {
      '@type': 'Question',
      name: 'La maintenance est-elle prévue après la mise en ligne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La livraison comprend les tests, la mise en ligne et la prise en main. La maintenance continue, la surveillance, les sauvegardes et les évolutions peuvent faire l’objet d’un accompagnement distinct.',
      },
    },
  ],
};

export default function SiteEcommercePage() {
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
      <EcommerceWebsitePageClient />
    </>
  );
}
