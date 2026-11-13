"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  FileCheck2,
  Gauge,
  Layers3,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

type Technology = "cms" | "framework";
type Plan = {
  name: string;
  price: number;
  tagline: string;
  features: string[];
};
type FAQ = { question: string; answer: string };

const plans: Record<Technology, Plan[]> = {
  cms: [
    {
      name: "Essentiel",
      price: 18000,
      tagline: "L’entretien indispensable de votre site",
      features: [
        "Mises à jour mensuelles compatibles du CMS, thème et extensions",
        "Vérification du fonctionnement après intervention",
        "Contrôle mensuel de disponibilité et HTTPS",
        "Compte rendu simplifié",
      ],
    },
    {
      name: "Sérénité",
      price: 25000,
      tagline: "Un suivi technique régulier et préventif",
      features: [
        "Toutes les prestations Essentiel",
        "Sauvegarde mensuelle des fichiers et de la base de données",
        "Audit technique et sécurité mensuel",
        "Contrôle des performances et des erreurs",
        "30 minutes de corrections mineures par mois",
        "Rapport mensuel avec recommandations",
      ],
    },
    {
      name: "Premium",
      price: 55000,
      tagline: "Maintenance et actualisation de vos contenus",
      features: [
        "Toutes les prestations Sérénité",
        "Sauvegardes hebdomadaires",
        "Jusqu’à 5 demandes simples de contenu par mois",
        "Remplacement de textes, photos et visuels fournis",
        "Optimisation des images ajoutées",
        "2 heures d’intervention au total par mois",
        "Prise en charge prioritaire sous 2 jours ouvrés",
      ],
    },
  ],
  framework: [
    {
      name: "Essentiel",
      price: 23000,
      tagline: "La stabilité technique de votre site",
      features: [
        "Contrôle mensuel des dépendances et vulnérabilités connues",
        "Correctifs de sécurité critiques compatibles",
        "Vérification du build et du déploiement",
        "Contrôle mensuel de disponibilité et HTTPS",
        "Compte rendu technique simplifié",
      ],
    },
    {
      name: "Sérénité",
      price: 33000,
      tagline: "Une maintenance préventive renforcée",
      features: [
        "Toutes les prestations Essentiel",
        "Mises à jour mensuelles des dépendances compatibles",
        "Audit mensuel de sécurité et performances",
        "Vérification des erreurs applicatives",
        "Contrôle des sauvegardes existantes, si applicables",
        "30 minutes de corrections mineures par mois",
        "Rapport technique avec recommandations",
      ],
    },
    {
      name: "Premium",
      price: 63000,
      tagline: "Maintenance technique et gestion des contenus",
      features: [
        "Toutes les prestations Sérénité",
        "Jusqu’à 5 demandes simples de contenu par mois",
        "Remplacement de textes, images et visuels fournis",
        "Optimisation des médias intégrés",
        "2 heures d’intervention au total par mois",
        "Contrôle après chaque mise en production réalisée",
        "Prise en charge prioritaire sous 2 jours ouvrés",
      ],
    },
  ],
};

const money = (amount: number) => new Intl.NumberFormat("fr-FR").format(amount);

function contactHref(technology: Technology, plan: Plan) {
  const label = technology === "cms" ? "CMS" : "Framework";
  const subject = `Maintenance ${label} - ${plan.name} - ${money(plan.price)} FCFA/mois`;
  return `/contact?solution=${encodeURIComponent(subject)}`;
}

