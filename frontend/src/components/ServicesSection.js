import { ArrowUpRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const WHATSAPP_BASE = "https://wa.me/919027424215?text=";

const services = [
  {
    title: "Luxury Villas",
    desc: "Custom sculptures, garden installations, elevation art, and bespoke interior pieces — designed to elevate private residences into architectural landmarks.",
    image: "/project1.png",
    span: "md:col-span-8 md:row-span-2",
    tall: true,
  },
  {
    title: "Hotels & Resorts",
    desc: "Lobby sculptures, poolside installations, spa art, and signature wall features for five-star properties.",
    image: "project2.png",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Temples & Religious Spaces",
    desc: "Deity sculptures, mandap carvings, entrance installations, and sacred art — fabricated with reverence and precision.",
    image: "project3.png",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Resorts & Spas",
    desc: "Water features, garden sculptures, ambient installations, and nature-inspired art for wellness and leisure properties.",
    image: "project4.png",
    span: "md:col-span-6",
  },
  {
    title: "Commercial Spaces",
    desc: "Corporate art, retail installations, brand sculptures, and architectural facades for offices, malls, and public venues.",
    image: "project10.png", 
    span: "md:col-span-6",
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="services" data-testid="services-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="accent-label mb-5">Spaces We Transform</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Built for Premium Spaces
          </h2>
          <p className="text-base text-gray-400 max-w-xl mb-16 leading-relaxed">
            Every space demands a different approach. We design and fabricate custom art tailored to the scale, context, and vision of each project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={`${WHATSAPP_BASE}Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className={`group relative bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer card-hover ${service.span} ${
                service.tall ? "min-h-[400px] sm:min-h-[500px]" : "min-h-[240px] sm:min-h-[280px]"
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${0.1 + i * 0.08}s`,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                      {service.desc}
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-300 mb-1">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
