// src/app/solutions/gestion-asso/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, CreditCard, Calendar, MessageSquare, PieChart, 
  CheckCircle2, ArrowRight, PlayCircle, Star, Building2 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GestionAssoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
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
              Gestion associative simplifiée
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold font-urbanist leading-tight">
              Gérez votre association simplement depuis <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">une seule plateforme</span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit leading-relaxed max-w-xl">
              Centralisez vos adhérents, cotisations, événements, paiements et communications dans un logiciel conçu pour simplifier la gestion de votre association.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?solution=gestion-asso" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg font-kanit flex items-center justify-center gap-2">
                Commencer maintenant <ArrowRight size={18} />
              </Link>
              <Link href="#fonctionnement" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors font-kanit flex items-center justify-center gap-2">
                <PlayCircle size={18} /> Découvrir la solution
              </Link>
            </div>

            {/* Indicateurs Dashboard Hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { label: 'Adhérents', val: '---' },
                { label: 'Cotisations', val: '---' },
                { label: 'Événements', val: '---' },
                { label: 'En attente', val: '---' }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#1a1a1a] p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                  <div className="text-xl font-bold font-urbanist text-brand-primary">{stat.val}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-kanit">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-kanit flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-primary" /> Une solution pensée pour les associations, clubs et organisations engagées.
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
      <section ref={scrollContainerRef} className="relative h-screen overflow-hidden bg-gray-50 dark:bg-[#121212]">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-sm font-bold text-gray-400 uppercase tracking-widest font-kanit">
          Faites défiler pour découvrir
        </div>
        <div className="absolute bottom-8 right-8 z-10 text-sm font-bold text-gray-400 font-urbanist">
          01 / 02
        </div>

        <div ref={containerRef} className="flex h-full w-[200vw]">
          
          {/* PANNEAU 1 : PRÉSENTATION */}
          <div ref={el => panelsRef.current[0] = el!} className="w-screen h-full flex-shrink-0 flex items-center justify-center px-4">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Une gestion associative plus simple et mieux organisée</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit leading-relaxed">
                 Notre solutions rassemble les informations essentielles dans un seul espace afin de vous aider à réduire les tâches manuelles et à mieux piloter votre association.
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
                   <span className="font-bold font-urbanist text-brand-primary">---</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                   <span className="text-sm font-kanit text-gray-500">Cotisations ce mois</span>
                   <span className="font-bold font-urbanist text-brand-primary">---</span>
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
          <div ref={el => panelsRef.current[1] = el!} className="w-screen h-full flex-shrink-0 flex items-center justify-center px-4">
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
              { title: 'Gestion des adhérents', desc: 'Centralisez les fiches, coordonnées, statuts et historiques de vos adhérents.', link: '/modules/gestion-adherents' },
              { title: 'Cotisations et paiements', desc: 'Gérez les cotisations, les paiements, les renouvellements et les éventuels retards.', link: '/modules/cotisations-paiements' },
              { title: 'Événements associatifs', desc: 'Créez vos événements, recueillez les inscriptions et suivez les participants.', link: '/modules/evenements' }
            ].map((prod, i) => (
              <div key={i} className="bg-white dark:bg-brand-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between group">
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold font-urbanist">{prod.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-kanit">{prod.desc}</p>
                </div>
                <Link href={prod.link} className="inline-flex items-center gap-2 text-brand-primary font-bold font-kanit group-hover:gap-4 transition-all">
                  Découvrir le module <ArrowRight size={18} />
                </Link>
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

      {/* --- PREUVE SOCIALE (PLACEHOLDERS) --- */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-[#121212]">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold font-urbanist">Ils nous font confiance</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="font-kanit text-gray-700 dark:text-gray-300 italic mb-4">&ldquo;Un outil qui a transformé notre façon de gérer l’association. Plus de perte de temps !&rdquo;</p>
              <p className="font-bold font-urbanist text-sm">— [Nom de l’association]</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center">
              <Building2 size={48} className="text-gray-300 dark:text-gray-600 mb-4" />
              <p className="font-kanit text-gray-500 dark:text-gray-400 text-sm">Logo association cliente</p>
            </div>

            <div className="p-6 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold font-urbanist text-brand-primary mb-2">---</div>
              <p className="font-kanit text-gray-700 dark:text-gray-300">Adhérents gérés via notre plateforme</p>
            </div>
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

      {/* --- FOOTER SPÉCIFIQUE --- */}
      <footer className="py-16 px-4 bg-brand-dark text-white border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-urbanist">AlteractWeb</h3>
              <p className="text-sm text-gray-400 font-kanit">Solutions logicielles métiers pour les associations et organisations engagées en Côte d’Ivoire.</p>
            </div>
            
            <div>
              <h4 className="font-bold font-urbanist mb-4">Modules</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                <li><Link href="/modules/gestion-adherents" className="hover:text-brand-primary transition-colors">Gestion des adhérents</Link></li>
                <li><Link href="/modules/cotisations-paiements" className="hover:text-brand-primary transition-colors">Cotisations & Paiements</Link></li>
                <li><Link href="/modules/evenements" className="hover:text-brand-primary transition-colors">Événements</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-urbanist mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                <li><Link href="/solutions/gestion-asso#fonctionnement" className="hover:text-brand-primary transition-colors">Comment ça marche</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                <li><Link href="/politique-confidentialite" className="hover:text-brand-primary transition-colors">Politique de confidentialité</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-urbanist mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                  <MessageSquare size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                  <Users size={18} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 font-kanit">
            &copy; {new Date().getFullYear()} AlteractWeb. Tous droits réservés.
          </div>
        </div>
      </footer>

    </main>
  );
}