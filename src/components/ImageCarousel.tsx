import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from "lucide-react";
import { SITE_CONFIG } from "../data/config";

interface ImageCarouselProps {
  onSelectImage?: (index: number) => void;
}

const AUTOPLAY_INTERVAL = 4000; // Troca automática a cada 4 segundos

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ onSelectImage }) => {
  const images = SITE_CONFIG.carouselImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Iniciar ou reiniciar o temporizador de avanço automático
  const resetAndStartTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_INTERVAL);
  }, [images.length]);

  // Efeito principal de montagem e ciclo contínuo
  useEffect(() => {
    resetAndStartTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [resetAndStartTimer]);

  // Controles manuais (avançam e reiniciam o temporizador sem interromper o fluxo automático)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAndStartTimer();
  }, [images.length, resetAndStartTimer]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAndStartTimer();
  }, [images.length, resetAndStartTimer]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    resetAndStartTimer();
  }, [resetAndStartTimer]);

  // Suporte a gestos touch (deslizar com o dedo no celular)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setTouchStartX(e.touches[0].clientX);
      setTouchDeltaX(0);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null && e.touches.length > 0) {
      const currentX = e.touches[0].clientX;
      setTouchDeltaX(currentX - touchStartX);
    }
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 40;
    if (touchStartX !== null) {
      if (touchDeltaX < -minSwipeDistance) {
        nextSlide();
      } else if (touchDeltaX > minSwipeDistance) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    resetAndStartTimer();
  };

  // Navegação por teclado para acessibilidade
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Ajuste fino do enquadramento conforme assunto principal da foto
  const getImagePosition = (id: number): string => {
    switch (id) {
      case 1:
        return "center 25%";
      case 2:
        return "center 30%";
      case 5:
        return "center 30%";
      case 6:
        return "center 20%";
      case 7:
        return "center 25%";
      default:
        return "center center";
    }
  };

  return (
    <section
      aria-label="Galeria de fotos do consultório"
      className="w-full max-w-xl mx-auto px-4 my-6"
    >
      {/* Cabeçalho da Seção com indicador numérico */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-300">
            Ambiente & Atendimento
          </h2>
        </div>
        <div className="text-[11px] font-medium text-slate-400">
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Contêiner principal do Carrossel: 100% largura, altura responsiva e sem margens internas */}
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-black/60 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
        style={{ width: "100%", overflow: "hidden" }}
      >
        {/* Slides: 100% de largura e altura, sem espaçamentos intermediários */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ width: "100%", height: "100%" }}
        >
          {images.map((image, idx) => {
            const isCurrent = idx === currentIndex;
            const isFailed = imageErrors[image.id];

            return (
              <div
                key={image.id}
                aria-hidden={!isCurrent}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                }}
                className={`w-full h-full transition-opacity duration-700 ease-in-out ${
                  isCurrent
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {!isFailed ? (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => onSelectImage?.(currentIndex)}
                    title="Clique para ampliar"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading={idx === 0 ? "eager" : "lazy"}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(image.id)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: getImagePosition(image.id),
                        display: "block",
                      }}
                      className="w-full h-full block"
                    />

                    {/* Botão sutil de ampliar no hover */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectImage?.(currentIndex);
                      }}
                      aria-label="Ampliar foto"
                      className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/70 hover:bg-slate-900 text-slate-200 hover:text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Fallback visual caso a imagem falhe */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-slate-400">
                    <ImageIcon className="w-10 h-10 mb-2 text-slate-600" />
                    <p className="text-sm font-medium text-slate-300">
                      Registro de Atendimento {image.id}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Felipe Araújo Odontologia
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Seta de navegação: Anterior */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Imagem anterior"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Seta de navegação: Próxima */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Próxima imagem"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicadores de posição inferiores */}
        <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5 px-4 pointer-events-auto">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(dotIdx);
              }}
              aria-label={`Ir para a foto ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? "w-6 bg-amber-400 shadow-sm shadow-amber-400/50"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-[11px] text-center text-slate-500 mt-2">
        Avanço automático · Deslize para navegar ou clique para ampliar
      </p>
    </section>
  );
};
