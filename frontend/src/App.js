import "@/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustStrip from "./components/TrustStrip";
import ServicesSection from "./components/ServicesSection";
import PositioningSection from "./components/PositioningSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import TrustSection from "./components/TrustSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { CTABand } from "./components/CTABand";

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <CTABand
          heading="Have a Project in Mind?"
          subtext="From custom sculptures to full architectural installations — share your vision and we'll make it real."
          variant="dark"
        />
        <PositioningSection />
        <PortfolioSection />
        <CTABand
          heading="Like What You See?"
          subtext="Every project shown here was designed, fabricated, and installed by our in-house team."
        />
        <ProcessSection />
        <AboutSection />
        <TrustSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
