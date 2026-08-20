// src/components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Building2,
  GraduationCap,
  Users,
  Hotel,
  Utensils,
  MapPin,
  Monitor,
  ShoppingCart,
  Smartphone,
  Palette,
} from 'lucide-react';
import { solutions } from '@/data/solutions';

const hospitalityServices = [
  {
    title: 'Sites pour hôtels',
    description: 'Valorisez vos chambres, vos services et la réservation en ligne.',
    href: '/solutions-digitales/site-web-hotel',
    icon: Hotel,
  },
  {
    title: 'Sites pour restaurants',
    description: 'Présentez votre carte et facilitez les réservations de tables.',
    href: '/solutions-digitales/site-web-restaurant',
    icon: Utensils,
  },
  {
    title: 'Auberges & City Tours',
    description: 'Mettez en avant vos séjours, circuits et expériences touristiques.',
    href: '/solutions-digitales/auberge-citytours',
    icon: MapPin,
  },
];

const customDigitalServices = [
  {
    title: 'Site vitrine corporate',
    description: 'Renforcez votre crédibilité avec une présence professionnelle.',
    href: '/solutions-digitales/site-vitrine-corporate',
    icon: Monitor,
  },
  {
    title: 'Site e-commerce',
    description: 'Présentez et vendez vos produits depuis une boutique performante.',
    href: '/solutions-digitales/site-ecommerce',
    icon: ShoppingCart,
  },
  {
    title: 'Application mobile',
    description: 'Créez une expérience mobile adaptée à vos usages et vos clients.',
    href: '/solutions-digitales/application-mobile',
    icon: Smartphone,
  },
  {
    title: 'UI / UX Design',
    description: 'Concevez des interfaces intuitives, modernes et orientées conversion.',
    href: '/solutions-digitales/ui-ux-design',
    icon: Palette,
  },
];

