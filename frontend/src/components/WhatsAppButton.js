import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919027424215?text=Hi%20Artonauts%20Street%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-btn"
      className="fixed bottom-20 right-6 z-40 bg-[#25D366] hover:bg-[#1EBE53] text-white w-14 h-14 rounded-full shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
