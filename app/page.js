import Image from "next/image";
import SpecializedSection from "./SpecializedSection";
import AboutSection from "./AboutSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import OurServicesSection from "./OurServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ConnectUsSection from "./ConnectUsSection";
import TypingTitle from "./TypingTitle";

export default function Home() {
  return (
    <div className="bg-hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <TypingTitle />
      </div>
      <div className="section-separator" />
      <SpecializedSection />
      <div className="section-separator" />
      <AboutSection />
      <div className="section-separator" />
      <WhyChooseUsSection />
      <div className="section-separator" />
      <OurServicesSection />
      <div className="section-separator" />
      <TestimonialsSection />
      <div className="section-separator" />
      <ConnectUsSection />
    </div>
  );
}