export default function MaintenanceContent({ faq }: { faq: FAQ[] }) {
  const [technology, setTechnology] = useState<Technology>("cms");

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-maintenance-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 36, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
    });
    return () => media.revert();
  }, []);

  return (
    <main className="bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      <section className="relative isolate overflow-hidden bg-brand-dark px-4 pb-20 pt-24 text-white sm:pb-24 sm:pt-28 lg:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-primary/20 blur-[110px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-brand-secondary/15 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-kanit text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Maintenance & suivi technique</p>
          <h1 className="mt-5 max-w-4xl font-urbanist text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Maintenance de sites web <span className="text-brand-secondary">à Abidjan et en Côte d’Ivoire</span>
          </h1>
          <p className="mt-7 max-w-3xl font-kanit text-base font-light leading-8 text-white/75 sm:text-lg">
            Votre site internet mérite un suivi à la hauteur de votre activité. AlteractWeb accompagne les entreprises, indépendants et professionnels dans la maintenance de leurs sites WordPress, CMS, Next.js et React : mises à jour compatibles, sécurité, performances et gestion des contenus selon le forfait.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#forfaits" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
              Découvrir nos forfaits <ArrowRight size={17} />
            </a>
            <Link href="/contact?solution=Diagnostic%20maintenance%20web" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-brand-dark px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
              Demander un diagnostic <ArrowUpRight size={17} />
            </Link>
          </div>
          <p className="mt-6 font-kanit text-xs text-white/55">Forfaits dès 18 000 FCFA / mois · Diagnostic initial avant prise en charge</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-kanit text-xs font-semibold uppercase tracking-widest text-brand-primary">Pourquoi entretenir votre site ?</p>
          <h2 className="mt-4 max-w-3xl font-urbanist text-3xl font-bold sm:text-4xl">Un site performant aujourd’hui doit le rester demain</h2>
          <p className="mt-5 max-w-3xl font-kanit font-light leading-8 text-slate-600 dark:text-slate-300">
            Un site web ne s’arrête pas à sa mise en ligne. Les technologies évoluent, des vulnérabilités peuvent apparaître et les contenus vieillissent. Une maintenance régulière aide à prévenir les dysfonctionnements et à préserver la qualité de navigation de vos visiteurs.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Sécurité", description: "Surveiller les risques techniques et appliquer les correctifs compatibles avec votre site." },
              { icon: Gauge, title: "Performances", description: "Contrôler la disponibilité, les erreurs et les points d’amélioration de l’expérience utilisateur." },
              { icon: RefreshCcw, title: "Continuité", description: "Assurer un entretien régulier et actualiser les contenus selon le niveau d’accompagnement choisi." },
            ].map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-brand-light dark:bg-brand-dark p-7">
                <div className="inline-flex rounded-xl bg-brand-primary/10 p-3 text-brand-primary"><Icon size={23} /></div>
                <h3 className="mt-5 font-urbanist text-xl font-bold">{title}</h3>
                <p className="mt-3 font-kanit text-sm font-light leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Pédagogie : image à gauche, explication à droite */}
      <section aria-labelledby="comprendre-maintenance" className="overflow-hidden bg-white px-4 py-20 dark:bg-brand-dark sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#111113] shadow-xl dark:border-gray-800" data-maintenance-reveal>
            <img
              src="/images/maintenance-web-explication.svg"
              alt="Illustration des contrôles de sécurité, sauvegardes et mises à jour d'un site internet"
              width={800}
              height={600}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
          <div data-maintenance-reveal>
            <p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Comprendre la maintenance web</p>
            <h2 id="comprendre-maintenance" className="mt-4 font-urbanist text-3xl font-bold leading-tight text-brand-dark dark:text-white sm:text-4xl">
              À quoi sert la maintenance d’un site internet pour une entreprise en Côte d’Ivoire ?
            </h2>
            <p className="mt-6 font-kanit text-base leading-8 text-gray-700 dark:text-gray-300">
              Un site internet professionnel a besoin d’un suivi après sa mise en ligne. À Abidjan comme partout en Côte d’Ivoire, les mises à jour des CMS, des extensions ou des dépendances techniques peuvent avoir un impact sur son fonctionnement. La maintenance consiste à vérifier régulièrement sa disponibilité, son certificat HTTPS, sa sécurité et ses performances, puis à effectuer les interventions compatibles avec sa technologie.
            </p>
            <p className="mt-4 font-kanit text-base leading-8 text-gray-700 dark:text-gray-300">
              Pour un site WordPress, cela peut inclure les mises à jour et les sauvegardes ; pour un site Next.js ou React, le contrôle des dépendances, du build et du déploiement. L’objectif est de limiter les risques de panne, de protéger les données et de préserver une expérience fiable pour vos clients.
            </p>
            <a href="#forfaits" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
              Comparer les forfaits <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Bénéfices : texte à gauche, image à droite */}
      <section aria-labelledby="pourquoi-deleguer" className="overflow-hidden bg-gray-50 px-4 py-20 dark:bg-[#121212] sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-maintenance-reveal>
            <p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Externaliser en toute confiance</p>
            <h2 id="pourquoi-deleguer" className="mt-4 font-urbanist text-3xl font-bold leading-tight text-brand-dark dark:text-white sm:text-4xl">
              Pourquoi déléguer la maintenance et la gestion de votre site web à Abidjan ?
            </h2>
            <p className="mt-6 font-kanit text-base leading-8 text-gray-700 dark:text-gray-300">
              Pour une PME, un hôtel, un restaurant ou une entreprise de services en Côte d’Ivoire, le site internet est souvent un point de contact essentiel avec les prospects. Pourtant, suivre les mises à jour, détecter les erreurs et publier des modifications demande du temps et des compétences techniques.
            </p>
            <p className="mt-4 font-kanit text-base leading-8 text-gray-700 dark:text-gray-300">
              En confiant sa maintenance à AlteractWeb, vous disposez d’un interlocuteur technique pour les contrôles et les interventions prévus dans votre forfait. Vous pouvez ainsi vous concentrer sur votre activité, tout en conservant une visibilité sur les actions réalisées grâce aux comptes rendus. Les modifications de contenus et le niveau d’assistance dépendent de l’offre choisie.
            </p>
            <p className="mt-4 font-kanit text-base leading-8 text-gray-700 dark:text-gray-300">
              Vous recherchez plutôt une prise en charge annuelle globale, incluant la gestion et la TMA de votre site ou de vos logiciels métiers ? Découvrez notre accompagnement sur mesure, proposé après diagnostic technique.
            </p>
            <Link href="/gestion-web-deleguee" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-brand-dark px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-brand-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
              Découvrir la gestion déléguée & TMA <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#111113] shadow-xl dark:border-gray-800" data-maintenance-reveal>
            <img
              src="/images/maintenance-web-delegation.svg"
              alt="Illustration du suivi externalisé d'un site web avec contrôles, rapports et interventions techniques"
              width={800}
              height={600}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section id="forfaits" className="scroll-mt-20 bg-brand-light dark:bg-brand-dark px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-kanit text-xs font-semibold uppercase tracking-widest text-brand-primary">Nos offres de maintenance web</p>
            <h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Choisissez une maintenance adaptée à votre technologie</h2>
            <p className="mt-5 font-kanit font-light leading-7 text-slate-600 dark:text-slate-300">Des prestations claires, des tarifs mensuels et un suivi adapté à votre site. Sélectionnez sa technologie pour comparer nos trois forfaits.</p>
          </div>

          <div className="mx-auto mt-10 flex w-fit rounded-lg border border-slate-200 bg-white dark:border-white/15 dark:bg-brand-dark p-1.5 shadow-sm" role="group" aria-label="Choisir la technologie du site">
            <button type="button" onClick={() => setTechnology("cms")} aria-pressed={technology === "cms"} className={`rounded-lg px-5 py-3 font-kanit text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:px-8 ${technology === "cms" ? "bg-brand-dark text-white shadow-sm dark:bg-white/15" : "text-slate-600 dark:text-slate-300 hover:text-brand-dark dark:hover:text-white"}`}>
              CMS <span className="hidden sm:inline">(WordPress…)</span>
            </button>
            <button type="button" onClick={() => setTechnology("framework")} aria-pressed={technology === "framework"} className={`rounded-lg px-5 py-3 font-kanit text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 sm:px-8 ${technology === "framework" ? "bg-brand-dark text-white shadow-sm dark:bg-white/15" : "text-slate-600 dark:text-slate-300 hover:text-brand-dark dark:hover:text-white"}`}>
              Framework <span className="hidden sm:inline">(Next.js, React…)</span>
            </button>
          </div>
          <p className="mt-4 text-center font-kanit text-sm text-slate-500 dark:text-slate-400">{technology === "cms" ? "Maintenance WordPress et autres CMS compatibles" : "Maintenance Next.js, React et frameworks compatibles"}</p>

          <div key={technology} className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {plans[technology].map((plan, index) => (
              <article key={plan.name} className={`relative flex flex-col rounded-3xl border bg-white dark:bg-brand-dark p-7 shadow-sm sm:p-8 ${index === 1 ? "border-brand-primary shadow-lg" : "border-slate-200"}`}>
                {index === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-primary px-4 py-2 font-kanit text-xs font-semibold text-white">Offre recommandée</span>}
                <h3 className="font-urbanist text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 min-h-12 font-kanit text-sm font-light leading-6 text-slate-500 dark:text-slate-400">{plan.tagline}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-urbanist text-4xl font-extrabold tracking-tight">{money(plan.price)}</span>
                  <span className="font-kanit text-sm text-slate-500 dark:text-slate-400">FCFA / mois</span>
                </div>
                <div className="my-7 h-px bg-slate-200" />
                <ul className="flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 font-kanit text-sm font-light leading-6 text-slate-700 dark:text-slate-300">
                      <Check size={18} className="mt-1 shrink-0 text-brand-primary" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={contactHref(technology, plan)} className={`mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-kanit font-bold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${index === 1 ? "bg-brand-primary hover:bg-red-600" : "border border-brand-dark bg-brand-dark hover:bg-brand-dark/90"}`}>
                  Choisir cette offre <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center font-kanit text-xs leading-6 text-slate-500 dark:text-slate-400">Tarifs mensuels en FCFA, hors hébergement, domaine, licences et abonnements tiers. Offres destinées aux sites standards, sous réserve d’un diagnostic technique.</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-kanit text-xs font-semibold uppercase tracking-widest text-brand-primary">Notre expertise</p>
          <h2 className="mt-4 max-w-3xl font-urbanist text-3xl font-bold sm:text-4xl">Maintenance CMS et frameworks modernes</h2>
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 p-8">
              <Layers3 className="text-brand-primary" size={30} />
              <h3 className="mt-5 font-urbanist text-2xl font-bold">Maintenance WordPress et CMS</h3>
              <p className="mt-4 font-kanit font-light leading-8 text-slate-600 dark:text-slate-300">Pour les sites administrés via un CMS : vérification des mises à jour, contrôle des extensions, sauvegardes, sécurité et gestion des contenus selon le forfait retenu.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 p-8">
              <Code2 className="text-brand-primary" size={30} />
              <h3 className="mt-5 font-urbanist text-2xl font-bold">Maintenance Next.js et React</h3>
              <p className="mt-4 font-kanit font-light leading-8 text-slate-600 dark:text-slate-300">Pour les sites développés avec un framework : suivi des dépendances, correctifs compatibles, vérification des builds et déploiements, surveillance technique et optimisation selon le forfait.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-4 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-kanit text-xs font-semibold uppercase tracking-widest text-brand-secondary">Notre méthode</p>
          <h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Comment se déroule votre maintenance web ?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileCheck2, title: "Diagnostic initial", text: "Nous examinons le site, sa technologie, les accès disponibles et son état technique." },
              { icon: Layers3, title: "Choix du forfait", text: "Nous définissons le périmètre de maintenance adapté à vos besoins et à votre budget." },
              { icon: Wrench, title: "Mise en place", text: "Nous organisons les contrôles, sauvegardes et interventions prévus au contrat." },
              { icon: LockKeyhole, title: "Suivi régulier", text: "Nous assurons les prestations convenues et vous transmettons un compte rendu." },
            ].map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
                <div className="flex items-center justify-between"><Icon className="text-brand-secondary" size={25} /><span className="font-urbanist text-3xl font-bold text-white/20">0{index + 1}</span></div>
                <h3 className="mt-6 font-urbanist text-xl font-bold">{title}</h3>
                <p className="mt-3 font-kanit text-sm font-light leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-kanit text-xs font-semibold uppercase tracking-widest text-brand-primary">Questions fréquentes</p>
          <h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Tout savoir sur la maintenance de votre site internet</h2>
          <div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-urbanist text-lg font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown size={20} className="shrink-0 text-brand-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl font-kanit font-light leading-8 text-slate-600 dark:text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#081426] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="font-kanit text-xs font-semibold uppercase tracking-widest text-[#F4A261]">Un partenaire technique à vos côtés</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-urbanist text-3xl font-bold sm:text-4xl">Confiez la maintenance de votre site à AlteractWeb</h2>
          <p className="mx-auto mt-5 max-w-2xl font-kanit font-light leading-8 text-white/70">Vous souhaitez prévenir les incidents, sécuriser votre site internet ou déléguer son suivi technique ? Échangeons sur vos besoins.</p>
          <Link href="/contact?solution=Diagnostic%20maintenance%20web" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
            Demander un diagnostic <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="px-4 pb-14 pt-4">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 p-6">
          <h2 className="font-urbanist text-lg font-bold">Conditions des forfaits</h2>
          <p className="mt-3 font-kanit text-sm font-light leading-7 text-slate-600">
            Engagement initial proposé de trois mois, puis renouvellement mensuel selon le contrat. Les prestations concernent les sites standards techniquement maintenables. Un diagnostic initial est nécessaire pour les sites tiers ; toute remise à niveau est facturée séparément. Les interventions sont réalisées les jours ouvrés. Les demandes Premium sont limitées à cinq modifications simples et deux heures d’intervention au total par mois ; les heures non utilisées ne sont pas reportables. Les nouvelles fonctionnalités, refontes, créations de pages complexes, migrations majeures et incidents nécessitant une intervention importante font l’objet d’un devis. Les délais prioritaires concernent la prise en charge, sans garantie de résolution dans ce délai.
          </p>
        </div>
      </section>
    </main>
  );
}
