// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";

const siteUrl = "https://alteractweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Solutions digitales & logiciels métiers | AlteractWeb",
  description:
    "AlteractWeb conçoit des sites web, boutiques e-commerce, applications mobiles, interfaces UI/UX et logiciels métiers adaptés aux entreprises en Côte d’Ivoire.",
  applicationName: "AlteractWeb",
  authors: [{ name: "AlteractWeb", url: siteUrl }],
  creator: "AlteractWeb",
  publisher: "AlteractWeb",
  category: "Technologie",
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: siteUrl,
    siteName: "AlteractWeb",
    title: "Solutions digitales & logiciels métiers | AlteractWeb",
    description:
      "Sites web, e-commerce, applications mobiles, UI/UX et logiciels métiers conçus pour accompagner les entreprises en Côte d’Ivoire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions digitales & logiciels métiers | AlteractWeb",
    description:
      "Sites web, applications mobiles, UI/UX et logiciels métiers adaptés à votre activité.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AlteractWeb",
      url: siteUrl,
      description:
        "Agence de solutions digitales et de logiciels métiers pour les entreprises et organisations en Côte d’Ivoire.",
      areaServed: {
        "@type": "Country",
        name: "Côte d’Ivoire",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+2250714074124",
        contactType: "service commercial",
        availableLanguage: "fr",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AlteractWeb",
      inLanguage: "fr-CI",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CI" suppressHydrationWarning>
      <body className="bg-white dark:bg-brand-dark text-brand-dark dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Header />
        <div className="flex-grow">{children}</div>

        <footer className="py-16 px-4 bg-brand-dark text-white border-t border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <h2 className="text-xl font-bold font-urbanist">AlteractWeb</h2>
                <p className="text-sm text-gray-400 font-kanit">
                  Sites web, applications et logiciels métiers conçus pour
                  simplifier vos activités et soutenir votre développement.
                </p>
              </div>

              <div>
                <h2 className="font-bold font-urbanist mb-4">Solutions Tech</h2>
                <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                  <li><Link href="/solutions/gestion-asso" className="hover:text-brand-primary transition-colors">Gestion associative</Link></li>
                  <li><Link href="/solutions/gestion-scolaire" className="hover:text-brand-primary transition-colors">Gestion scolaire</Link></li>
                  <li><Link href="/solutions/gestion-locative" className="hover:text-brand-primary transition-colors">Gestion locative</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold font-urbanist mb-4">Services digitaux</h2>
                <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                  <li><Link href="/solutions-digitales" className="hover:text-brand-primary transition-colors">Toutes nos offres</Link></li>
                  <li><Link href="/solutions-digitales/site-vitrine-corporate" className="hover:text-brand-primary transition-colors">Site vitrine corporate</Link></li>
                  <li><Link href="/solutions-digitales/site-ecommerce" className="hover:text-brand-primary transition-colors">Site e-commerce</Link></li>
                  <li><Link href="/solutions-digitales/application-mobile" className="hover:text-brand-primary transition-colors">Application mobile</Link></li>
                  <li><Link href="/solutions-digitales/ui-ux-design" className="hover:text-brand-primary transition-colors">UI/UX Design</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold font-urbanist mb-4">AlteractWeb</h2>
                <ul className="space-y-2 text-sm text-gray-400 font-kanit">
                  <li><Link href="/a-propos" className="hover:text-brand-primary transition-colors">À propos</Link></li>
                  <li><Link href="/methode" className="hover:text-brand-primary transition-colors">Notre méthode</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                  <li><Link href="/politique-confidentialite" className="hover:text-brand-primary transition-colors">Politique de confidentialité</Link></li>
                </ul>

                <div className="mt-6 flex gap-4">
                  <a href="https://wa.me/2250714074124" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer" aria-label="Contacter AlteractWeb sur WhatsApp">
                    <span className="text-sm font-bold" aria-hidden="true">W</span>
                  </a>
                  <Link href="/contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer" aria-label="Contacter AlteractWeb">
                    <span className="text-sm font-bold" aria-hidden="true">✉</span>
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