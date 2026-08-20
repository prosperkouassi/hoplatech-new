// src/app/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Gauge,
  GraduationCap,
  Hotel,
  Layers3,
  Map,
  MessageCircle,
  Palette,
  School,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Utensils,
  Users,
  Workflow,
} from 'lucide-react';
import { solutions } from '@/data/solutions';

const siteUrl = 'https://alteractweb.com';
const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20mon%20projet%20digital.';

export const metadata: Metadata = {
  title: {
    absolute: 'Solutions digitales & logiciels métiers | AlteractWeb',
  },
  description:
    'AlteractWeb crée des sites web, boutiques e-commerce, applications mobiles, interfaces UI/UX et logiciels métiers pour les entreprises en Côte d’Ivoire.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Solutions digitales & logiciels métiers | AlteractWeb',
    description:
      'Création de sites web, applications mobiles, UI/UX et logiciels métiers adaptés à votre activité en Côte d’Ivoire.',
    url: siteUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'AlteractWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions digitales & logiciels métiers | AlteractWeb',
    description:
      'Sites web, applications et logiciels métiers conçus pour faire évoluer votre activité.',
  },
};

type DigitalOffer = {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: LucideIcon;
};

const digitalOffers: DigitalOffer[] = [
  {
    title: 'Site web pour hôtel',
    description:
      'Présentez vos chambres, votre destination et facilitez les demandes de réservation directe.',
    href: '/solutions-digitales/site-web-hotel',
    category: 'Hôtellerie',
    icon: Hotel,
  },
  {
    title: 'Site web pour restaurant',
    description:
      'Valorisez votre cuisine, votre carte et transformez l’intérêt en réservation ou commande.',
    href: '/solutions-digitales/site-web-restaurant',
    category: 'Restauration',
    icon: Utensils,
  },
  {
    title: 'Auberge & City Tours',
    description:
      'Réunissez hébergements, circuits et expériences locales dans un parcours touristique clair.',
    href: '/solutions-digitales/auberge-citytours',
    category: 'Tourisme',
    icon: Map,
  },
  {
    title: 'Site vitrine corporate',
    description:
      'Renforcez votre crédibilité avec un site professionnel, rapide et fidèle à votre identité.',
    href: '/solutions-digitales/site-vitrine-corporate',
    category: 'Présence en ligne',
    icon: Building2,
  },
  {
    title: 'Site e-commerce',
    description:
      'Vendez vos produits grâce à une boutique fluide, sécurisée et simple à administrer.',
    href: '/solutions-digitales/site-ecommerce',
    category: 'Commerce en ligne',
    icon: ShoppingBag,
  },
  {
    title: 'Application mobile',
    description:
      'Transformez votre idée ou votre processus métier en application iOS et Android intuitive.',
    href: '/solutions-digitales/application-mobile',
    category: 'Produit mobile',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description:
      'Clarifiez les parcours et donnez vie à votre produit avec des interfaces utiles et cohérentes.',
    href: '/solutions-digitales/ui-ux-design',
    category: 'Design d’expérience',
    icon: Palette,
  },
];

const faqs = [
  {
    question: 'Quelle est la différence entre une solution digitale et une solution Tech ?',
    answer:
      'Les solutions digitales concernent votre présence, votre image et vos parcours clients : sites web, e-commerce, applications mobiles et UI/UX. Les solutions Tech sont des logiciels métiers conçus pour gérer une activité locative, scolaire ou associative.',
  },
  {
    question: 'Comment choisir la solution adaptée à mon activité ?',
    answer:
      'Nous commençons par clarifier vos objectifs, vos utilisateurs, vos contraintes et les tâches à simplifier. Cet échange permet de recommander une offre existante ou une conception sur mesure.',
  },
  {
    question: 'AlteractWeb s’occupe-t-il du nom de domaine et de l’hébergement ?',
    answer:
      'Oui. Selon le projet, nous pouvons vous conseiller, configurer le nom de domaine, mettre en place l’hébergement et assurer la mise en ligne dans un environnement sécurisé.',
  },
  {
    question: 'Les sites et applications sont-ils adaptés aux téléphones ?',
    answer:
      'Oui. Chaque interface est pensée pour fonctionner sur mobile, tablette et ordinateur. Les parcours, la lisibilité et les performances sont vérifiés sur les différents formats.',
  },
  {
    question: 'Le référencement naturel est-il intégré ?',
    answer:
      'Oui. La structure des pages, les titres, les métadonnées, les contenus, les performances et le balisage sémantique sont travaillés dès la conception. Le positionnement dépend ensuite de la concurrence et du travail éditorial dans la durée.',
  },
  {
    question: 'Proposez-vous un accompagnement après la mise en ligne ?',
    answer:
      'Oui. Nous préparons la prise en main et pouvons proposer un suivi, une maintenance et des évolutions adaptées aux besoins du projet.',
  },
];

