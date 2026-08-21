// src/app/solutions/gestion-asso/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollContainer = scrollContainerRef.current;
    const panels = panelsRef.current.filter((panel): panel is HTMLDivElement => Boolean(panel));

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
    };
  }, []);

  return (
    <main className="bg-white dark:bg-brand-dark text-brand-dark dark:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase border border-red-100 dark:border-red-800">
              Gestion associative simplifiée
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold font-urbanist leading-tight">
              Gérez votre association simplement depuis <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">une seule plateforme</span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit leading-relaxed max-w-xl">
              Centralisez vos adhérents, cotisations, événements, paiements et communications dans un logiciel conçu pour simplifier la gestion de votre association.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20solution%20de%20gestion%20associative."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg font-kanit flex items-center justify-center gap-2"
              >
                Parler à un expert <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link href="#fonctionnement" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors font-kanit flex items-center justify-center gap-2">
                <PlayCircle size={18} aria-hidden="true" /> Découvrir la solution
              </Link>
            </div>

            {/* Indicateurs Dashboard Hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { label: 'Adhérents', val: 'Centralisés' },
                { label: 'Cotisations', val: 'Suivies' },
                { label: 'Événements', val: 'Planifiés' },
                { label: 'Paiements', val: 'Tracés' }
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 dark:bg-[#1a1a1a] p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                  <div className="text-sm font-bold font-urbanist text-brand-primary">{stat.val}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-kanit">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-kanit flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-primary" aria-hidden="true" /> Une solution pensée pour les associations, clubs et organisations engagées.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="aspect-video rounded-xl bg-white dark:bg-[#2a2a2a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/dashboard-gestion-asso.png"
                  alt="Tableau de bord gestion associative"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLL HORIZONTAL PILOTÉ PAR LE DÉFILEMENT --- */}
      <section ref={scrollContainerRef} className="relative overflow-hidden bg-gray-50 dark:bg-[#121212] md:h-screen">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 hidden text-sm font-bold text-gray-400 uppercase tracking-widest font-kanit md:block">
          Faites défiler pour découvrir
        </div>
        <div className="absolute bottom-8 right-8 z-10 hidden text-sm font-bold text-gray-400 font-urbanist md:block">
          01 / 02
        </div>

        <div ref={containerRef} className="flex w-full flex-col md:h-full md:w-[200vw] md:flex-row">
          
          {/* PANNEAU 1 : PRÉSENTATION */}
          <div ref={(el) => { panelsRef.current[0] = el; }} className="flex min-h-screen w-full flex-shrink-0 items-center justify-center px-4 py-24 md:h-full md:min-h-0 md:w-screen md:py-0">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Une gestion associative plus simple et mieux organisée</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit leading-relaxed">
                 Notre solution rassemble les informations essentielles dans un seul espace afin de vous aider à réduire les tâches manuelles et à mieux piloter votre association.
                </p>
                <ul className="space-y-3 font-kanit text-gray-700 dark:text-gray-300">
                  {['Centralisez les fiches de vos adhérents', 'Suivez les adhésions et les renouvellements', 'Gérez les cotisations et les paiements', 'Organisez vos événements', 'Communiquez facilement avec vos membres', 'Suivez vos recettes et vos dépenses'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center"><CheckCircle2 size={14} className="text-brand-primary" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg space-y-4">
                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                   <span className="text-sm font-kanit text-gray-500">Adhérents actifs</span>
                   <span className="font-bold font-urbanist text-brand-primary">Centralisés</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                   <span className="text-sm font-kanit text-gray-500">Cotisations ce mois</span>
                   <span className="font-bold font-urbanist text-brand-primary">Suivies</span>
                 </div>
                 <div className="h-24 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg flex items-end justify-around p-2 gap-1">
                   {[40, 65, 45, 80, 55, 70].map((h, i) => (
                     <div key={i} style={{height: `${h}%`}} className="w-full bg-brand-primary/30 rounded-t-sm"></div>
                   ))}
                 </div>
              </div>
            </div>
          </div>

          {/* PANNEAU 2 : FONCTIONNALITÉS CLÉS */}
          <div ref={(el) => { panelsRef.current[1] = el; }} className="flex min-h-screen w-full flex-shrink-0 items-center justify-center px-4 py-24 md:h-full md:min-h-0 md:w-screen md:py-0">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-4xl font-bold font-urbanist mb-12 text-center">Tous les outils pour faire vivre votre association</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Users, title: 'Gestion des adhérents', desc: 'Créez et centralisez les fiches de vos membres, bénévoles et responsables.' },
                  { icon: CreditCard, title: 'Adhésions et cotisations', desc: 'Gérez les inscriptions, renouvellements, cotisations et statuts des membres.' },
                  { icon: PieChart, title: 'Paiements et reçus', desc: 'Enregistrez les paiements et gardez un historique clair des transactions.' },
                  { icon: Calendar, title: 'Événements et activités', desc: 'Créez vos événements, gérez les inscriptions et suivez les participants.' },
                  { icon: MessageSquare, title: 'Communication', desc: 'Envoyez des messages ciblés à vos adhérents et groupes de membres.' },
                  { icon: Building2, title: 'Gestion financière', desc: 'Suivez vos recettes, dépenses, budgets et opérations importantes.' }
                ].map((feat, i) => (
                  <div key={i} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center"><feat.icon size={24} className="text-brand-primary" /></div>
                    <h3 className="font-bold font-urbanist">{feat.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-kanit leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- BÉNÉFICES --- */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Concentrez-vous sur votre mission associative</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit">Une association mieux organisée, c’est une équipe plus disponible et une communauté plus engagée.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Organisez', items: ['Centralisez vos informations', 'Gagnez du temps'] },
              { title: 'Animez', items: ['Suivez mieux vos membres', 'Renforcez la communication'] },
              { title: 'Développez', items: ['Facilitez le travail de votre équipe', 'Gardez une meilleure visibilité financière'] }
            ].map((block, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-left">
                <h3 className="text-2xl font-bold font-urbanist mb-6 text-brand-primary">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-kanit text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={18} className="text-brand-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODULES --- */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-[#121212]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold font-urbanist mb-12 text-center">Découvrez les outils disponibles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Gestion des adhérents', desc: 'Centralisez les fiches, coordonnées, statuts et historiques de vos adhérents.' },
              { title: 'Cotisations et paiements', desc: 'Gérez les cotisations, les paiements, les renouvellements et les éventuels retards.' },
              { title: 'Événements associatifs', desc: 'Créez vos événements, recueillez les inscriptions et suivez les participants.' }
            ].map((prod) => (
              <article key={prod.title} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-[0_22px_60px_rgba(18,18,18,0.10)] dark:border-gray-800 dark:bg-brand-dark">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-primary/15" />
                <div className="space-y-4 mb-8">
                  <h3 className="relative text-xl font-bold font-urbanist">{prod.title}</h3>
                  <p className="relative text-gray-700 dark:text-gray-300 font-kanit">{prod.desc}</p>
                </div>
                <div className="relative inline-flex items-center gap-2 text-sm text-brand-primary font-bold font-kanit">
                  <CheckCircle2 size={18} aria-hidden="true" /> Inclus dans la solution
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- FONCTIONNEMENT --- */}
      <section id="fonctionnement" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-16">
          <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Commencez en quelques étapes</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>
            {['Créez votre compte.', 'Ajoutez vos membres.', 'Configurez vos cotisations et activités.', 'Pilotez votre association depuis votre tableau de bord.'].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold font-urbanist shadow-lg z-10">
                  {i + 1}
                </div>
                <p className="font-kanit text-gray-700 dark:text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ENGAGEMENTS --- */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-[#121212]">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <div className="mx-auto max-w-3xl space-y-4">
            <span className="font-kanit text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">Une technologie utile</span>
            <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Une solution conçue pour votre quotidien associatif</h2>
            <p className="font-kanit text-lg leading-relaxed text-gray-700 dark:text-gray-300">Chaque fonctionnalité répond à un besoin concret de vos équipes, sans ajouter de complexité inutile.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Simple à prendre en main', text: 'Une interface claire pour permettre à chaque responsable de retrouver rapidement les informations utiles.' },
              { title: 'Accessible partout', text: 'Une plateforme disponible en ligne pour suivre l’association au bureau comme en déplacement.' },
              { title: 'Prête à évoluer', text: 'Une base structurée pour accompagner la croissance de vos membres, activités et besoins.' }
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 text-left dark:border-gray-800 dark:bg-brand-dark">
                <CheckCircle2 size={22} className="text-brand-primary" aria-hidden="true" />
                <h3 className="mt-6 font-urbanist text-xl font-bold">{item.title}</h3>
                <p className="mt-3 font-kanit leading-7 text-gray-700 dark:text-gray-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 px-4 bg-brand-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-urbanist">Simplifiez la gestion de votre association dès aujourd’hui</h2>
          <p className="text-xl font-kanit opacity-90">Gagnez du temps sur l’administration et consacrez plus d’énergie à vos membres, vos projets et votre mission.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20solution%20de%20gestion%20associative."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-brand-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-kanit"
            >
              Parlez à un expert
            </a>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/30 font-bold rounded-lg hover:bg-white/10 transition-colors font-kanit">
              Demander une démonstration
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}