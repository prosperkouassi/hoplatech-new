'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Dumbbell,
  Gauge,
  Gem,
  Laptop,
  MessageCircle,
  Package,
  Palette,
  Plug,
  RefreshCw,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Users,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20e-commerce.';

const ecommerceFoundations = [
  {
    number: '01',
    icon: Gauge,
    title: 'Performance rapide',
    description:
      'Une boutique légère et rapide facilite la navigation, améliore le référencement et limite les abandons avant l’achat.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design moderne et rassurant',
    description:
      'Une interface cohérente avec votre marque valorise les produits et inspire confiance dès les premières secondes.',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Paiements adaptés au marché',
    description:
      'Cartes bancaires, Mobile Money, paiement à la livraison ou virement sont intégrés selon vos clients et les prestataires compatibles.',
  },
  {
    number: '04',
    icon: Boxes,
    title: 'Gestion centralisée',
    description:
      'Produits, variantes, stocks, commandes, promotions et clients sont organisés dans une interface d’administration claire.',
  },
  {
    number: '05',
    icon: ShoppingCart,
    title: 'Parcours d’achat fluide',
    description:
      'La navigation guide naturellement le visiteur de la découverte du produit jusqu’à la validation de sa commande.',
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Optimisation de la conversion',
    description:
      'Fiches produits, réassurance et appels à l’action sont structurés pour transformer davantage de visiteurs en clients.',
  },
  {
    number: '07',
    icon: Truck,
    title: 'Livraison et zones maîtrisées',
    description:
      'Les tarifs, délais, zones desservies et options de retrait sont configurés selon votre organisation logistique.',
  },
  {
    number: '08',
    icon: RefreshCw,
    title: 'Solution connectée et évolutive',
    description:
      'La boutique peut évoluer et se connecter à vos outils de gestion, marketing, livraison ou relation client lorsque des interfaces compatibles existent.',
  },
];

const shopTypes = [
  {
    icon: Dumbbell,
    title: 'Sports & bien-être',
    description: 'Équipements, accessoires, programmes et produits spécialisés.',
  },
  {
    icon: Sparkles,
    title: 'Marques & créateurs',
    description: 'Une boutique fidèle à votre univers et à votre positionnement.',
  },
  {
    icon: Shirt,
    title: 'Mode & vêtements',
    description: 'Tailles, couleurs, collections, variantes et stocks organisés.',
  },
  {
    icon: Gem,
    title: 'Bijoux & accessoires',
    description: 'Des fiches détaillées et des visuels qui valorisent chaque pièce.',
  },
  {
    icon: Laptop,
    title: 'Électronique',
    description: 'Caractéristiques, comparaisons et disponibilités clairement présentées.',
  },
  {
    icon: ShoppingBag,
    title: 'Beauté & cosmétiques',
    description: 'Gammes, bénéfices, conseils d’utilisation et routines d’achat.',
  },
];

const benefits = [
  {
    number: '01',
    icon: Store,
    title: 'Vendre à toute heure',
    description:
      'Votre catalogue reste accessible et vos clients peuvent commander sans dépendre des horaires d’un point de vente.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Élargir votre clientèle',
    description:
      'Une boutique bien référencée vous permet de toucher de nouveaux acheteurs au-delà de votre zone habituelle.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Piloter vos ventes',
    description:
      'Suivez les commandes, les produits les plus consultés et les performances utiles à vos décisions commerciales.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Maîtriser votre marque',
    description:
      'Vous contrôlez votre présentation, votre discours et l’expérience offerte, sans dépendre uniquement d’une marketplace.',
  },
];

const processSteps = [
  {
    title: 'Cadrage commercial',
    description: 'Nous définissons vos produits, vos clients, vos règles de vente et vos objectifs.',
  },
  {
    title: 'Parcours & design',
    description: 'Nous structurons le catalogue et concevons une expérience d’achat fidèle à votre marque.',
  },
  {
    title: 'Développement',
    description: 'Nous intégrons la boutique, les paiements et les connexions prévues au périmètre.',
  },
  {
    title: 'Tests & lancement',
    description: 'Nous testons les commandes, déployons la boutique et vous formons à sa gestion.',
  },
];

