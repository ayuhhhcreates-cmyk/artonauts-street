import { MessageSquare, Lightbulb, PenTool, Hammer, Sparkles, Truck } from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We understand your vision, space, and requirements through a detailed brief." },
  { icon: Lightbulb, title: "Concept Development", desc: "Our design team creates concepts, mood boards, and visual references." },
  { icon: PenTool, title: "Design & Engineering", desc: "Detailed 3D designs, material specifications, and engineering drawings." },
  { icon: Hammer, title: "Fabrication", desc: "In-house production at our 650-yard factory with quality checks at every stage." },
  { icon: Sparkles, title: "Finishing", desc: "Premium surface treatment, painting, polishing, and final detailing." },
  { icon: Truck, title: "Delivery & Installation", desc: "Safe transport and professional on-site installation by our team." },
];

export default function ProcessSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="process" data-testid="process-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="accent-label mb-5">How We Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Our Process
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto">
            From first conversation to final installation — a seamless execution workflow.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:grid grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              data-testid={`process-step-${i}`}
              className="relative text-center group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${0.2 + i * 0.1}s`,
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full h-[1px] bg-gradient-to-r from-violet-600/40 to-violet-600/10 z-0" />
              )}
              {/* Node */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-violet-600/40 flex items-center justify-center mx-auto mb-5 group-hover:border-violet-500 group-hover:shadow-lg group-hover:shadow-violet-900/20 transition-all duration-300">
                <step.icon className="w-5 h-5 text-violet-400" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-violet-400/50 font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold text-white mt-2 mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] process-line" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={step.title}
                data-testid={`process-step-mobile-${i}`}
                className="relative flex gap-6 items-start"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.5s ease ${0.15 + i * 0.08}s`,
                }}
              >
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#050505] border-2 border-violet-600/40 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-violet-400" strokeWidth={1.5} />
                </div>
                <div className="pb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-violet-400/50 font-semibold">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-white mt-1 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
