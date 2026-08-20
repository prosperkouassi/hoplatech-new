'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  FileText,
  Gauge,
  Globe2,
  Languages,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20vitrine%20corporate.';

const foundations = [
  {
    number: '01',
    icon: Blocks,
    title: 'Intégration avec vos outils',
    description:
      'Votre site communique avec vos formulaires, votre CRM, vos outils d’emailing ou de prise de rendez-vous afin de fluidifier les échanges de données.',
  },
  {
    number: '02',
    icon: LayoutDashboard,
    title: 'Gestion simplifiée des contenus',
    description:
      'Les pages, actualités et médias sont organisés pour être créés et mis à jour facilement, sans procédure complexe ni dépendance permanente.',
  },
  {
    number: '03',
    icon: Gauge,
    title: 'Performance et fiabilité',
    description:
      'Une architecture rapide et stable améliore la navigation, renforce la confiance et soutient durablement votre référencement naturel.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Sécurité adaptée à vos enjeux',
    description:
      'Gestion des accès, mises à jour et protections essentielles réduisent les risques tout en préservant un site administrable et évolutif.',
  },
  {
    number: '05',
    icon: Settings2,
    title: 'Prise en main accompagnée',
    description:
      'Une transmission claire vous permet de modifier vos textes, vos images et vos pages avec une autonomie progressive.',
  },
  {
    number: '06',
    icon: Languages,
    title: 'Architecture multilingue',
    description:
      'La structure peut accueillir plusieurs langues pour élargir votre communication et adresser différents publics ou marchés.',
  },
  {
    number: '07',
    icon: RefreshCw,
    title: 'Optimisation et itérations',
    description:
      'Nous affinons l’ergonomie, les contenus et les performances pour corriger les points de friction et améliorer continuellement la qualité.',
  },
  {
    number: '08',
    icon: Code2,
    title: 'Livraison prête à évoluer',
    description:
      'Les composants, ressources et spécifications sont structurés pour faciliter la maintenance, les évolutions et les futures intégrations.',
  },
];

const websiteTypes = [
  {
    icon: BriefcaseBusiness,
    title: 'Site corporate',
    description: 'Présentez votre entreprise, sa vision, ses métiers et ses implantations.',
  },
  {
    icon: Globe2,
    title: 'Site institutionnel',
    description: 'Structurez une information claire pour vos partenaires et vos publics.',
  },
  {
    icon: FileText,
    title: 'Site catalogue',
    description: 'Valorisez vos offres et vos références sans parcours de vente en ligne.',
  },
  {
    icon: Sparkles,
    title: 'Portfolio',
    description: 'Mettez en scène vos projets, votre savoir-faire et votre univers créatif.',
  },
  {
    icon: Users,
    title: 'Site associatif',
    description: 'Présentez vos actions, mobilisez votre communauté et facilitez les contacts.',
  },
  {
    icon: BarChart3,
    title: 'Site immobilier ou métier',
    description: 'Adaptez les contenus et fonctionnalités aux usages propres à votre secteur.',
  },
];

const benefits = [
  {
    number: '01',
    icon: BriefcaseBusiness,
    title: 'Renforcer votre crédibilité',
    description:
      'Une présence professionnelle rassure vos prospects, partenaires et futurs collaborateurs dès leur première visite.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Valoriser votre identité',
    description:
      'Le design, les contenus et les interactions traduisent fidèlement votre positionnement et votre différence.',
  },
  {
    number: '03',
    icon: Search,
    title: 'Développer votre visibilité',
    description:
      'Une structure SEO cohérente aide vos publics à trouver vos expertises et vos services sur les moteurs de recherche.',
  },
  {
    number: '04',
    icon: MessageCircle,
    title: 'Générer des contacts',
    description:
      'Des parcours et appels à l’action bien placés transforment l’intérêt des visiteurs en demandes qualifiées.',
  },
];

const processSteps = [
  {
    title: 'Cadrage',
    description: 'Nous clarifions vos objectifs, vos publics, vos contenus et vos contraintes techniques.',
  },
  {
    title: 'UX & direction visuelle',
    description: 'Nous structurons les parcours et définissons une interface cohérente avec votre identité.',
  },
  {
    title: 'Développement',
    description: 'Nous intégrons un site responsive, performant, accessible et optimisé pour le SEO.',
  },
  {
    title: 'Mise en ligne',
    description: 'Nous testons, déployons et vous accompagnons dans la prise en main de votre site.',
  },
];

