import Header from "@/src/components/layout/Header";
import Hero from "@/components/hero";
import ServicesSection from "@/components/services";
import AboutXntrovaSection from "@/components/about-xntrova";
import WhyChooseUsSection from "@/components/why-choose-us";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials";
import TechStackSection from "@/components/tech-stack";
import SelectedProjectsSection from "@/components/selected-projects";
import ContactForm from "@/components/contact-form";
import FooterCta from "@/components/footer-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101633]">
      <Header />
      <Hero />
      <ServicesSection />
      <AboutXntrovaSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FooterCta />
      <TechStackSection />
      <SelectedProjectsSection />
      <ContactForm />
    </div>
  );
}
