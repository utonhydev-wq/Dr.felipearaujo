import { useState } from "react";
import { Header } from "./components/Header";
import { ImageCarousel } from "./components/ImageCarousel";
import { QuickLinks } from "./components/QuickLinks";
import { TrustSection } from "./components/TrustSection";
import { Footer } from "./components/Footer";
import { FloatingActionBar } from "./components/FloatingActionBar";
import { ImageLightbox } from "./components/ImageLightbox";

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#0b111e] text-slate-100 relative overflow-x-hidden flex flex-col justify-between">
      {/* Subtle luxury ambient glows */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-slate-800/20 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Content Container - Optimized for mobile readability and elegant desktop balance */}
      <main className="w-full max-w-2xl mx-auto flex-1 flex flex-col items-center">
        {/* Seção A: Cabeçalho e Apresentação */}
        <Header />

        {/* Seção B: Carrossel Automático de 11 Imagens */}
        <ImageCarousel onSelectImage={(index) => setLightboxIndex(index)} />

        {/* Seção C: Botões de Acesso Rápido (WhatsApp, Instagram, Maps, Avaliação) */}
        <QuickLinks />

        {/* Seção D: Área de Confiança */}
        <TrustSection />

        {/* Seção E: Rodapé */}
        <Footer />
      </main>

      {/* Mobile Sticky Thumb Action Bar */}
      <FloatingActionBar />

      {/* Photo Lightbox Modal */}
      <ImageLightbox
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
