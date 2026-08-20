'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Bug,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  CreditCard,
  Gauge,
  Globe2,
  Layers,
  MapPin,
  MessageCircle,
  Navigation,
  Plug,
  RefreshCw,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Users,
  WifiOff,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20le%20d%C3%A9veloppement%20d%27une%20application%20mobile.';

const expertiseSteps = [
  {
    number: '01',
    icon: Layers,
    title: 'Découverte et cadrage du MVP',
    description:
      'Nous analysons votre activité, vos utilisateurs et les problèmes à résoudre afin de prioriser les fonctionnalités réellement utiles au lancement.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'UX/UI et prototype interactif',
    description:
      'Les parcours, l’architecture de l’information et les interfaces sont conçus puis validés dans un prototype cliquable avant le développement.',
  },
  {
    number: '03',
    icon: Settings2,
    title: 'Architecture technique',
    description:
      'Nous définissons la technologie, les données, le back-end et les environnements adaptés aux performances et aux évolutions attendues.',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Développement itératif',
    description:
      'L’application est construite par cycles afin de valider progressivement les fonctionnalités et de conserver un code maintenable.',
  },
  {
    number: '05',
    icon: Plug,
    title: 'API et services connectés',
    description:
      'Paiement, cartographie, messagerie, CRM ou outils métiers sont connectés lorsqu’ils disposent d’interfaces compatibles et sécurisées.',
  },
  {
    number: '06',
    icon: Bug,
    title: 'Tests et assurance qualité',
    description:
      'Nous vérifions les parcours, la compatibilité, les performances et la sécurité avant de corriger et d’optimiser chaque version.',
  },
  {
    number: '07',
    icon: Rocket,
    title: 'Publication et lancement',
    description:
      'Nous préparons les éléments nécessaires aux stores, la configuration analytique et la mise en production de l’application.',
  },
  {
    number: '08',
    icon: RefreshCw,
    title: 'Maintenance et évolutions',
    description:
      'Après le lancement, les retours utilisateurs et les objectifs métier nourrissent les corrections et les futures versions.',
  },
];

const projectTypes = [
  {
    icon: Store,
    title: 'Application B2C',
    description: 'Services, fidélité et expérience personnalisée pour vos clients.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Application métier',
    description: 'Processus, formulaires, interventions et données pour vos équipes.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce mobile',
    description: 'Catalogue, paiement, commandes, livraison et suivi client.',
  },
  {
    icon: CalendarDays,
    title: 'Réservation & services',
    description: 'Disponibilités, rendez-vous, réservations et notifications.',
  },
  {
    icon: Users,
    title: 'Communauté & contenu',
    description: 'Profils, messagerie, médias, commentaires et interactions.',
  },
  {
    icon: Navigation,
    title: 'Mobilité & terrain',
    description: 'Carte, géolocalisation, itinéraires et suivi en temps réel.',
  },
];

const featureGroups = [
  {
    icon: Users,
    title: 'Comptes et profils',
    text: 'Inscription, connexion, profils utilisateurs, rôles et paramètres personnalisés.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    text: 'Alertes push, rappels et communications adaptées aux actions des utilisateurs.',
  },
  {
    icon: CreditCard,
    title: 'Paiement et abonnements',
    text: 'Transactions, formules récurrentes et historique avec des prestataires compatibles.',
  },
  {
    icon: MapPin,
    title: 'Carte et temps réel',
    text: 'Géolocalisation, suivi, itinéraires et données actualisées selon les besoins.',
  },
  {
    icon: MessageCircle,
    title: 'Messagerie et médias',
    text: 'Chat, appels, commentaires, photos, vidéos et partage de documents.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité et accès',
    text: 'Authentification renforcée, permissions, protection des échanges et données sensibles.',
  },
];

const benefits = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Être présent au quotidien',
    description:
      'Votre service reste accessible depuis le téléphone, au plus près des usages réels de vos clients ou collaborateurs.',
  },
  {
    number: '02',
    icon: Gauge,
    title: 'Fluidifier l’expérience',
    description:
      'Des parcours courts et adaptés au mobile facilitent les actions importantes et améliorent l’adoption.',
  },
  {
    number: '03',
    icon: Bell,
    title: 'Créer de l’engagement',
    description:
      'Les notifications et services personnalisés entretiennent une relation utile sans dépendre uniquement du navigateur.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Faire évoluer le service',
    description:
      'Les données d’usage et les retours permettent de prioriser les améliorations qui ont le plus d’impact.',
  },
];

