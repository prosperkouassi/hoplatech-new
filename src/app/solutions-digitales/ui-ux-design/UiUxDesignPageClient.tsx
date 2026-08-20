'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Component,
  Gauge,
  Grid3X3,
  Image,
  Layers,
  Layout,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  Pencil,
  RefreshCw,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  'https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20UI%2FUX%20Design.';

const designSteps = [
  {
    number: '01',
    icon: Layers,
    title: 'Analyse des besoins et cadrage',
    description:
      'Nous clarifions les objectifs, les utilisateurs, le marché, les contraintes et le périmètre afin d’aligner toutes les parties prenantes.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Recherche UX et inspiration',
    description:
      'L’analyse des usages, de la concurrence et des bonnes pratiques nourrit les décisions fonctionnelles et la direction créative.',
  },
  {
    number: '03',
    icon: Pencil,
    title: 'Exploration et esquisses',
    description:
      'Plusieurs pistes sont explorées rapidement pour tester les idées, les priorités et les premières solutions d’interface.',
  },
  {
    number: '04',
    icon: Layout,
    title: 'Wireframes et structuration',
    description:
      'Les contenus, les fonctionnalités et les parcours sont organisés avant d’engager le travail graphique détaillé.',
  },
  {
    number: '05',
    icon: Palette,
    title: 'Conception UI et design visuel',
    description:
      'Les maquettes traduisent votre identité en une interface cohérente, lisible et engageante sur chaque format d’écran.',
  },
  {
    number: '06',
    icon: MessageCircle,
    title: 'Validation collaborative',
    description:
      'Les maquettes sont présentées, commentées et ajustées lors de points de validation organisés à chaque étape clé.',
  },
  {
    number: '07',
    icon: RefreshCw,
    title: 'Optimisation et itérations',
    description:
      'Les détails, les interactions et les points de friction sont affinés pour améliorer la qualité globale de l’expérience.',
  },
  {
    number: '08',
    icon: Code2,
    title: 'Livraison et handoff développeur',
    description:
      'Le fichier Figma, les composants, les assets et les spécifications sont préparés pour faciliter une intégration fidèle.',
  },
];

const projectTypes = [
  {
    icon: MonitorSmartphone,
    title: 'Sites web',
    description: 'Sites vitrines, institutionnels, éditoriaux et expériences immersives.',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    description: 'Parcours iOS et Android pensés autour des usages mobiles.',
  },
  {
    icon: BarChart3,
    title: 'SaaS & dashboards',
    description: 'Interfaces métier, données, workflows et outils de pilotage.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Catalogues, fiches produits et tunnels d’achat optimisés.',
  },
  {
    icon: MousePointer2,
    title: 'Landing pages',
    description: 'Pages de campagne structurées pour informer et convertir.',
  },
  {
    icon: Component,
    title: 'Design systems',
    description: 'Composants, styles et règles pour un produit cohérent et évolutif.',
  },
];

const deliverables = [
  {
    icon: Layout,
    title: 'Wireframes',
    text: 'Structures fonctionnelles pour valider les contenus et les parcours avant le design visuel.',
  },
  {
    icon: Palette,
    title: 'Maquettes haute fidélité',
    text: 'Écrans finalisés avec couleurs, typographies, iconographie et comportements d’interface.',
  },
  {
    icon: MousePointer2,
    title: 'Prototype interactif',
    text: 'Navigation cliquable pour présenter, tester et valider l’expérience avant le développement.',
  },
  {
    icon: Component,
    title: 'Composants UI',
    text: 'Boutons, formulaires, cartes, menus et états réutilisables dans l’ensemble du produit.',
  },
  {
    icon: Grid3X3,
    title: 'Design system',
    text: 'Fondations, styles et règles partagées pour préserver la cohérence au fil des évolutions.',
  },
  {
    icon: Code2,
    title: 'Handoff technique',
    text: 'Assets, mesures, comportements et spécifications organisés pour faciliter l’intégration.',
  },
];

