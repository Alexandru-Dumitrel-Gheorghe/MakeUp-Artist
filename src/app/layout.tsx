import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StickyBooker from "@/components/StickyBooker/StickyBooker";
import Script from "next/script";

// ✅ MUTAT aici, nu în metadata
export const viewport: Viewport = {
  themeColor: "#fc6b28",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Andreea G. Makeup Artist | Machiaj profesional Niculițel & Tulcea",
  description:
    "Makeup artist în Niculițel, județul Tulcea – Andreea G. oferă machiaj profesional pentru mireasă, evenimente, ședințe foto și cursuri de automachiaj. Rezervă acum!",
  keywords: [
    "makeup artist Tulcea",
    "makeup artist Niculițel",
    "machiaj mireasă Tulcea",
    "machiaj profesional Tulcea",
    "machiaj de ocazie Tulcea",
    "makeup artist Andreea G.",
    "cursuri automachiaj Tulcea",
    "machiaj Niculițel",
  ],
  authors: [{ name: "Andreea G." }],
  openGraph: {
    title: "Makeup Artist Andreea G. | Machiaj Profesional Niculițel & Tulcea",
    description:
      "Machiaj profesional realizat de Andreea G. – pentru mireasă, ocazii speciale și ședințe foto în Niculițel și Tulcea.",
    url: "https://domeniul-tau.ro", // TODO: actualizează
    siteName: "Andreea G. Makeup Artist",
    locale: "ro_RO",
    type: "website",
  },
  alternates: { canonical: "https://domeniul-tau.ro" }, // TODO
  manifest: "/site.webmanifest", // ✅ leagă manifestul tău existent
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/maskable-192.png" },
      { rel: "mask-icon", url: "/icons/maskable-512.png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Andreea G. Makeup",
  },
  // ❌ NU pune themeColor aici
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://domeniul-tau.ro/#business", // TODO
    name: "Andreea G. Makeup Artist",
    url: "https://domeniul-tau.ro", // TODO
    description:
      "Makeup artist în Niculițel, județul Tulcea. Machiaj profesional pentru mireasă, evenimente, ședințe foto și cursuri de automachiaj.",
    image: [
      "https://domeniul-tau.ro/images/hero.jpg", // TODO
      "https://domeniul-tau.ro/images/portofoliu-1.jpg",
      "https://domeniul-tau.ro/images/portofoliu-2.jpg",
    ],
    email: "contact@domeniul-tau.ro", // TODO
    telephone: "+40 7xx xxx xxx", // TODO
    priceRange: "€€",
    areaServed: [
      { "@type": "Place", name: "Niculițel" },
      { "@type": "Place", name: "Tulcea" },
      { "@type": "Place", name: "Delta Dunării" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Exemplu nr. 10", // TODO
      addressLocality: "Niculițel",
      addressRegion: "Tulcea",
      postalCode: "827165", // TODO
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.187, // TODO
      longitude: 28.482, // TODO
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/andreeag.makeup", // TODO
      "https://www.facebook.com/andreeag.makeup", // TODO
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii machiaj",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Machiaj mireasă",
          description: "Pachet complet pentru ziua nunții (trial opțional).",
          priceCurrency: "RON",
          price: "—",
        },
        {
          "@type": "Offer",
          name: "Machiaj de seară / ocazie",
          description: "Machiaj rezistent pentru evenimente.",
          priceCurrency: "RON",
          price: "—",
        },
        {
          "@type": "Offer",
          name: "Machiaj ședință foto",
          description: "Machiaj adaptat conceptului foto/video.",
          priceCurrency: "RON",
          price: "—",
        },
        {
          "@type": "Offer",
          name: "Curs de automachiaj",
          description: "One-to-one, tehnici personalizate pentru tenul tău.",
          priceCurrency: "RON",
          price: "—",
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Andreea G.",
      jobTitle: "Makeup Artist",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://domeniul-tau.ro", // TODO
    name: "Andreea G. Makeup Artist",
    inLanguage: "ro-RO",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://domeniul-tau.ro/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: "https://domeniul-tau.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicii",
        item: "https://domeniul-tau.ro/servicii",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://domeniul-tau.ro/contact",
      },
    ],
  };

  return (
    <html lang="ro">
      <body>
        <Header />
        {children}
        <Footer />
        <StickyBooker />

        {/* JSON-LD: Local Business */}
        <Script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {/* JSON-LD: Website */}
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* JSON-LD: Breadcrumbs */}
        <Script
          id="ld-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsJsonLd),
          }}
        />
      </body>
    </html>
  );
}
