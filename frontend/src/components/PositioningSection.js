import { MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";
const WORKSHOP_IMG = "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/f08fadd9072749ac203e89ba146c1f898b0cf57a43628178dfb0f7a71aa75ddb.png";

const points = [
  "Own 650+ yard fabrication unit — nothing outsourced",
  "30+ skilled artisans and production staff on payroll",
  "Full material capabilities: FRP, GRC, metal, stone, composite",
  "Equipped for monumental and large-scale installations",
  "On-ground execution team for pan-India delivery",
  "Complete workflow: concept to fabrication to installation",
];

export default function PositioningSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section data-testid="positioning-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-[#080808]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className={`relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={WORKSHOP_IMG}
              alt="Artonauts Street factory floor"
              loading="lazy"
              className="w-full h-[420px] lg:h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl px-5 py-4 inline-flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-300 font-medium tracking-wide">Factory Active — Currently Executing Projects</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="accent-label mb-5">Execution Strength</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 leading-[1.1]">
              We Don't Just Design.
              <br />
              <span className="text-violet-400">We Execute.</span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-lg">
              Most companies design and outsource. We own the entire chain — from concept sketches to factory fabrication to on-site installation. That's what separates us.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-12px)",
                    transition: `all 0.4s ease ${0.3 + i * 0.06}s`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                  <span className="text-sm text-gray-400 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="positioning-cta"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 cta-glow inline-flex items-center gap-2.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
