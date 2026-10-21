import React from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

export const FloatingActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Acesso rápido móvel"
      className="fixed bottom-0 inset-x-0 z-40 p-3 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 sm:hidden"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={SITE_CONFIG.links.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white/20 stroke-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href={SITE_CONFIG.links.location.url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-xs flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Localização</span>
        </a>
      </div>
    </aside>
  );
};
