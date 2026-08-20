'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Hotel,
  Map,
  MessageCircle,
  Palette,
  ShoppingBag,
  Smartphone,
  Utensils,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20une%20solution%20digitale.';

type DigitalOffer = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: typeof Globe2;
  accent: string;
  outcomes: string[];
  previewTitle: string;
  previewItems: Array<{ label: string; value: string }>;
};

const hospitalityOffers: DigitalOffer[] = [
  {
    number: '01',
    title: 'Site web pour hôtel',
    eyebrow: 'Hébergement & expérience',
    description:
      'Valorisez vos chambres, vos services et votre destination avec une expérience immersive conçue pour faciliter la réservation directe.',
    href: '/solutions-digitales/site-web-hotel',
    icon: Hotel,
    accent: 'from-amber-400 to-orange-500',
    outcomes: [
      'Présentation des chambres et services',
      'Réservation ou demande de disponibilité',
      'Galerie, localisation et SEO hôtelier',
      'Expérience mobile pour les voyageurs',
    ],
    previewTitle: 'Séjours & réservations',
    previewItems: [
      { label: 'Chambres', value: '12' },
      { label: 'Demandes', value: '+28%' },
      { label: 'Mobile', value: '100%' },
    ],
  },
  {
    number: '02',
    title: 'Site web pour restaurant',
    eyebrow: 'Restauration & commandes',
    description:
      'Présentez votre cuisine, votre ambiance et vos offres avec un site qui transforme l’envie en réservation ou en commande.',
    href: '/solutions-digitales/site-web-restaurant',
    icon: Utensils,
    accent: 'from-rose-500 to-red-600',
    outcomes: [
      'Menu digital clair et actualisable',
      'Réservation de table et contact rapide',
      'Click & collect selon vos besoins',
      'Visibilité locale et avis clients',
    ],
    previewTitle: 'Menu & réservations',
    previewItems: [
      { label: 'Carte', value: 'En ligne' },
      { label: 'Tables', value: '+19%' },
      { label: 'Avis', value: '4,8/5' },
    ],
  },
  {
    number: '03',
    title: 'Site pour auberge & City Tours',
    eyebrow: 'Tourisme & expériences',
    description:
      'Réunissez hébergements, circuits et expériences locales dans une plateforme claire pour informer, rassurer et recevoir des réservations.',
    href: '/solutions-digitales/auberge-citytours',
    icon: Map,
    accent: 'from-emerald-400 to-teal-600',
    outcomes: [
      'Hébergements, excursions et circuits',
      'Calendrier et demandes de réservation',
      'Paiement en ligne selon le projet',
      'Galerie et référencement touristique',
    ],
    previewTitle: 'Circuits & hébergements',
    previewItems: [
      { label: 'Expériences', value: '08' },
      { label: 'Départs', value: '6/sem.' },
      { label: 'Réservations', value: '+24%' },
    ],
  },
];