const faqItems = [
  {
    question: 'Quels moyens de paiement peuvent être intégrés ?',
    answer:
      'Nous pouvons intégrer des solutions compatibles avec les cartes bancaires, le Mobile Money, le paiement à la livraison ou le virement. Le choix dépend de votre marché, de votre structure juridique, des devises utilisées et des prestataires disponibles.',
  },
  {
    question: 'Y a-t-il des commissions sur les ventes ?',
    answer:
      'AlteractWeb ne prélève pas automatiquement de commission sur chaque vente. En revanche, les prestataires de paiement, de livraison ou certains services externes peuvent appliquer leurs propres frais. Ces coûts sont identifiés avant leur intégration.',
  },
  {
    question: 'Pourrai-je gérer les produits et les commandes moi-même ?',
    answer:
      'Oui. L’interface d’administration peut vous permettre de créer les produits, modifier les prix, suivre les stocks, traiter les commandes, gérer les promotions et consulter les informations clients selon le périmètre retenu.',
  },
  {
    question: 'Comment sont gérées la livraison et les zones desservies ?',
    answer:
      'Nous configurons les zones, tarifs, seuils de gratuité, délais et options de retrait selon votre organisation. Une connexion à un partenaire logistique peut être étudiée lorsque celui-ci dispose d’une API ou d’un module compatible.',
  },
  {
    question: 'Puis-je utiliser mon nom de domaine et mon hébergement actuels ?',
    answer:
      'Oui, après vérification technique. Une boutique en ligne demande un environnement adapté à son trafic, à son stockage, à sa sécurité et aux technologies choisies. Une migration peut être recommandée si l’installation actuelle est insuffisante.',
  },
  {
    question: 'La boutique et les paiements sont-ils sécurisés ?',
    answer:
      'La boutique intègre le HTTPS et les bonnes pratiques de sécurité adaptées au projet. Les données de paiement sensibles sont traitées par les prestataires agréés retenus et ne sont pas directement stockées sur votre site.',
  },
  {
    question: 'Qui ajoute les produits et les contenus au lancement ?',
    answer:
      'Le nombre de produits intégrés, la préparation des fiches, les photos et les textes sont définis dans la proposition. Vous pouvez fournir un catalogue structuré ou nous confier une partie de l’intégration et de l’optimisation des contenus.',
  },
  {
    question: 'La maintenance est-elle prévue après la mise en ligne ?',
    answer:
      'Les tests, la mise en ligne et la prise en main sont compris dans la livraison. La maintenance continue, les sauvegardes, la surveillance, les mises à jour et les futures évolutions peuvent faire l’objet d’un accompagnement distinct.',
  },
];

