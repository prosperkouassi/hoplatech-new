"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, ClipboardCheck, Code2, FileSearch, Globe2, Headset, Layers3, LockKeyhole, RefreshCcw, Settings2, ShieldCheck, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type FAQ = { question: string; answer: string };

const services = [
  { icon: ShieldCheck, title: "Maintenance & sécurité", description: "Contrôles, sauvegardes, mises à jour compatibles, prévention des incidents et corrections techniques." },
  { icon: Settings2, title: "Gestion opérationnelle", description: "Gestion des contenus et des demandes, administration et coordination des interventions convenues." },
  { icon: Code2, title: "TMA corrective & évolutive", description: "Correction des anomalies, adaptation technique et évolutions planifiées selon la feuille de route contractuelle." },
  { icon: Headset, title: "Pilotage & conseil", description: "Interlocuteur identifié, suivi des interventions, bilans et recommandations pour faire évoluer votre outil." },
];

const steps = [
  { title: "Échange de cadrage", description: "Nous identifions la solution, ses usages, son historique et vos enjeux prioritaires." },
  { title: "Diagnostic obligatoire", description: "Nous évaluons le code, l’architecture, les accès, la sécurité et la maintenabilité." },
  { title: "Proposition sur mesure", description: "Nous définissons le périmètre, les délais, la feuille de route et le budget annuel." },
  { title: "Reprise & suivi", description: "Après validation, nous organisons la reprise technique et le pilotage régulier." },
];

function HeroLottie() {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    let cancelled = false;
    let animation: { destroy: () => void } | undefined;
    // Lottie JSON facultatif : placez votre fichier dans public/animations/gestion-web-deleguee.json.
    fetch("/animations/gestion-web-deleguee.json", { method: "GET" })
      .then((response) => { if (!response.ok) throw new Error("Animation absente"); return response.json(); })
      .then(async (animationData: unknown) => {
        if (cancelled || !host) return;
        const lottie = (await import("lottie-web")).default;
        if (cancelled) return;
        animation = lottie.loadAnimation({ container: host, renderer: "svg", loop: true, autoplay: true, animationData });
        host.dataset.loaded = "true";
      })
      .catch(() => { /* Illustration statique conservée en l'absence du fichier JSON. */ });
    return () => { cancelled = true; animation?.destroy(); };
  }, []);
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center" aria-label="Illustration de pilotage de sites internet et logiciels métiers" role="img">
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-brand-primary/15 blur-[65px]" />
      <div aria-hidden="true" className="relative w-[88%] rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
        <div className="flex items-center gap-2 border-b border-white/10 pb-5"><span className="h-2.5 w-2.5 rounded-full bg-brand-primary"/><span className="h-2.5 w-2.5 rounded-full bg-brand-secondary"/><span className="h-2.5 w-2.5 rounded-full bg-white/30"/><span className="ml-auto h-2 w-24 rounded-full bg-white/15"/></div>
        <div className="mt-7 grid grid-cols-2 gap-4"><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><Globe2 className="text-brand-secondary" size={34}/><div className="mt-4 h-2 w-20 rounded bg-white/30"/><div className="mt-2 h-2 w-12 rounded bg-white/15"/></div><div className="rounded-2xl border border-white/10 bg-white/5 p-5"><Layers3 className="text-brand-primary" size={34}/><div className="mt-4 h-2 w-20 rounded bg-white/30"/><div className="mt-2 h-2 w-12 rounded bg-white/15"/></div></div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-brand-primary/25 bg-brand-primary/10 p-4"><CheckCircle2 className="shrink-0 text-brand-secondary" size={27}/><div className="flex-1"><div className="h-2 w-4/5 rounded bg-white/40"/><div className="mt-2 h-2 w-1/2 rounded bg-white/20"/></div><RefreshCcw className="text-white/60" size={19}/></div>
      </div>
      <div ref={hostRef} className="pointer-events-none absolute inset-0 [&[data-loaded=true]]:bg-[#0f0f10]" aria-hidden="true" />
    </div>
  );
}

