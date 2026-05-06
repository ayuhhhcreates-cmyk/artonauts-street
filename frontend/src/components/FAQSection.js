import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useInView } from "../hooks/useInView";

const faqs = [
  {
    q: "How long does a custom project take?",
    a: "Timelines depend on project complexity, scale, and materials. Small sculptures may take 2-4 weeks, while large installations can take 6-12 weeks. We share detailed timelines during the consultation phase.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing depends on design complexity, materials used, dimensions, finishing requirements, and installation logistics. We provide detailed quotes after understanding your specific requirements.",
  },
  {
    q: "What materials do you work with?",
    a: "We work with FRP (Fiberglass Reinforced Plastic), GRC (Glass Reinforced Concrete), metals (MS, SS, brass, copper), stone, wood, and composite materials. Material selection depends on project location and requirements.",
  },
  {
    q: "Can you customize designs to our specifications?",
    a: "Absolutely. Every project we undertake is custom. We work from your concept, references, or architectural drawings to create exactly what you envision. Our design team also provides concept development from scratch.",
  },
  {
    q: "Do you handle installation?",
    a: "Yes. We provide end-to-end service — design, fabrication, transport, and on-site installation. Our team travels pan-India for installation work.",
  },
  {
    q: "How do I start an inquiry?",
    a: "The easiest way is through WhatsApp or a direct call. Share your project type, location, and any reference images. We'll set up a consultation and provide a detailed proposal.",
  },
  {
    q: "Where are you located? Do you work across India?",
    a: "Our factory is based in Mathura, Uttar Pradesh. We execute projects across India — from Rajasthan to Tamil Nadu, Mumbai to Kolkata. Location is not a barrier for us.",
  },
];

export default function FAQSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="faq" data-testid="faq-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="accent-label mb-5">Common Questions</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Frequently Asked
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="border border-white/[0.06] rounded-xl px-6 bg-white/[0.015] data-[state=open]:border-violet-500/20 data-[state=open]:bg-violet-500/[0.03] transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.4s ease ${0.1 + i * 0.05}s`,
              }}
            >
              <AccordionTrigger
                data-testid={`faq-trigger-${i}`}
                className="text-left text-sm sm:text-[15px] font-medium text-gray-300 hover:text-white hover:no-underline py-5 [&>svg]:text-violet-400"
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