const benefits = [
  {
    number: '01',
    icon: Users,
    title: 'Répondre aux vrais usages',
    description:
      'Les décisions reposent sur les besoins des utilisateurs plutôt que sur des préférences uniquement esthétiques.',
  },
  {
    number: '02',
    icon: Gauge,
    title: 'Réduire les frictions',
    description:
      'Des parcours clairs facilitent la compréhension, les actions importantes et l’adoption du produit.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Renforcer votre image',
    description:
      'Une interface cohérente et soignée traduit la qualité de votre marque et inspire davantage confiance.',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Sécuriser le développement',
    description:
      'Valider les parcours et les écrans avant le code limite les incompréhensions et les reprises coûteuses.',
  },
];

const collaborationSteps = [
  {
    title: 'Périmètre clair',
    description: 'Écrans, parcours, livrables et responsabilités définis avant le démarrage.',
  },
  {
    title: 'Points de validation',
    description: 'Décisions prises progressivement pour éviter les retours tardifs et contradictoires.',
  },
  {
    title: 'Révisions cadrées',
    description: 'Cycles d’ajustement prévus et concentrés sur les objectifs validés ensemble.',
  },
  {
    title: 'Transmission complète',
    description: 'Fichiers organisés et accompagnement de l’équipe chargée du développement.',
  },
];

const faqItems = [
  {
    question: 'Quelle différence entre UX Design et UI Design ?',
    answer:
      'L’UX Design s’intéresse aux utilisateurs, aux parcours, à l’organisation de l’information et à la facilité d’utilisation. L’UI Design définit l’apparence visuelle, les composants et les interactions. Une belle interface ne suffit pas si le parcours est difficile : les deux disciplines doivent donc avancer ensemble.',
  },
  {
    question: 'Quels types de projets pouvez-vous concevoir ?',
    answer:
      'Nous pouvons concevoir des sites web, applications mobiles, plateformes SaaS, tableaux de bord, boutiques e-commerce, landing pages, prototypes et design systems. Le niveau de recherche et de documentation est adapté à la complexité du produit.',
  },
  {
    question: 'Que contient le livrable Figma ?',
    answer:
      'Selon le périmètre, vous recevez les wireframes, les maquettes haute fidélité, les composants, les styles, le prototype interactif, les assets et les spécifications utiles aux développeurs. Le contenu exact est défini avant le démarrage.',
  },
  {
    question: 'Le développement est-il inclus dans la prestation UI/UX ?',
    answer:
      'La conception et le développement sont deux prestations distinctes. AlteractWeb peut toutefois assurer l’intégration du produit ou collaborer avec votre équipe technique. Cette organisation est précisée dans la proposition afin d’éviter toute confusion.',
  },
  {
    question: 'Puis-je demander des modifications pendant la conception ?',
    answer:
      'Oui. Des points de validation et des cycles de révision sont prévus pour recueillir vos retours et affiner les maquettes. Leur nombre, leur calendrier et les éléments concernés sont précisés dans le périmètre de la mission.',
  },
  {
    question: 'Combien de temps dure généralement un projet UI/UX ?',
    answer:
      'La durée dépend du nombre d’écrans, de la complexité des parcours, du niveau de recherche, du design system et de la disponibilité des validations. Un calendrier réaliste est établi après le cadrage du projet.',
  },
  {
    question: 'Pouvez-vous travailler avec notre identité visuelle existante ?',
    answer:
      'Oui. Nous pouvons décliner votre charte dans l’environnement digital. Si elle ne contient pas de règles adaptées aux interfaces, nous définissons avec vous les compléments nécessaires : couleurs fonctionnelles, typographies, iconographie, composants et états.',
  },
  {
    question: 'Qui possède les fichiers de conception après la livraison ?',
    answer:
      'Les droits d’utilisation ou de cession, l’accès au fichier Figma et les éventuelles licences d’assets sont définis dans la proposition et le contrat. Le cadre de propriété est ainsi validé avant le début de la création.',
  },
];

