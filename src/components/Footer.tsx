'use client';

// src/components/Footer.tsx

import Link from "next/link";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

/* =========================================================
   SOLUTIONS TECH / SAAS
========================================================= */

const techLinks = [
  {
    label: "Toutes nos solutions SaaS",
    href: "/solutions",
  },
  {
    label: "Gestion locative",
    href: "/solutions/gestion-locative",
  },
  {
    label: "Gestion scolaire",
    href: "/solutions/gestion-scolaire",
  },
  {
    label: "Gestion associative",
    href: "/solutions/gestion-asso",
  },
];

/* =========================================================
   SOLUTIONS DIGITALES
========================================================= */

const digitalLinks = [
  {
    label: "Toutes nos solutions digitales",
    href: "/solutions-digitales",
  },
  {
    label: "Site vitrine corporate",
    href: "/solutions-digitales/site-vitrine-corporate",
  },
  {
    label: "Site e-commerce",
    href: "/solutions-digitales/site-ecommerce",
  },
  {
    label: "Site web hôtel",
    href: "/solutions-digitales/site-web-hotel",
  },
  {
    label: "Site web restaurant",
    href: "/solutions-digitales/site-web-restaurant",
  },
  {
    label: "Application mobile",
    href: "/solutions-digitales/application-mobile",
  },
  {
    label: "UI / UX Design",
    href: "/solutions-digitales/ui-ux-design",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navigationLinks = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Solutions Tech",
    href: "/solutions",
  },
  {
    label: "Solutions digitales",
    href: "/solutions-digitales",
  },
  {
    label: "Notre méthode",
    href: "/methode",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  /* =========================================================
     RETOUR EN HAUT
  ========================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#081426] text-white">
        {/* HALOS */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-primary/15 blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-secondary/10 blur-[140px]"
        />

        <div className="container relative mx-auto max-w-7xl px-4">
          {/* PARTIE PRINCIPALE */}

          <div className="grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.25fr_1fr_1fr_0.9fr] lg:gap-10">
            {/* MARQUE */}

            <div className="max-w-sm">
              <Link
                href="/"
                className="z-50 flex items-center gap-3"
                aria-label="Retour à l'accueil"
              >
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    src="/images/logo-hg-animated.svg"
                    alt="Logo HG"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex h-8 items-center">
                  <img
                    src="/images/hopla-groupe.png"
                    alt="Hopla Groupe"
                    className="h-full w-auto object-contain dark:brightness-90"
                  />
                </div>
              </Link>

              <p className="mt-6 font-kanit text-sm font-light leading-7 text-white/60">
                Des solutions digitales et SaaS conçues pour simplifier
                les activités, améliorer la visibilité et accompagner
                le développement des entreprises.
              </p>

              <div className="mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />

              {/* HOPLA GROUPE */}

              <div className="mt-7">
                <p className="font-kanit text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Un pôle de
                </p>

                <p className="mt-1 font-urbanist text-lg font-bold text-white">
                  Hopla Groupe
                </p>

                <p className="mt-2 font-kanit text-xs font-light leading-6 text-white/45">
                  AlteractWeb constitue le pôle digital et technologique
                  de Hopla Groupe.
                </p>

                {/* COORDONNÉES */}

                <div className="mt-5 space-y-3">
                  {/* LOCALISATION */}

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={18}
                      className="flex-shrink-0 text-brand-primary"
                      strokeWidth={2}
                    />

                    <p className="font-kanit text-sm font-medium text-white">
                      Cocody Angré 7e Tranche
                    </p>
                  </div>

                  {/* TÉLÉPHONE */}

                  <a
                    href="tel:+2250714074124"
                    className="group flex items-center gap-3"
                    aria-label="Appeler AlteractWeb"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/15 transition-colors duration-300 group-hover:bg-brand-primary">
                      <Phone
                        size={16}
                        className="text-brand-primary transition-colors duration-300 group-hover:text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-kanit text-base font-semibold text-white transition-colors duration-300 group-hover:text-brand-primary">
                      +225 07 14 07 41 24
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* SOLUTIONS TECH */}

            <div>
              <span className="font-kanit text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary">
                Solutions Tech
              </span>

              <ul className="mt-6 space-y-3">
                {techLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-start font-kanit text-sm font-light leading-6 text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={13}
                        className="ml-1 mt-1 flex-shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOLUTIONS DIGITALES */}

            <div>
              <span className="font-kanit text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary">
                Solutions digitales
              </span>

              <ul className="mt-6 space-y-3">
                {digitalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-start font-kanit text-sm font-light leading-6 text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={13}
                        className="ml-1 mt-1 flex-shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* AUTRE PÔLE */}

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-kanit text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                  L&apos;autre pôle
                </p>

                <a
                  href="https://strategaction.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center font-kanit text-sm font-semibold text-white transition-colors duration-300 hover:text-brand-primary"
                >
                  Stratege Action

                  <ArrowUpRight
                    size={14}
                    className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <p className="mt-1 font-kanit text-xs font-light leading-5 text-white/40">
                  Organisation, ressources humaines et gestion de projet.
                </p>
              </div>
            </div>

            {/* NAVIGATION */}

            <div>
              <span className="font-kanit text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary">
                Navigation
              </span>

              <ul className="mt-6 space-y-3">
                {navigationLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-kanit text-sm font-light text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CONTACT RAPIDE */}

              <div className="mt-8 flex gap-3">
                <a
                  href="https://wa.me/2250714074124"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter AlteractWeb sur WhatsApp"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    text-white/70
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-brand-primary
                    hover:bg-gradient-to-br
                    hover:from-brand-primary
                    hover:to-brand-secondary
                    hover:text-white
                  "
                >
                  <MessageCircle size={17} />
                </a>

                <Link
                  href="/contact"
                  aria-label="Contacter AlteractWeb"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    text-white/70
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-brand-primary
                    hover:bg-gradient-to-br
                    hover:from-brand-primary
                    hover:to-brand-secondary
                    hover:text-white
                  "
                >
                  <Mail size={17} />
                </Link>
              </div>
            </div>
          </div>

          {/* BANDEAU INFÉRIEUR */}

          <div className="border-t border-white/10 py-7">
            <div className="flex flex-col gap-4 font-kanit text-xs text-white/35 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                <p>
                  © {new Date().getFullYear()} AlteractWeb.
                  Tous droits réservés.
                </p>

                <Link
                  href="/politique-confidentialite"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Politique de confidentialité
                </Link>
              </div>

              <p>
                Solutions SaaS · Sites web · Applications · UI/UX
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================
          BOUTONS FLOTTANTS
      ========================================================= */}

      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">

        {/* SCROLL TOP */}

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Retour en haut de la page"
          title="Retour en haut"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-white/10
            bg-[#081426]
            text-white
            shadow-lg
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-brand-primary
            hover:shadow-xl
          "
        >
          <ArrowUp size={20} strokeWidth={2} />
        </button>

        {/* WHATSAPP ALTERACTWEB */}

        <a
          href="https://wa.me/2250714074124"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter AlteractWeb sur WhatsApp"
          title="Contacter AlteractWeb sur WhatsApp"
          className="
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-lg
            transition-all duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-xl
          "
        >
          <MessageCircle size={25} strokeWidth={2} />
        </a>

      </div>
    </>
  );
}