export interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

export const SITE_CONFIG = {
  professional: {
    name: "Felipe Araújo",
    tagline: "Odontologia",
    welcomePhrase:
      "Cuidando da sua saúde bucal e do seu sorriso com dedicação, conforto e excelência em cada atendimento.",
    logoUrl: "https://i.postimg.cc/PJKw5c21/746476931-18115702802479571-2778798653212111586-n.jpg",
    phoneDisplay: "(81) 9330-6031",
  },
  links: {
    whatsapp: {
      label: "Agendar pelo WhatsApp",
      description: "Converse diretamente e agende seu horário · (81) 9330-6031",
      url: "https://wa.me/558193306031?text=Ol%C3%A1!%20Acessei%20seu%20bio%20site%20e%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20odontol%C3%B3gico.",
    },
    instagram: {
      label: "Acompanhe no Instagram",
      description: "Novidades, dicas e bastidores do consultório · @felipearaujodentista",
      url: "https://www.instagram.com/felipearaujodentista/",
      handle: "@felipearaujodentista",
    },
    location: {
      label: "Como chegar ao consultório",
      description: "Traçar rota no Google Maps e navegar via GPS",
      url: "https://maps.app.goo.gl/XgoBJm8J87qHUWZU9",
    },
    googleReview: {
      label: "Avalie nosso atendimento no Google",
      description: "Compartilhe sua experiência e ajude outros pacientes",
      url: "https://search.google.com/local/writereview?placeid=ChIJdajnIADhqgcRKb8U0WGuM_Y",
    },
  },
  // Exactly 11 images in the specified order
  carouselImages: [
    {
      id: 1,
      url: "https://i.postimg.cc/xdYn6C0b/IMG-20261021-WA0003.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 1",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/HxvmW9b5/IMG-20261021-WA0001.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 2",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/90vjZX8D/IMG-20261021-WA0002.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 3",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/mgWsrD15/IMG-20261021-WA0000.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 4",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/hGpWM1y3/IMG-20261021-WA0006.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 5",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/tRLTh9V5/IMG-20261021-WA0009.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 6",
    },
    {
      id: 7,
      url: "https://i.postimg.cc/HxrYyNYR/IMG-20261021-WA0008.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 7",
    },
    {
      id: 8,
      url: "https://i.postimg.cc/sDYV77rk/IMG-20261021-WA0007.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 8",
    },
    {
      id: 9,
      url: "https://i.postimg.cc/7Yk4Hh2t/IMG-20261021-WA0005.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 9",
    },
    {
      id: 10,
      url: "https://i.postimg.cc/wM5Sy5mr/IMG-20261021-WA0010.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 10",
    },
    {
      id: 11,
      url: "https://i.postimg.cc/kXc07c9D/IMG-20261021-WA0004.jpg",
      alt: "Atendimento e consultório odontológico Felipe Araújo - Imagem 11",
    },
  ] as CarouselImage[],
  trustPillars: [
    {
      title: "Atendimento Humanizado",
      description:
        "Cuidado focado em você, com acolhimento, escuta atenta e total respeito ao seu bem-estar.",
    },
    {
      title: "Biossegurança Rigorosa",
      description:
        "Protocolos de esterilização e higiene seguidos rigorosamente para garantir a sua tranquilidade.",
    },
    {
      title: "Ambiente Confortável",
      description:
        "Espaço planejado para proporcionar uma experiência serena, acolhedora e positiva.",
    },
    {
      title: "Compromisso & Pontualidade",
      description:
        "Dedicação em cada etapa da sua consulta, valorizando o seu tempo e a sua confiança.",
    },
  ],
};
