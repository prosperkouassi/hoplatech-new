'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChefHat,
  ChevronRight,
  Globe2,
  Images,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Utensils,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20web%20pour%20mon%20restaurant.';

const presentationPoints = [
  'Présentez votre carte avec des photos et des descriptions gourmandes',
  'Facilitez les réservations de table depuis tous les écrans',
  'Proposez la commande en ligne, à emporter ou en click & collect',
  'Améliorez votre visibilité grâce au référencement local',
  'Connectez votre site à Instagram, Facebook et WhatsApp',
  'Mettez à jour simplement menus, horaires et disponibilités',
];

const features = [
  {
    icon: CalendarDays,
    title: 'Réservation intégrée',
    description: 'Facilitez la réservation de table avec un parcours rapide, clair et adapté au mobile.',
  },
  {
    icon: Utensils,
    title: 'Menu digital',
    description: 'Présentez vos plats, formules, prix et disponibilités avec des visuels professionnels.',
  },
  {
    icon: ShoppingBag,
    title: 'Commande & click & collect',
    description: 'Transformez votre trafic en ventes grâce à la commande en ligne et à la vente à emporter.',
  },
  {
    icon: Images,
    title: 'Galerie immersive',
    description: 'Valorisez vos plats, vos tables, votre terrasse, votre cuisine et l’ambiance du lieu.',
  },
  {
    icon: Star,
    title: 'Avis clients',
    description: 'Renforcez la confiance des futurs clients avec des témoignages authentiques.',
  },
  {
    icon: Search,
    title: 'SEO local',
    description: 'Soyez trouvé par les internautes qui recherchent un restaurant en Côte d’Ivoire.',
  },
];

const benefits = [
  {
    number: '01',
    icon: Search,
    title: 'Gagner en visibilité',
    description: 'Attirez de nouveaux clients grâce à un site rapide et un référencement naturel structuré.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Éveiller l’envie',
    description: 'Mettez en scène vos plats et votre univers avec des contenus qui suscitent la gourmandise.',
  },
  {
    number: '03',
    icon: CalendarDays,
    title: 'Simplifier les réservations',
    description: 'Réduisez les frictions avec un parcours de réservation pratique et synchronisable.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Renforcer votre image',
    description: 'Affirmez la personnalité de votre établissement avec une identité digitale cohérente.',
  },
];