const customOffers: DigitalOffer[] = [
  {
    number: '04',
    title: 'Site vitrine corporate',
    eyebrow: 'Image & crédibilité',
    description:
      'Présentez votre entreprise, vos expertises et vos références avec un site professionnel qui renforce votre image et génère des contacts.',
    href: '/solutions-digitales/site-vitrine-corporate',
    icon: Building2,
    accent: 'from-blue-500 to-indigo-600',
    outcomes: [
      'Design fidèle à votre identité',
      'Présentation claire de vos activités',
      'SEO, performance et responsive',
      'Administration et évolutivité',
    ],
    previewTitle: 'Présence corporate',
    previewItems: [
      { label: 'Pages', value: 'Sur mesure' },
      { label: 'SEO', value: 'Intégré' },
      { label: 'Support', value: 'Adapté' },
    ],
  },
  {
    number: '05',
    title: 'Site e-commerce',
    eyebrow: 'Vente & conversion',
    description:
      'Transformez votre catalogue en boutique performante avec une expérience d’achat fluide et une gestion structurée des ventes.',
    href: '/solutions-digitales/site-ecommerce',
    icon: ShoppingBag,
    accent: 'from-fuchsia-500 to-pink-600',
    outcomes: [
      'Catalogue, variantes et stocks',
      'Commandes, promotions et clients',
      'Cartes, Mobile Money et livraison',
      'Suivi des ventes et conversion',
    ],
    previewTitle: 'Boutique & commandes',
    previewItems: [
      { label: 'Produits', value: 'Centralisés' },
      { label: 'Paiement', value: 'Sécurisé' },
      { label: 'Ventes', value: '+31%' },
    ],
  },
  {
    number: '06',
    title: 'Application mobile',
    eyebrow: 'Produit & services mobiles',
    description:
      'Transformez votre idée ou votre processus métier en application intuitive, connectée et capable d’évoluer avec vos utilisateurs.',
    href: '/solutions-digitales/application-mobile',
    icon: Smartphone,
    accent: 'from-cyan-400 to-blue-600',
    outcomes: [
      'Cadrage MVP et prototype',
      'Développement iOS et Android',
      'API, notifications et services connectés',
      'Tests, publication et maintenance',
    ],
    previewTitle: 'Application & usages',
    previewItems: [
      { label: 'Plateformes', value: 'iOS/Android' },
      { label: 'Prototype', value: 'Interactif' },
      { label: 'Évolution', value: 'Continue' },
    ],
  },
  {
    number: '07',
    title: 'UI/UX Design',
    eyebrow: 'Expérience & interfaces',
    description:
      'Donnez une forme concrète à votre produit avec des parcours clairs, des maquettes Figma soignées et un système prêt à être développé.',
    href: '/solutions-digitales/ui-ux-design',
    icon: Palette,
    accent: 'from-violet-500 to-purple-700',
    outcomes: [
      'Recherche UX et architecture',
      'Wireframes et maquettes Figma',
      'Prototype et design system',
      'Livraison aux développeurs',
    ],
    previewTitle: 'Design & prototype',
    previewItems: [
      { label: 'Parcours', value: 'Validés' },
      { label: 'Composants', value: 'Cohérents' },
      { label: 'Handoff', value: 'Préparé' },
    ],
  },
];

const principles = [
  {
    number: '01',
    title: 'Comprendre',
    text: 'Nous clarifions votre activité, vos publics et le résultat attendu.',
  },
  {
    number: '02',
    title: 'Structurer',
    text: 'Nous organisons les contenus, les parcours et les fonctionnalités utiles.',
  },
  {
    number: '03',
    title: 'Concevoir',
    text: 'Nous créons une expérience cohérente avec votre identité et vos objectifs.',
  },
  {
    number: '04',
    title: 'Accompagner',
    text: 'Nous préparons le lancement, la prise en main et les futures évolutions.',
  },
];

