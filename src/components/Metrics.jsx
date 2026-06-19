import React from 'react';
import './Metrics.css';

const Metrics = () => {
  const metricsData = [
    { number: '+15', label: 'Años de experiencia' },
    { number: '+2500', label: 'Clientes satisfechos' },
    { number: '+10000', label: 'Soluciones creadas' },
    { number: '+3000', label: 'Sueños cumplidos' },
    { number: '+5000', label: 'Eventos exitosos' }
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metricsData.map((metric, index) => (
            <div key={index} className="metric-card">
              <h3 className="metric-number">{metric.number}</h3>
              <p className="metric-label">{metric.label}</p>
              <div className="metric-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
