import React from "react";
import { ShieldCheck, HeartHandshake, Sparkles, Clock, MessageSquareHeart } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

export const TrustSection: React.FC = () => {
  const icons = [HeartHandshake, ShieldCheck, Sparkles, Clock];

  return (
    <section aria-label="Compromisso com o paciente" className="w-full max-w-xl mx-auto px-4 my-8">
      {/* Container with subtle luxury border */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800 p-6 shadow-xl">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <h2 className="text-xs font-semibold tracking-wider uppercase text-amber-400/90">
            Nossos Valores
          </h2>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2">
          Cuidado e excelência para o seu sorriso
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          Um ambiente acolhedor, focado em proporcionar uma experiência segura, agradável e de respeito a cada paciente.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SITE_CONFIG.trustPillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cordial review invite banner */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
              <MessageSquareHeart className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">
                Já é nosso paciente?
              </p>
              <p className="text-[11px] text-slate-400">
                Sua avaliação espontânea no Google nos ajuda a aprimorar sempre.
              </p>
            </div>
          </div>

          <a
            href={SITE_CONFIG.links.googleReview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-amber-300 border border-amber-400/20 hover:border-amber-400/40 transition-colors text-center"
          >
            Deixar avaliação
          </a>
        </div>
      </div>
    </section>
  );
};
