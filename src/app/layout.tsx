import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Mia Bella Makeup | Machiaj profesional în București",
  description:
    "Makeup artist pentru mireasă, eveniment, ședințe foto și cursuri de automachiaj. Programări rapide, portofoliu actualizat, tarife transparente.",
  keywords: [
    "makeup artist",
    "machiaj mireasă",
    "machiaj profesional",
    "București",
  ],
  authors: [{ name: "Mia Bella" }],
  openGraph: {
    title: "Mia Bella Makeup",
    description:
      "Machiaj profesional – mireasă, evenimente, ședințe foto, cursuri de automachiaj.",
    url: "https://exemplu.ro",
    siteName: "Mia Bella Makeup",
    locale: "ro_RO",
    type: "website",
  },
  alternates: { canonical: "https://exemplu.ro" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