const schemaOffers = [
  ...digitalOffers.map((offer) => ({ name: offer.title, path: offer.href })),
  { name: 'Gestion locative', path: '/solutions/gestion-locative' },
  { name: 'Gestion scolaire', path: '/solutions/gestion-scolaire' },
  { name: 'Gestion associative', path: '/solutions/gestion-asso' },
];

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Solutions digitales & logiciels métiers | AlteractWeb',
      description:
        'Création de sites web, applications mobiles, UI/UX et logiciels métiers en Côte d’Ivoire.',
      inLanguage: 'fr-CI',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'ItemList',
      name: 'Solutions et services AlteractWeb',
      numberOfItems: schemaOffers.length,
      itemListElement: schemaOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: offer.name,
        url: `${siteUrl}${offer.path}`,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

const solutionIcons: Record<string, LucideIcon> = {
  'gestion-locative': Building2,
  'gestion-scolaire': GraduationCap,
  'gestion-asso': Users,
};

const methodSteps = [
  {
    number: '01',
    title: 'Comprendre',
    text: 'Nous analysons votre activité, vos objectifs et les attentes de vos utilisateurs.',
  },
  {
    number: '02',
    title: 'Structurer',
    text: 'Nous organisons les contenus, les fonctionnalités et les parcours prioritaires.',
  },
  {
    number: '03',
    title: 'Concevoir',
    text: 'Nous créons une expérience cohérente, performante et fidèle à votre identité.',
  },
  {
    number: '04',
    title: 'Accompagner',
    text: 'Nous préparons la mise en ligne, la prise en main et les futures évolutions.',
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes home-fade-up {
              from { opacity: 0; transform: translate3d(0, 24px, 0); }
              to { opacity: 1; transform: translate3d(0, 0, 0); }
            }
            @keyframes home-float {
              0%, 100% { transform: translate3d(0, 0, 0); }
              50% { transform: translate3d(0, -12px, 0); }
            }
            @keyframes home-shimmer {
              from { background-position: 200% center; }
              to { background-position: -200% center; }
            }
            .home-fade-up { animation: home-fade-up .75s cubic-bezier(.22,1,.36,1) both; }
            .home-delay-1 { animation-delay: .1s; }
            .home-delay-2 { animation-delay: .2s; }
            .home-delay-3 { animation-delay: .3s; }
            .home-float { animation: home-float 7s ease-in-out infinite; }
            .home-shimmer { background-size: 200% auto; animation: home-shimmer 7s linear infinite; }
            @media (prefers-reduced-motion: reduce) {
              .home-fade-up, .home-float, .home-shimmer { animation: none !important; }
            }
          `,
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101012] px-4 py-24 text-white sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(212,61,73,.28),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(247,64,57,.20),transparent_35%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="home-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-sm">
              <Sparkles size={15} className="text-brand-secondary" aria-hidden="true" />
              <span className="font-kanit text-xs font-bold uppercase tracking-[0.17em] text-white/85">
                Solutions digitales & logiciels métiers
              </span>
            </div>

            <h1 className="home-fade-up home-delay-1 mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">
              Le digital qui valorise votre activité et{' '}
              <span className="home-shimmer bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
                simplifie votre quotidien
              </span>
            </h1>

            <p className="home-fade-up home-delay-2 mt-7 max-w-2xl font-kanit text-lg leading-relaxed text-white/72 sm:text-xl">
              AlteractWeb conçoit des sites web, des applications et des logiciels métiers adaptés à vos utilisateurs, à vos objectifs et aux réalités de votre activité.
            </p>

            <div className="home-fade-up home-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#nos-expertises"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-[0_14px_35px_rgba(212,61,73,.28)] transition hover:-translate-y-1 hover:bg-red-600"
              >
                Explorer nos solutions <ChevronRight size={18} aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 bg-white/[0.07] px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.12]"
              >
                Parler de votre projet
              </Link>
            </div>

            <ul className="home-fade-up home-delay-3 mt-9 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/65">
              {['Conception sur mesure', 'Responsive', 'SEO intégré', 'Accompagnement'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-secondary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="home-float relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-10 -z-10 rounded-full bg-brand-primary/20 blur-[90px]" />
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-xl sm:p-5">
              <div className="rounded-3xl border border-white/10 bg-[#18181b] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="font-kanit text-[10px] uppercase tracking-[0.18em] text-white/40">AlteractWeb</p>
                    <p className="mt-1 font-urbanist text-lg font-bold">Votre écosystème digital</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary">
                    <Layers3 size={22} aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-secondary">
                      <Smartphone size={21} aria-hidden="true" />
                    </div>
                    <p className="mt-5 font-urbanist text-lg font-bold">Solutions digitales</p>
                    <p className="mt-2 font-kanit text-sm leading-6 text-white/50">Sites, e-commerce, mobile et UI/UX</p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" /></div>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Workflow size={21} aria-hidden="true" />
                    </div>
                    <p className="mt-5 font-urbanist text-lg font-bold">Solutions Tech</p>
                    <p className="mt-2 font-kanit text-sm leading-6 text-white/50">Gestion locative, scolaire et associative</p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-3/5 rounded-full bg-white/45" /></div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ['10', 'expertises'],
                    ['2', 'pôles'],
                    ['1', 'équipe'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-center">
                      <p className="font-urbanist text-xl font-bold">{value}</p>
                      <p className="mt-1 font-kanit text-[11px] text-white/40">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPÈRES */}
      <section aria-label="Les engagements AlteractWeb" className="border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-[#151515]">
        <div className="container mx-auto grid max-w-6xl divide-y divide-gray-200 dark:divide-gray-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ['Un besoin, une réponse claire', 'Pas de technologie inutile'],
            ['Une expérience accessible', 'Sur tous les écrans'],
            ['Un projet qui peut évoluer', 'Sans repartir de zéro'],
          ].map(([title, text]) => (
            <div key={title} className="px-6 py-7 text-center">
              <p className="font-urbanist font-bold">{title}</p>
              <p className="mt-1 font-kanit text-sm text-gray-500 dark:text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEUX PÔLES */}
      <section id="nos-expertises" className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Nos expertises</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Deux pôles complémentaires pour faire avancer votre activité
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Développez votre visibilité et vos ventes, ou simplifiez la gestion quotidienne de votre organisation avec un outil pensé pour votre métier.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary to-brand-secondary p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Sparkles size={24} aria-hidden="true" /></div>
                <p className="mt-8 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/70">7 offres</p>
                <h3 className="mt-3 font-urbanist text-3xl font-bold sm:text-4xl">Solutions digitales</h3>
                <p className="mt-5 max-w-xl font-kanit text-lg leading-relaxed text-white/80">
                  Sites web, e-commerce, applications mobiles et design d’interfaces pour valoriser votre marque et créer des parcours qui convertissent.
                </p>
                <Link href="/solutions-digitales" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3 font-kanit font-bold text-brand-primary transition group-hover:-translate-y-1">
                  Voir les solutions digitales <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#111113] p-8 text-white dark:border-gray-800 sm:p-10">
              <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Workflow size={24} aria-hidden="true" /></div>
                <p className="mt-8 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">3 logiciels</p>
                <h3 className="mt-3 font-urbanist text-3xl font-bold sm:text-4xl">Solutions Tech</h3>
                <p className="mt-5 max-w-xl font-kanit text-lg leading-relaxed text-white/65">
                  Des logiciels de gestion accessibles en ligne pour centraliser les données, automatiser les tâches et mieux piloter votre organisation.
                </p>
                <Link href="/solutions" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-6 py-3 font-kanit font-bold text-white transition group-hover:-translate-y-1 group-hover:bg-white/[0.12]">
                  Voir les solutions Tech <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES DIGITAUX */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Création digitale</span>
              <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Une offre adaptée à chaque projet</h2>
            </div>
            <p className="font-kanit text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              De la présence corporate au produit mobile, chaque service associe stratégie, expérience utilisateur, design, développement et référencement naturel.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {digitalOffers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <article key={offer.href} className={`group flex min-h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/30 hover:shadow-[0_22px_60px_rgba(18,18,18,.09)] dark:border-gray-800 dark:bg-[#191919] ${index === 6 ? 'lg:col-span-3' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand-primary dark:bg-red-950/30"><Icon size={23} aria-hidden="true" /></div>
                    <span className="font-kanit text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">{offer.category}</span>
                  </div>
                  <h3 className="mt-7 font-urbanist text-2xl font-bold transition-colors group-hover:text-brand-primary">{offer.title}</h3>
                  <p className="mt-4 flex-grow font-kanit leading-7 text-gray-600 dark:text-gray-400">{offer.description}</p>
                  <Link href={offer.href} aria-label={`Découvrir l’offre ${offer.title}`} className="mt-7 inline-flex items-center gap-2 font-kanit text-sm font-bold text-brand-primary">
                    Découvrir l’offre <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/solutions-digitales" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-red-600">
              Comparer toutes nos offres digitales <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTIONS TECH */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Logiciels métiers</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Pilotez l’essentiel depuis un seul espace</h2>
            <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Nos solutions Tech répondent à des besoins opérationnels précis avec des interfaces simples, centralisées et accessibles en ligne.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[solution.slug] ?? School;
              const isAvailable = solution.statut?.includes('disponible') ?? false;
              return (
                <article key={solution.slug} className="group flex min-h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/30 hover:shadow-[0_22px_60px_rgba(18,18,18,.09)] dark:border-gray-800 dark:bg-[#191919]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand-primary dark:bg-red-950/30"><Icon size={23} aria-hidden="true" /></div>
                    <span className={`rounded-full px-3 py-1 font-kanit text-xs font-medium ${isAvailable ? 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400' : 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400'}`}>{solution.statut?.[0] || 'En développement'}</span>
                  </div>
                  <p className="mt-7 font-urbanist text-sm font-bold text-gray-400">0{index + 1}</p>
                  <h3 className="mt-2 font-urbanist text-2xl font-bold transition-colors group-hover:text-brand-primary">{solution.title}</h3>
                  <p className="mt-4 flex-grow font-kanit leading-7 text-gray-600 dark:text-gray-400">{solution.accroche}</p>
                  <Link href={`/solutions/${solution.slug}`} aria-label={`Découvrir la solution ${solution.title}`} className="mt-7 inline-flex items-center gap-2 font-kanit text-sm font-bold text-brand-primary">
                    Découvrir la solution <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALEUR */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Notre exigence</span>
              <h2 className="mt-4 max-w-3xl font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Une solution utile aujourd’hui, solide pour demain</h2>
            </div>
            <p className="font-kanit text-lg leading-relaxed text-white/60">Nous ne séparons pas l’apparence, l’usage et la technique. Chaque projet doit être clair pour vos utilisateurs, efficace pour votre activité et capable d’évoluer.</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gauge, title: 'Performance', text: 'Des interfaces rapides et confortables sur tous les écrans.' },
              { icon: ShieldCheck, title: 'Fiabilité', text: 'Une base technique structurée, sécurisée et maintenable.' },
              { icon: Layers3, title: 'Évolutivité', text: 'Une conception capable d’accueillir vos futurs besoins.' },
              { icon: Users, title: 'Accompagnement', text: 'Un interlocuteur pour cadrer, expliquer et faire avancer le projet.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <Icon size={24} className="text-brand-secondary" aria-hidden="true" />
                  <h3 className="mt-7 font-urbanist text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 font-kanit leading-7 text-white/55">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Notre méthode</span>
              <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Un parcours lisible, du besoin à la mise en ligne</h2>
              <p className="mt-6 font-kanit text-lg leading-relaxed text-gray-600 dark:text-gray-300">Vous savez où en est le projet, pourquoi une décision est prise et quelle est la prochaine étape.</p>
              <Link href="/methode" className="mt-8 inline-flex items-center gap-2 font-kanit font-bold text-brand-primary">Découvrir notre méthode <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>

            <ol className="space-y-5">
              {methodSteps.map((step) => (
                <li key={step.number} className="grid gap-5 rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-[#191919] sm:grid-cols-[auto_1fr] sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 font-urbanist font-bold text-brand-primary dark:bg-red-950/30">{step.number}</span>
                  <div>
                    <h3 className="font-urbanist text-2xl font-bold">{step.title}</h3>
                    <p className="mt-3 font-kanit leading-7 text-gray-600 dark:text-gray-400">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand-primary dark:bg-red-950/30"><CircleHelp size={24} aria-hidden="true" /></div>
            <span className="mt-7 block font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Questions fréquentes</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Les réponses utiles avant de démarrer</h2>
            <p className="mt-6 font-kanit text-lg leading-relaxed text-gray-600 dark:text-gray-300">Votre question n’apparaît pas ici ? Écrivez-nous pour obtenir une réponse adaptée à votre projet.</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600"><MessageCircle size={18} aria-hidden="true" /> Poser une question</a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white p-6 open:border-brand-primary/25 open:shadow-sm dark:border-gray-800 dark:bg-[#191919]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-urbanist text-lg font-bold marker:content-none">
                  {faq.question}
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-brand-primary transition-transform group-open:rotate-45 dark:bg-gray-800" aria-hidden="true">+</span>
                </summary>
                <p className="mt-5 border-t border-gray-100 pt-5 font-kanit leading-7 text-gray-600 dark:border-gray-800 dark:text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-primary px-6 py-16 text-center text-white shadow-[0_25px_80px_rgba(212,61,73,.22)] sm:px-10 sm:py-20">
            <div className="absolute -left-16 -top-20 -z-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/70">Construisons la bonne solution</span>
            <h2 className="mx-auto mt-4 max-w-4xl font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Votre projet mérite mieux qu’une solution générique</h2>
            <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/82">Échangeons sur votre activité, vos objectifs et les difficultés que vous souhaitez résoudre.</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary transition hover:-translate-y-1 hover:bg-gray-100">Nous présenter votre projet <ArrowRight size={18} aria-hidden="true" /></Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 font-kanit font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}