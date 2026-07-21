import { Eye, Users, Building, Briefcase, Building2, UserCircle, MessageSquare, PenTool, Camera, Laptop, Megaphone, Handshake, Tag, Printer, Search, Presentation, Rocket, LineChart, ShieldAlert, Network } from 'lucide-react';

export const servicesData = {
  1: {
    id: 1,
    title: "Consultoría de imagen pública",
    shortDescription: "Desarrollamos estrategias de alto impacto en el logro de objetivos mediante la transmisión de estímulos y técnicas de comunicación integral que fomentan la imagen positiva de nuestros clientes.",
    includes: [
      { text: "Desarrollo y gestión de Imagen Pública", icon: Eye },
      { text: "Representación y desarrollo de figuras públicas", icon: Users },
      { text: "Desarrollo de imagen ambiental", icon: Building },
      { text: "Imagen profesional", icon: Briefcase },
      { text: "Imagen empresarial y corporativa", icon: Building2 },
      { text: "Imagen personal para profesionales", icon: UserCircle }
    ],
    targetAudience: "Toda persona, profesionista o institución que requiera desarrollo estratégico para lograr sus objetivos a través de su imagen o apoyo o asesoría en lo que proyectan a través de ella misma."
  },
  2: {
    id: 2,
    title: "Consultoría en comunicación estratégica",
    quote: "“La comunicación es un espiral que inicia en el centro y se refleja en el exterior”",
    shortDescription: "Nos especializamos en potenciar y destacar las competencias y habilidades de equipos de trabajo y marcas, optimizando los procesos y desarrollo de canales de comunicación y desarrollo de mensajes de alto impacto que genere un flujo de comunicación efectiva que se refleje en el logro de tus objetivos corporativos generando alto impacto en el mercado.",
    includes: [
      { text: "Consultoría integral en comunicación interna y externa", icon: MessageSquare },
      { text: "Desarrollo creativo y gráfico", icon: PenTool },
      { 
        text: "Servicios multimedia",
        icon: Camera,
        subItems: ["Fotografía", "Producción cine / cine minuto", "Producción de video", "Producción de audio"]
      },
      { 
        text: "Desarrollo web y digital strategy",
        icon: Laptop,
        quote: "“Negocios digitales a la medida, tu futuro se refleja en tu imagen digital”"
      },
      { 
        text: "Publicidad, marketing 360º y promoción",
        icon: Megaphone,
        subItems: [
          "Asesoría y contratación de medios",
          "Activaciones",
          "Mktg BTL",
          "Influencer mktg",
          "Mktg digital",
          "Desarrollo integral de marca"
        ]
      },
      { text: "Relaciones Públicas (RRPP)", icon: Handshake },
      { 
        text: "Branding",
        icon: Tag,
        subItems: ["Creación y posicionamiento de marcas", "Product placement", "Patrocinios"]
      },
      { 
        text: "Producción impresa",
        icon: Printer,
        quote: "“Plasmamos la esencia de tu marca y tus objetivos”",
        extraText: "Todos nuestros proyectos son personalizados plasmando la esencia de tu marca.",
        subItems: [
          "Impresiones 360",
          "HD format",
          "Packing",
          "Bordados",
          "Stands, Expo Displays & POP (galería y catálogo)",
          "Artículos promocionales",
          "Letreros y señalización",
          "Custom made productions"
        ]
      },
      { 
        text: "Estudios de mercado",
        icon: Search,
        subItems: ["Focus groups", "Mystery shoppers"]
      },
      { text: "Exposiciones y convenciones", icon: Presentation }
    ]
  },
  3: {
    id: 3,
    title: "Consultoría en desarrollo de negocios",
    shortDescription: "Colaboramos con empresas y empresarios de toda índole y sector en el desarrollo de estrategias y procesos corporativos generadores de éxito empresarial.",
    includes: [
      { text: "Startup - emprende tu propio negocio", icon: Rocket },
      { text: "Consultoría y gestión empresarial", icon: LineChart },
      { text: "Manejo de crisis", icon: ShieldAlert },
      { text: "Representaciones corporativas y networking", icon: Network }
    ]
  }
};