export default function EcommerceWebsitePageClient() {
  const expertiseRef = useRef<HTMLElement>(null);
  const expertiseIntroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const section = expertiseRef.current;
    const intro = expertiseIntroRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLElement => Boolean(card),
    );

    if (!section || !intro || cards.length === 0) return;

    const media = gsap.matchMedia();

    media.add('(min-width: 1024px)', () => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 112px',
        end: 'bottom bottom',
        pin: intro,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });

    media.add(
      '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      () => {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              x: index % 2 === 0 ? -52 : 52,
              opacity: 0.35,
            },
            {
              x: 0,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                end: 'top 58%',
                scrub: 0.7,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      },
    );

    ScrollTrigger.refresh();
    return () => media.revert();
  }, []);

  return (
    <main className="overflow-x-clip bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0f0f10] px-4 py-24 text-white sm:py-28 lg:min-h-[calc(100svh-4rem)] lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(247,64,57,0.24),transparent_35%),radial-gradient(circle_at_18%_82%,rgba(212,61,73,0.16),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Création de site e-commerce
            </span>
            <h1 className="mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Une boutique en ligne conçue pour{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                transformer les visites en ventes
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/80 sm:text-xl">
              Mettez en valeur vos produits, simplifiez l’achat et développez votre activité avec une plateforme rapide, rassurante et adaptée à vos clients.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Parlons de votre boutique <ArrowRight size={18} />
              </a>
              <a
                href="#expertise-ecommerce"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Découvrir notre approche <ChevronRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/75">
              {['Paiements sécurisés', 'Mobile Money', 'Gestion des commandes', 'Responsive'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-secondary" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] p-3 shadow-2xl backdrop-blur-md sm:p-4">
              <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-3 h-7 flex-1 rounded-lg bg-white/10" />
              </div>
              <div className="grid gap-4 p-3 sm:grid-cols-[1.1fr_.9fr] sm:p-5">
                <div className="rounded-2xl bg-white p-5 text-brand-dark">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-kanit text-xs font-bold uppercase tracking-wider text-brand-primary">Nouvelle collection</p>
                      <p className="mt-2 font-urbanist text-xl font-bold">Votre boutique</p>
                    </div>
                    <ShoppingBag size={28} className="text-brand-primary" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[0, 1, 2, 3].map((item) => (
                      <div key={item} className="rounded-xl bg-gray-100 p-3">
                        <div className="h-20 rounded-lg bg-gradient-to-br from-brand-primary/20 to-gray-200" />
                        <div className="mt-3 h-2.5 w-4/5 rounded-full bg-gray-300" />
                        <div className="mt-2 h-2.5 w-2/5 rounded-full bg-brand-primary/30" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-brand-primary p-5">
                    <p className="font-kanit text-xs uppercase tracking-wider text-white/70">Commandes</p>
                    <p className="mt-3 font-urbanist text-4xl font-bold">+24%</p>
                    <p className="mt-2 font-kanit text-sm text-white/70">Une expérience pensée pour convertir.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <CreditCard size={25} className="text-brand-secondary" />
                    <p className="mt-4 font-urbanist font-bold">Paiement fluide</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <Truck size={25} className="text-brand-secondary" />
                    <p className="mt-4 font-urbanist font-bold">Livraison maîtrisée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Votre activité accessible partout
          </span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
            Nous réalisons votre site e-commerce sur mesure
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              AlteractWeb accompagne les entreprises, les marques et les porteurs de projets dans la création de boutiques modernes, performantes et évolutives.
            </p>
            <p>
              Votre plateforme est pensée pour valoriser les produits, faciliter la gestion quotidienne et offrir une expérience d’achat claire à chaque étape.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE ANIMÉE */}
      <section
        id="expertise-ecommerce"
        ref={expertiseRef}
        className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28 lg:py-32"
      >
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div ref={expertiseIntroRef} className="h-fit lg:self-start">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Pensé pour vendre
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Notre expertise au service de la réussite de votre e-commerce
            </h2>
            <p className="mt-6 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
              Une boutique performante doit relier expérience client, opérations commerciales et fondations techniques fiables.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600"
            >
              Commençons <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {ecommerceFoundations.map((foundation, index) => {
              const Icon = foundation.icon;
              return (
                <article
                  key={foundation.number}
                  ref={(element) => {
                    if (element) cardRefs.current[index] = element;
                  }}
                  className="border-t border-gray-300 py-7 dark:border-gray-700 lg:min-h-[300px] lg:py-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-urbanist text-5xl font-bold text-gray-300 dark:text-gray-700">
                      {foundation.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10">
                      <Icon size={22} className="text-brand-primary" />
                    </div>
                  </div>
                  <h3 className="mt-8 font-urbanist text-xl font-bold sm:text-2xl">{foundation.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
                    {foundation.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TYPOLOGIES */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Une boutique adaptée à votre univers
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Chaque catalogue mérite une expérience sur mesure
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              La navigation, les fiches produits et les fonctionnalités sont organisées selon les usages propres à votre secteur.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shopTypes.map((type) => {
              const Icon = type.icon;
              return (
                <article
                  key={type.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition group-hover:bg-brand-primary">
                    <Icon size={24} className="text-brand-primary group-hover:text-white" />
                  </div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{type.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{type.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÉCOSYSTÈME COMMERCE */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Un écosystème connecté
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Une boutique qui simplifie vos ventes et vos opérations
            </h2>
            <p className="mt-6 font-kanit text-lg leading-relaxed text-white/70">
              Nous sélectionnons les technologies et connexions adaptées à votre organisation, sans ajouter de complexité inutile.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Catalogue et variantes',
                'Stock et commandes',
                'Mobile Money et cartes',
                'Promotions et codes de réduction',
                'Livraison et retrait',
                'Statistiques et suivi commercial',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-kanit text-sm text-white/80">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-brand-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600"
            >
              Étudier mon projet <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-brand-primary/15 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-kanit text-xs uppercase tracking-wider text-white/45">Votre commerce</p>
                  <p className="mt-2 font-urbanist text-2xl font-bold">Un pilotage centralisé</p>
                </div>
                <Plug size={34} className="text-brand-secondary" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Package, value: 'Produits', label: 'Catalogue structuré' },
                  { icon: CreditCard, value: 'Paiements', label: 'Parcours sécurisé' },
                  { icon: Truck, value: 'Livraison', label: 'Règles personnalisées' },
                  { icon: BarChart3, value: 'Données', label: 'Suivi des ventes' },
                ].map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.value} className="rounded-2xl bg-white/[0.07] p-5">
                      <Icon size={24} className="text-brand-secondary" />
                      <p className="mt-4 font-urbanist text-xl font-bold">{metric.value}</p>
                      <p className="mt-2 font-kanit text-sm text-white/60">{metric.label}</p>
                    </div>
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
              Développez votre activité
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Votre boutique devient un véritable canal de vente
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Une plateforme maîtrisée vous aide à vendre, comprendre vos clients et construire une relation durable avec eux.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.number} className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-[#1a1a1a]">
                  <div className="flex items-center justify-between">
                    <Icon size={25} className="text-brand-primary" />
                    <span className="font-urbanist text-sm font-bold text-gray-400">{benefit.number}</span>
                  </div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Notre méthode</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">De votre catalogue à vos premières commandes</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Un parcours structuré pour sécuriser les décisions commerciales, techniques et opérationnelles.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gray-300 dark:bg-gray-700 md:block" />
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary font-urbanist text-xl font-bold text-white shadow-lg">{index + 1}</div>
                <h3 className="mt-6 font-urbanist text-lg font-bold">{step.title}</h3>
                <p className="mt-3 font-kanit text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="h-fit lg:sticky lg:top-28">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Questions fréquentes</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Ce qu’il faut savoir avant de lancer votre boutique</h2>
            <p className="mt-6 font-kanit text-lg leading-relaxed text-white/65">
              Paiements, commissions, catalogue, livraison ou maintenance : clarifions les sujets essentiels de votre projet e-commerce.
            </p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600">
              Poser une autre question <MessageCircle size={18} />
            </a>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqItems.map((item, index) => (
              <details key={item.question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-urbanist text-lg font-bold outline-none transition hover:text-brand-secondary focus-visible:text-brand-secondary sm:py-7 sm:text-xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 font-kanit text-xs font-bold text-brand-secondary">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item.question}</span>
                  </span>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition group-open:rotate-180 group-open:border-brand-primary group-open:bg-brand-primary">
                    <ChevronDown size={18} aria-hidden="true" />
                  </span>
                </summary>
                <div className="pb-7 pl-10 pr-12 sm:pb-8">
                  <p className="max-w-3xl font-kanit leading-relaxed text-white/65">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-primary px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/75">Votre catalogue est prêt à aller plus loin</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Créons une boutique qui donne envie d’acheter et de revenir</h2>
          <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">
            Échangeons sur vos produits, vos clients, vos moyens de paiement et l’organisation nécessaire pour vendre efficacement en ligne.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary shadow-lg transition hover:bg-gray-100">
              Parler à un expert <MessageCircle size={19} />
            </a>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white/35 px-8 py-3.5 font-kanit font-bold text-white transition hover:bg-white/10">
              Nous envoyer votre brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}