export default function CorporateWebsitePageClient() {
  const foundationsRef = useRef<HTMLElement>(null);
  const foundationsIntroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const section = foundationsRef.current;
    const intro = foundationsIntroRef.current;
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(247,64,57,0.22),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(212,61,73,0.16),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              Création de site vitrine corporate
            </span>

            <h1 className="mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Un site professionnel qui donne de la{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                force à votre image
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/80 sm:text-xl">
              Présentez votre entreprise, valorisez vos expertises et transformez votre présence en ligne en véritable outil de crédibilité et de développement.
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
                href="#fondations-techniques"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Découvrir notre approche <ChevronRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/75">
              {['Design sur mesure', 'SEO intégré', 'Responsive', 'Administration simple'].map(
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
              <div className="grid min-h-[360px] gap-4 p-3 sm:grid-cols-[.8fr_1.2fr] sm:p-5">
                <div className="flex flex-col justify-between rounded-2xl bg-brand-primary p-5">
                  <MonitorSmartphone size={32} />
                  <div>
                    <p className="font-urbanist text-2xl font-bold">Votre entreprise</p>
                    <p className="mt-2 font-kanit text-sm leading-relaxed text-white/75">Une présence claire, crédible et mémorable.</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white p-5 text-brand-dark">
                    <p className="font-kanit text-xs font-bold uppercase tracking-wider text-brand-primary">Votre expertise</p>
                    <div className="mt-5 h-3 w-4/5 rounded-full bg-gray-200" />
                    <div className="mt-3 h-3 w-3/5 rounded-full bg-gray-100" />
                    <div className="mt-6 flex gap-3">
                      <div className="h-20 flex-1 rounded-xl bg-gray-100" />
                      <div className="h-20 flex-1 rounded-xl bg-brand-primary/10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <Gauge className="text-brand-secondary" size={23} />
                      <p className="mt-4 font-urbanist font-bold">Rapide</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <Search className="text-brand-secondary" size={23} />
                      <p className="mt-4 font-urbanist font-bold">Visible</p>
                    </div>
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
            Votre vitrine, votre premier argument
          </span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
            Nous réalisons votre site web sur mesure
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              AlteractWeb accompagne les entreprises, institutions, indépendants et porteurs de projets dans la création de sites vitrines modernes, élégants et performants.
            </p>
            <p>
              Chaque interface est pensée pour présenter clairement vos activités, valoriser vos services et renforcer durablement votre crédibilité en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* FONDATIONS TECHNIQUES — MODÈLE ANIMÉ */}
      <section
        id="fondations-techniques"
        ref={foundationsRef}
        className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28 lg:py-32"
      >
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div ref={foundationsIntroRef} className="h-fit lg:self-start">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Conçu pour durer
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Des fondations techniques solides pour un site fiable
            </h2>
            <p className="mt-6 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
              Une conception soignée ne se limite pas à l’apparence. Elle doit aussi garantir simplicité, performance et capacité d’évolution.
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
            {foundations.map((foundation, index) => {
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
                  <h3 className="mt-8 font-urbanist text-xl font-bold sm:text-2xl">
                    {foundation.title}
                  </h3>
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
              Une réponse adaptée à votre activité
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Bien plus qu’un simple site vitrine
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              La structure, les contenus et les fonctionnalités sont définis selon votre organisation, vos publics et vos objectifs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteTypes.map((type) => {
              const Icon = type.icon;
              return (
                <article
                  key={type.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition group-hover:bg-brand-primary group-hover:text-white">
                    <Icon size={24} className="text-brand-primary group-hover:text-white" />
                  </div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{type.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">
                    {type.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTÉGRATION FRONT-END */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Intégration front-end sur mesure
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              De la maquette à une interface rapide et parfaitement responsive
            </h2>
            <p className="mt-6 font-kanit text-lg leading-relaxed text-white/70">
              Nous traduisons vos maquettes et votre identité visuelle en interfaces web précises, cohérentes et performantes, avec les technologies adaptées à votre projet.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Fidélité au design system',
                'Responsive mobile-first',
                'Core Web Vitals optimisés',
                'SEO technique intégré',
                'Code maintenable et évolutif',
                'Collaboration fluide avec vos équipes',
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
              J’ai besoin d’une intégration web <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-brand-primary/15 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-kanit text-xs uppercase tracking-wider text-white/45">Performance cible</p>
                  <p className="mt-2 font-urbanist text-2xl font-bold">Une expérience maîtrisée</p>
                </div>
                <Code2 size={34} className="text-brand-secondary" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { value: '95+', label: 'Lighthouse' },
                  { value: '100%', label: 'Responsive' },
                  { value: 'SEO', label: 'Structure native' },
                  { value: 'UX', label: 'Parcours fluides' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-white/[0.07] p-5">
                    <p className="font-urbanist text-3xl font-bold text-brand-secondary">{metric.value}</p>
                    <p className="mt-2 font-kanit text-sm text-white/60">{metric.label}</p>
                  </div>
                ))}
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
              Un véritable outil de développement
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              Votre site travaille pour votre entreprise
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Au-delà de l’image, il structure votre discours et facilite le passage de la découverte à la prise de contact.
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

      {/* MÉTHODE */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Notre méthode
            </span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">
              De votre positionnement à la mise en ligne
            </h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Un accompagnement structuré pour construire un site fidèle à votre entreprise et utile à vos objectifs.
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
            Votre entreprise mérite une présence à sa hauteur
          </span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Créons un site qui inspire confiance et donne envie de vous contacter
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">
            Échangeons sur votre positionnement, vos publics et les résultats que votre futur site doit vous aider à atteindre.
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