// src/app/layout.tsx

import type { Metadata } from "next";
import { Kanit, Urbanist } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://alteractweb.com";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist-loaded",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-kanit-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Solutions digitales & logiciels métiers | AlteractWeb",

  description:
    "AlteractWeb conçoit des sites web, boutiques e-commerce, applications mobiles, interfaces UI/UX et logiciels métiers adaptés aux entreprises en Côte d’Ivoire.",

  applicationName: "AlteractWeb",

  authors: [
    {
      name: "AlteractWeb",
      url: siteUrl,
    },
  ],

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
    <html
      lang="fr-CI"
      suppressHydrationWarning
    >
      <body
        className={`
          ${urbanist.variable}
          ${kanit.variable}
          min-h-screen
          flex flex-col
          bg-white
          text-brand-dark
          transition-colors
          duration-300
          dark:bg-brand-dark
          dark:text-white
        `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Header />

        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}