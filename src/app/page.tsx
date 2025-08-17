import Hero from "@/components/Hero/Hero";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import Gallery from "@/components/Gallery/Gallery";
import testimonials from "@/data/testimonials";
import ContactForm from "@/components/ContactForm/ContactForm";
import About from "@/components/About/About";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";

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
