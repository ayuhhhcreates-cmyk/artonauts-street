import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export function CTABand({ heading, subtext, variant = "default" }) {
  return (
    <section
      data-testid="cta-band"
      className={`py-16 sm:py-20 px-6 sm:px-12 lg:px-24 ${
        variant === "dark" ? "bg-[#080808]" : "bg-[#050505]"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">
          {heading || "Have a Project in Mind?"}
        </h3>
        <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
          {subtext || "Share your vision — we'll craft a proposal tailored to your space and requirements."}
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-band-whatsapp"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 cta-glow flex items-center justify-center gap-2.5 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Get Proposal on WhatsApp
          </a>
          <a
            href="tel:+919027424215"
            data-testid="cta-band-call"
            className="border border-white/15 hover:border-white/30 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:bg-white/[0.03]"
          >
            Call +91 90274 24215
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
