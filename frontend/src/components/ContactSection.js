import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle, Instagram } from "lucide-react";
import { useInView } from "../hooks/useInView";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const projectTypes = [
  "Custom Sculpture",
  "Mural / Wall Art",
  "Fountain / Water Feature",
  "Architectural Elevation",
  "Metal / Scrap Art",
  "FRP / GRC Fabrication",
  "Other",
];

const budgetRanges = [
  "Under 1 Lakh",
  "1 - 5 Lakhs",
  "5 - 15 Lakhs",
  "15 - 50 Lakhs",
  "50 Lakhs+",
  "Not Sure Yet",
];

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", detail: "+91 90274 24215", href: WHATSAPP_URL, color: "bg-[#25D366]/10 group-hover:bg-[#25D366]/20", iconColor: "text-[#25D366]" },
  { icon: Phone, label: "Call Us", detail: "+91 90274 24215", href: "tel:+919027424215", color: "bg-violet-600/10 group-hover:bg-violet-600/20", iconColor: "text-violet-400" },
  { icon: Mail, label: "Email", detail: "artonautsstreet@gmail.com", href: "mailto:artonautsstreet@gmail.com", color: "bg-violet-600/10 group-hover:bg-violet-600/20", iconColor: "text-violet-400" },
  { icon: Instagram, label: "Instagram", detail: "@artonauts.street", href: "https://www.instagram.com/artonauts.street", color: "bg-violet-600/10 group-hover:bg-violet-600/20", iconColor: "text-violet-400" },
];

export default function ContactSection() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({
    name: "", phone: "", project_type: "", city: "", budget_range: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:bg-violet-500/[0.02] focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-all duration-300";

  return (
    <section id="contact" data-testid="contact-section" className="py-28 sm:py-36 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="accent-label mb-5">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Start Your Project
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto mb-3">
            Share your requirements and we'll get back with a detailed proposal.
          </p>
          <p className="text-sm text-violet-400/80 font-medium">
            We typically respond within 2 hours on WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-8">Direct Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={`contact-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group p-3 rounded-xl hover:bg-white/[0.02]"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center transition-colors shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 text-gray-400 p-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-xs text-gray-500">Mathura, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div data-testid="form-success" className="p-10 sm:p-14 rounded-2xl border border-violet-500/20 bg-violet-500/[0.03] text-center">
                <CheckCircle className="w-14 h-14 text-violet-400 mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white mb-3">Inquiry Submitted</h3>
                <p className="text-sm text-gray-400 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your requirements and get back to you shortly.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="form-success-whatsapp"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE53] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Faster Response on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="lead-form" className="p-8 sm:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block font-medium">Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} data-testid="form-name" className={inputClasses} placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block font-medium">Phone Number *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} data-testid="form-phone" className={inputClasses} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block font-medium">Project Type *</label>
                    <select name="project_type" required value={form.project_type} onChange={handleChange} data-testid="form-project-type" className={`${inputClasses} appearance-none`}>
                      <option value="" className="bg-[#0A0A0A]">Select Type</option>
                      {projectTypes.map((t) => (<option key={t} value={t} className="bg-[#0A0A0A]">{t}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block font-medium">City *</label>
                    <input type="text" name="city" required value={form.city} onChange={handleChange} data-testid="form-city" className={inputClasses} placeholder="Your City" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block font-medium">Budget Range</label>
                  <select name="budget_range" value={form.budget_range} onChange={handleChange} data-testid="form-budget" className={`${inputClasses} appearance-none`}>
                    <option value="" className="bg-[#0A0A0A]">Select Budget Range</option>
                    {budgetRanges.map((b) => (<option key={b} value={b} className="bg-[#0A0A0A]">{b}</option>))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block font-medium">Your Requirement</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} data-testid="form-message" className={`${inputClasses} resize-none`} placeholder="Briefly describe your project..." />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="form-submit-btn"
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-4 rounded-full transition-all duration-300 cta-glow flex items-center justify-center gap-2.5 text-sm disabled:opacity-50 mt-2"
                >
                  {loading ? "Submitting..." : (<><Send className="w-4 h-4" /> Submit Inquiry</>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
