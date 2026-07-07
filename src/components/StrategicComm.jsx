import React from 'react';
import './StrategicComm.css';

function StrategicComm() {
  const services = [
    "Diseño gráfico",
    "Servicios multimedia: producción, foto, audio y video",
    "Desarrollo web",
    "Digital Content & Strategy",
    "Publicidad",
    "Marketing",
    "RRPP",
    "Branding",
    "Asesoría en medios / Media kit",
    "Estudios de mercado",
    "Impresos",
    "Promocionales / Catálogo",
    "Stand, Expo & POP / Catálogo",
    "Comunicación interna"
  ];

  return (
    <section id="comunicacion" className="section strategic-comm-section section-dark">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Comunicación Estratégica Integral</h2>
          <p className="section-subtitle">
            Articulamos mensajes contundentes a través de canales estratégicos para maximizar el impacto de su marca.
          </p>
        </div>

        <div className="comm-grid">
          {services.map((service, index) => (
            <div key={index} className="comm-card glass-card">
              <span className="comm-bullet"></span>
              <span className="comm-text">{service}</span>
            </div>
          ))}
        </div>
        
        <div className="promo-banner text-center">
          <h3>Soluciones 360° para tu negocio</h3>
          <p>Descubre cómo podemos potenciar tus resultados.</p>
          <a href="#contacto" className="btn btn-outline">Solicitar información</a>
        </div>
      </div>
    </section>
  );
}

export default StrategicComm;
