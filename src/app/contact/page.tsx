'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultSolution = searchParams.get('solution') || '';

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    solution: defaultSolution,
    message: '',
    consent: false,

    // Champ honeypot anti-spam.
    // Il doit toujours rester vide pour un utilisateur humain.
    website: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        setTimeout(() => {
          router.push('/merci');
        }, 2000);
      } else {
        setError(
          data.error || 'Une erreur est survenue lors de l\'envoi.'
        );
      }
    } catch {
      setError(
        'Impossible de se connecter au serveur. Vérifiez votre connexion.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-900/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-4 border border-red-100 dark:border-red-800">
            PARLONS DE VOTRE PROJET
          </span>

          <h1 className="text-3xl md:text-5xl font-bold font-urbanist mb-4 text-brand-dark dark:text-white">
            Contactez{' '}
            <span className="text-brand-primary">
              Alteractweb
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-kanit">
            Une question sur nos solutions SaaS ? Remplissez le
            formulaire ci-dessous et notre équipe vous répondra sous
            24h ouvrées.
          </p>
        </div>

        {success && (
          <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center animate-fade-in">
            <p className="text-green-700 dark:text-green-400 font-bold font-kanit text-lg">
              ✅ Message envoyé avec succès ! Nous vous recontacterons
              très bientôt.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center animate-fade-in">
            <p className="text-red-700 dark:text-red-400 font-bold font-kanit">
              {error}
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-[#1a1a1a] p-6 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 space-y-6"
        >
          {/* Honeypot anti-spam */}
          <div
            aria-hidden="true"
            className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
          >
            <label htmlFor="website">
              Site internet
            </label>

            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
                Prénom *
              </label>

              <input
                type="text"
                name="prenom"
                required
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Jean"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit text-brand-dark dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
                Nom *
              </label>

              <input
                type="text"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                placeholder="Dupont"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit text-brand-dark dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
                Email professionnel *
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jean@entreprise.ci"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit text-brand-dark dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
                Téléphone
              </label>

              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+225 07 XX XX XX XX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit text-brand-dark dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
                Entreprise / Établissement
              </label>

              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                placeholder="Nom de votre structure"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit text-brand-dark dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
                Secteur d'activité
              </label>

              <select
                name="secteur"
                value={formData.secteur}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit appearance-none cursor-pointer text-brand-dark dark:text-white"
              >
                <option value="">
                  Sélectionnez...
                </option>
                <option value="Immobilier / Gestion locative">
                  Immobilier / Gestion locative
                </option>
                <option value="Éducation / Formation">
                  Éducation / Formation
                </option>
                <option value="Association / ONG">
                  Association / ONG
                </option>
                <option value="Autre">
                  Autre
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
              Solution qui vous intéresse
            </label>

            <select
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit appearance-none cursor-pointer text-brand-dark dark:text-white"
            >
              <option value="">
                Sélectionnez une option...
              </option>
              <option value="gestion-locative">
                Logiciel Gestion Locative
              </option>
              <option value="gestion-scolaire">
                Logiciel Gestion Scolaire
              </option>
              <option value="gestion-asso">
                Logiciel Gestion Association
              </option>
              <option value="sur-mesure">
                Développement Sur-mesure
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">
              Votre message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez brièvement votre besoin..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit resize-none text-brand-dark dark:text-white"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer accent-brand-primary"
            />

            <label
              htmlFor="consent"
              className="text-sm text-gray-600 dark:text-gray-400 font-kanit leading-relaxed cursor-pointer"
            >
              J'accepte la{' '}
              <Link
                href="/politique-confidentialite"
                className="text-brand-primary hover:underline"
              >
                politique de confidentialité
              </Link>{' '}
              et j'autorise Alteractweb à me recontacter concernant ma
              demande. *
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg font-kanit ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-brand-primary hover:bg-red-600'
            }`}
          >
            {loading
              ? 'Envoi en cours...'
              : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <section className="py-16 md:py-24 px-4 text-center">
          Chargement...
        </section>
      }
    >
      <ContactForm />
    </Suspense>
  );
}