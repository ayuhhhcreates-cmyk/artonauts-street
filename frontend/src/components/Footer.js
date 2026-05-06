import { Instagram } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_fabrication-luxury/artifacts/diel9pl4_Artonauts%20Street%20logo%20design%20%281%29.png";
const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Luxury Villas",
  "Hotels & Resorts",
  "Temples & Religious Spaces",
  "Resorts & Spas",
  "Commercial Spaces",
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-black pt-20 sm:pt-28 pb-8 border-t border-white/[0.06] px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="Artonauts Street" className="h-14 mb-6"  />
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] mb-6">
              Premium architectural art & fabrication company. Factory-backed execution for sculptures, murals, fountains, and installations.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/artonauts.street"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/30 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#25D366]/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.79 23.481l4.587-1.472A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.17 0-4.18-.588-5.918-1.607l-.425-.248-2.72.873.893-2.636-.276-.44A9.79 9.79 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-[0.15em]">Quick Links</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-[0.15em]">Services</h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-[0.15em]">Contact</h4>
            <ul className="space-y-3.5 text-sm text-gray-500">
              <li>
                <a href="tel:+919027424215" className="hover:text-white transition-colors">
                  +91 90274 24215
                </a>
              </li>
              <li>
                <a href="mailto:artonautsstreet@gmail.com" className="hover:text-white transition-colors">
                  artonautsstreet@gmail.com
                </a>
              </li>
              <li>Mathura, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Artonauts Street Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 italic">
            Built for clients who value premium execution and serious project quality.
          </p>
        </div>
      </div>
    </footer>
  );
}
