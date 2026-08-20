// src/app/solutions-digitales/application-mobile/page.tsx
import type { Metadata } from 'next';
import MobileApplicationPageClient from './MobileApplicationPageClient';

export const metadata: Metadata = {
  title: "Développement d’application mobile sur mesure à Abidjan | AlteractWeb",
  description:
    "AlteractWeb conçoit des applications mobiles sur mesure à Abidjan : cadrage MVP, UX/UI, développement iOS et Android, API, tests, stores et maintenance.",
  alternates: {
    canonical: 'https://alteractweb.com/solutions-digitales/application-mobile',
  },
  openGraph: {
    title: "Développement d’application mobile sur mesure à Abidjan | AlteractWeb",
    description:
      "Transformez votre idée en application mobile fiable, intuitive et évolutive pour vos clients ou vos équipes.",
    url: 'https://alteractweb.com/solutions-digitales/application-mobile',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Développement d’application mobile sur mesure à Abidjan",
  serviceType: 'Conception et développement d’applications mobiles',
  url: 'https://alteractweb.com/solutions-digitales/application-mobile',
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
      name: 'L’application fonctionnera-t-elle sur iOS et Android ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le périmètre peut couvrir iOS, Android ou les deux. Le choix entre développement multiplateforme, natif ou PWA dépend des utilisateurs, des fonctionnalités, du budget et des performances attendues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre une application mobile et une PWA ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une application mobile est distribuée notamment par les stores et accède plus largement aux fonctions du téléphone. Une PWA s’utilise depuis le navigateur et peut être plus rapide à lancer, mais présente certaines limites selon les appareils.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qui publie l’application sur les stores ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AlteractWeb peut préparer et accompagner la publication. Les comptes Apple et Google sont idéalement créés au nom du client, qui conserve ainsi le contrôle de son application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les comptes développeur et services externes sont-ils inclus ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les abonnements aux comptes développeur, services cloud, cartographie, SMS, paiement ou autres solutions tierces sont identifiés séparément et restent soumis aux tarifs de leurs fournisseurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'L’application peut-elle se connecter à mes outils existants ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui lorsque les outils concernés proposent des API ou des interfaces compatibles. Une étude technique permet de vérifier les possibilités, la sécurité et les limites de chaque connexion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour développer une application ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le délai dépend des parcours, des fonctionnalités, des connexions, du back-end et des validations. Un calendrier réaliste est défini après le cadrage du MVP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il après la publication ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le lancement est suivi afin de corriger les anomalies éventuelles. La maintenance, les mises à jour liées aux systèmes et les évolutions fonctionnelles sont organisées selon l’accompagnement retenu.',
      },
    },
    {
      '@type': 'Question',
      name: 'À qui appartiennent le code et les données ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les droits, les accès, les données et les conditions de remise des sources sont précisés dans la proposition et le contrat afin que le cadre de propriété soit clair avant le développement.',
      },
    },
  ],
};

export default function ApplicationMobilePage() {
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
      <MobileApplicationPageClient />
    </>
  );
}