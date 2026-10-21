import React from "react";
import { MessageCircle, Instagram, MapPin, Star, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

export const QuickLinks: React.FC = () => {
  const { whatsapp, instagram, location, googleReview } = SITE_CONFIG.links;

  const links = [
    {
      id: "whatsapp",
      title: whatsapp.label,
      subtitle: "Mensagem direta para dúvidas e agendamento",
      meta: "(81) 9330-6031",
      url: whatsapp.url,
      icon: MessageCircle,
      accentBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30 hover:border-emerald-500/60",
      glowColor: "group-hover:shadow-emerald-500/10",
      badge: "Recomendado",
    },
    {
      id: "instagram",
      title: instagram.label,
      subtitle: "Rotina clínica, casos e dicas de saúde bucal",
      meta: "@felipearaujodentista",
      url: instagram.url,
      icon: Instagram,
      accentBg: "bg-pink-500/15 group-hover:bg-pink-500/25",
      iconColor: "text-pink-400",
      borderColor: "border-slate-800 hover:border-pink-500/40",
      glowColor: "group-hover:shadow-pink-500/10",
      badge: null,
    },
    {
      id: "location",
      title: location.label,
      subtitle: "Rota no Google Maps com orientações de GPS",
      meta: "Abrir no Mapa",
      url: location.url,
      icon: MapPin,
      accentBg: "bg-sky-500/15 group-hover:bg-sky-500/25",
      iconColor: "text-sky-400",
      borderColor: "border-slate-800 hover:border-sky-500/40",
      glowColor: "group-hover:shadow-sky-500/10",
      badge: null,
    },
    {
      id: "googleReview",
      title: googleReview.label,
      subtitle: "Sua opinião nos ajuda a evoluir continuamente",
      meta: "Google Reviews",
      url: googleReview.url,
      icon: Star,
      accentBg: "bg-amber-500/15 group-hover:bg-amber-500/25",
      iconColor: "text-amber-400",
      borderColor: "border-slate-800 hover:border-amber-500/40",
      glowColor: "group-hover:shadow-amber-500/10",
      badge: null,
    },
  ];

  return (
    <section aria-label="Acessos rápidos" className="w-full max-w-xl mx-auto px-4 my-8">
      <div className="flex items-center gap-2 mb-3.5 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-300">
          Canais de Atendimento & Acesso
        </h2>
      </div>

      <div className="space-y-3">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850/95 border ${item.borderColor} shadow-lg shadow-black/30 ${item.glowColor} transition-all duration-200 active:scale-[0.99]`}
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.accentBg} transition-colors duration-200`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-amber-300 transition-colors truncate">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                  <span className="inline-block text-[11px] font-medium text-slate-500 mt-0.5">
                    {item.meta}
                  </span>
                </div>
              </div>

              <div className="shrink-0 pl-2">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 group-hover:bg-slate-700/80 flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
