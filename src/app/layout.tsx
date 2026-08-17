// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AlteractWeb - Solutions Web & Digital",
  description: "Agence web spécialisée dans le développement de solutions digitales sur mesure, sites vitrines et applications métiers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>

        <footer className="py-16 px-4 bg-brand-dark text-white border-t border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-urbanist">AlteractWeb</h3>
                <p className="text-sm text-gray-400 font-kanit">
                  Solutions logicielles métiers pour les organisations, associations et entreprises qui veulent gagner du temps.
                </p>
              </div>

              <div>
                <h4 className="font-bold font-urbanist mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                  <li><Link href="/solutions/gestion-asso" className="hover:text-brand-primary transition-colors">Gestion associative</Link></li>
                  <li><Link href="/solutions/gestion-scolaire" className="hover:text-brand-primary transition-colors">Gestion scolaire</Link></li>
                  <li><Link href="/solutions/gestion-locative" className="hover:text-brand-primary transition-colors">Gestion locative</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold font-urbanist mb-4">Ressources</h4>
                <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                  <li><Link href="/a-propos" className="hover:text-brand-primary transition-colors">À propos</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                  <li><Link href="/politique-confidentialite" className="hover:text-brand-primary transition-colors">Politique de confidentialité</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold font-urbanist mb-4">Suivez-nous</h4>
                <div className="flex gap-4">
                  <a href="https://wa.me/2250714074124" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer" aria-label="WhatsApp">
                    <span className="text-sm font-bold">W</span>
                  </a>
                  <Link href="/contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer" aria-label="Contact">
                    <span className="text-sm font-bold">✉</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 font-kanit">
              &copy; {new Date().getFullYear()} AlteractWeb. Tous droits réservés.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}