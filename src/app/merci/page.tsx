// src/app/merci/page.tsx
import Link from 'next/link';

export default function MerciPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 bg-white dark:bg-brand-dark">
      <div className="text-center max-w-2xl">
        
        {/* Icône de succès animée */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-6 text-brand-dark dark:text-white">
          Message <span className="text-brand-primary">envoyé</span> !
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit mb-10 leading-relaxed">
          Merci de nous avoir contactés. Notre équipe examinera votre demande et vous répondra dans les plus brefs délais, généralement sous 24h ouvrées.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg font-kanit"
          >
            Retour à l'accueil
          </Link>
          <Link 
            href="/solutions" 
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors font-kanit"
          >
            Découvrir nos solutions
          </Link>
        </div>

      </div>
    </main>
  );
}