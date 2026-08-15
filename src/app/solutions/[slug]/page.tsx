// src/app/solutions/[slug]/page.tsx
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const getSolutionBySlug = (slug: string) => solutions.find((sol) => sol.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: 'Solution non trouvée | HoplaTech' };
  
  return {
    title: `${solution.title} - HoplaTech`,
    description: solution.accroche
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return notFound();

  // Parsing des fonctionnalités HTML en tableau propre
  const rawFeatures = solution.fonctionnalites || '';
  const features = rawFeatures.split('</p>').filter(Boolean).map((p: string) => p.replace(/<\/?p>/g, '').trim()).filter((f: string) => f.length > 0);

  return (
    <main className="flex flex-col py-16 md:py-24 bg-white dark:bg-brand-dark">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Navigation Retour */}
        <Link href="/solutions" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-primary mb-8 transition-colors font-kanit">
          ← Retour aux solutions
        </Link>
        
        {/* Badge Statut */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4
          ${solution.statut?.includes('disponible') 
            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
            : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
          {solution.statut?.[0] || 'Info'}
        </span>
        
        {/* Titre et Accroche */}
        <h1 className="text-3xl md:text-5xl font-bold font-urbanist mb-4 text-brand-dark dark:text-white">{solution.title}</h1>
        <p className="text-xl text-brand-primary font-kanit mb-10 leading-relaxed">{solution.accroche}</p>
        
        {/* Image Principale de la Solution */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-gray-200 dark:border-gray-800 shadow-lg">
          <img 
            src={solution.image} 
            alt={solution.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Problème Résolu */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 font-kanit [&_p]:mb-4 last:[&_p]:mb-0 text-gray-700 dark:text-gray-300" 
             dangerouslySetInnerHTML={{ __html: solution.problemeResolu }} />
        
        {/* Fonctionnalités Clés */}
        {features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-urbanist mb-8 text-brand-dark dark:text-white">Fonctionnalités clés</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feat: string, i: number) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-gray-800">
                  <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-kanit text-gray-700 dark:text-gray-300">{feat.trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Tarif et Public Cible */}
        {(solution.tarif || solution.publicCible) && (
          <div className="bg-brand-primary/5 dark:bg-brand-primary/10 rounded-2xl p-8 md:p-10 mb-16 border border-brand-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solution.tarif && (
                <div>
                  <h3 className="font-bold font-urbanist mb-3 text-brand-dark dark:text-white">Tarification</h3>
                  <p className="font-kanit text-gray-700 dark:text-gray-300">{solution.tarif}</p>
                </div>
              )}
              {solution.publicCible && (
                <div>
                  <h3 className="font-bold font-urbanist mb-3 text-brand-dark dark:text-white">Public Cible</h3>
                  <div className="font-kanit prose prose-sm dark:prose-invert max-w-none [&_p]:mb-2 last:[&_p]:mb-0 text-gray-700 dark:text-gray-300"
                       dangerouslySetInnerHTML={{ __html: solution.publicCible }} />
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* CTA Final */}
        <div className="text-center">
          <Link href={`/contact?solution=${solution.slug}`} 
                className="inline-block px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg font-kanit">
            Demander une démo de {solution.title}
          </Link>
        </div>

      </div>
    </main>
  );
}