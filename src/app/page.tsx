// src/app/page.tsx
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alteractweb | Logiciels de gestion métiers en Côte d'Ivoire",
  description:
    "Alteractweb conçoit des logiciels SaaS de gestion locative, scolaire et associative adaptés aux entreprises et organisations en Côte d'Ivoire et en Afrique.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-hidden bg-white text-brand-dark">

      {/* Animations locales : aucun nouvel import nécessaire */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes alteract-float {
              0%, 100% {
                transform: translate3d(0, 0, 0);
              }

              50% {
                transform: translate3d(0, -14px, 0);
              }
            }

            @keyframes alteract-pulse {
              0%, 100% {
                opacity: .45;
                transform: scale(1);
              }

              50% {
                opacity: .75;
                transform: scale(1.08);
              }
            }

            @keyframes alteract-shimmer {
              0% {
                background-position: 200% center;
              }

              100% {
                background-position: -200% center;
              }
            }

            @keyframes alteract-fade-up {
              from {
                opacity: 0;
                transform: translate3d(0, 24px, 0);
                filter: blur(6px);
              }

              to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                filter: blur(0);
              }
            }

            .alteract-fade-up {
              animation: alteract-fade-up .8s cubic-bezier(.22, 1, .36, 1) both;
            }

            .alteract-delay-1 {
              animation-delay: .1s;
            }

            .alteract-delay-2 {
              animation-delay: .2s;
            }

            .alteract-delay-3 {
              animation-delay: .3s;
            }

            .alteract-float {
              animation: alteract-float 7s ease-in-out infinite;
            }

            .alteract-pulse {
              animation: alteract-pulse 8s ease-in-out infinite;
            }

            .alteract-shimmer {
              background-size: 200% auto;
              animation: alteract-shimmer 7s linear infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .alteract-fade-up,
              .alteract-float,
              .alteract-pulse,
              .alteract-shimmer {
                animation: none !important;
              }
            }
          `,
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* Halo principal */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(
                55% 55% at 18% 22%,
                rgba(212, 61, 73, 0.18),
                transparent 70%
              ),
              radial-gradient(
                48% 48% at 82% 24%,
                rgba(247, 64, 57, 0.16),
                transparent 72%
              ),
              radial-gradient(
                48% 50% at 50% 78%,
                rgba(212, 61, 73, 0.09),
                transparent 70%
              ),
              linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.96) 0%,
                rgba(255, 246, 246, 0.92) 52%,
                rgba(255, 255, 255, 0.98) 100%
              )
            `,
          }}
        />

        {/* Halo animé gauche */}
        <div
          aria-hidden="true"
          className="alteract-pulse pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-brand-primary/20 blur-[100px]"
        />

        {/* Halo animé droite */}
        <div
          aria-hidden="true"
          className="alteract-pulse pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-brand-secondary/20 blur-[110px]"
          style={{ animationDelay: '-3s' }}
        />

        {/* Grille subtile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#121212 1px, transparent 1px), linear-gradient(90deg, #121212 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          }}
        />

        <div className="container mx-auto px-4 pb-20 pt-24 md:pb-28 md:pt-32 lg:pb-32">
          <div className="mx-auto max-w-5xl text-center">

            <div className="alteract-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
              </span>

              <span className="font-kanit text-xs font-medium uppercase tracking-[0.18em] text-brand-primary sm:text-sm">
                Solutions SaaS pensées pour l’Afrique
              </span>
            </div>

            <h1 className="alteract-fade-up alteract-delay-1 font-urbanist text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl">
              Pilotez votre activité avec un
              <span className="alteract-shimmer mt-2 block bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
                logiciel métier vraiment adapté
              </span>
            </h1>

            <p className="alteract-fade-up alteract-delay-2 mx-auto mt-7 max-w-3xl font-kanit text-base font-light leading-7 text-gray-600 sm:text-lg md:text-xl md:leading-8">
              Alteractweb développe des logiciels de gestion simples,
              accessibles et performants pour les professionnels de
              l’immobilier, les établissements scolaires et les associations
              en Côte d’Ivoire.
            </p>

            <div className="alteract-fade-up alteract-delay-3 mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/solutions"
                className="group inline-flex w-full items-center justify-center rounded-xl bg-brand-dark px-7 py-4 font-kanit text-sm font-semibold text-white shadow-[0_14px_40px_rgba(18,18,18,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-primary hover:shadow-[0_18px_45px_rgba(212,61,73,0.28)] sm:w-auto"
              >
                Découvrir nos logiciels

                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-7 py-4 font-kanit text-sm font-semibold text-brand-dark shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg sm:w-auto"
              >
                Parler de votre projet
              </Link>
            </div>

            <div className="alteract-fade-up alteract-delay-3 mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-kanit text-sm text-gray-600">
              {[
                'Accessible en ligne',
                'Simple à prendre en main',
                'Adapté aux réalités locales',
              ].map((advantage) => (
                <span key={advantage} className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-brand-primary">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>

                  {advantage}
                </span>
              ))}
            </div>
          </div>

          {/* Aperçu visuel façon interface SaaS */}
          <div className="alteract-fade-up alteract-delay-3 relative mx-auto mt-16 max-w-5xl md:mt-20">
            <div className="absolute inset-x-20 bottom-0 -z-10 h-24 bg-brand-primary/20 blur-[70px]" />

            <div className="alteract-float overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-2 shadow-[0_30px_90px_rgba(18,18,18,0.16)] backdrop-blur-xl sm:rounded-3xl sm:p-3">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white sm:rounded-2xl">
                <div className="flex h-12 items-center justify-between border-b border-gray-100 px-4 sm:px-6">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <div className="h-2 w-24 rounded-full bg-gray-100 sm:w-40" />

                  <div className="h-7 w-7 rounded-full bg-red-50" />
                </div>

                <div className="grid min-h-[260px] grid-cols-12 sm:min-h-[340px]">
                  <aside className="col-span-3 border-r border-gray-100 bg-gray-50/60 p-3 sm:col-span-2 sm:p-5">
                    <div className="mb-6 h-7 w-7 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary sm:h-9 sm:w-9" />

                    <div className="space-y-3">
                      <div className="h-8 rounded-lg bg-red-50" />
                      <div className="h-8 rounded-lg bg-white" />
                      <div className="h-8 rounded-lg bg-white" />
                      <div className="h-8 rounded-lg bg-white" />
                    </div>
                  </aside>

                  <div className="col-span-9 p-4 sm:col-span-10 sm:p-7">
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <div className="mb-2 h-3 w-24 rounded-full bg-gray-200 sm:w-36" />
                        <div className="h-2 w-16 rounded-full bg-gray-100 sm:w-24" />
                      </div>

                      <div className="h-9 w-24 rounded-lg bg-brand-dark sm:w-32" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[70, 50, 65, 40].map((width, index) => (
                        <div
                          key={width}
                          className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4"
                        >
                          <div className="mb-4 h-2 w-12 rounded-full bg-gray-100" />
                          <div
                            className={`h-4 rounded-full ${
                              index === 0
                                ? 'bg-brand-primary/80'
                                : 'bg-gray-200'
                            }`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-5 gap-3">
                      <div className="col-span-5 h-24 rounded-xl border border-gray-100 bg-gradient-to-br from-red-50/80 to-white sm:col-span-3 sm:h-32">
                        <div className="flex h-full items-end gap-2 px-4 pb-4">
                          {[35, 60, 45, 80, 65, 90, 72].map(
                            (height, index) => (
                              <span
                                key={`${height}-${index}`}
                                className="flex-1 rounded-t bg-gradient-to-t from-brand-primary to-brand-secondary opacity-80"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                      </div>

                      <div className="col-span-5 hidden rounded-xl border border-gray-100 bg-gray-50 p-4 sm:col-span-2 sm:block">
                        <div className="mb-4 h-2 w-20 rounded-full bg-gray-200" />

                        <div className="space-y-3">
                          <div className="h-5 rounded-md bg-white" />
                          <div className="h-5 rounded-md bg-white" />
                          <div className="h-5 rounded-md bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU DE POSITIONNEMENT */}
      <section className="border-y border-gray-100 bg-white">
        <div className="container mx-auto grid grid-cols-1 divide-y divide-gray-100 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-4 py-7 text-center">
            <p className="font-urbanist text-2xl font-bold text-brand-dark">
              3 solutions
            </p>
            <p className="mt-1 font-kanit text-sm text-gray-500">
              pour vos activités essentielles
            </p>
          </div>

          <div className="px-4 py-7 text-center">
            <p className="font-urbanist text-2xl font-bold text-brand-dark">
              100 % en ligne
            </p>
            <p className="mt-1 font-kanit text-sm text-gray-500">
              accessibles où que vous soyez
            </p>
          </div>

          <div className="px-4 py-7 text-center">
            <p className="font-urbanist text-2xl font-bold text-brand-dark">
              Pensées localement
            </p>
            <p className="mt-1 font-kanit text-sm text-gray-500">
              pour les organisations africaines
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="relative bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <span className="font-kanit text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
              Nos logiciels métiers
            </span>

            <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl md:text-5xl">
              Une solution adaptée à chaque activité
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-kanit text-base font-light leading-7 text-gray-600 md:text-lg">
              Centralisez vos informations, automatisez les tâches répétitives
              et pilotez votre organisation depuis une plateforme claire,
              sécurisée et facile à utiliser.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const isAvailable =
                solution.statut?.includes('disponible') ?? false;

              return (
                <article
                  key={solution.slug}
                  className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-[0_24px_70px_rgba(18,18,18,0.10)] md:p-8"
                >
                  {/* Halo de carte au survol */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-primary/10"
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 font-urbanist text-base font-bold text-brand-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-kanit text-xs font-medium ${
                          isAvailable
                            ? 'bg-green-50 text-green-700'
                            : 'bg-orange-50 text-orange-700'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isAvailable ? 'bg-green-500' : 'bg-orange-500'
                          }`}
                        />

                        {solution.statut?.[0] || 'En développement'}
                      </span>
                    </div>

                    <h3 className="font-urbanist text-2xl font-bold tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-primary">
                      {solution.title}
                    </h3>

                    <p className="mt-4 font-kanit text-base font-light leading-7 text-gray-600">
                      {solution.accroche}
                    </p>

                    <div className="my-6 h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

                    <p className="mb-3 font-kanit text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                      Les difficultés résolues
                    </p>

                    <div
                      className="mb-8 flex-grow font-kanit text-sm font-light leading-6 text-gray-600 line-clamp-4 [&_p]:relative [&_p]:mb-2 [&_p]:pl-4 [&_p]:before:absolute [&_p]:before:left-0 [&_p]:before:top-[10px] [&_p]:before:h-1.5 [&_p]:before:w-1.5 [&_p]:before:rounded-full [&_p]:before:bg-brand-primary"
                      dangerouslySetInnerHTML={{
                        __html: solution.problemeResolu,
                      }}
                    />

                    <Link
                      href={`/solutions/${solution.slug}`}
                      aria-label={`Découvrir le logiciel ${solution.title}`}
                      className="mt-auto inline-flex items-center font-kanit text-sm font-semibold text-brand-dark transition-colors duration-300 group-hover:text-brand-primary"
                    >
                      Découvrir la solution

                      <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:translate-x-1 group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-kanit text-sm font-semibold text-brand-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg"
            >
              Voir toutes nos solutions
            </Link>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="border-y border-gray-100 bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="font-kanit text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
                Une technologie utile
              </span>

              <h2 className="mt-4 font-urbanist text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl md:text-5xl">
                Moins de tâches manuelles.
                <span className="block text-brand-primary">
                  Plus de temps pour votre activité.
                </span>
              </h2>

              <p className="mt-6 max-w-xl font-kanit text-base font-light leading-7 text-gray-600 md:text-lg">
                Nos logiciels sont conçus à partir des besoins concrets des
                professionnels. Chaque fonctionnalité répond à une difficulté
                opérationnelle : organisation, suivi, facturation,
                communication ou pilotage.
              </p>

              <Link
                href="/methode"
                className="group mt-8 inline-flex items-center font-kanit text-sm font-semibold text-brand-primary"
              >
                Découvrir notre méthode

                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'Comprendre',
                  text: 'Nous analysons votre fonctionnement et vos contraintes métier.',
                },
                {
                  number: '02',
                  title: 'Simplifier',
                  text: 'Nous transformons les tâches complexes en parcours intuitifs.',
                },
                {
                  number: '03',
                  title: 'Centraliser',
                  text: 'Toutes vos données utiles sont réunies dans un seul espace.',
                },
                {
                  number: '04',
                  title: 'Accompagner',
                  text: 'Nous restons disponibles pour faciliter la prise en main.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl"
                >
                  <span className="font-urbanist text-sm font-bold text-brand-primary">
                    {step.number}
                  </span>

                  <h3 className="mt-5 font-urbanist text-xl font-bold text-brand-dark">
                    {step.title}
                  </h3>

                  <p className="mt-2 font-kanit text-sm font-light leading-6 text-gray-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-orange-50 px-6 py-14 text-center shadow-[0_24px_80px_rgba(212,61,73,0.10)] sm:px-10 md:py-20">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-brand-primary/20 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-72 w-72 rounded-full bg-brand-secondary/20 blur-[100px]"
            />

            <span className="font-kanit text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
              Votre activité mérite un meilleur outil
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl font-urbanist text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl md:text-5xl">
              Prêt à simplifier la gestion de votre organisation ?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-kanit text-base font-light leading-7 text-gray-600 md:text-lg">
              Échangeons sur vos besoins et identifions la solution Alteractweb
              la plus adaptée à votre activité.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand-primary px-7 py-4 font-kanit text-sm font-semibold text-white shadow-[0_14px_35px_rgba(212,61,73,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-secondary hover:shadow-[0_18px_45px_rgba(212,61,73,0.32)] sm:w-auto"
              >
                Demander une démonstration
              </Link>

              <a
                href="https://wa.me/2250714074124"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 font-kanit text-sm font-semibold text-brand-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary hover:shadow-lg sm:w-auto"
              >
                Parler à un expert sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}