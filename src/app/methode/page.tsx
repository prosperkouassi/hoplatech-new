// src/app/methode/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Notre Méthode - Alteractweb",
  description: "Découvrez notre approche unique de développement logiciel adaptée aux réalités du marché africain.",
};

export default function MethodePage() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-8 text-center text-brand-dark dark:text-white">
          Notre <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Méthode</span>
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 font-kanit mb-16 text-center leading-relaxed">
          Nous ne développons pas des logiciels génériques. Chaque solution est conçue en immersion avec nos clients pour répondre précisément à leurs défis opérationnels.
        </p>

        {/* Étapes de la méthode */}
        <div className="space-y-12">
          {[
            { num: '01', title: 'Immersion & Audit', desc: 'Nous passons du temps dans votre environnement pour comprendre vos processus réels, pas seulement ce qui est écrit dans les procédures.' },
            { num: '02', title: 'Co-conception', desc: 'Prototypage rapide et itératif avec vos équipes. Vous validez chaque fonctionnalité avant même qu\'une ligne de code ne soit écrite.' },
            { num: '03', title: 'Développement Agile', desc: 'Sprints courts de 2 semaines avec livraisons continues. Vous voyez l\'évolution du produit en temps réel.' },
            { num: '04', title: 'Déploiement & Formation', desc: 'Installation sur site ou cloud, formation personnalisée de vos utilisateurs et documentation complète.' },
            { num: '05', title: 'Support Continu', desc: 'Maintenance proactive, mises à jour régulières et support technique réactif sous 24h.' }
          ].map((step) => (
            <div key={step.num} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xl font-urbanist group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-urbanist mb-3 text-brand-dark dark:text-white">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 font-kanit leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-lg font-kanit">
            Démarrer un projet avec nous
          </Link>
        </div>
      </div>
    </section>
  );
}