const offers = [
  {
    name: 'Essentiel',
    audience: 'Restaurants traditionnels et établissements indépendants',
    items: [
      'Site professionnel responsive',
      'Présentation du menu avec photos et descriptions',
      'Formulaire de contact et Google Maps',
      'SEO local de base',
      'Connexion à Instagram, Facebook et WhatsApp',
      'Présentation des horaires et informations pratiques',
    ],
  },
  {
    name: 'Confort',
    audience: 'Bars, lounges, pubs et établissements souhaitant développer leurs réservations',
    items: [
      'Toutes les fonctionnalités de l’offre Essentiel',
      'Design sur mesure à l’image de l’établissement',
      'Mise en avant des événements et soirées',
      'Présentation des cartes et cocktails',
      'Réservation de table ou d’espace',
      'Accompagnement à la mise en valeur des contenus',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    audience: 'Établissements ambitieux souhaitant maximiser leur chiffre d’affaires',
    items: [
      'Toutes les fonctionnalités de l’offre Confort',
      'Création ou refonte complète du site',
      'Design premium et identité visuelle renforcée',
      'Commande en ligne ou click & collect',
      'Réservation synchronisée avec Google Calendar',
      'Architecture évolutive et accompagnement renforcé',
    ],
  },
];

const processSteps = [
  { title: 'Immersion', description: 'Nous découvrons votre cuisine, votre clientèle et vos objectifs.' },
  { title: 'Conception', description: 'Nous structurons vos contenus et créons une interface à votre image.' },
  { title: 'Développement', description: 'Nous intégrons les fonctionnalités, le responsive et les optimisations SEO.' },
  { title: 'Mise en ligne', description: 'Nous testons, déployons et vous accompagnons dans la prise en main.' },
];

export default function RestaurantWebsitePageClient() {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const panels = panelsRef.current.filter(
      (panel): panel is HTMLDivElement => Boolean(panel),
    );

    if (!scrollContainer || panels.length < 2) return;

    const media = gsap.matchMedia();
    media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
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
    });

    ScrollTrigger.refresh();
    return () => media.revert();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-24 sm:py-28 lg:py-32">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/videos/site-pour-restaurant-abidjan.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-brand-primary/20" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Création de site web pour restaurant en Côte d’Ivoire
            </span>
            <h1 className="mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              L’art de recevoir commence{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">avant la première bouchée</span>
            </h1>
            <p className="mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">
              Nous créons des expériences numériques qui prolongent l’excellence de votre table, éveillent la curiosité et transforment vos visiteurs en clients.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
                Parlons de votre projet <ArrowRight size={18} />
              </a>
              <a href="#fonctionnalites" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
                Découvrir notre approche <ChevronRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/80">
              {['Design sur mesure', 'Réservation de table', 'SEO local', 'Expérience mobile'].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-secondary" />{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NORMALE AVANT L'IMMERSION */}
      <section className="px-4 py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Votre meilleur atout commercial
          </span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
            L’expérience client commence bien avant l’arrivée en salle
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            AlteractWeb conçoit une plateforme qui reflète votre cuisine et votre atmosphère.
            Elle attire l’attention, rassure vos futurs clients et leur permet de réserver ou
            commander sans friction.
          </p>
        </div>
      </section>

      <section ref={scrollContainerRef} className="relative bg-gray-50 dark:bg-[#121212] lg:h-screen lg:overflow-hidden">
        <div className="absolute bottom-8 right-8 z-10 hidden font-urbanist text-sm font-bold text-gray-400 lg:block">01 / 02</div>
        <div className="flex flex-col lg:h-full lg:w-[200vw] lg:flex-row">
          <div ref={(element) => { if (element) panelsRef.current[0] = element; }} className="flex w-full items-center px-4 py-24 sm:py-28 lg:h-full lg:w-screen lg:flex-shrink-0 lg:py-0">
            <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <ul className="space-y-3 font-kanit text-gray-700 dark:text-gray-300" aria-label="Atouts du site pour votre restaurant">
                  {presentationPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10"><CheckCircle2 size={14} className="text-brand-primary" /></span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-800 dark:bg-[#1a1a1a] sm:p-7">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                  <div><p className="font-kanit text-xs uppercase tracking-wider text-gray-500">Votre restaurant</p><p className="mt-1 font-urbanist text-lg font-bold">Une expérience digitale complète</p></div>
                  <ChefHat className="text-brand-primary" size={30} />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[{ icon: Utensils, label: 'Menu & spécialités' }, { icon: CalendarDays, label: 'Réservation de table' }, { icon: Images, label: 'Galerie culinaire' }, { icon: MapPin, label: 'Horaires & localisation' }].map((item) => {
                    const Icon = item.icon;
                    return <div key={item.label} className="rounded-2xl bg-gray-50 p-5 dark:bg-[#262626]"><Icon size={24} className="text-brand-primary" /><p className="mt-4 font-urbanist font-bold">{item.label}</p></div>;
                  })}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-brand-primary p-5 text-white">
                  <ShoppingBag size={24} /><div><p className="font-urbanist font-bold">Réserver ou commander simplement</p><p className="mt-1 font-kanit text-sm text-white/80">Un parcours pensé pour convertir.</p></div>
                </div>
              </div>
            </div>
          </div>

          <div id="fonctionnalites" ref={(element) => { if (element) panelsRef.current[1] = element; }} className="flex w-full items-center px-4 py-24 sm:py-28 lg:h-full lg:w-screen lg:flex-shrink-0 lg:py-0">
            <div className="container mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Fonctionnalités essentielles</span>
                <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Chaque fonctionnalité répond à un besoin concret de vos clients et de votre équipe.</p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return <article key={feature.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-[#1a1a1a]"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10"><Icon size={22} className="text-brand-primary" /></div><h3 className="mt-4 font-urbanist text-lg font-bold">{feature.title}</h3><p className="mt-3 font-kanit text-sm leading-relaxed text-gray-600 dark:text-gray-400">{feature.description}</p></article>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Pourquoi créer un site pour votre restaurant ?</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Votre site doit donner envie de venir, pas seulement afficher un menu</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Une présence digitale maîtrisée vous aide à attirer, convaincre et fidéliser votre clientèle.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return <article key={benefit.number} className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-[#1a1a1a]"><div className="flex items-center justify-between"><Icon size={25} className="text-brand-primary" /><span className="font-urbanist text-sm font-bold text-gray-400">{benefit.number}</span></div><h3 className="mt-6 font-urbanist text-xl font-bold">{benefit.title}</h3><p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{benefit.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Une solution clé en main</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Concentrez-vous sur votre cuisine et vos clients</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Nous prenons en charge les éléments essentiels de votre performance digitale.</p>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {[
              { icon: LayoutDashboard, title: 'Performance commerciale', text: 'Réservation, commande en ligne et click & collect transforment votre trafic web en opportunités concrètes.' },
              { icon: Globe2, title: 'Image & storytelling', text: 'Design sur mesure, photos culinaires, vidéos d’ambiance et contenus racontent une expérience qui vous ressemble.' },
              { icon: ShieldCheck, title: 'Visibilité & fiabilité', text: 'Un site mobile first, rapide, sécurisé et optimisé pour le référencement naturel et les réseaux sociaux.' },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return <article key={pillar.title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-brand-dark"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white"><Icon size={24} /></div><h3 className="mt-6 font-urbanist text-2xl font-bold">{pillar.title}</h3><p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{pillar.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Nos formules</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Une offre adaptée à votre concept et à vos ambitions</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Le périmètre définitif est ajusté après un échange sur vos besoins, vos contenus et vos outils existants.</p>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.name} className={`relative flex h-full flex-col rounded-3xl border p-8 ${offer.featured ? 'border-brand-primary bg-brand-primary text-white shadow-xl' : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-[#1a1a1a]'}`}>
                {offer.featured && <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 font-kanit text-xs font-bold uppercase tracking-wider">Recommandée</span>}
                <p className={`font-kanit text-xs font-bold uppercase tracking-[0.16em] ${offer.featured ? 'text-white/75' : 'text-brand-primary'}`}>Offre</p>
                <h3 className="mt-3 font-urbanist text-3xl font-bold">{offer.name}</h3>
                <p className={`mt-4 min-h-16 font-kanit leading-relaxed ${offer.featured ? 'text-white/85' : 'text-gray-600 dark:text-gray-400'}`}>{offer.audience}</p>
                <ul className="mt-7 flex-grow space-y-3">
                  {offer.items.map((item) => <li key={item} className="flex items-start gap-3 font-kanit text-sm"><CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 ${offer.featured ? 'text-white' : 'text-brand-primary'}`} /><span>{item}</span></li>)}
                </ul>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 font-kanit font-bold transition ${offer.featured ? 'bg-white text-brand-primary hover:bg-gray-100' : 'bg-brand-primary text-white hover:bg-red-600'}`}>Échanger sur cette offre <MessageCircle size={18} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="methode" className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Notre méthode</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">De votre univers à la mise en ligne</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Un accompagnement structuré pour construire un site fidèle à votre établissement.</p>
          </div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gray-300 dark:bg-gray-700 md:block" />
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative text-center"><div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary font-urbanist text-xl font-bold text-white shadow-lg">{index + 1}</div><h3 className="mt-6 font-urbanist text-lg font-bold">{step.title}</h3><p className="mt-3 font-kanit text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/75">Votre restaurant mérite mieux qu’un simple menu en ligne</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Créons une expérience digitale qui donne envie de réserver</h2>
          <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">Échangeons gratuitement sur votre concept, vos besoins de réservation ou de commande et l’image que vous souhaitez transmettre.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary shadow-lg transition hover:bg-gray-100">Parler à un expert <MessageCircle size={19} /></a>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white/35 px-8 py-3.5 font-kanit font-bold text-white transition hover:bg-white/10">Nous envoyer votre brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}