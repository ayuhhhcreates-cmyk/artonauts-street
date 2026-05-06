import { Factory, Users, Wrench, Gem } from "lucide-react";
import { useInView } from "../hooks/useInView";

const items = [
  { icon: Factory, value: "650+ Yard", label: "Fabrication Unit" },
  { icon: Users, value: "30+", label: "Skilled Execution Team" },
  { icon: Wrench, value: "End-to-End", label: "Design to Installation" },
  { icon: Gem, value: "Premium", label: "Finishing & Materials" },
];

export default function TrustStrip() {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      data-testid="trust-strip"
      ref={ref}
      className="relative py-14 sm:py-16 px-6 sm:px-12 lg:px-24 bg-[#080808] border-y border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              data-testid={`trust-strip-item-${i}`}
              className={`flex items-center gap-4 ${
                i > 0 ? "lg:border-l lg:border-white/[0.06] lg:pl-10" : ""
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.5s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-violet-600/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-violet-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">{item.value}</p>
                <p className="text-[11px] sm:text-xs text-gray-500 tracking-wide">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
