// src/app/solutions/gestion-asso/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users, CreditCard, Calendar, MessageSquare, PieChart,
  CheckCircle2, ArrowRight, PlayCircle, Building2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GestionAssoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollContainer = scrollContainerRef.current;
    const panels = panelsRef.current.filter((panel): panel is HTMLDivElement => panel !== null);

    if (isMobile || prefersReducedMotion || !scrollContainer || panels.length < 2) {
      return;
    }

    const scrollDistance = scrollContainer.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
        },
      });
    }, scrollContainer);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-brand-dark dark:bg-brand-dark dark:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden px-4 pb-20 pt-28 md:pb-24 md:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30"
          style={{
            background: `
              radial-gradient(55% 55% at 14% 20%, rgba(212, 61, 73, 0.16), transparent 70%),
              radial-gradient(48% 50% at 88% 22%, rgba(247, 64, 57, 0.14), transparent 72%),
              radial-gradient(42% 45% at 62% 82%, rgba(245, 158, 11, 0.08), transparent 70%),
              linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,247,247,.96) 52%, rgba(255,255,255,1) 100%)
            `,
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-16 -z-20 h-[420px] w-[420px] animate-pulse rounded-full bg-brand-primary/15 blur-[110px]" style={{ animationDuration: '7s' }} />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 -z-20 h-[460px] w-[460px] animate-pulse rounded-full bg-brand-secondary/15 blur-[120px]" style={{ animationDuration: '9s', animationDelay: '-3s' }} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(#121212 1px, transparent 1px), linear-gradient(90deg, #121212 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, black 0%, black 68%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 68%, transparent 100%)',
          }}
        />

        <div className="container mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white/70 px-4 py-2 font-kanit text-xs font-bold uppercase tracking-[0.16em] text-brand-primary shadow-sm backdrop-blur-md dark:bg-brand-dark/60">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-40" /><span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" /></span>
              Gestion associative simplifiée
            </span>
            
            <h1 className="max-w-2xl font-urbanist text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Gérez votre association simplement depuis <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_auto] bg-clip-text text-transparent">une seule plateforme</span>
            </h1>
            
            <p className="max-w-xl font-kanit text-base font-light leading-7 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-8">
              Centralisez vos adhérents, cotisations, événements, paiements et communications dans un logiciel conçu pour simplifier la gestion de votre association.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact?solution=gestion-asso" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-8 py-4 font-kanit font-bold text-white shadow-[0_16px_40px_rgba(212,61,73,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-[0_20px_48px_rgba(212,61,73,0.32)]">
                Commencer maintenant <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="#fonctionnement" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/65 px-8 py-4 font-kanit font-bold shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg dark:border-gray-600 dark:bg-brand-dark/40">
                <PlayCircle size={18} className="transition-transform duration-300 group-hover:scale-110" /> Découvrir la solution
              </Link>
            </div>

            <p className="font-kanit text-sm leading-6 text-gray-500 dark:text-gray-400">
              Une solution pensée pour les associations, clubs et organisations engagées.
            </p>
          </div>

          <div className="group relative flex justify-center lg:justify-end">
            <div aria-hidden="true" className="absolute inset-x-[8%] bottom-[2%] top-[15%] rounded-[40px] bg-gradient-to-r from-brand-primary/20 via-brand-secondary/15 to-amber-500/20 blur-[65px] transition-all duration-700 group-hover:scale-105 group-hover:opacity-80" />
            <div className="absolute -left-5 top-10 z-20 hidden rounded-xl border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur-xl sm:block dark:border-gray-700 dark:bg-brand-dark/85"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-brand-primary dark:bg-red-900/20"><Users size={17} /></span><div><p className="font-kanit text-[10px] text-gray-500">Adhérents actifs</p><p className="font-urbanist text-sm font-bold text-brand-primary">---</p></div></div></div>
            <div className="absolute -right-3 bottom-10 z-20 hidden rounded-xl border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur-xl sm:block dark:border-gray-700 dark:bg-brand-dark/85"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600"><CheckCircle2 size={17} /></span><div><p className="font-kanit text-[10px] text-gray-500">Cotisations</p><p className="font-urbanist text-sm font-bold">---</p></div></div></div>
            <div className="relative w-full max-w-[680px] transition-transform duration-700 ease-out group-hover:-translate-y-2"><div className="overflow-hidden rounded-[24px] border border-white/90 bg-white/70 p-2 shadow-[0_30px_90px_rgba(18,18,18,0.18)] backdrop-blur-xl sm:p-3"><img src="/dashboard-gestion-asso.png" alt="Bannière gestion associative" className="relative w-full rounded-[17px] border border-gray-100 object-cover" /></div></div>
          </div>
        </div>
      </section>

      {/* --- SCROLL HORIZONTAL PILOTÉ PAR LE DÉFILEMENT --- */}
      <section ref={scrollContainerRef} className="relative overflow-hidden border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-[#121212] md:h-screen">
        <div className="pointer-events-none absolute right-8 top-8 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white font-urbanist text-xl text-brand-primary shadow-sm dark:border-gray-700 dark:bg-[#1a1a1a] md:flex">→</div>
        <div className="absolute bottom-8 right-8 z-20 hidden rounded-full border border-gray-200 bg-white/80 px-4 py-2 font-urbanist text-sm font-bold text-gray-500 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-[#1a1a1a]/80 md:block">
          01 / 02
        </div>

        <div ref={containerRef} className="flex w-full flex-col md:h-full md:w-[200vw] md:flex-row">
          
          {/* PANNEAU 1 : PRÉSENTATION */}
          <div ref={(el) => { panelsRef.current[0] = el; }} className="flex min-h-screen w-full flex-shrink-0 items-center justify-center px-4 py-20 md:h-full md:w-screen md:py-0">
            <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="space-y-6">
                <h2 className="max-w-2xl font-urbanist text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">Une gestion associative plus simple et mieux organisée</h2>
                <p className="font-kanit text-base font-light leading-7 text-gray-700 dark:text-gray-300 md:text-lg md:leading-8">
                 Notre solutions rassemble les informations essentielles dans un seul espace afin de vous aider à réduire les tâches manuelles et à mieux piloter votre association.
                </p>
                <ul className="grid gap-3 font-kanit text-gray-700 dark:text-gray-300 sm:grid-cols-2">
                  {['Centralisez les fiches de vos adhérents', 'Suivez les adhésions et les renouvellements', 'Gérez les cotisations et les paiements', 'Organisez vos événements', 'Communiquez facilement avec vos membres', 'Suivez vos recettes et vos dépenses'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-colors duration-300 hover:border-brand-primary/10 hover:bg-white dark:hover:bg-[#1a1a1a]">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10"><CheckCircle2 size={14} className="text-brand-primary" /></div>
                      <span className="text-sm leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-8 -z-10 rounded-3xl bg-brand-primary/15 blur-[55px]" />
                <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_24px_70px_rgba(18,18,18,0.12)] dark:border-gray-800 dark:bg-[#1a1a1a] sm:p-7">
                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                   <span className="text-sm font-kanit text-gray-500">Adhérents actifs</span>
                   <span className="font-bold font-urbanist text-brand-primary">---</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                   <span className="text-sm font-kanit text-gray-500">Cotisations ce mois</span>
                   <span className="font-bold font-urbanist text-brand-primary">---</span>
                 </div>
                 <div className="flex h-40 items-end justify-around gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-[#2a2a2a]">
                   {[40, 65, 45, 80, 55, 70].map((h, i) => (
                     <div key={i} style={{height: `${h}%`}} className="w-full rounded-t-md bg-gradient-to-t from-brand-primary to-brand-secondary opacity-65 transition-opacity duration-300 hover:opacity-100"></div>
                   ))}
                 </div>
                </div>
              </div>
            </div>
          </div>

          {/* PANNEAU 2 : FONCTIONNALITÉS CLÉS */}
          <div ref={(el) => { panelsRef.current[1] = el; }} className="flex min-h-screen w-full flex-shrink-0 items-center justify-center px-4 py-20 md:h-full md:w-screen md:py-0">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mx-auto mb-10 max-w-3xl text-center font-urbanist text-3xl font-bold leading-tight tracking-tight md:mb-12 md:text-4xl lg:text-5xl">Tous les outils pour faire vivre votre association</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Users, title: 'Gestion des adhérents', desc: 'Créez et centralisez les fiches de vos membres, bénévoles et responsables.' },
                  { icon: CreditCard, title: 'Adhésions et cotisations', desc: 'Gérez les inscriptions, renouvellements, cotisations et statuts des membres.' },
                  { icon: PieChart, title: 'Paiements et reçus', desc: 'Enregistrez les paiements et gardez un historique clair des transactions.' },
                  { icon: Calendar, title: 'Événements et activités', desc: 'Créez vos événements, gérez les inscriptions et suivez les participants.' },
                  { icon: MessageSquare, title: 'Communication', desc: 'Envoyez des messages ciblés à vos adhérents et groupes de membres.' },
                  { icon: Building2, title: 'Gestion financière', desc: 'Suivez vos recettes, dépenses, budgets et opérations importantes.' }
                ].map((feat, i) => (
                  <article key={i} className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-[0_22px_55px_rgba(18,18,18,0.10)] dark:border-gray-800 dark:bg-[#1a1a1a]">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-brand-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-primary/15" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-brand-primary transition-all duration-300 group-hover:scale-110 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white dark:border-red-900/30 dark:bg-red-900/20"><feat.icon size={24} /></div>
                    <h3 className="relative font-urbanist text-lg font-bold transition-colors duration-300 group-hover:text-brand-primary">{feat.title}</h3>
                    <p className="relative font-kanit text-sm font-light leading-6 text-gray-600 dark:text-gray-400">{feat.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- BÉNÉFICES --- */}
      <section className="relative overflow-hidden bg-white px-4 py-20 dark:bg-brand-dark md:py-28">
        <div className="container mx-auto max-w-6xl space-y-14 text-center md:space-y-16">
          <div className="space-y-4">
            <h2 className="font-urbanist text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">Concentrez-vous sur votre mission associative</h2>
            <p className="font-kanit text-base font-light leading-7 text-gray-700 dark:text-gray-300 md:text-lg">Une association mieux organisée, c&apos;est une équipe plus disponible et une communauté plus engagée.</p>
          </div>
          
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: 'Organisez', items: ['Centralisez vos informations', 'Gagnez du temps'] },
              { title: 'Animez', items: ['Suivez mieux vos membres', 'Renforcez la communication'] },
              { title: 'Développez', items: ['Facilitez le travail de votre équipe', 'Gardez une meilleure visibilité financière'] }
            ].map((block, i) => (
              <article key={i} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 text-left transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-[0_22px_60px_rgba(18,18,18,0.09)] dark:border-gray-800 dark:bg-[#1a1a1a] md:p-8">
                <span className="font-urbanist text-sm font-bold text-brand-primary/50">0{i + 1}</span>
                <h3 className="mb-6 mt-4 font-urbanist text-2xl font-bold text-brand-primary">{block.title}</h3>
                <ul className="space-y-4">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-kanit text-gray-700 dark:text-gray-300">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10"><CheckCircle2 size={15} className="text-brand-primary" /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODULES --- */}
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-20 dark:border-gray-800 dark:bg-[#121212] md:py-28">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mx-auto mb-12 max-w-3xl text-center font-urbanist text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">Découvrez les outils disponibles</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: 'Gestion des adhérents', desc: 'Centralisez les fiches, coordonnées, statuts et historiques de vos adhérents.', link: '/modules/gestion-adherents' },
              { title: 'Cotisations et paiements', desc: 'Gérez les cotisations, les paiements, les renouvellements et les éventuels retards.', link: '/modules/cotisations-paiements' },
              { title: 'Événements associatifs', desc: 'Créez vos événements, recueillez les inscriptions et suivez les participants.', link: '/modules/evenements' }
            ].map((prod, i) => (
              <article key={i} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-[0_22px_60px_rgba(18,18,18,0.10)] dark:border-gray-800 dark:bg-brand-dark">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-primary/15" />
                <div className="space-y-4 mb-8">
                  <h3 className="relative font-urbanist text-xl font-bold">{prod.title}</h3>
                  <p className="relative font-kanit font-light leading-7 text-gray-700 dark:text-gray-300">{prod.desc}</p>
                </div>
                <Link href={prod.link} className="relative inline-flex items-center gap-2 font-kanit font-bold text-brand-primary transition-all">
                  Découvrir le module <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- FONCTIONNEMENT --- */}
      <section id="fonctionnement" className="bg-white px-4 py-20 dark:bg-brand-dark md:py-28">
        <div className="container mx-auto max-w-6xl space-y-14 text-center md:space-y-16">
          <h2 className="font-urbanist text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">Commencez en quelques étapes</h2>
          <div className="relative grid gap-5 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 -z-10 hidden h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent md:block"></div>
            {['Créez votre compte.', 'Ajoutez vos membres.', 'Configurez vos cotisations et activités.', 'Pilotez votre association depuis votre tableau de bord.'].map((step, i) => (
              <article key={i} className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-xl dark:border-gray-800 dark:bg-[#1a1a1a] md:border-transparent md:bg-transparent md:shadow-none dark:md:bg-transparent">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-primary font-urbanist text-xl font-bold text-white shadow-[0_12px_30px_rgba(212,61,73,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-secondary dark:border-brand-dark">
                  {i + 1}
                </div>
                <p className="max-w-[230px] font-kanit leading-6 text-gray-700 dark:text-gray-300">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="bg-white px-4 py-20 dark:bg-brand-dark md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="relative isolate overflow-hidden rounded-3xl bg-brand-primary px-6 py-14 text-center text-white shadow-[0_28px_80px_rgba(212,61,73,0.28)] sm:px-10 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 -z-10 h-80 w-80 rounded-full bg-white/15 blur-[80px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-96 w-96 rounded-full bg-orange-300/25 blur-[90px]" />
          <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="font-urbanist text-3xl font-bold leading-tight tracking-tight md:text-5xl">Simplifiez la gestion de votre association dès aujourd&apos;hui</h2>
          <p className="mx-auto max-w-3xl font-kanit text-lg font-light leading-8 text-white/90 md:text-xl">Gagnez du temps sur l&apos;administration et consacrez plus d&apos;énergie à vos membres, vos projets et votre mission.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20solution%20de%20gestion%20associative."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-kanit font-bold text-brand-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-xl"
            >
              Parlez à un expert
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-kanit font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/20">
              Demander une démonstration
            </Link>
          </div>
          </div>
          </div>
        </div>
      </section>

    </main>
  );
}