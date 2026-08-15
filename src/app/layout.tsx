// src/app/layout.tsx
import type { Metadata } from "next";
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
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 font-kanit">
          &copy; {new Date().getFullYear()} AlteractWeb. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}