import { Factory, Users, Wrench, Star, Shield, Headphones, MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const trustPoints = [
  { icon: Factory, title: "Factory Strength", desc: "Own 650+ yard production facility — not outsourced, not rented." },
  { icon: Users, title: "Skilled Execution Team", desc: "30+ trained artisans and fabrication specialists on payroll." },
  { icon: Wrench, title: "Custom-Built Solutions", desc: "Every project is designed and fabricated from scratch to spec." },
  { icon: Star, title: "Premium Finishing", desc: "Industry-grade surface treatments and high-end finishing standards." },
  { icon: Headphones, title: "Professional Communication", desc: "Structured project updates, transparent timelines, clear documentation." },
  { icon: Shield, title: "Tailored for Luxury", desc: "Purpose-built for villas, hotels, temples, resorts and premium spaces." },
];

export default function TrustSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section data-testid="trust-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="accent-label mb-5">Trust & Credibility</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Why Clients Trust Us
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto">
            Real infrastructure. Real team. Real execution. No middlemen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              data-testid={`trust-${point.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/20 hover:bg-violet-500/[0.02] transition-all duration-300 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease ${0.15 + i * 0.06}s`,
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center mb-4 group-hover:bg-violet-600/15 transition-colors">
                <point.icon className="w-5 h-5 text-violet-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div
          className={`mt-20 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-600/10 via-transparent to-transparent p-10 sm:p-14 text-center transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">Ready to Start Your Project?</h3>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            Share your vision with us. We'll craft a detailed proposal tailored to your space and requirements.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="trust-whatsapp-cta"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 cta-glow flex items-center justify-center gap-2.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Start Your Project
            </a>
            <a
              href="tel:+919027424215"
              data-testid="trust-call-cta"
              className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:bg-white/[0.04]"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