type DesktopMenu = 'saas' | 'digital' | null;

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<DesktopMenu>(null);
  const [isMobileSaasOpen, setIsMobileSaasOpen] = useState(false);
  const [isMobileDigitalOpen, setIsMobileDigitalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDarkTheme = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldUseDarkTheme);
    document.documentElement.classList.toggle('dark', shouldUseDarkTheme);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;

    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle('dark', nextThemeIsDark);
    localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSaasOpen(false);
    setIsMobileDigitalOpen(false);
  };

  const toggleDesktopMenu = (menu: Exclude<DesktopMenu, null>) => {
    setOpenDesktopMenu((currentMenu) => (currentMenu === menu ? null : menu));
  };

  const getIcon = (slug: string) => {
    switch (slug) {
      case 'gestion-locative':
        return <Building2 size={24} className="text-brand-primary" />;
      case 'gestion-scolaire':
        return <GraduationCap size={24} className="text-brand-primary" />;
      case 'gestion-asso':
        return <Users size={24} className="text-brand-primary" />;
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-brand-dark/90">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="z-50 flex items-center gap-3" aria-label="Retour à l'accueil">
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

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300"
          >
            Accueil
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDesktopMenu('saas')}
            onMouseLeave={() => setOpenDesktopMenu(null)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setOpenDesktopMenu(null);
              }
            }}
          >
            <button
              type="button"
              onClick={() => toggleDesktopMenu('saas')}
              onFocus={() => setOpenDesktopMenu('saas')}
              aria-haspopup="true"
              aria-expanded={openDesktopMenu === 'saas'}
              className="flex items-center gap-1 py-4 text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300"
            >
              Solutions Tech
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openDesktopMenu === 'saas' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[600px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                openDesktopMenu === 'saas'
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-2 opacity-0'
              }`}
            >
              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-[#1a1a1a]">
                {solutions.map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/solutions/${solution.slug}`}
                    onClick={() => setOpenDesktopMenu(null)}
                    className="group/item flex flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-gray-50 dark:hover:bg-[#2a2a2a]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20">
                      {getIcon(solution.slug)}
                    </div>
                    <div>
                      <h4 className="font-urbanist text-sm font-bold text-brand-dark transition-colors group-hover/item:text-brand-primary dark:text-white">
                        {solution.title}
                      </h4>
                      <p className="mt-1 line-clamp-2 font-kanit text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                        {solution.accroche}
                      </p>
                    </div>
                  </Link>
                ))}

                <Link
                  href="/solutions"
                  onClick={() => setOpenDesktopMenu(null)}
                  className="col-span-3 mt-2 flex items-center justify-center gap-2 rounded-xl bg-gray-50 p-3 font-kanit text-sm font-bold text-brand-primary transition-colors hover:bg-red-50 dark:bg-[#2a2a2a] dark:hover:bg-red-900/20"
                >
                  Voir toutes nos solutions tech →
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDesktopMenu('digital')}
            onMouseLeave={() => setOpenDesktopMenu(null)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setOpenDesktopMenu(null);
              }
            }}
          >
            <button
              type="button"
              onClick={() => toggleDesktopMenu('digital')}
              onFocus={() => setOpenDesktopMenu('digital')}
              aria-haspopup="true"
              aria-expanded={openDesktopMenu === 'digital'}
              className="flex items-center gap-1 py-4 text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300"
            >
              Solutions digitales
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openDesktopMenu === 'digital' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[820px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                openDesktopMenu === 'digital'
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-2 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-[#1a1a1a]">
                <div>
                  <p className="mb-3 px-3 font-kanit text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                    Hôtellerie & Tourisme
                  </p>
                  <div className="space-y-1">
                    {hospitalityServices.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setOpenDesktopMenu(null)}
                          className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50 dark:hover:bg-[#2a2a2a]"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-primary dark:bg-red-900/20">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-urbanist text-sm font-bold text-brand-dark transition-colors group-hover/item:text-brand-primary dark:text-white">
                              {service.title}
                            </h4>
                            <p className="mt-1 font-kanit text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="mb-3 px-3 font-kanit text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                    Création digitale sur mesure
                  </p>
                  <div className="space-y-1">
                    {customDigitalServices.map((service) => {
                      const Icon = service.icon;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setOpenDesktopMenu(null)}
                          className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50 dark:hover:bg-[#2a2a2a]"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-primary dark:bg-red-900/20">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-urbanist text-sm font-bold text-brand-dark transition-colors group-hover/item:text-brand-primary dark:text-white">
                              {service.title}
                            </h4>
                            <p className="mt-1 font-kanit text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/solutions-digitales"
                  onClick={() => setOpenDesktopMenu(null)}
                  className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-gray-50 p-3 font-kanit text-sm font-bold text-brand-primary transition-colors hover:bg-red-50 dark:bg-[#2a2a2a] dark:hover:bg-red-900/20"
                >
                  Voir toutes nos solutions digitales →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/methode"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300"
          >
            Méthode
          </Link>
          <Link
            href="/a-propos"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300"
          >
            Contact
          </Link>
        </nav>

        <div className="z-50 hidden items-center gap-3 xl:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
            className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>
          <Link
            href="/contact"
            className="rounded-lg bg-brand-primary px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-red-600"
          >
            Demander une démo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((currentState) => !currentState)}
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
          className="z-50 p-2 text-brand-dark dark:text-white xl:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-brand-dark xl:hidden">
          <nav className="container mx-auto flex flex-col gap-2" aria-label="Navigation mobile">
            <Link href="/" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-base font-medium">
              Accueil
            </Link>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800">
              <button
                type="button"
                onClick={() => setIsMobileSaasOpen((currentState) => !currentState)}
                aria-expanded={isMobileSaasOpen}
                className="flex w-full items-center justify-between px-4 py-3 text-left font-urbanist text-base font-bold"
              >
                Solutions Tech
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isMobileSaasOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileSaasOpen && (
                <div className="space-y-1 border-t border-gray-200 p-3 dark:border-gray-800">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-[#2a2a2a]"
                    >
                      {solution.title}
                    </Link>
                  ))}
                  <Link
                    href="/solutions"
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-bold text-brand-primary"
                  >
                    Voir toutes nos solutions tech →
                  </Link>
                </div>
              )}
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800">
              <button
                type="button"
                onClick={() => setIsMobileDigitalOpen((currentState) => !currentState)}
                aria-expanded={isMobileDigitalOpen}
                className="flex w-full items-center justify-between px-4 py-3 text-left font-urbanist text-base font-bold"
              >
                Solutions digitales
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isMobileDigitalOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileDigitalOpen && (
                <div className="space-y-4 border-t border-gray-200 p-3 dark:border-gray-800">
                  <div>
                    <p className="px-3 pb-2 font-kanit text-xs font-bold uppercase tracking-wider text-brand-primary">
                      Hôtellerie & Tourisme
                    </p>
                    {hospitalityServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-[#2a2a2a]"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  <div>
                    <p className="px-3 pb-2 font-kanit text-xs font-bold uppercase tracking-wider text-brand-primary">
                      Création digitale sur mesure
                    </p>
                    {customDigitalServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-primary dark:text-gray-300 dark:hover:bg-[#2a2a2a]"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/solutions-digitales"
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-bold text-brand-primary"
                  >
                    Voir toutes nos solutions digitales →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/methode" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-base font-medium">
              Méthode
            </Link>
            <Link href="/a-propos" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-base font-medium">
              À propos
            </Link>
            <Link href="/contact" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-base font-medium">
              Contact
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium"
            >
              {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
              Thème
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}