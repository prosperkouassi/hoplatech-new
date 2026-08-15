// src/app/solutions/page.tsx
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Solutions SaaS - HoplaTech",
  description: "Gestion locative, gestion scolaire et gestion d'association. Des logiciels métiers conçus pour digitaliser votre activité.",
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col py-16 md:py-24 bg-white dark:bg-brand-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* En-tête de page */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-6 text-brand-dark dark:text-white">
            Nos <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit max-w-2xl mx-auto">
            Des logiciels métiers conçus pour digitaliser votre activité en toute simplicité. Choisissez la solution adaptée à votre secteur.
          </p>
        </div>

        {/* Grille Responsive Identique à l'Accueil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((sol) => (
            <Link 
              key={sol.slug} 
              href={`/solutions/${sol.slug}`}
              className="group relative bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-brand-primary transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge Statut */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4
                ${sol.statut?.includes('disponible') 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                {sol.statut?.[0] || 'Info'}
              </span>
              
              <h3 className="text-xl md:text-2xl font-bold font-urbanist mb-3 group-hover:text-brand-primary transition-colors text-brand-dark dark:text-white">
                {sol.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 font-kanit line-clamp-3 leading-relaxed">
                {sol.accroche}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-bold text-brand-primary">
                Voir les détails
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}