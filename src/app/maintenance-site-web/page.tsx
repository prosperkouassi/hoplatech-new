import type { Metadata } from "next";
import MaintenanceContent from "./MaintenanceContent";

const url = "https://alteractweb.com/maintenance-site-web";

export const metadata: Metadata = {
  title: "Maintenance site web Abidjan, Côte d’Ivoire | AlteractWeb",
  description:
    "Maintenance de site web à Abidjan et en Côte d’Ivoire : WordPress, Next.js et React. Sécurité, mises à jour et suivi dès 18 000 FCFA/mois.",
  alternates: { canonical: url },
  openGraph: {
    title: "Maintenance de site web à Abidjan | AlteractWeb",
    description:
      "Maintenance de sites WordPress, Next.js et React à Abidjan et en Côte d’Ivoire. Forfaits mensuels dès 18 000 FCFA.",
    url,
    type: "website",
    locale: "fr_CI",
    siteName: "AlteractWeb",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance de site web à Abidjan | AlteractWeb",
    description: "Maintenance WordPress, Next.js et React en Côte d’Ivoire, dès 18 000 FCFA/mois.",
  },
};

const faq = [
  {
    question: "Quel est le prix d’une maintenance de site web en Côte d’Ivoire ?",
    answer:
      "Les forfaits AlteractWeb commencent à 18 000 FCFA par mois pour un CMS et 23 000 FCFA par mois pour un site Framework. Le tarif dépend du périmètre technique et des prestations incluses.",
  },
  {
    question: "Assurez-vous la maintenance WordPress à Abidjan ?",
    answer:
      "Oui, sous réserve d’un diagnostic initial. Nos offres CMS couvrent notamment les mises à jour compatibles, les contrôles et, selon le forfait, les sauvegardes et la gestion des contenus.",
  },
  {
    question: "Pouvez-vous maintenir un site Next.js ou React ?",
    answer:
      "Oui. Nos offres Framework incluent notamment le suivi des dépendances, les vérifications de build et de déploiement, et les contrôles de sécurité selon le forfait.",
  },
  {
    question: "Pouvez-vous maintenir un site créé par une autre agence ?",
    answer:
      "Oui, après un diagnostic technique et sous réserve de disposer des accès nécessaires. Une remise à niveau initiale peut faire l’objet d’un devis séparé.",
  },
  {
    question: "Les modifications de textes et d’images sont-elles comprises ?",
    answer:
      "Elles sont incluses dans les forfaits Premium, dans la limite de cinq demandes simples et de deux heures d’intervention au total par mois. Les contenus doivent être fournis par le client.",
  },
  {
    question: "L’hébergement et le nom de domaine sont-ils inclus ?",
    answer:
      "Non. Les frais d’hébergement, de domaine, de licences et d’abonnements tiers sont distincts des forfaits de maintenance.",
  },
];

export default function MaintenancePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Maintenance de sites web",
        serviceType: "Maintenance de sites internet CMS et Framework",
        provider: { "@type": "Organization", name: "AlteractWeb", url: "https://alteractweb.com" },
        areaServed: { "@type": "Country", name: "Côte d’Ivoire" },
        url,
        description:
          "Maintenance technique de sites web CMS, WordPress, Next.js et React : mises à jour compatibles, contrôles, audits, sauvegardes et gestion de contenus selon forfait.",
        offers: [
          { "@type": "Offer", name: "CMS Essentiel", price: "18000", priceCurrency: "XOF" },
          { "@type": "Offer", name: "CMS Sérénité", price: "25000", priceCurrency: "XOF" },
          { "@type": "Offer", name: "CMS Premium", price: "55000", priceCurrency: "XOF" },
          { "@type": "Offer", name: "Framework Essentiel", price: "23000", priceCurrency: "XOF" },
          { "@type": "Offer", name: "Framework Sérénité", price: "33000", priceCurrency: "XOF" },
          { "@type": "Offer", name: "Framework Premium", price: "63000", priceCurrency: "XOF" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <MaintenanceContent faq={faq} />
    </>
  );
}
