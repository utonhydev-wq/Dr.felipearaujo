import React from "react";
import { MessageCircle, Instagram, MapPin, Star } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { whatsapp, instagram, location, googleReview } = SITE_CONFIG.links;

  const quickShortcuts = [
    {
      name: "WhatsApp",
      url: whatsapp.url,
      icon: MessageCircle,
      ariaLabel: "Abrir WhatsApp de Felipe Araújo",
    },
    {
      name: "Instagram",
      url: instagram.url,
      icon: Instagram,
      ariaLabel: "Abrir Instagram de Felipe Araújo",
    },
    {
      name: "Localização",
      url: location.url,
      icon: MapPin,
      ariaLabel: "Abrir localização no Google Maps",
    },
    {
      name: "Avaliação Google",
      url: googleReview.url,
      icon: Star,
      ariaLabel: "Avaliar atendimento no Google",
    },
  ];

  return (
    <footer className="w-full max-w-xl mx-auto px-4 pt-8 pb-24 sm:pb-12 text-center border-t border-slate-800/80 mt-10">
      {/* Footer Logo & Name */}
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-b from-amber-400/40 to-slate-800 border border-amber-400/30 overflow-hidden mb-2.5 shadow-md">
          <img
            src={SITE_CONFIG.professional.logoUrl}
            alt="Felipe Araújo"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="text-base font-bold text-white font-display">
          {SITE_CONFIG.professional.name}
        </p>
        <p className="text-xs text-amber-400/80 font-medium">
          {SITE_CONFIG.professional.tagline}
        </p>
      </div>

      {/* Quick navigation icons */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {quickShortcuts.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-800 text-slate-400 hover:text-amber-400 flex items-center justify-center transition-all duration-200 active:scale-95"
              title={item.name}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>

      {/* Copyright */}
      <p className="text-[11px] text-slate-500 tracking-wide">
        © {currentYear} {SITE_CONFIG.professional.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
};
