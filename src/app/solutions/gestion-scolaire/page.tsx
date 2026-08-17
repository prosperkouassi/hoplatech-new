// src/app/solutions/gestion-scolaire/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, FileText, GraduationCap, PlusCircle,
  CheckCircle2, ArrowRight, PlayCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GestionScolairePage() {
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
    <main className="bg-white dark:bg-brand-dark text-brand-dark dark:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase border border-red-100 dark:border-red-800">
              Gestion scolaire simplifiée
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold font-urbanist leading-tight">
              Gérez votre établissement scolaire depuis <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">une seule plateforme</span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit leading-relaxed max-w-xl">
              Centralisez les élèves, les inscriptions, les notes, les absences, les paiements et la communication avec les parents dans un logiciel simple et moderne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?solution=gestion-scolaire" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg font-kanit flex items-center justify-center gap-2">
                Commencer maintenant <ArrowRight size={18} />
              </Link>
              <Link href="#fonctionnement" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors font-kanit flex items-center justify-center gap-2">
                <PlayCircle size={18} /> Comment ça marche
              </Link>
            </div>

            {/* Indicateurs Dashboard Hero */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
              {[
                { label: 'Élèves inscrits', val: '---' },
                { label: 'Absences récentes', val: '---' },
                { label: 'Paiements reçus', val: '---' },
                { label: 'Moyenne générale', val: '---' },
                { label: 'Cours à venir', val: '---' },
                { label: 'Notifications', val: '---' }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#1a1a1a] p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                  <div className="text-lg font-bold font-urbanist text-brand-primary">{stat.val}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-kanit uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-kanit flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-primary" /> Une gestion scolaire plus simple pour les équipes administratives, les enseignants, les élèves et les parents.
            </p>
          </div>

          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-2xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <img
              src="/dashboard-gestion-scolaire.png"
              alt="Bannière gestion scolaire"
              className="relative w-full max-w-[620px] rounded-[22px] border-[10px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- SCROLL HORIZONTAL PILOTÉ PAR LE DÉFILEMENT --- */}
      <section ref={scrollContainerRef} className="relative h-screen overflow-hidden bg-gray-50 dark:bg-[#121212]">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-sm font-bold text-gray-400 uppercase tracking-widest font-kanit">
          Faites défiler pour découvrir
        </div>
        <div className="absolute bottom-8 right-8 z-10 text-sm font-bold text-gray-400 font-urbanist">
          01 / 02
        </div>

        <div ref={containerRef} className="flex h-full w-[200vw]">
          
          {/* PANNEAU 1 : PRÉSENTATION */}
          <div ref={(el) => { panelsRef.current[0] = el; }} className="w-screen h-full flex-shrink-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Une gestion scolaire plus claire, plus rapide et mieux organisée</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit leading-relaxed">
                  La gestion d&apos;un établissement scolaire implique de nombreuses tâches : inscrire les élèves, suivre les absences, saisir les notes, organiser les emplois du temps, gérer les paiements et communiquer avec les familles. Notre logiciel rassemble toutes ces informations dans un espace unique afin de réduire les tâches manuelles et de faciliter le travail des équipes.
                </p>
                <ul className="space-y-3 font-kanit text-gray-700 dark:text-gray-300">
                  {['Centralisez les dossiers des élèves', 'Gérez les inscriptions et réinscriptions', 'Suivez les notes, absences et retards', 'Organisez les classes et les emplois du temps', 'Suivez les frais de scolarité', 'Communiquez plus facilement avec les parents'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center"><CheckCircle2 size={14} className="text-brand-primary" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg space-y-4">
                 <div className="grid grid-cols-2 gap-3">
                   <div className="p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg text-center">
                     <div className="text-2xl font-bold font-urbanist text-brand-primary">---</div>
                     <div className="text-xs text-gray-500 font-kanit">Effectifs</div>
                   </div>
                   <div className="p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg text-center">
                     <div className="text-2xl font-bold font-urbanist text-brand-primary">---</div>
                     <div className="text-xs text-gray-500 font-kanit">Absences</div>
                   </div>
                 </div>
                 <div className="h-32 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg flex items-end justify-around p-3 gap-2">
                   {[30, 50, 40, 70, 60, 85].map((h, i) => (
                     <div key={i} style={{height: `${h}%`}} className="w-full bg-brand-primary/30 rounded-t-sm"></div>
                   ))}
                 </div>
                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                   <span className="text-sm font-kanit text-gray-500">Paiements en attente</span>
                   <span className="font-bold font-urbanist text-brand-primary">---</span>
                 </div>
              </div>
            </div>
          </div>

          {/* PANNEAU 2 : FONCTIONNALITÉS CLÉS (4 BLOCS MAX) */}
          <div ref={(el) => { panelsRef.current[1] = el; }} className="w-screen h-full flex-shrink-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl md:text-4xl font-bold font-urbanist mb-12 text-center">Tous les outils essentiels pour piloter votre établissement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Users, title: 'Gestion des élèves', desc: 'Créez et centralisez les dossiers, informations personnelles, classe et historique scolaire.' },
                  { icon: FileText, title: 'Inscriptions et réinscriptions', desc: 'Organisez les admissions, inscriptions et réinscriptions depuis une interface unique.' },
                  { icon: GraduationCap, title: 'Notes et bulletins', desc: 'Saisissez les notes, calculez les moyennes et préparez les bulletins selon vos besoins.' },
                  // ✅ 4ème bloc en ROUGE (#E63946) avec texte spécifique
                  { 
                    icon: PlusCircle, 
                    title: 'Autres fonctionnalités disponibles', 
                    desc: 'Emplois du temps, paiements scolaires, communication parents-école et bien plus encore.',
                    isRed: true 
                  }
                ].map((feat, i) => (
                  <div 
                    key={i} 
                    className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4
                      ${feat.isRed 
                        ? 'bg-[#E63946] border-[#E63946] text-white' 
                        : 'bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-gray-800 text-brand-dark dark:text-white'
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                      ${feat.isRed ? 'bg-white/20' : 'bg-brand-primary/10'}`}>
                      <feat.icon size={24} className={feat.isRed ? 'text-white' : 'text-brand-primary'} />
                    </div>
                    <h3 className="font-bold font-urbanist">{feat.title}</h3>
                    <p className={`text-sm leading-relaxed ${feat.isRed ? 'text-white/90' : 'text-gray-600 dark:text-gray-400 font-kanit'}`}>
                      {feat.desc}
                    </p>
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
            <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Concentrez-vous sur la réussite des élèves</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit">Une école mieux organisée, c&apos;est un meilleur suivi pour chaque élève.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Organisez', items: ['Centralisez vos informations', 'Gagnez du temps administratif'] },
              { title: 'Suivez', items: ['Améliorez le suivi pédagogique', 'Renforcez la communication avec les parents'] },
              { title: 'Accompagnez', items: ['Facilitez le travail des enseignants', 'Gardez une meilleure visibilité financière'] }
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

      {/* --- FONCTIONNEMENT --- */}
      <section id="fonctionnement" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-16">
          <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Commencez en quelques étapes</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>
            {['Créez votre espace établissement.', 'Ajoutez vos élèves, classes et utilisateurs.', 'Configurez vos matières, emplois du temps et frais scolaires.', 'Suivez votre établissement depuis le tableau de bord.'].map((step, i) => (
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

      {/* --- CTA FINAL --- */}
      <section className="py-24 px-4 bg-brand-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-urbanist">Simplifiez la gestion de votre établissement dès aujourd&apos;hui</h2>
          <p className="text-xl font-kanit opacity-90">Centralisez vos élèves, vos classes, vos notes, vos absences et vos informations administratives dans une seule solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/2250714074124?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20solution%20de%20gestion%20scolaire."
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
