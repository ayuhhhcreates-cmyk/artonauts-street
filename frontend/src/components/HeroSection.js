import { ArrowDown, MessageCircle } from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/8e3f7a386511ce5f9fb20406abb59c1f8e20a53cc044d15f384f7782420778eb.png";
const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20get%20a%20proposal%20for%20my%20project.";

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Large-scale architectural sculpture fabrication"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-28 w-full">
        <div className="max-w-3xl">
          <p
            className="accent-label mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Artonauts Street Pvt Ltd
          </p>

          <h1
            className="font-bold text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem] tracking-[-0.03em] text-white leading-[1.1] mb-7 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            We Build Large-Scale Sculptures
            <br className="hidden sm:block" />
            {" "}&amp; Architectural Art{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">That Defines Spaces</span>
          </h1>

          <p
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
          >
            From concept to fabrication — premium custom work for villas, hotels, temples &amp; commercial spaces.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-cta"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 cta-glow flex items-center justify-center gap-2.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Get Proposal on WhatsApp
            </a>
            <a
              href="#portfolio"
              data-testid="hero-portfolio-cta"
              className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 text-sm hover:bg-white/[0.04]"
            >
              View Our Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
