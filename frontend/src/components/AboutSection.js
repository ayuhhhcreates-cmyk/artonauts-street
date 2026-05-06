import { useInView } from "../hooks/useInView";

const WORKSHOP_IMG = "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/f08fadd9072749ac203e89ba146c1f898b0cf57a43628178dfb0f7a71aa75ddb.png";
const TEXTURE_IMG = "https://static.prod-images.emergentagent.com/jobs/c7e705f1-a809-43e6-8565-5401bed10635/images/2cd30da47104a38a44ee7dc65a010495133152ef1fa10377622f30bd28e01152.png";

export default function AboutSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" data-testid="about-section" className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={TEXTURE_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative rounded-2xl overflow-hidden border border-white/[0.06] order-2 lg:order-1 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={WORKSHOP_IMG}
              alt="Artonauts Street workshop"
              loading="lazy"
              className="w-full h-[400px] lg:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="accent-label mb-5">About Artonauts Street</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Built on Execution,
              <br />
              <span className="text-gray-500">Not Promises</span>
            </h2>
            <div className="space-y-5 text-[15px] text-gray-400 leading-[1.75]">
              <p>
                Artonauts Street Pvt Ltd is a premium architectural art and fabrication company based in Mathura. We operate from a 650+ yard factory with a production team of 30+ skilled artisans.
              </p>
              <p>
                We specialize in custom sculptures, murals, fountains, architectural elevations, and metal art — designed, fabricated, and installed for luxury villas, five-star hotels, temples, resorts, and commercial spaces.
              </p>
              <p>
                What sets us apart is simple: we own the entire process. From concept development and material selection to in-house fabrication and on-site installation — every step happens under our direct supervision.
              </p>
              <p className="text-white font-medium text-base border-l-2 border-violet-600 pl-5">
                When you work with Artonauts Street, you work with the people who actually build it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
