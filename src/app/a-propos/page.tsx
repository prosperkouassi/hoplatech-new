// src/app/a-propos/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À Propos de HoplaTech",
  description: "HoplaTech est une entreprise technologique ivoirienne spécialisée dans les solutions logicielles métiers pour l'Afrique.",
};

export default function AproposPage() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-8 text-center text-brand-dark dark:text-white">
          À Propos de <span className="text-brand-primary">HoplaTech</span>
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none font-kanit text-gray-700 dark:text-gray-300 space-y-6">
          <p className="text-lg leading-relaxed">
            Fondée en Côte d'Ivoire, HoplaTech est née d'une conviction simple : les entreprises africaines méritent des outils numériques conçus pour leur réalité, et non des adaptations de solutions occidentales inadaptées.
          </p>
          
          <p className="leading-relaxed">
            Notre mission est de démocratiser l'accès aux logiciels métiers de qualité pour les PME, les associations et les établissements éducatifs. Nous croyons que la digitalisation ne doit pas être un luxe, mais un levier de croissance accessible à tous.
          </p>

          <h2 className="text-2xl font-bold font-urbanist mt-12 mb-6 text-brand-dark dark:text-white">Nos Valeurs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <li className="p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-brand-primary mb-2">Proximité</h3>
              <p className="text-sm">Nous travaillons main dans la main avec nos clients, pas derrière un écran.</p>
            </li>
            <li className="p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-brand-primary mb-2">Pragmatisme</h3>
              <p className="text-sm">Des solutions simples, robustes et adaptées aux infrastructures locales.</p>
            </li>
            <li className="p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-brand-primary mb-2">Excellence</h3>
              <p className="text-sm">Un code propre, une sécurité maximale et une performance optimale.</p>
            </li>
            <li className="p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-brand-primary mb-2">Impact</h3>
              <p className="text-sm">Chaque ligne de code doit servir la croissance de nos partenaires.</p>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-brand-primary/5 dark:bg-brand-primary/10 rounded-2xl border border-brand-primary/20 text-center">
            <h2 className="text-2xl font-bold font-urbanist mb-4 text-brand-dark dark:text-white">Rejoignez l'aventure</h2>
            <p className="mb-6">Vous avez un projet ? Une idée ? Parlons-en autour d'un café (virtuel ou réel).</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}