// src/app/solutions/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, GraduationCap, Users, ArrowRight, CheckCircle2, 
  MessageCircle, ChevronDown 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = '2250714074124';

const solutions = [
  {
    slug: 'gestion-locative',
    title: 'Gestion Locative',
    subtitle: 'Immobilier & Patrimoine',
    description: 'Centralisez vos biens, locataires, loyers et documents dans un logiciel conçu pour les propriétaires et agences immobilières.',
    features: ['Suivi des paiements', 'Gestion des contrats', 'Maintenance automatisée'],
    icon: Building2,
    color: 'from-red-500 to-orange-500',
    bgLight: 'bg-red-50 dark:bg-red-900/10',
    waMessage: 'Bonjour, je souhaite en savoir plus sur votre solution de Gestion Locative.'
  },
  {
    slug: 'gestion-scolaire',
    title: 'Gestion Scolaire',
    subtitle: 'Éducation & Formation',
    description: 'Pilotez votre établissement depuis une seule plateforme : élèves, notes, absences, paiements et communication parents.',
    features: ['Bulletins automatiques', 'Emplois du temps', 'Portail parents'],
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50 dark:bg-blue-900/10',
    waMessage: 'Bonjour, je souhaite en savoir plus sur votre solution de Gestion Scolaire.'
  },
  {
    slug: 'gestion-asso',
    title: 'Gestion Association',
    subtitle: 'ONG & Communautés',
    description: 'Simplifiez la gestion de vos adhérents, cotisations, événements et finances pour vous concentrer sur votre mission.',
    features: ['Suivi des cotisations', 'Gestion des membres', 'Rapports financiers'],
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50 dark:bg-emerald-900/10',
    waMessage: 'Bonjour, je souhaite en savoir plus sur votre solution de Gestion Association.'
  }
];

export default function SolutionsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion) {
      return;
    }

    const heroElement = heroRef.current;
    const statsElement = statsRef.current;
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);

    if (!heroElement || !statsElement || cards.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(heroElement.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from(statsElement.querySelectorAll('.stat-item'), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: statsElement,
          start: 'top 85%'
        }
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getWaLink = (message: string) => 
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <main className="bg-white dark:bg-brand-dark text-brand-dark dark:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 min-h-[80vh] flex items-center">
        <div className="container mx-auto max-w-6xl text-center space-y-8">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-wider uppercase border border-brand-primary/20">
            Solutions SaaS B2B pour l'Afrique
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold font-urbanist leading-tight max-w-4xl mx-auto">
            Des logiciels métiers conçus pour{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              simplifier votre quotidien
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-kanit max-w-2xl mx-auto leading-relaxed">
            Que vous soyez propriétaire bailleur, directeur d'établissement ou président d'association, 
            nous avons la solution adaptée à vos défis opérationnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href={getWaLink('Bonjour, je souhaite discuter de mes besoins en solutions logicielles.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg font-kanit flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={20} /> Parler à un expert sur WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#solutions-grid"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors font-kanit flex items-center justify-center gap-2"
            >
              Découvrir nos solutions <ChevronDown size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- STATS / PREUVE SOCIALE --- */}
      <section ref={statsRef} className="py-16 px-4 bg-gray-50 dark:bg-[#121212] border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '---', label: 'Clients actifs' },
            { val: '---', label: 'Utilisateurs formés' },
            { val: '---', label: 'Transactions sécurisées' },
            { val: '24/7', label: 'Support disponible' }
          ].map((stat, i) => (
            <div key={i} className="stat-item space-y-2">
              <div className="text-3xl md:text-4xl font-bold font-urbanist text-brand-primary">{stat.val}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-kanit">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GRILLE DES SOLUTIONS --- */}
      <section id="solutions-grid" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-urbanist">Nos 3 Solutions Métiers</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit max-w-2xl mx-auto">
              Chaque solution est pensée pour répondre aux réalités spécifiques de votre secteur d'activité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <div 
                key={sol.slug}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="group relative bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
              >
                {/* Badge couleur */}
                <div className={`w-14 h-14 rounded-xl ${sol.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <sol.icon size={28} className="text-brand-primary" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-kanit">
                  {sol.subtitle}
                </span>
                
                <h3 className="text-2xl font-bold font-urbanist mb-4 text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors">
                  {sol.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 font-kanit leading-relaxed mb-6 flex-grow">
                  {sol.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {sol.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-kanit text-gray-600 dark:text-gray-400">
                      <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA WhatsApp */}
                <a
                  href={getWaLink(sol.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3 px-6 bg-gray-100 dark:bg-gray-800 text-brand-dark dark:text-white font-bold rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <MessageCircle size={18} />
                  Discuter de cette solution
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL WHATSAPP --- */}
      <section className="py-24 px-4 bg-brand-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-urbanist">Vous ne trouvez pas votre bonheur ?</h2>
          <p className="text-xl font-kanit opacity-90 max-w-2xl mx-auto">
            Chaque organisation est unique. Parlons de vos besoins spécifiques et construisons ensemble la solution parfaite.
          </p>
          <a
            href={getWaLink('Bonjour, j\'aimerais échanger sur un projet personnalisé avec AlteractWeb.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-kanit text-lg group"
          >
            <MessageCircle size={24} />
            Démarrer une conversation WhatsApp
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm opacity-70 font-kanit">Réponse garantie sous 2 heures en journée ouvrée</p>
        </div>
      </section>

    </main>
  );
}