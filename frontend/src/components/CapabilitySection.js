import { Factory, Hammer, Palette, Ruler, ShieldCheck, Truck } from "lucide-react";
import { useInView } from "../hooks/useInView";

const WORKSHOP_IMG = "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/f08fadd9072749ac203e89ba146c1f898b0cf57a43628178dfb0f7a71aa75ddb.png";

const capabilities = [
  { icon: Factory, title: "Factory-Backed Execution", desc: "650-yard production facility with full fabrication infrastructure." },
  { icon: Palette, title: "Custom Design to Build", desc: "End-to-end from concept visualization to physical creation." },
  { icon: Hammer, title: "Material Expertise", desc: "FRP, GRC, metal, stone, composite — all under one roof." },
  { icon: Ruler, title: "Large-Scale Projects", desc: "Equipped for monumental installations and complex builds." },
  { icon: ShieldCheck, title: "Premium Finishing", desc: "High-end surface treatment and finishing standards." },
  { icon: Truck, title: "Delivery & Installation", desc: "Pan-India logistics with on-site installation teams." },
];

export default function CapabilitySection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="capability" data-testid="capability-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="accent-label mb-5">Why Artonauts</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Built to Execute
              <br />
              <span className="text-gray-400">at Scale</span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-lg">
              We don't just design — we fabricate, finish, and install. With an in-house factory, skilled artisans, and years of execution experience, we deliver what others outsource.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  data-testid={`capability-${cap.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/[0.03] transition-all duration-300"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(12px)",
                    transition: `all 0.5s ease ${0.2 + i * 0.06}s`,
                  }}
                >
                  <cap.icon className="w-5 h-5 text-violet-400 mb-3" strokeWidth={1.5} />
                  <h4 className="text-sm font-semibold text-white mb-1.5">{cap.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={WORKSHOP_IMG}
              alt="Artonauts Street factory and workshop"
              loading="lazy"
              className="w-full h-[460px] lg:h-[580px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex gap-10">
                <div>
                  <p className="text-3xl font-bold text-white">650+</p>
                  <p className="text-xs text-gray-400 mt-1 tracking-wide">Yard Factory</p>
                </div>
                <div className="border-l border-white/10 pl-10">
                  <p className="text-3xl font-bold text-white">30+</p>
                  <p className="text-xs text-gray-400 mt-1 tracking-wide">Production Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
