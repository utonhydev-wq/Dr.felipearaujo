import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

interface ImageLightboxProps {
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  selectedIndex,
  onClose,
  onNavigate,
}) => {
  const images = SITE_CONFIG.carouselImages;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length, onNavigate]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, onClose, handlePrev, handleNext]);

  if (selectedIndex === null) return null;

  const currentImage = images[selectedIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em tela cheia"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-4xl flex items-center justify-between text-white py-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs text-slate-300 font-medium">
          {selectedIndex + 1} de {images.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Fechar visualização"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center Image Container */}
      <div
        className="relative max-w-4xl max-h-[75vh] sm:max-h-[80vh] w-full flex items-center justify-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="max-h-[75vh] sm:max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Foto anterior"
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition-transform active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Próxima foto"
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition-transform active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom caption */}
      <div
        className="w-full max-w-md text-center py-2 text-xs text-slate-400"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Felipe Araújo Odontologia · Imagem {selectedIndex + 1}</p>
      </div>
    </div>
  );
};