export default function GestionWebDelegueeContent({ faq }: { faq: FAQ[] }) {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const hero = root.querySelectorAll("[data-hero-item]");
      gsap.fromTo(hero, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power2.out" });
      root.querySelectorAll("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 45, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
      });
    });
    return () => media.revert();
  }, []);

  return <main ref={mainRef} className="overflow-x-clip bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
    <section className="relative isolate overflow-hidden bg-[#0f0f10] px-4 py-24 text-white sm:py-28 lg:min-h-[calc(100svh-4rem)] lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-primary/15 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-secondary/10 blur-[110px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p data-hero-item className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Gestion web déléguée & TMA</p>
          <h1 data-hero-item className="mt-5 max-w-4xl font-urbanist text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Votre environnement digital mérite <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">un partenaire durable</span></h1>
          <p data-hero-item className="mt-7 max-w-2xl font-kanit text-lg leading-relaxed text-gray-300">AlteractWeb assure la gestion, la maintenance et l’évolution de vos <strong className="font-semibold text-white">sites internet et logiciels métiers</strong>, y compris ceux créés par d’autres prestataires, après diagnostic technique préalable.</p>
          <div data-hero-item className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact?solution=Diagnostic%20Gestion%20Web%20D%C3%A9l%C3%A9gu%C3%A9e%20et%20TMA" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">Demander un diagnostic <ArrowUpRight size={18}/></Link>
            <a href="#accompagnement" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-kanit font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">Découvrir l’accompagnement <ArrowRight size={18}/></a>
          </div>
          <p data-hero-item className="mt-6 font-kanit text-sm text-white/55">Diagnostic préalable obligatoire · Contrat annuel sur mesure · Sans forfait standard</p>
        </div>
        <div data-hero-item><HeroLottie/></div>
      </div>
    </section>

    <section id="accompagnement" className="scroll-mt-24 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl"><div data-reveal className="max-w-3xl"><p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Une gestion sans dispersion</p><h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Concentrez-vous sur votre activité. Nous suivons vos outils.</h2><p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Un site ou un logiciel métier doit rester fiable, sécurisé et adapté à vos usages. Nous organisons sa prise en charge autour d’un interlocuteur technique et d’un cadre d’intervention défini ensemble.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map(({icon:Icon,title,description})=><article data-reveal key={title} className="group rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]"><div className="inline-flex rounded-xl bg-brand-primary/10 p-3 text-brand-primary"><Icon size={26}/></div><h3 className="mt-6 font-urbanist text-xl font-bold">{title}</h3><p className="mt-4 font-kanit leading-relaxed text-gray-600 dark:text-gray-300">{description}</p></article>)}</div>
      </div>
    </section>


    {/* Section pédagogique : TMA */}
    <section aria-labelledby="definition-tma" className="bg-white px-4 py-24 dark:bg-brand-dark sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="relative overflow-hidden rounded-3xl border border-gray-200 bg-[#111113] p-5 shadow-xl dark:border-gray-800 sm:p-8">
          <Image src="/images/tma-explication.svg" alt="Illustration du suivi technique d'un logiciel métier : surveillance, corrections et évolutions" width={760} height={600} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div data-reveal>
          <p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Comprendre la maintenance applicative</p>
          <h2 id="definition-tma" className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Qu’est-ce que la TMA et à quoi sert-elle dans une entreprise ?</h2>
          <p className="mt-6 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">La <strong>Tierce Maintenance Applicative (TMA)</strong> consiste à confier à un prestataire spécialisé le suivi technique d’un logiciel métier ou d’un site internet. Elle permet de corriger les anomalies, de prévenir certains incidents et de faire évoluer une solution existante au rythme des besoins de l’entreprise.</p>
          <p className="mt-4 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">À Abidjan comme ailleurs en Côte d’Ivoire, cette démarche concerne notamment les entreprises qui utilisent un logiciel de gestion des stocks, des ventes, des ressources humaines ou des réservations. AlteractWeb peut étudier la reprise d’une solution conçue par un autre prestataire, <strong>après un diagnostic technique obligatoire</strong> et vérification des droits d’intervention.</p>
          <a href="#diagnostic" className="mt-7 inline-flex items-center gap-2 font-kanit font-bold text-brand-primary underline-offset-4 transition hover:underline">Comprendre notre diagnostic préalable <ArrowRight size={18}/></a>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28"><div className="mx-auto max-w-7xl"><div data-reveal><p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Deux expertises, un interlocuteur</p><h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Des solutions essentielles à votre entreprise</h2></div><div className="mt-10 grid gap-6 lg:grid-cols-2">
      <article data-reveal className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#1a1a1a]"><Globe2 size={36} className="text-brand-primary"/><h3 className="mt-6 font-urbanist text-2xl font-bold">Sites internet professionnels</h3><p className="mt-4 font-kanit leading-8 text-gray-700 dark:text-gray-300">Sites vitrines, institutionnels, e-commerce, hôteliers et plateformes web d’entreprise : maintenance technique, gestion des contenus et améliorations convenues.</p></article>
      <article data-reveal className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#1a1a1a]"><Layers3 size={36} className="text-brand-primary"/><h3 className="mt-6 font-urbanist text-2xl font-bold">Logiciels métiers</h3><p className="mt-4 font-kanit leading-8 text-gray-700 dark:text-gray-300">Logiciels de gestion commerciale, stocks, RH, réservations et outils métier spécifiques : correction d’anomalies, maintenance et évolutions sous réserve de faisabilité.</p></article>
    </div><p data-reveal className="mt-6 font-kanit text-sm text-gray-600 dark:text-gray-300"><LockKeyhole className="mr-2 inline text-brand-primary" size={17}/>La reprise d’une solution tierce dépend des accès disponibles, des droits d’intervention et de son état technique.</p></div></section>


    {/* Section conseil : délégation */}
    <section aria-labelledby="pourquoi-deleguer" className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="lg:pr-4">
          <p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Externalisation technique pour les entreprises</p>
          <h2 id="pourquoi-deleguer" className="mt-4 font-urbanist text-3xl font-bold leading-tight sm:text-4xl">Pourquoi déléguer la gestion, la TMA et la maintenance de vos outils métiers ?</h2>
          <p className="mt-6 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Lorsqu’un site internet ou un logiciel métier devient essentiel à l’activité, chaque dysfonctionnement peut perturber les équipes, les ventes ou le service client. Externaliser sa gestion permet de disposer d’un interlocuteur technique identifié, sans devoir constituer une équipe de maintenance en interne.</p>
          <p className="mt-4 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Pour les PME, hôtels, commerces et organisations en Côte d’Ivoire, AlteractWeb propose un <strong>accompagnement annuel sur mesure</strong> : suivi des incidents, entretien préventif, gestion des contenus des sites internet et évolutions convenues. Le périmètre, les délais de prise en charge et le budget sont définis contractuellement, après diagnostic.</p>
          <Link href="/contact?solution=Diagnostic%20Gestion%20Web%20D%C3%A9l%C3%A9gu%C3%A9e%20et%20TMA" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white shadow-lg transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-brand-primary">Étudier l’externalisation de ma maintenance <ArrowUpRight size={18}/></Link>
        </div>
        <div data-reveal className="relative overflow-hidden rounded-3xl border border-gray-200 bg-[#111113] p-5 shadow-xl dark:border-gray-800 sm:p-8">
          <Image src="/images/tma-delegation.svg" alt="Illustration d'une entreprise confiant le suivi de son site web et de son logiciel métier à un partenaire technique" width={760} height={600} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>

    <section id="diagnostic" className="scroll-mt-24 bg-[#111113] px-4 py-24 text-white sm:py-28"><div className="mx-auto max-w-7xl"><div data-reveal className="max-w-3xl"><p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">Une reprise encadrée</p><h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Aucune prise en charge sans diagnostic</h2><p className="mt-5 font-kanit text-lg leading-relaxed text-gray-300">Avant de nous engager, nous examinons la solution, son environnement et ses contraintes. Le diagnostic est une prestation distincte, réalisée sur devis. Il peut conduire à une remise à niveau préalable ou à un refus de reprise.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{steps.map((step,index)=><article data-reveal key={step.title} className="rounded-3xl border border-white/15 bg-white/[0.04] p-7"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary font-urbanist text-xl font-bold">{index+1}</span><h3 className="mt-6 font-urbanist text-xl font-bold">{step.title}</h3><p className="mt-3 font-kanit leading-relaxed text-gray-300">{step.description}</p></article>)}</div></div></section>

    <section className="px-4 py-24 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div data-reveal><p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Un partenariat dans la durée</p><h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Un engagement annuel, construit autour de vos besoins</h2><p className="mt-5 font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Pas de forfait générique : le contrat est dimensionné selon la complexité de votre solution, les niveaux de service attendus, les interventions et la feuille de route.</p><Link href="/contact?solution=Diagnostic%20Gestion%20Web%20D%C3%A9l%C3%A9gu%C3%A9e%20et%20TMA" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-red-600">Étudier mon besoin <ArrowUpRight size={18}/></Link></div><div data-reveal className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-[#1a1a1a]"><ClipboardCheck size={34} className="text-brand-primary"/><h3 className="mt-5 font-urbanist text-2xl font-bold">Un cadre clair, sans promesse illimitée</h3><ul className="mt-7 space-y-5 font-kanit text-gray-700 dark:text-gray-300">{["Engagement de 12 mois","Facturation mensuelle ou trimestrielle","Périmètre et délais contractuels définis","Enveloppe d’intervention ou budget d’évolution convenu","Suivi des demandes et bilans réguliers","Hébergement, licences et travaux hors périmètre chiffrés séparément"].map((item)=><li key={item} className="flex items-start gap-3"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-primary"/><span>{item}</span></li>)}</ul></div></div></section>

    <section className="bg-gray-50 px-4 py-24 dark:bg-[#121212] sm:py-28"><div className="mx-auto max-w-4xl"><div data-reveal><p className="font-kanit text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Questions fréquentes</p><h2 className="mt-4 font-urbanist text-3xl font-bold sm:text-4xl">Comprendre notre accompagnement</h2></div><div data-reveal className="mt-9 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-700 dark:border-gray-700">{faq.map((item)=><details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-urbanist text-lg font-semibold [&::-webkit-details-marker]:hidden">{item.question}<ChevronDown size={20} className="shrink-0 text-brand-primary transition-transform group-open:rotate-180"/></summary><p className="mt-4 font-kanit leading-8 text-gray-700 dark:text-gray-300">{item.answer}</p></details>)}</div></div></section>

    <section className="bg-[#F8F9FA] px-4 py-16"><div data-reveal className="mx-auto max-w-7xl rounded-3xl bg-[#081426] px-7 py-12 text-center text-white sm:px-12 sm:py-16"><p className="font-kanit text-xs font-semibold uppercase tracking-widest text-brand-secondary"><FileSearch size={14} className="mr-2 inline-block" aria-hidden="true"/>Gestion web déléguée &amp; TMA</p><h2 className="mx-auto mt-4 max-w-3xl font-urbanist text-3xl font-bold sm:text-4xl">Parlons de la reprise de votre site ou logiciel métier</h2><p className="mx-auto mt-5 max-w-2xl font-kanit font-light leading-8 text-white/70">Un premier échange pour comprendre votre situation et définir le diagnostic technique nécessaire.</p><Link href="/contact?solution=Diagnostic%20Gestion%20Web%20D%C3%A9l%C3%A9gu%C3%A9e%20et%20TMA" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 font-kanit font-bold text-white transition hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">Demander un diagnostic <ArrowUpRight size={18}/></Link></div></section>
  </main>;
}