function OfferCard({ offer, index }: { offer: DigitalOffer; index: number }) {
  const Icon = offer.icon;
  const reverse = index % 2 === 1;

  return (
    <article
      className={`offer-card grid overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#191919] lg:grid-cols-2 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <span className="font-urbanist text-sm font-bold text-gray-400">{offer.number}</span>
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
            {offer.eyebrow}
          </span>
        </div>
        <h3 className="mt-5 font-urbanist text-3xl font-bold sm:text-4xl">{offer.title}</h3>
        <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {offer.description}
        </p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {offer.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2.5 font-kanit text-sm text-gray-700 dark:text-gray-300">
              <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-brand-primary" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
        <Link
          href={offer.href}
          aria-label={`Découvrir l’offre ${offer.title}`}
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600"
        >
          Explorer cette offre <ArrowRight size={18} />
        </Link>
      </div>

      <div className={`relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br ${offer.accent} p-7 sm:p-10`}>
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative w-full max-w-md rounded-3xl border border-white/30 bg-[#111113]/90 p-5 text-white shadow-2xl backdrop-blur-md sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-kanit text-[10px] uppercase tracking-[0.18em] text-white/45">AlteractWeb</p>
              <p className="mt-1 font-urbanist text-lg font-bold">{offer.previewTitle}</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <Icon size={24} />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {offer.previewItems.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/[0.07] p-3 sm:p-4">
                <p className="font-kanit text-[10px] text-white/45">{item.label}</p>
                <p className="mt-2 break-words font-urbanist text-sm font-bold sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-white/[0.07] p-4">
            <div className="flex items-end gap-2">
              {[42, 64, 48, 82, 70, 92, 76].map((height, barIndex) => (
                <span
                  key={barIndex}
                  className="flex-1 rounded-t-md bg-white/25"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SolutionsDigitalesPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const offerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const heroElements = heroRef.current?.querySelectorAll('[data-hero-item]');
      if (heroElements?.length) {
        gsap.fromTo(
          heroElements,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power2.out' },
        );
      }

      offerRefs.current.filter(Boolean).forEach((container) => {
        const cards = container.querySelectorAll('.offer-card');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 55, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 86%',
                once: true,
              },
            },
          );
        });
      });
    });

    ScrollTrigger.refresh();
    return () => media.revert();
  }, []);

  return (
    <main className="overflow-x-clip bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#0f0f10] px-4 py-24 text-white sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(247,64,57,0.24),transparent_35%),radial-gradient(circle_at_18%_82%,rgba(212,61,73,0.15),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <span data-hero-item className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Des solutions digitales pensées pour votre activité
            </span>
            <h1 data-hero-item className="mt-6 font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Donnez à votre projet une expérience digitale{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">vraiment adaptée</span>
            </h1>
            <p data-hero-item className="mx-auto mt-6 max-w-3xl font-kanit text-lg leading-relaxed text-white/80 sm:text-xl">
              AlteractWeb conçoit des sites et applications qui valorisent votre marque, simplifient les parcours et transforment vos objectifs en outils concrets.
            </p>
            <div data-hero-item className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#nos-offres" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600">Découvrir nos offres <ChevronRight size={18} /></a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20">Parler de votre projet <MessageCircle size={18} /></a>
            </div>
            <div data-hero-item className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 font-kanit text-sm text-white/70">
              {['Sur mesure', 'Responsive', 'SEO intégré', 'Accompagnement complet'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-secondary" />{item}</span>)}
            </div>
          </div>

          <div data-hero-item className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { value: '7 offres', label: 'pour couvrir vos besoins digitaux' },
              { value: '2 univers', label: 'sectoriel et création sur mesure' },
              { value: '1 équipe', label: 'du cadrage à la mise en ligne' },
            ].map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-sm"><p className="font-urbanist text-2xl font-bold">{stat.value}</p><p className="mt-2 font-kanit text-sm text-white/55">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="nos-offres" className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Nos solutions digitales</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Une expertise adaptée à votre secteur et à votre ambition</h2>
          <p className="mx-auto mt-6 max-w-3xl font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Choisissez une offre spécialisée ou construisons ensemble une solution sur mesure autour de votre marque, de vos utilisateurs et de vos objectifs.</p>
        </div>
      </section>

      {/* HÔTELLERIE & TOURISME */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Hôtellerie & Tourisme</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Transformez la découverte en réservation</h2></div>
            <p className="font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Des expériences digitales pensées pour présenter les lieux, inspirer confiance et permettre aux voyageurs comme aux clients locaux de passer facilement à l’action.</p>
          </div>
          <div ref={(element) => { if (element) offerRefs.current[0] = element; }} className="mt-14 space-y-8">
            {hospitalityOffers.map((offer, index) => <OfferCard key={offer.href} offer={offer} index={index} />)}
          </div>
        </div>
      </section>

      {/* CRÉATION SUR MESURE */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Création digitale sur mesure</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Donnez une forme solide à votre projet</h2></div>
            <p className="font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">De votre présence corporate à un produit mobile complet, nous relions stratégie, expérience utilisateur, design et développement dans un parcours cohérent.</p>
          </div>
          <div ref={(element) => { if (element) offerRefs.current[1] = element; }} className="mt-14 space-y-8">
            {customOffers.map((offer, index) => <OfferCard key={offer.href} offer={offer} index={index} />)}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Une technologie utile</span><h2 className="mt-4 max-w-3xl font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Moins de complexité. Plus de valeur pour votre activité.</h2></div>
            <p className="font-kanit text-lg leading-relaxed text-white/65">Chaque choix de contenu, d’interface ou de technologie répond à un besoin concret de vos utilisateurs et de votre organisation.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.number} className="border-t border-white/15 pt-6"><span className="font-urbanist text-sm font-bold text-brand-secondary">{principle.number}</span><h3 className="mt-6 font-urbanist text-2xl font-bold">{principle.title}</h3><p className="mt-4 font-kanit leading-relaxed text-white/60">{principle.text}</p></article>
            ))}
          </div>
          <Link href="/methode" className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] px-6 py-3 font-kanit font-bold text-white transition hover:bg-white/10">Découvrir notre méthode <ArrowRight size={18} /></Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-primary px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/75">Votre projet mérite la bonne solution</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Prêt à construire une expérience digitale adaptée à votre activité ?</h2>
          <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">Échangeons sur vos objectifs et identifions l’offre AlteractWeb la plus pertinente pour votre projet.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary shadow-lg transition hover:bg-gray-100">Nous présenter votre projet <ArrowRight size={18} /></Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/35 px-8 py-3.5 font-kanit font-bold text-white transition hover:bg-white/10">Parler à un expert sur WhatsApp <MessageCircle size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}