// src/app/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  Building2,
  GraduationCap,
  Hotel,
  Lightbulb,
  Map,
  Palette,
  ShoppingBag,
  Smartphone,
  Users,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import AtelierHeroBackground from "@/components/AtelierHeroBackground";
import AtelierMobileCarousel from "@/components/AtelierMobileCarousel";
import AtelierFinalCTA from "@/components/AtelierFinalCTA";
import AtelierNeedBoards from "@/components/AtelierNeedBoards";
import AtelierWorkbench from "@/components/AtelierWorkbench";
import styles from "./atelier.module.css";
import offerStyles from "./atelier-offers.module.css";

import { solutions } from "@/data/solutions";

const siteUrl = "https://alteractweb.com";

const whatsappHref =
  "https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20mon%20projet%20digital.";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute: "Agence web Abidjan | Sites internet & logiciels | AlteractWeb",
  },

  description:
    "Agence web pour les entreprises à Abidjan et en Côte d’Ivoire : création de sites internet, e-commerce, applications et logiciels métiers sur mesure.",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Agence web à Abidjan | AlteractWeb",
    description:
      "Création de sites web, e-commerce, applications mobiles, UI/UX et logiciels métiers pour les entreprises en Côte d’Ivoire.",
    url: siteUrl,
    type: "website",
    locale: "fr_CI",
    siteName: "AlteractWeb",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agence web à Abidjan | AlteractWeb",
    description:
      "Sites web, applications mobiles et logiciels métiers conçus pour accompagner les entreprises en Côte d’Ivoire.",
  },
};

/* =========================================================
   OFFRES DIGITALES
========================================================= */

type DigitalOffer = {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: LucideIcon;
};

const digitalOffers: DigitalOffer[] = [
  {
    title: "Site web pour hôtel",
    description:
      "Présentez vos chambres, votre destination et facilitez les demandes de réservation directe.",
    href: "/solutions-digitales/site-web-hotel",
    category: "Hôtellerie",
    icon: Hotel,
  },
  {
    title: "Site web pour restaurant",
    description:
      "Valorisez votre cuisine, votre carte et transformez l’intérêt en réservation ou commande.",
    href: "/solutions-digitales/site-web-restaurant",
    category: "Restauration",
    icon: Utensils,
  },
  {
    title: "Auberge & City Tours",
    description:
      "Réunissez hébergements, circuits et expériences locales dans un parcours touristique clair.",
    href: "/solutions-digitales/auberge-citytours",
    category: "Tourisme",
    icon: Map,
  },
  {
    title: "Site vitrine corporate",
    description:
      "Renforcez votre crédibilité avec un site professionnel, rapide et fidèle à votre identité.",
    href: "/solutions-digitales/site-vitrine-corporate",
    category: "Présence en ligne",
    icon: Building2,
  },
  {
    title: "Site e-commerce",
    description:
      "Vendez vos produits grâce à une boutique fluide, sécurisée et simple à administrer.",
    href: "/solutions-digitales/site-ecommerce",
    category: "Commerce en ligne",
    icon: ShoppingBag,
  },
  {
    title: "Application mobile",
    description:
      "Transformez votre idée ou votre processus métier en application iOS et Android intuitive.",
    href: "/solutions-digitales/application-mobile",
    category: "Produit mobile",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Clarifiez les parcours et donnez vie à votre produit avec des interfaces utiles et cohérentes.",
    href: "/solutions-digitales/ui-ux-design",
    category: "Design d’expérience",
    icon: Palette,
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question:
      "Quelle est la différence entre une solution digitale et une solution Tech ?",
    answer:
      "Les solutions digitales concernent votre présence, votre image et vos parcours clients : sites web, e-commerce, applications mobiles et UI/UX. Les solutions Tech sont des logiciels métiers conçus pour gérer une activité locative, scolaire ou associative.",
  },
  {
    question: "Comment choisir la solution adaptée à mon activité ?",
    answer:
      "Nous commençons par clarifier vos objectifs, vos utilisateurs, vos contraintes et les tâches à simplifier. Cet échange permet de recommander une offre existante ou une conception sur mesure.",
  },
  {
    question:
      "AlteractWeb s’occupe-t-il du nom de domaine et de l’hébergement ?",
    answer:
      "Oui. Selon le projet, nous pouvons vous conseiller, configurer le nom de domaine, mettre en place l’hébergement et assurer la mise en ligne dans un environnement sécurisé.",
  },
  {
    question: "Les sites et applications sont-ils adaptés aux téléphones ?",
    answer:
      "Oui. Chaque interface est pensée pour fonctionner sur mobile, tablette et ordinateur. Les parcours, la lisibilité et les performances sont vérifiés sur les différents formats.",
  },
  {
    question: "Le référencement naturel est-il intégré ?",
    answer:
      "Oui. La structure des pages, les titres, les métadonnées, les contenus, les performances et le balisage sémantique sont travaillés dès la conception. Le positionnement dépend ensuite de la concurrence et du travail éditorial dans la durée.",
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer:
      "Oui. Nous préparons la prise en main et pouvons proposer un suivi, une maintenance et des évolutions adaptées aux besoins du projet.",
  },
];

