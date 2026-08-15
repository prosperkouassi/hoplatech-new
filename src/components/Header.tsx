// src/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X, ChevronDown, Building2, GraduationCap, Users } from 'lucide-react';
import { solutions } from '@/data/solutions';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Initialiser le thème au chargement
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Basculer le thème
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Icônes associées aux slugs des solutions
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'gestion-locative': return <Building2 size={24} className="text-brand-primary" />;
      case 'gestion-scolaire': return <GraduationCap size={24} className="text-brand-primary" />;
      case 'gestion-asso': return <Users size={24} className="text-brand-primary" />;
      default: return null;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* Logo Animé + Image Hopla Groupe */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 flex-shrink-0">
            <img src="/images/logo-hg-animated.svg" alt="Logo HG" className="w-full h-full object-contain" />
          </div>
          <div className="h-8 flex items-center">
            <img 
              src="/images/hopla-groupe.png" 
              alt="Hopla Groupe" 
              className="h-full w-auto object-contain dark:brightness-90" 
            />
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors">Accueil</Link>
          
          {/* MEGA MENU SOLUTIONS */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors py-4">
              Solutions
              <ChevronDown size={16} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Contenu du Méga-Menu */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px] transition-all duration-200 ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 grid grid-cols-3 gap-4">
                {solutions.map((sol) => (
                  <Link 
                    key={sol.slug} 
                    href={`/solutions/${sol.slug}`}
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="flex flex-col gap-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors group/item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                      {getIcon(sol.slug)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-dark dark:text-white font-urbanist group-hover/item:text-brand-primary transition-colors">
                        {sol.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-kanit mt-1 line-clamp-2 leading-relaxed">
                        {sol.accroche}
                      </p>
                    </div>
                  </Link>
                ))}
                
                {/* Lien vers la page catalogue complète */}
                <Link 
                  href="/solutions" 
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="col-span-3 flex items-center justify-center gap-2 p-3 mt-2 rounded-xl bg-gray-50 dark:bg-[#2a2a2a] text-sm font-bold text-brand-primary hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-kanit"
                >
                  Voir toutes nos solutions →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/methode" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors">Méthode</Link>
          <Link href="/a-propos" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors">À propos</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors">Contact</Link>
        </nav>

        {/* Actions Droite */}
        <div className="hidden md:flex items-center gap-4 z-50">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>
          <Link href="/contact" className="px-5 py-2 bg-brand-primary text-white text-sm font-bold rounded-lg hover:bg-red-600 transition-colors">
            Demander une démo
          </Link>
        </div>

        {/* Bouton Mobile */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 z-50">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile (Avec sous-menu Solutions simplifié) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Accueil</Link>
          
          <div className="border-l-2 border-brand-primary pl-4 space-y-3">
            <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">Nos Solutions</span>
            {solutions.map((sol) => (
              <Link 
                key={sol.slug} 
                href={`/solutions/${sol.slug}`} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {sol.title}
              </Link>
            ))}
            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-brand-primary">
              Voir tout →
            </Link>
          </div>

          <Link href="/methode" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Méthode</Link>
          <Link href="/a-propos" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">À propos</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Contact</Link>
          <button onClick={toggleTheme} className="flex items-center gap-2 text-base font-medium mt-2">
            {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />} Thème
          </button>
        </div>
      )}
    </header>
  );
}