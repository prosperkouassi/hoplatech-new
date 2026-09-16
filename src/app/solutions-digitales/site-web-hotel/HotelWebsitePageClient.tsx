// src/app/solutions-digitales/site-web-hotel/HotelWebsitePageClient.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Globe2,
  Hotel,
  Images,
  Languages,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20web%20pour%20mon%20h%C3%B4tel.';

const presentationPoints = [
  'Présentez vos chambres, suites, services et équipements',
  'Facilitez les demandes et les réservations directes',
  'Valorisez votre établissement avec des visuels immersifs',
  'Améliorez votre visibilité grâce au référencement local',
  'Offrez une expérience fluide sur mobile, tablette et ordinateur',
  'Centralisez les informations utiles avant et après la réservation',
];

const features = [
  {
    icon: CalendarDays,
    title: 'Réservation intégrée',
    description:
      'Permettez à vos voyageurs de consulter les disponibilités et de réserver plus facilement.',
  },
  {
    icon: BedDouble,
    title: 'Chambres et services',
    description:
      'Présentez chaque chambre avec ses équipements, ses tarifs et ses conditions.',
  },
  {
    icon: Images,
    title: 'Galerie immersive',
    description:
      'Mettez en valeur les chambres, le lobby, les extérieurs et les expériences proposées.',
  },
  {
    icon: Star,
    title: 'Avis et témoignages',
    description:
      'Rassurez les futurs voyageurs avec des retours clients authentiques et bien présentés.',
  },
  {
    icon: Search,
    title: 'SEO hôtelier local',
    description:
      'Optimisez les contenus pour être trouvé par les voyageurs recherchant un hôtel en Côte d’Ivoire.',
  },
  {
    icon: Languages,
    title: 'Site multilingue',
    description:
      'Adressez-vous à la clientèle locale et internationale dans les langues pertinentes.',
  },
];

const benefits = [
  {
    number: '01',
    icon: Search,
    title: 'Gagner en visibilité',
    description:
      'Attirez de nouveaux voyageurs grâce à un site rapide et à un référencement naturel structuré.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Mettre en valeur',
    description:
      'Présentez votre établissement avec des images soignées et des contenus qui donnent envie de séjourner.',
  },
  {
    number: '03',
    icon: CalendarDays,
    title: 'Simplifier les réservations',
    description:
      'Réduisez les frictions avec un parcours de réservation clair, pratique et adapté au mobile.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Renforcer votre image',
    description:
      'Affirmez le standing et la personnalité de votre hôtel avec une identité digitale cohérente.',
  },
];

