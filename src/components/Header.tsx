import React from "react";
import { MessageCircle, MapPin, Share2, Check } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

export const Header: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Felipe Araújo | Odontologia",
          text: "Acesse o bio site de Felipe Araújo para agendamentos e informações.",
          url: window.location.href,
        });
        return;
      } catch {
        // User cancelled or error, fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <header className="relative w-full pt-8 pb-6 px-4 flex flex-col items-center text-center">
      {/* Discreet top bar with share action */}
      <div className="w-full max-w-xl flex items-center justify-between pb-6">
        <span className="text-[11px] font-medium tracking-widest uppercase text-amber-400/80">
          Atendimento Odontológico
        </span>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 transition-all active:scale-95"
          title="Compartilhar bio site"
          aria-label="Compartilhar bio site"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Compartilhar</span>
            </>
          )}
        </button>
      </div>

      {/* Official Logo Container */}
      <div className="relative group mb-5">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-600/20 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-amber-300/40 via-slate-800 to-amber-500/20 border border-amber-400/40 shadow-xl overflow-hidden flex items-center justify-center">
          <img
            src={SITE_CONFIG.professional.logoUrl}
            alt="Logo oficial Felipe Araújo Odontologia"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image fails
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML =
                  '<div class="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-amber-300 font-bold text-xl tracking-wider">FA<span class="text-[9px] font-normal tracking-widest text-slate-400">ODONTOLOGIA</span></div>';
              }
            }}
          />
        </div>
      </div>

      {/* Professional Name & Title */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display mb-1.5">
        {SITE_CONFIG.professional.name}
      </h1>

      <p className="text-sm sm:text-base font-medium tracking-wide text-amber-300/90 mb-3">
        {SITE_CONFIG.professional.tagline}
      </p>

      {/* Warm & Professional Phrase */}
      <p className="text-xs sm:text-sm text-slate-300/90 max-w-md leading-relaxed mb-6 font-normal">
        {SITE_CONFIG.professional.welcomePhrase}
      </p>

      {/* Presentation Immediate CTAs (Visible without deep scroll) */}
      <div className="w-full max-w-sm grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <a
          href={SITE_CONFIG.links.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 fill-white/20 stroke-white" />
          <span>Falar pelo WhatsApp</span>
        </a>

        <a
          href={SITE_CONFIG.links.location.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-100 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-600 transition-all duration-200 active:scale-[0.98]"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Ver localização</span>
        </a>
      </div>
    </header>
  );
};
