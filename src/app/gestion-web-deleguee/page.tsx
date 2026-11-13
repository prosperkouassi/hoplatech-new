import type { Metadata } from "next";
import GestionWebDelegueeContent from "./GestionWebDelegueeContent";

const url = "https://alteractweb.com/gestion-web-deleguee";

export const metadata: Metadata = {
  title: "TMA à Abidjan et gestion de sites web | AlteractWeb",
  description: "TMA et maintenance de logiciels métiers à Abidjan, gestion de sites web en Côte d’Ivoire. Diagnostic technique obligatoire et contrat annuel sur mesure.",
  alternates: { canonical: url },
  openGraph: {
    title: "TMA et gestion de sites web à Abidjan | AlteractWeb",
    description: "Gestion de sites internet et maintenance de logiciels métiers en Côte d’Ivoire. TMA sur mesure après diagnostic technique.",
    url,
    type: "website",
    locale: "fr_CI",
    siteName: "AlteractWeb",
  },
  robots: { index: true, follow: true },
};

const faq = [
  { question: "Qu’est-ce que la TMA pour un logiciel métier ?", answer: "La Tierce Maintenance Applicative est la maintenance confiée à un prestataire externe. Elle couvre, selon le contrat, la correction des anomalies, la prévention des incidents et les évolutions du logiciel métier." },
  { question: "Proposez-vous la TMA et la maintenance de logiciels métiers à Abidjan ?", answer: "Oui. AlteractWeb étudie les besoins des entreprises à Abidjan et en Côte d’Ivoire, sous réserve d’un diagnostic technique préalable et des droits nécessaires pour intervenir sur le logiciel." },
  { question: "Pouvez-vous reprendre un site ou un logiciel développé par un autre prestataire ?", answer: "Oui, sous réserve d’un diagnostic préalable favorable, de la disponibilité des accès nécessaires et des droits d’intervention sur la solution." },
  { question: "Le diagnostic technique est-il obligatoire ?", answer: "Oui. Il permet d’évaluer la maintenabilité, la sécurité, l’architecture et les risques avant toute proposition de prise en charge. Le diagnostic fait l’objet d’un devis distinct." },
  { question: "La TMA comprend-elle de nouvelles fonctionnalités ?", answer: "Les évolutions peuvent être intégrées à la feuille de route annuelle dans la limite du périmètre et du budget convenus. Les développements hors contrat sont chiffrés séparément." },
  { question: "Pourquoi ne proposez-vous pas de tarif forfaitaire ?", answer: "Chaque site ou logiciel métier présente une complexité, un historique et des besoins différents. Nous établissons une proposition personnalisée après diagnostic." },
  { question: "Quelle est la durée de l’accompagnement ?", answer: "L’offre repose sur un engagement de 12 mois, avec des modalités de facturation mensuelles ou trimestrielles définies au contrat." },
];

export default function GestionWebDelegueePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: "Gestion Web Déléguée et Tierce Maintenance Applicative", serviceType: "Gestion de sites internet et TMA de logiciels métiers", provider: { "@type": "Organization", name: "AlteractWeb", url: "https://alteractweb.com" }, areaServed: [{ "@type": "City", name: "Abidjan" }, { "@type": "Country", name: "Côte d’Ivoire" }], url, description: "Gestion, maintenance corrective, préventive et évolutive de sites internet et logiciels métiers après diagnostic technique préalable." },
      { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <GestionWebDelegueeContent faq={faq} />
  </>;
}
