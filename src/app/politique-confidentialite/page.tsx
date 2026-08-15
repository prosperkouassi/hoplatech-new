// src/app/politique-confidentialite/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité - AlteractWeb",
  description: "Découvrez comment nous protégeons vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-urbanist mb-8 text-center text-brand-dark dark:text-white">
          Politique de <span className="text-brand-primary">Confidentialité</span>
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none font-kanit text-gray-700 dark:text-gray-300 space-y-6">
          <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
          
          <h2 className="text-2xl font-bold font-urbanist mt-8 mb-4 text-brand-dark dark:text-white">1. Collecte des données</h2>
          <p>Nous collectons uniquement les données nécessaires au traitement de votre demande via le formulaire de contact : nom, prénom, email, téléphone, entreprise et message.</p>
          
          <h2 className="text-2xl font-bold font-urbanist mt-8 mb-4 text-brand-dark dark:text-white">2. Utilisation des données</h2>
          <p>Vos données sont utilisées exclusivement pour répondre à votre demande et ne sont jamais partagées avec des tiers sans votre consentement explicite.</p>
          
          <h2 className="text-2xl font-bold font-urbanist mt-8 mb-4 text-brand-dark dark:text-white">3. Sécurité</h2>
          <p>Nous mettons en œuvre des mesures techniques appropriées pour protéger vos données contre tout accès non autorisé.</p>
          
          <h2 className="text-2xl font-bold font-urbanist mt-8 mb-4 text-brand-dark dark:text-white">4. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous via le formulaire.</p>
          
          <div className="mt-12 p-6 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-800 text-center">
            <p className="mb-4">Une question sur cette politique ?</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}