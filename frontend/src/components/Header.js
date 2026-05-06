import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_fabrication-luxury/artifacts/diel9pl4_Artonauts%20Street%20logo%20design%20%281%29.png";
const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/80 border-b border-white/[0.06] shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#hero" data-testid="header-logo" className="flex items-center gap-3 shrink-0">
          <img 
  src="/logo.png" 
  alt="Artonauts Street" 
  className="h-12 sm:h-14 w-auto" 
/>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919027424215"
            data-testid="header-call-btn"
            className="flex items-center gap-2 text-[13px] text-gray-400 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">+91 90274 24215</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-cta-btn"
            className="bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 cta-glow tracking-wide"
          >
            Discuss Your Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden backdrop-blur-2xl bg-black/95 border-t border-white/[0.06] animate-fade-in"
        >
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.06]">
              <a
                href="tel:+919027424215"
                className="flex items-center gap-2 text-gray-400 text-sm"
              >
                <Phone className="w-4 h-4" /> +91 90274 24215
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-600 text-white text-sm font-semibold px-6 py-3.5 rounded-full text-center cta-glow"
              >
                Discuss Your Project
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
