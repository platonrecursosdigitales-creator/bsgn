import React from 'react';
import './BusinessDev.css';
import { Target, TrendingUp, ShieldAlert, Network } from 'lucide-react';

function BusinessDev() {
  const elements = [
    { title: "Startups", icon: <TrendingUp size={32} /> },
    { title: "Consultoría y gestión empresarial", icon: <Target size={32} /> },
    { title: "Manejo de crisis", icon: <ShieldAlert size={32} /> },
    { title: "Representaciones corporativas y networking", icon: <Network size={32} /> }
  ];

  return (
    <section id="negocios" className="section business-dev-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Consultoría y Desarrollo de Negocios</h2>
          <p className="section-subtitle">
            Colaboramos con empresas y empresarios de toda índole y sector en el desarrollo de estrategias y procesos corporativos generadores de éxito empresarial.
          </p>
        </div>

        <div className="bdev-grid">
          {elements.map((el, index) => (
            <div key={index} className="bdev-card glass-card">
              <div className="bdev-icon">{el.icon}</div>
              <h4 className="bdev-title">{el.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessDev;