export default function UiUxDesignPageClient() {
  const processRef = useRef<HTMLElement>(null);
  const processIntroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const section = processRef.current;
    const intro = processIntroRef.current;
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

        <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">UI/UX Design · Figma</span>
            <h1 className="mt-6 max-w-4xl font-urbanist text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Alliez esthétique, clarté et{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">performance d’usage</span>
            </h1>
            <p className="mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/80 sm:text-xl">Nous transformons vos idées en interfaces web et mobiles intuitives, cohérentes et prêtes à être développées.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">Parlons de votre interface <ArrowRight size={18} /></a>
              <a href="#processus-design" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">Découvrir notre processus <ChevronRight size={18} /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-kanit text-sm text-white/75">
              {['Recherche UX', 'Maquettes Figma', 'Prototype interactif', 'Design system'].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-secondary" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#202024]/90 p-3 shadow-2xl backdrop-blur-md sm:p-4">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
                <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-brand-primary" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
                <p className="font-kanit text-[10px] uppercase tracking-wider text-white/40">Interface design</p>
              </div>
              <div className="grid min-h-[380px] grid-cols-[64px_1fr] gap-3 pt-3">
                <div className="rounded-2xl bg-black/25 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white"><MousePointer2 size={18} /></div>
                  <div className="mt-4 space-y-3">{[Palette, Layout, Component, Image].map((Icon, index) => <div key={index} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]"><Icon size={17} className="text-white/50" /></div>)}</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-[#f3f4f6] p-4 text-brand-dark">
                  <div className="flex items-center justify-between"><div><p className="font-kanit text-[9px] uppercase tracking-wider text-brand-primary">Nouveau produit</p><p className="mt-1 font-urbanist text-lg font-bold">Une expérience claire</p></div><div className="h-9 w-9 rounded-full bg-brand-primary/15" /></div>
                  <div className="mt-5 grid grid-cols-[1.1fr_.9fr] gap-3">
                    <div className="rounded-xl bg-brand-primary p-4 text-white"><Sparkles size={22} /><p className="mt-12 font-urbanist text-xl font-bold">Design utile</p><p className="mt-2 font-kanit text-xs text-white/70">Pensé autour de vos utilisateurs.</p></div>
                    <div className="grid gap-3"><div className="rounded-xl bg-white p-3 shadow-sm"><div className="h-12 rounded-lg bg-gray-100" /><div className="mt-3 h-2.5 w-4/5 rounded-full bg-gray-200" /><div className="mt-2 h-2.5 w-1/2 rounded-full bg-brand-primary/20" /></div><div className="rounded-xl bg-[#171719] p-3 text-white"><Component size={19} className="text-brand-secondary" /><p className="mt-3 font-urbanist text-xs font-bold">Composants cohérents</p></div></div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm"><div className="h-8 w-8 rounded-lg bg-brand-primary" /><div className="flex-1"><div className="h-2.5 w-3/4 rounded-full bg-gray-200" /><div className="mt-2 h-2 w-1/2 rounded-full bg-gray-100" /></div></div>
                  <div className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-primary text-white shadow-lg"><MousePointer2 size={18} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">De l’idée à l’interface</span>
          <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Un concept graphique Figma structuré autour de l’utilisateur</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>Un design efficace repose sur une vision claire, des parcours bien pensés et une planification rigoureuse avant la recherche esthétique.</p>
            <p>AlteractWeb réunit UX et UI pour créer des produits digitaux compréhensibles, désirables et suffisamment structurés pour être développés sereinement.</p>
          </div>
        </div>
      </section>

      {/* PROCESSUS ANIMÉ */}
      <section id="processus-design" ref={processRef} className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28 lg:py-32">
        <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div ref={processIntroRef} className="h-fit lg:self-start">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Une démarche structurée</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">De l’idéation à la création de votre interface Figma</h2>
            <p className="mt-6 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">Huit étapes pour transformer une idée en expérience cohérente, validée et prête à passer entre les mains des développeurs.</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600">Commençons <ArrowRight size={18} /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {designSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.number} ref={(element) => { if (element) cardRefs.current[index] = element; }} className="border-t border-gray-300 py-7 dark:border-gray-700 lg:min-h-[300px] lg:py-8">
                  <div className="flex items-center justify-between"><span className="font-urbanist text-5xl font-bold text-gray-300 dark:text-gray-700">{step.number}</span><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10"><Icon size={22} className="text-brand-primary" /></div></div>
                  <h3 className="mt-8 font-urbanist text-xl font-bold sm:text-2xl">{step.title}</h3>
                  <p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Web, mobile et produits digitaux</span>
            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Des interfaces adaptées à chaque usage</h2>
            <p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Le niveau de recherche, de prototypage et de documentation évolue selon la nature et la complexité de votre produit.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              return (
                <article key={type.title} className="group rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition group-hover:bg-brand-primary"><Icon size={24} className="text-brand-primary group-hover:text-white" /></div>
                  <h3 className="mt-6 font-urbanist text-xl font-bold">{type.title}</h3><p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{type.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIVRABLES */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Des livrables exploitables</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Tout ce qu’il faut pour valider et développer votre produit</h2></div>
            <p className="font-kanit text-lg leading-relaxed text-white/65">Le fichier Figma est organisé pour faciliter les retours, préserver la cohérence et transmettre des décisions compréhensibles à l’équipe technique.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition hover:border-brand-primary/50 hover:bg-white/[0.08]"><Icon size={27} className="text-brand-secondary" /><h3 className="mt-6 font-urbanist text-xl font-bold">{item.title}</h3><p className="mt-4 font-kanit leading-relaxed text-white/60">{item.text}</p></article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="px-4 py-24 sm:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center"><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Un design qui produit des résultats</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">L’esthétique au service de l’expérience</h2><p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Chaque choix visuel doit soutenir la compréhension, la confiance et l’action attendue de l’utilisateur.</p></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.number} className="rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-[#1a1a1a]"><div className="flex items-center justify-between"><Icon size={25} className="text-brand-primary" /><span className="font-urbanist text-sm font-bold text-gray-400">{benefit.number}</span></div><h3 className="mt-6 font-urbanist text-xl font-bold">{benefit.title}</h3><p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-400">{benefit.description}</p></article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center"><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Une collaboration transparente</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Des validations claires du premier écran à la livraison</h2><p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Vous restez impliqué dans les décisions importantes sans avoir à gérer la complexité du processus de conception.</p></div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gray-300 dark:bg-gray-700 md:block" />
            {collaborationSteps.map((step, index) => (
              <article key={step.title} className="relative text-center"><div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary font-urbanist text-xl font-bold text-white shadow-lg">{index + 1}</div><h3 className="mt-6 font-urbanist text-lg font-bold">{step.title}</h3><p className="mt-3 font-kanit text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111113] px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="h-fit lg:sticky lg:top-28"><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Questions fréquentes</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Ce qu’il faut savoir avant de lancer votre design</h2><p className="mt-6 font-kanit text-lg leading-relaxed text-white/65">Figma, livrables, révisions, délais ou développement : clarifions le cadre de votre projet UI/UX.</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-kanit font-bold text-white transition hover:bg-red-600">Poser une autre question <MessageCircle size={18} /></a></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqItems.map((item, index) => (
              <details key={item.question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-urbanist text-lg font-bold outline-none transition hover:text-brand-secondary focus-visible:text-brand-secondary sm:py-7 sm:text-xl [&::-webkit-details-marker]:hidden"><span className="flex items-start gap-4"><span className="mt-0.5 font-kanit text-xs font-bold text-brand-secondary">{String(index + 1).padStart(2, '0')}</span><span>{item.question}</span></span><span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition group-open:rotate-180 group-open:border-brand-primary group-open:bg-brand-primary"><ChevronDown size={18} aria-hidden="true" /></span></summary>
                <div className="pb-7 pl-10 pr-12 sm:pb-8"><p className="max-w-3xl font-kanit leading-relaxed text-white/65">{item.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-primary px-4 py-24 text-white sm:py-28">
        <div className="container mx-auto max-w-4xl text-center"><span className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-white/75">Votre idée mérite une expérience remarquable</span><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Concevons une interface que vos utilisateurs comprendront et apprécieront</h2><p className="mx-auto mt-6 max-w-2xl font-kanit text-lg leading-relaxed text-white/85 sm:text-xl">Échangeons sur votre produit, vos utilisateurs et les parcours essentiels à transformer en maquettes concrètes.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-kanit font-bold text-brand-primary shadow-lg transition hover:bg-gray-100">Parler à un designer <MessageCircle size={19} /></a><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white/35 px-8 py-3.5 font-kanit font-bold text-white transition hover:bg-white/10">Nous envoyer votre brief</Link></div></div>
      </section>
    </main>
  );
}