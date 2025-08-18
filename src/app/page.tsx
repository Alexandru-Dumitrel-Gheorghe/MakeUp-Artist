// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import Gallery from "@/components/Gallery/Gallery";
import ContactForm from "@/components/ContactForm/ContactForm";
import About from "@/components/About/About";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";

export const metadata: Metadata = {
  title: "Makeup Artist Niculițel & Tulcea | Andreea G.",
  description:
    "Machiaj profesional în Niculițel și Tulcea – mireasă, evenimente, ședințe foto și cursuri de automachiaj cu Andreea G.",
  alternates: { canonical: "https://domeniul-tau.ro" }, // TODO
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <Gallery limit={8} />
      <TestimonialSlider />
      <ContactForm />
    </>
  );
}
