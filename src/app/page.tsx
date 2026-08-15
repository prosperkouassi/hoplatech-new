// src/app/page.tsx
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alteractweb - Logiciels Métiers & SaaS en Côte d'Ivoire",
  description: "Solutions de gestion locative, scolaire et développement sur mesure. Digitalisez votre activité avec des logiciels pensés pour la réalité africaine.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white dark:bg-brand-dark">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-red-100 dark:border-red-800">
            Solutions SaaS pour l'Afrique
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-urbanist text-brand-dark dark:text-white">
            La gestion métier,<br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              simplifiée et augmentée.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 font-kanit font-light leading-relaxed max-w-2xl mx-auto">
            Alteractweb conçoit des logiciels accessibles, pensés pour la réalité des entreprises en Côte d'Ivoire. Immobilier, Éducation, Associations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/solutions" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg text-center"
            >
              Découvrir nos solutions
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors bg-white/50 dark:bg-transparent backdrop-blur-sm text-center"
            >
              Parler à un expert
            </Link>
          </div>
        </div>
        
        {/* Effet de fond décoratif (Grille subtile) */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

      {/* --- LISTE DES SOLUTIONS --- */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-urbanist bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent inline-block">
              Nos Solutions Logicielles
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-kanit">Des outils robustes pour digitaliser votre activité.</p>
          </div>

          {/* Grille Responsive : 1 col mobile, 2 cols tablette, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution) => (
              <div key={solution.slug} className="group relative bg-white dark:bg-brand-dark rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                
                {/* Badge Statut */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                    ${solution.statut?.includes('disponible') 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                    {solution.statut?.[0] || 'Info'}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors font-urbanist text-brand-dark dark:text-white">
                  {solution.title}
                </h3>
                
                <p className="text-brand-primary font-medium mb-4 text-sm uppercase tracking-wider font-kanit">
                  {solution.accroche}
                </p>

                <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 font-kanit flex-grow [&_p]:mb-2 last:[&_p]:mb-0" 
                     dangerouslySetInnerHTML={{ __html: solution.problemeResolu }} />

                <Link href={`/solutions/${solution.slug}`} className="inline-flex items-center text-sm font-bold text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors mt-auto font-kanit">
                  Voir les détails
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}