import { ArrowUpRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

const portfolioItems = [
  {
    image: "/project6.png",
    title: "Large-Scale Custom Sculpture",
    category: "Sculpture",
    size: "large",
  },
  {
    image: "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/529bdca94ab1e66c83dee8081c465d9eb965b93fe2fcfed5f711242cbd288d3b.png",
    title: "Heritage Mural Installation",
    category: "Mural",
    size: "medium",
  },
  {
    image: "project7.png",
    title: "Premium Planters & Fountain Feature",
    category: "Premium Planters & Fountain",
    size: "medium",
  },
  {
    image: "project8.png",
    title: "Architectural Elevation Work",
    category: "Elevation",
    size: "large",
  },
  {
    image: "project9.png",
    title: "Industrial Metal Art",
    category: "Metal Art",
    size: "medium",
  },
  {
    image: "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/f08fadd9072749ac203e89ba146c1f898b0cf57a43628178dfb0f7a71aa75ddb.png",
    title: "Factory Fabrication Process",
    category: "Fabrication",
    size: "medium",
  },
];

export default function PortfolioSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="accent-label mb-5">Selected Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Project Showcase
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="portfolio-cta"
            className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-2 transition-colors shrink-0"
          >
            Discuss a similar project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cinematic grid: alternating large and medium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              data-testid={`portfolio-item-${i}`}
              className={`group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0A0A0A] ${
                item.size === "large" ? "md:col-span-2 h-[340px] sm:h-[440px] lg:h-[520px]" : "h-[280px] sm:h-[340px]"
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${0.1 + i * 0.08}s`,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] text-violet-400 uppercase tracking-[0.15em] font-semibold">{item.category}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-1.5 tracking-tight">{item.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-10 italic">
          Designed, fabricated, and executed by our in-house team with precision and scale.
        </p>
      </div>
    </section>
  );
}