const processSteps = [
  {
    title: 'Cadrage',
    description: 'Objectifs, utilisateurs, MVP et cahier des charges fonctionnel.',
  },
  {
    title: 'Prototype',
    description: 'Parcours UX, interfaces UI et validation avant développement.',
  },
  {
    title: 'Production',
    description: 'Développement mobile, back-end, API et validations progressives.',
  },
  {
    title: 'Qualité',
    description: 'Tests fonctionnels, compatibilité, sécurité et optimisation.',
  },
  {
    title: 'Lancement',
    description: 'Publication, suivi, maintenance et préparation des évolutions.',
  },
];

const faqItems = [
  {
    question: 'L’application fonctionnera-t-elle sur iOS et Android ?',
    answer:
      'Le projet peut couvrir iOS, Android ou les deux. Nous recommandons une approche multiplateforme, native ou PWA selon vos utilisateurs, les fonctions du téléphone nécessaires, le budget, le calendrier et les performances attendues.',
  },
  {
    question: 'Quelle différence entre une application mobile et une PWA ?',
    answer:
      'Une application mobile est notamment distribuée par les stores et bénéficie d’un accès plus large aux fonctions du téléphone. Une PWA fonctionne depuis le navigateur, peut s’installer sur l’écran d’accueil et se lance souvent plus rapidement, mais certaines capacités restent limitées selon les appareils.',
  },
  {
    question: 'Qui publie l’application sur l’App Store et Google Play ?',
    answer:
      'Nous pouvons préparer les fiches, les versions et accompagner la soumission. Les comptes développeur Apple et Google sont idéalement créés au nom de votre entreprise afin que vous conserviez le contrôle de l’application et de ses publications.',
  },
  {
    question: 'Les comptes développeur et services externes sont-ils inclus ?',
    answer:
      'Les abonnements aux stores, au cloud, à la cartographie, aux SMS, au paiement ou à d’autres services tiers sont identifiés séparément. Ils restent soumis aux conditions et tarifs de leurs fournisseurs, qui peuvent évoluer.',
  },
  {
    question: 'L’application peut-elle se connecter à mes outils existants ?',
    answer:
      'Oui, lorsque votre CRM, ERP, site web ou logiciel métier propose une API ou une interface compatible. Une étude technique vérifie les données accessibles, les règles de sécurité, les coûts éventuels et les limites de chaque connexion.',
  },
  {
    question: 'Combien de temps faut-il pour développer une application ?',
    answer:
      'Le délai varie selon le nombre de parcours, les fonctionnalités, les connexions, le back-end et la disponibilité des validations. Après le cadrage du MVP, nous établissons un planning réaliste découpé en étapes vérifiables.',
  },
  {
    question: 'Que se passe-t-il après la publication ?',
    answer:
      'Nous suivons le lancement et traitons les anomalies relevant du périmètre convenu. La maintenance, les mises à jour liées à iOS ou Android, le support et les évolutions fonctionnelles sont ensuite organisés selon la formule d’accompagnement retenue.',
  },
  {
    question: 'À qui appartiennent le code, les comptes et les données ?',
    answer:
      'Les droits d’utilisation, la propriété des données, les accès aux comptes et les conditions de remise des sources sont précisés dans la proposition et le contrat. Ce cadre est validé avant le développement pour éviter toute ambiguïté.',
  },
];