/* =========================================================
   DONNÉES STRUCTURÉES
========================================================= */

const schemaOffers = [
  ...digitalOffers.map((offer) => ({
    name: offer.title,
    path: offer.href,
  })),
  {
    name: "Maintenance de sites web",
    path: "/maintenance-site-web",
  },
  {
    name: "Gestion Web Déléguée & TMA",
    path: "/gestion-web-deleguee",
  },
  {
    name: "Gestion locative",
    path: "/solutions/gestion-locative",
  },
  {
    name: "Gestion scolaire",
    path: "/solutions/gestion-scolaire",
  },
  {
    name: "Gestion associative",
    path: "/solutions/gestion-asso",
  },
];

const homeSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,

      name: "Agence web Abidjan | Sites internet & logiciels | AlteractWeb",

      description:
        "AlteractWeb accompagne les entreprises à Abidjan et en Côte d’Ivoire dans la création de sites internet, applications mobiles, UI/UX et logiciels métiers.",

      inLanguage: "fr-CI",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#organization`,
      },
    },

    {
      "@type": "ItemList",
      name: "Solutions et services AlteractWeb",
      numberOfItems: schemaOffers.length,

      itemListElement: schemaOffers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: offer.name,
        url: `${siteUrl}${offer.path}`,
      })),
    },

    {
      "@type": "FAQPage",

      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

/* =========================================================
   SOLUTIONS TECH
========================================================= */

const solutionIcons: Record<string, LucideIcon> = {
  "gestion-locative": Building2,
  "gestion-scolaire": GraduationCap,
  "gestion-asso": Users,
};

/* =========================================================
   MÉTHODE
========================================================= */

const methodSteps = [
  {
    number: "01",
    title: "Comprendre",
    text: "Nous analysons votre activité, vos objectifs et les attentes de vos utilisateurs.",
  },
  {
    number: "02",
    title: "Structurer",
    text: "Nous organisons les contenus, les fonctionnalités et les parcours prioritaires.",
  },
  {
    number: "03",
    title: "Concevoir",
    text: "Nous créons une expérience cohérente, performante et fidèle à votre identité.",
  },
  {
    number: "04",
    title: "Accompagner",
    text: "Nous préparons la mise en ligne, la prise en main et les futures évolutions.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  return (
    <main id="contenu" className={styles.atelier}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className={styles.hero} aria-labelledby="atelier-title">
        <AtelierHeroBackground />
        <div className={styles.wrap}>
          <div className={styles.heroTop}>
            <span>ALTERACTWEB · L’ATELIER DIGITAL</span>
            <span>De l’idée à l’usage</span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Expérience française · Ancrage ivoirien
              </p>
              <h1 id="atelier-title">
                Votre agence web
                <br />à Abidjan, <em>l’atelier</em>
                <br />
                de vos idées
              </h1>
              <p className={styles.intro}>
                Des sites qui valorisent votre activité. Des applications et des
                logiciels qui simplifient votre quotidien. Nous concevons le
                digital autour de votre entreprise.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primary} href="/contact">
                  Parlons de votre projet
                </Link>
                <a className={styles.secondary} href="#nos-expertises">
                  Explorer l’atelier
                </a>
              </div>
              <p className={styles.heroNote}>
                Un besoin concret. Un plan clair. Une solution sur mesure.
              </p>
            </div>
            <AtelierWorkbench />
          </div>
          <div className={styles.heroFoot}>
            <span>CONCEVOIR AVEC VOUS. CONSTRUIRE POUR VOUS.</span>
            <a href="#votre-besoin">La visite commence ici</a>
          </div>
        </div>
      </section>

      <section
        id="votre-besoin"
        className={styles.section}
        aria-labelledby="besoin-title"
      >
        <div className={styles.wrap}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Sur la table de travail</p>
              <h2 id="besoin-title">
                Tout commence
                <br />
                par <em>votre besoin</em>
              </h2>
            </div>
            <p>
              Pas besoin de parler technique. Dites-nous ce que vous souhaitez
              améliorer, nous dessinons la suite avec vous.
            </p>
          </div>
          <AtelierNeedBoards />
        </div>
      </section>

      <section
        id="nos-expertises"
        className={`${styles.section} ${styles.services}`}
        aria-labelledby="expertises-title"
      >
        <div className={styles.wrap}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Les savoir-faire de l’atelier</p>
              <h2 id="expertises-title">
                La bonne forme,
                <br />
                pour <em>chaque projet</em>
              </h2>
            </div>
            <p>
              Sites internet, applications mobiles ou design d’interface :
              retrouvez nos solutions digitales, pensées pour vos utilisateurs.
            </p>
          </div>
          <div className={offerStyles.offerGrid}>
            <AtelierMobileCarousel
              label="Nos sept expertises"
              desktopClassName={offerStyles.offerTrack}
            >
              {digitalOffers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <Link
                    href={offer.href}
                    key={offer.href}
                    className={offerStyles.offer}
                  >
                    <div className={offerStyles.offerTop}>
                      <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                      <span>{offer.category}</span>
                    </div>
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                    <span className={offerStyles.offerLink}>
                      Découvrir cette expertise
                    </span>
                  </Link>
                );
              })}
            </AtelierMobileCarousel>
            <div className={offerStyles.customCard}>
              <div className={offerStyles.thoughtTop} aria-hidden="true">
                <span className={offerStyles.question}>
                  <Lightbulb size={25} strokeWidth={1.3} />
                  Et si on imaginait
                  <br />
                  la suite ?
                </span>
                <span className={offerStyles.sticky}>
                  Votre
                  <br />
                  idée ici
                </span>
              </div>
              <h3>
                Votre idée ne rentre
                <br />
                dans aucune case ?
              </h3>
              <p>C’est aussi pour cela que l’atelier existe.</p>
              <Link href="/contact" className={offerStyles.thoughtButton}>
                Dessinons la suite ensemble
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.software}`}
        aria-labelledby="logiciels-title"
      >
        <div className={styles.wrap}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Des outils pour le terrain</p>
              <h2 id="logiciels-title">
                Moins de dispersion,
                <br />
                <em>plus de maîtrise</em>
              </h2>
            </div>
            <p>
              Nos solutions Tech répondent aux besoins de gestion des agences
              immobilières, des établissements scolaires et des associations.
            </p>
          </div>
          <div className={styles.softwareGrid}>
            {solutions.map((solution) => {
              const Icon = solutionIcons[solution.slug] || Building2;
              return (
                <Link
                  href={`/solutions/${solution.slug}`}
                  key={solution.slug}
                  className={styles.softwareCard}
                >
                  <Icon size={28} aria-hidden="true" />
                  <h3>{solution.title}</h3>
                  <p>{solution.accroche}</p>
                  <span className={styles.textLink}>Explorer le logiciel</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="methode-title">
        <div className={`${styles.wrap} ${styles.methodGrid}`}>
          <div>
            <p className={styles.eyebrow}>
              Du premier trait à la mise en ligne
            </p>
            <h2 id="methode-title">
              Vous suivez
              <br />
              <em>la fabrication</em>
            </h2>
            <p className={styles.methodIntro}>
              Vous savez où en est le projet, pourquoi une décision est prise et
              quelle est la prochaine étape.
            </p>
            <Link className={styles.textLink} href="/methode">
              Découvrir notre méthode
            </Link>
            <div className={styles.planStamp} aria-hidden="true">
              PENSÉ ENSEMBLE
              <br />
              <strong>CONÇU SUR MESURE</strong>
            </div>
          </div>
          <ol className={styles.steps}>
            {methodSteps.map((step) => (
              <li key={step.number}>
                <span className={styles.stepPin} aria-hidden="true" />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="prototypes"
        className={`${styles.section} ${styles.examples}`}
        aria-labelledby="exemples-title"
      >
        <div className={styles.wrap}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>À voir sur l’établi</p>
              <h2 id="exemples-title">
                Des idées devenues
                <br />
                <em>des expériences</em>
              </h2>
            </div>
            <p>
              Explorez nos deux sites témoins hôteliers. Des démonstrations
              concrètes pour vous projeter dans votre futur site.
            </p>
          </div>
          <div className={styles.examplesGrid}>
            {[
              {
                title: "Hôtel Plage Cyan",
                image: "/images/hotel/hotel-plage-temoin.webp",
                href: "https://hotel-plage-cyan.vercel.app/",
                text: "Mettre en scène un lieu, ses chambres et son expérience balnéaire.",
              },
              {
                title: "Hôtel Nomade",
                image: "/images/hotel/nomade-hotel-temoin.webp",
                href: "https://hotel-nomade.vercel.app/",
                text: "Donner envie de découvrir une destination et préparer son séjour.",
              },
            ].map((example) => (
              <a
                href={example.href}
                key={example.title}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.example}
              >
                <div className={styles.exampleImage}>
                  <Image
                    src={example.image}
                    alt={`Aperçu du site témoin ${example.title}`}
                    width={900}
                    height={600}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.exampleCaption}>
                  <span className={styles.tag}>Site témoin · Hôtellerie</span>
                  <h3>{example.title}</h3>
                  <p>{example.text}</p>
                  <span className={styles.textLink}>
                    Visiter la démonstration{" "}
                    <span className={styles.srOnly}>(nouvel onglet)</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="suivi-title">
        <div className={`${styles.wrap} ${styles.support}`}>
          <div>
            <p className={styles.eyebrow}>Après la livraison</p>
            <h2 id="suivi-title">
              L’atelier reste
              <br />
              <em>à vos côtés</em>
            </h2>
            <p>
              La mise en ligne est une étape. Nous préparons la prise en main et
              accompagnons la vie de vos outils.
            </p>
          </div>
          <div className={styles.supportLinks}>
            <Link href="/maintenance-site-web">
              <h3>Maintenance de sites web</h3>
              <p>Mises à jour, sécurité, sauvegardes et suivi technique.</p>
              <span className={styles.textLink}>
                Voir les forfaits de maintenance
              </span>
            </Link>
            <Link href="/gestion-web-deleguee">
              <h3>Gestion Web Déléguée & TMA</h3>
              <p>
                Un accompagnement annuel de vos sites et logiciels, après
                diagnostic technique.
              </p>
              <span className={styles.textLink}>
                Découvrir l’accompagnement
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.faq}`}
        aria-labelledby="faq-title"
      >
        <div className={`${styles.wrap} ${styles.faqGrid}`}>
          <div>
            <p className={styles.eyebrow}>Avant de pousser la porte</p>
            <h2 id="faq-title">
              Vos questions,
              <br />
              <em>nos réponses</em>
            </h2>
            <a
              className={styles.textLink}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Poser une question sur WhatsApp
            </a>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AtelierFinalCTA whatsappHref={whatsappHref} />
    </main>
  );
}