const offers = [
  {
    name: 'Essentiel',
    audience: 'Hôtels indépendants, maisons d’hôtes et résidences',
    items: [
      'Site professionnel responsive',
      'Présentation des chambres et services',
      'Galerie photo immersive',
      'Formulaire de contact et localisation',
      'SEO local de base',
      'Connexion aux réseaux sociaux et à WhatsApp',
    ],
  },
  {
    name: 'Confort',
    audience: 'Établissements souhaitant développer leurs réservations directes',
    items: [
      'Toutes les fonctionnalités de l’offre Essentiel',
      'Design sur mesure',
      'Pages chambres, tarifs, activités et services',
      'Synchronisation Google Calendar',
      'Module de réservation en ligne',
      'Accompagnement à la mise en valeur des contenus',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    audience: 'Établissements ambitieux visant une expérience digitale complète',
    items: [
      'Toutes les fonctionnalités de l’offre Confort',
      'Création ou refonte complète',
      'Design premium et identité renforcée',
      'Réservation avancée avec disponibilités',
      'Connexion aux plateformes externes en option',
      'Architecture évolutive et accompagnement renforcé',
    ],
  },
];

const processSteps = [
  {
    title: 'Immersion',
    description: 'Nous analysons votre établissement, votre clientèle et vos objectifs.',
  },
  {
    title: 'Conception',
    description: 'Nous structurons les contenus et créons une interface à votre image.',
  },
  {
    title: 'Développement',
    description: 'Nous intégrons les fonctionnalités, le responsive et les optimisations SEO.',
  },
  {
    title: 'Mise en ligne',
    description: 'Nous testons, déployons et vous accompagnons dans la prise en main.',
  },
];

export default function HotelWebsitePageClient() {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const panels = panelsRef.current.filter(
      (panel): panel is HTMLDivElement => Boolean(panel),
    );

    if (!scrollContainer || panels.length < 2) return;

    const media = gsap.matchMedia();

    media.add(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      () => {
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scrollContainer,
            start: 'top top',
            end: () => `+=${scrollContainer.offsetWidth}`,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            invalidateOnRefresh: true,
          },
        });
      },
    );

    ScrollTrigger.refresh();

    return () => media.revert();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      {/* HERO VIDÉO */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-24 sm:py-28 lg:py-32">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/offrehotel-1.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-brand-primary/20" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Création de site web pour hôtel en Côte d’Ivoire
            </span>

            <h1 className="mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Création de site web pour hôtel :{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                transformez votre présence digitale
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">
              AlteractWeb conçoit des sites web pour hôtels en Côte d’Ivoire,
              pensés pour présenter vos chambres, développer vos réservations
              directes et séduire les voyageurs locaux et internationaux.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Parlons de votre projet <ArrowRight size={18} />
              </a>
              <a
                href="#fonctionnalites"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Découvrir notre approche <ChevronRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/80">
              {['Design premium', 'Réservation directe', 'SEO local', 'Expérience mobile'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-secondary" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Une destination dès le premier clic
          </span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
            Faites de votre hôtel une destination incontournable
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            AlteractWeb accompagne les hôtels, résidences et maisons d&apos;hôtes
            dans la création de leur site internet en Côte d&apos;Ivoire.
            Nous concevons des sites hôteliers élégants et performants qui
            valorisent les chambres et les services de votre établissement,
            rassurent les voyageurs et facilitent la réservation directe.
          </p>
        </div>
      </section>

      {/* PRÉSENTATION IMMERSIVE */}
      <section
        ref={scrollContainerRef}
        className="relative bg-gray-50 dark:bg-[#121212] lg:h-screen lg:overflow-hidden"
      >
        <div className="absolute bottom-8 right-8 z-10 hidden font-urbanist text-sm font-bold text-gray-400 lg:block">
          01 / 02
        </div>

        <div className="flex flex-col lg:h-full lg:w-[200vw] lg:flex-row">
          <div
            ref={(element) => {
              if (element) panelsRef.current[0] = element;
            }}
            className="flex w-full items-center px-4 py-24 sm:py-28 lg:h-full lg:w-screen lg:flex-shrink-0 lg:py-0"
          >
            <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <ul className="space-y-3 font-kanit text-gray-700 dark:text-gray-300" aria-label="Atouts du site pour votre hôtel">
                  {presentationPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                        <CheckCircle2 size={14} className="text-brand-primary" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-800 dark:bg-[#1a1a1a] sm:p-7">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                  <div>
                    <p className="font-kanit text-xs uppercase tracking-wider text-gray-500">Votre hôtel</p>
                    <p className="mt-1 font-urbanist text-lg font-bold">Une expérience digitale complète</p>
                  </div>
                  <Hotel className="text-brand-primary" size={30} />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: BedDouble, label: 'Chambres & suites' },
                    { icon: CalendarDays, label: 'Réservation directe' },
                    { icon: Images, label: 'Galerie immersive' },
                    { icon: MapPin, label: 'Activités & localisation' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-gray-50 p-5 dark:bg-[#262626]"
                      >
                        <Icon size={24} className="text-brand-primary" />
                        <p className="mt-4 font-urbanist font-bold">{item.label}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-brand-primary p-5 text-white">
                  <CreditCard size={24} />
                  <div>
                    <p className="font-urbanist font-bold">Parcours de réservation fluide</p>
                    <p className="mt-1 font-kanit text-sm text-white/80">Pensé pour réduire les abandons.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="fonctionnalites"
            ref={(element) => {
              if (element) panelsRef.current[1] = element;
            }}
            className="flex w-full items-center px-4 py-24 sm:py-28 lg:h-full lg:w-screen lg:flex-shrink-0 lg:py-0"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Fonctionnalités essentielles
                </span>
                <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Chaque fonctionnalité répond à un besoin concret du voyageur et de l’équipe hôtelière.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <article
                      key={feature.title}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-[#1a1a1a]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10">
                        <Icon size={22} className="text-brand-primary" />
                      </div>
                      <h3 className="mt-4 font-urbanist text-lg font-bold">{feature.title}</h3>
                      <p className="mt-3 font-kanit text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Pourquoi créer un site hôtelier ?
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Pourquoi créer un site internet professionnel pour votre hôtel ?
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Un site hôtelier professionnel vous permet de renforcer votre visibilité,
              présenter votre établissement, développer les réservations directes et
              réduire votre dépendance aux plateformes de réservation externes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.number}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-[#1a1a1a]"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={25} className="text-brand-primary" />
                    <span className="font-urbanist text-sm font-bold text-gray-400">{benefit.number}</span>
                  </div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Une solution clé en main
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Concentrez-vous sur l’accueil de vos clients
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Nous prenons en charge les éléments essentiels de votre performance digitale.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {[
              {
                icon: LayoutDashboard,
                title: 'Réservations directes',
                text: 'Un parcours clair pour consulter les chambres, les tarifs et les disponibilités sans dépendre uniquement des plateformes intermédiaires.',
              },
              {
                icon: Globe2,
                title: 'Image de marque',
                text: 'Un design soigné, des visuels immersifs et une identité cohérente pour refléter la qualité réelle de votre établissement.',
              },
              {
                icon: ShieldCheck,
                title: 'Performance et sécurité',
                text: 'Un site rapide, responsive, maintenable et conçu selon les bonnes pratiques de sécurité et de référencement.',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-brand-dark"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-urbanist text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
                    {pillar.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
            {/* SITES TÉMOINS */}
      <section className="relative overflow-hidden bg-white px-4 py-24 dark:bg-brand-dark sm:py-28">
        {/* Décoration de fond */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-brand-primary/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-52 -left-52 h-[420px] w-[420px] rounded-full border border-brand-primary/10"
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          {/* En-tête centré */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden h-px w-14 bg-brand-primary/50 sm:block" />

              <span className="font-kanit text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                Nos sites témoins
              </span>

              <span className="hidden h-px w-14 bg-brand-primary/50 sm:block" />
            </div>

            <h2 className="mt-5 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Découvrez votre futur{' '}
              <span className="text-brand-primary">
                site hôtelier
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Deux univers, deux identités. Explorez nos sites témoins et découvrez
              comment AlteractWeb peut valoriser votre établissement et simplifier
              l&apos;expérience de réservation de vos clients.
            </p>
          </div>

          {/* Les deux sites */}
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {/* HÔTEL PLAGE */}
            <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-[#1a1a1a]">
              {/* Grande image */}
              <a
                href="https://hotel-plage-cyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Découvrir le site témoin Hôtel Plage"
                className="relative block h-[340px] overflow-hidden sm:h-[420px]"
              >
                <img
                  src="/images/hotel/hotel-plage-temoin.webp"
                  alt="Aperçu du site témoin Hôtel Plage conçu par AlteractWeb"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/15 to-transparent" />

                <div className="absolute left-7 top-7">
                  <p className="font-kanit text-xs font-medium uppercase tracking-[0.35em] text-white">
                    Hôtel Plage
                  </p>

                  <div className="mt-3 h-px w-14 bg-white/70" />
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="max-w-xs font-urbanist text-2xl font-medium leading-tight text-white sm:text-3xl">
                    L&apos;élégance
                    <br />
                    les pieds dans l&apos;eau
                  </p>
                </div>
              </a>

              {/* Informations */}
              <div className="p-7 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-sm">
                    <h3 className="font-urbanist text-2xl font-bold sm:text-3xl">
                      Hôtel Plage
                    </h3>

                    <p className="mt-2 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
                      Une expérience élégante pensée pour les établissements
                      balnéaires.
                    </p>
                  </div>

                  <a
                    href="https://hotel-plage-cyan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-shrink-0 items-center justify-center gap-3 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white shadow-sm transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 dark:focus:ring-offset-brand-dark"
                  >
                    Découvrez le site
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4 border-t border-gray-100 pt-6 font-kanit text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
                  <span className="flex items-center gap-2">
                    <BedDouble
                      size={19}
                      className="text-brand-primary"
                    />
                    Hébergement
                  </span>

                  <span className="flex items-center gap-2">
                    <Hotel
                      size={19}
                      className="text-brand-primary"
                    />
                    Expérience premium
                  </span>

                  <span className="flex items-center gap-2">
                    <CalendarDays
                      size={19}
                      className="text-brand-primary"
                    />
                    Réservation
                  </span>
                </div>
              </div>
            </article>

            {/* NOMADE HÔTEL */}
            <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-[#1a1a1a]">
              {/* Grande image */}
              <a
                href="https://hotel-nomade.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Découvrir le site témoin Nomade Hôtel"
                className="relative block h-[340px] overflow-hidden sm:h-[420px]"
              >
                <img
                  src="/images/hotel/nomade-hotel-temoin.webp"
                  alt="Aperçu du site témoin Nomade Hôtel conçu par AlteractWeb"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/15 to-transparent" />

                <div className="absolute left-7 top-7">
                  <p className="font-kanit text-xs font-medium uppercase tracking-[0.35em] text-white">
                    Nomade Hôtel
                  </p>

                  <div className="mt-3 h-px w-14 bg-white/70" />
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="max-w-xs font-urbanist text-2xl font-medium leading-tight text-white sm:text-3xl">
                    Une nouvelle façon
                    <br />
                    de voyager
                  </p>
                </div>
              </a>

              {/* Informations */}
              <div className="p-7 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-sm">
                    <h3 className="font-urbanist text-2xl font-bold sm:text-3xl">
                      Nomade Hôtel
                    </h3>

                    <p className="mt-2 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
                      Une identité contemporaine pour présenter votre établissement
                      et donner envie de réserver.
                    </p>
                  </div>

                  <a
                    href="https://hotel-nomade.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-shrink-0 items-center justify-center gap-3 rounded-lg border-2 border-brand-primary px-6 py-3 font-kanit font-bold text-brand-primary transition hover:bg-brand-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 dark:focus:ring-offset-brand-dark"
                  >
                    Découvrez le site
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4 border-t border-gray-100 pt-6 font-kanit text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
                  <span className="flex items-center gap-2">
                    <BedDouble
                      size={19}
                      className="text-brand-primary"
                    />
                    Hébergement
                  </span>

                  <span className="flex items-center gap-2">
                    <Globe2
                      size={19}
                      className="text-brand-primary"
                    />
                    Expérience
                  </span>

                  <span className="flex items-center gap-2">
                    <Sparkles
                      size={19}
                      className="text-brand-primary"
                    />
                    Identité premium
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Mention finale */}
          <div className="mx-auto mt-14 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-brand-primary/40" />

              <Hotel
                size={22}
                className="text-brand-primary"
              />

              <span className="h-px w-10 bg-brand-primary/40" />
            </div>

            <p className="mt-4 font-kanit text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
              Votre projet, notre savoir-faire
            </p>

            <p className="mx-auto mt-4 max-w-2xl font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
              Ces démonstrations sont des exemples : design, contenus,
              fonctionnalités et parcours de réservation sont adaptés à votre
              établissement.
            </p>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Nos formules
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Une offre adaptée à l’ambition de votre établissement
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Le périmètre définitif est ajusté après un échange sur vos besoins, vos contenus et vos outils existants.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  offer.featured
                    ? 'border-brand-primary bg-brand-primary text-white shadow-xl'
                    : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-[#1a1a1a]'
                }`}
              >
                {offer.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 font-kanit text-xs font-bold uppercase tracking-wider">
                    Recommandée
                  </span>
                )}
                <p
                  className={`font-kanit text-xs font-bold uppercase tracking-[0.16em] ${
                    offer.featured ? 'text-white/75' : 'text-brand-primary'
                  }`}
                >
                  Offre
                </p>
                <h3 className="mt-3 font-urbanist text-3xl font-bold">{offer.name}</h3>
                <p
                  className={`mt-4 min-h-16 font-kanit leading-relaxed ${
                    offer.featured ? 'text-white/85' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {offer.audience}
                </p>

                <ul className="mt-7 flex-grow space-y-3">
                  {offer.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-kanit text-sm">
                      <CheckCircle2
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${
                          offer.featured ? 'text-white' : 'text-brand-primary'
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 font-kanit font-bold transition ${
                    offer.featured
                      ? 'bg-white text-brand-primary hover:bg-gray-100'
                      : 'bg-brand-primary text-white hover:bg-red-600'
                  }`}
                >
                  Échanger sur cette offre <MessageCircle size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section id="methode" className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Notre méthode
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              De votre vision à la mise en ligne
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Un accompagnement structuré pour construire un site fidèle à votre établissement.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gray-300 dark:bg-gray-700 md:block" />
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary font-urbanist text-xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                <h3 className="mt-6 font-urbanist text-lg font-bold">{step.title}</h3>
                <p className="mt-3 font-kanit text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-primary px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/75">
            Votre hôtel mérite mieux qu’un simple site
          </span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Créons une expérience digitale à la hauteur de votre établissement
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">
            Échangeons gratuitement sur votre projet, vos besoins de réservation et l’image que vous souhaitez transmettre.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary shadow-lg transition hover:bg-gray-100"
            >
              Parler à un expert <MessageCircle size={19} />
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white/35 px-8 py-3.5 font-kanit font-bold text-white transition hover:bg-white/10"
            >
              Nous envoyer votre brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}