export default function MobileApplicationPageClient() {
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
            { x: index % 2 === 0 ? -52 : 52, opacity: 0.35 },
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
              Développement d’application mobile sur mesure
            </span>
            <h1 className="mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Transformez votre idée en une{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                application utile et adoptée
              </span>
            </h1>
            <p className="mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/80 sm:text-xl">
              Nous concevons des applications mobiles fiables, intuitives et évolutives pour digitaliser un service, engager vos clients ou simplifier le travail de vos équipes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
                Parlons de votre application <ArrowRight size={18} />
              </a>
              <a href="#expertise-mobile" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
                Découvrir notre approche <ChevronRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/75">
              {['iOS & Android', 'UX/UI sur mesure', 'API & back-end', 'Publication stores'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center gap-4 sm:gap-7 lg:justify-end">
            <div className="absolute inset-0 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative w-[46%] max-w-[230px] -rotate-3 rounded-[2.4rem] border border-white/20 bg-[#202024] p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-white text-brand-dark">
                <div className="flex h-7 items-center justify-center bg-gray-100">
                  <div className="h-3 w-16 rounded-full bg-[#202024]" />
                </div>
                <div className="bg-brand-primary p-5 text-white">
                  <p className="font-kanit text-[10px] uppercase tracking-wider text-white/70">Bonjour</p>
                  <p className="mt-1 font-urbanist text-lg font-bold">Votre application</p>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: CalendarDays, label: 'Réserver' },
                      { icon: CreditCard, label: 'Payer' },
                      { icon: MapPin, label: 'Localiser' },
                      { icon: MessageCircle, label: 'Échanger' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="rounded-xl bg-gray-100 p-3">
                          <Icon size={18} className="text-brand-primary" />
                          <p className="mt-3 font-urbanist text-xs font-bold">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-xl bg-gray-100 p-3">
                    <div className="h-2.5 w-4/5 rounded-full bg-gray-300" />
                    <div className="mt-2 h-2.5 w-3/5 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 w-[42%] max-w-[210px] rotate-3 rounded-[2.3rem] border border-white/20 bg-[#202024] p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[1.9rem] bg-[#171719]">
                <div className="flex h-7 items-center justify-center">
                  <div className="h-3 w-14 rounded-full bg-black" />
                </div>
                <div className="p-4">
                  <Bell size={23} className="text-brand-secondary" />
                  <p className="mt-5 font-urbanist text-lg font-bold">Restez connecté</p>
                  <p className="mt-2 font-kanit text-xs leading-relaxed text-white/55">Des services accessibles et des notifications utiles au bon moment.</p>
                  <div className="mt-5 space-y-3">
                    {[0, 1, 2].map((item) => (
                      <div key={item} className="rounded-xl bg-white/[0.07] p-3">
                        <div className="h-2.5 w-4/5 rounded-full bg-white/20" />
                        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
                      </div>
                    ))}
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
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">De l’idée au produit digital</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Une expertise globale pour votre application mobile</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>AlteractWeb accompagne les TPE, PME, organisations et porteurs de projets dans la conception d’applications mobiles adaptées à leurs usages réels.</p>
            <p>Designers et développeurs travaillent ensemble pour construire une solution cohérente, depuis les premiers parcours jusqu’au lancement et aux évolutions.</p>
          </div>
        </div>
      </section>

      {/* EXPERTISE ANIMÉE */}
      <section id="expertise-mobile" ref={expertiseRef} className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28 lg:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div ref={expertiseIntroRef} className="h-fit lg:self-start">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Une réalisation maîtrisée</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Des fondations solides à chaque étape de l’application</h2>
            <p className="mt-6 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">Le succès ne repose pas uniquement sur le code : il dépend d’un besoin bien cadré, d’une expérience claire et d’un produit capable d’évoluer.</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600">
              Commençons <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {expertiseSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.number} ref={(element) => { if (element) cardRefs.current[index] = element; }} className="border-t border-gray-300 py-7 dark:border-gray-700 lg:min-h-[300px] lg:py-8">
                  <div className="flex items-center justify-between">
                    <span className="font-urbanist text-5xl font-bold text-gray-300 dark:text-gray-700">{step.number}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10"><Icon size={22} className="text-brand-primary" /></div>
                  </div>
                  <h3 className="mt-8 font-urbanist text-xl font-bold sm:text-2xl">{step.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p>
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
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Une solution adaptée à votre activité</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Des applications pour vos clients comme pour vos équipes</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Nous partons du service à rendre et des usages, puis nous construisons les fonctionnalités et la technologie autour de ce besoin.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              return (
                <article key={type.title} className="group rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition group-hover:bg-brand-primary"><Icon size={24} className="text-brand-primary group-hover:text-white" /></div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{type.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{type.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Fonctionnalités et services connectés</span>
              <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Les bons outils pour une expérience mobile complète</h2>
            </div>
            <p className="font-kanit text-lg leading-relaxed text-white/65">Chaque fonction est sélectionnée selon son utilité, son coût d’exploitation et sa capacité à soutenir durablement votre service.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureGroups.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition hover:border-brand-primary/50 hover:bg-white/[0.08]">
                  <Icon size={27} className="text-brand-secondary" />
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{feature.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-white/60">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PWA */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-brand-primary/10 blur-3xl" />
            <div className="relative rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-xl dark:border-gray-800 dark:bg-[#1a1a1a] sm:p-9">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white"><Globe2 size={25} /></div>
                <span className="rounded-full bg-brand-primary/10 px-3 py-1 font-kanit text-xs font-bold uppercase tracking-wider text-brand-primary">Alternative mobile</span>
              </div>
              <p className="mt-8 font-urbanist text-3xl font-bold">Progressive Web App</p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, label: 'Installable' },
                  { icon: WifiOff, label: 'Hors ligne limité' },
                  { icon: Gauge, label: 'Chargement rapide' },
                  { icon: Globe2, label: 'Sans store' },
                ].map((item) => {
                  const Icon = item.icon;
                  return <div key={item.label} className="rounded-2xl bg-white p-4 dark:bg-[#252525]"><Icon size={22} className="text-brand-primary" /><p className="mt-3 font-urbanist text-sm font-bold">{item.label}</p></div>;
                })}
              </div>
            </div>
          </div>
          <div>
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Application mobile ou PWA ?</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Choisir la solution la plus pertinente, pas la plus complexe</h2>
            <p className="mt-6 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Une PWA offre une expérience proche d’une application depuis le navigateur, sans passage obligatoire par les stores. Elle peut accélérer un lancement lorsque l’audience utilise surtout le web mobile.</p>
            <ul className="mt-7 space-y-4 font-kanit text-gray-700 dark:text-gray-300">
              {['Lancer rapidement un premier produit digital', 'Toucher une audience principalement mobile web', 'Limiter les contraintes de publication sur les stores', 'Valider un service avant d’investir dans une application plus avancée'].map((item) => (
                <li key={item} className="flex items-start gap-3"><CheckCircle2 size={19} className="mt-0.5 flex-shrink-0 text-brand-primary" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl border border-amber-300/40 bg-amber-50 p-5 font-kanit text-sm leading-relaxed text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100">Certaines fonctionnalités restent plus limitées sur une PWA, notamment selon les versions d’iOS. Le choix est donc réalisé après l’analyse précise des usages attendus.</p>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Un service au plus près des usages</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Votre application devient un véritable levier d’expérience</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Bien conçue, elle rend un service plus accessible, plus simple et plus engageant au quotidien.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.number} className="rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-[#1a1a1a]">
                  <div className="flex items-center justify-between"><Icon size={25} className="text-brand-primary" /><span className="font-urbanist text-sm font-bold text-gray-400">{benefit.number}</span></div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Notre méthode</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Une gestion étape par étape</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Chaque phase produit des éléments concrets à valider avant d’engager la suivante.</p>
          </div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gray-300 dark:bg-gray-700 md:block" />
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
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Ce qu’il faut savoir avant de développer votre application</h2>
            <p className="mt-6 font-kanit text-lg leading-relaxed text-white/65">Stores, technologies, services tiers, maintenance ou propriété : clarifions les sujets structurants avant le lancement.</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600">Poser une autre question <MessageCircle size={18} /></a>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqItems.map((item, index) => (
              <details key={item.question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-urbanist text-lg font-bold outline-none transition hover:text-brand-secondary focus-visible:text-brand-secondary sm:py-7 sm:text-xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-4"><span className="mt-0.5 font-kanit text-xs font-bold text-brand-secondary">{String(index + 1).padStart(2, '0')}</span><span>{item.question}</span></span>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition group-open:rotate-180 group-open:border-brand-primary group-open:bg-brand-primary"><ChevronDown size={18} aria-hidden="true" /></span>
                </summary>
                <div className="pb-7 pl-10 pr-12 sm:pb-8"><p className="max-w-3xl font-kanit leading-relaxed text-white/65">{item.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-primary px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/75">Votre idée mérite une exécution solide</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Construisons une application que vos utilisateurs auront envie d’adopter</h2>
          <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">Échangeons sur votre idée, vos utilisateurs et les fonctionnalités essentielles pour lancer un premier produit pertinent.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary shadow-lg transition hover:bg-gray-100">Parler à un expert <MessageCircle size={19} /></a>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white/35 px-8 py-3.5 font-kanit font-bold text-white transition hover:bg-white/10">Nous envoyer votre brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}