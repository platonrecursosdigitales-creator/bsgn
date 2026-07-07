import React, { useState, useEffect } from 'react';
import './Hero.css';

const AnimatedStat = ({ value, label, delay }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(value.replace(/\D/g, ''), 10);
  const prefix = value.includes('+') ? '+' : '';

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const incrementTime = 30; // Frame time
    const totalSteps = duration / incrementTime;
    const increment = targetNumber / totalSteps;

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [targetNumber, delay]);

  return (
    <div 
      className="hero-metric-item"
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="hero-metric-value">{prefix}{count}</h3>
      <p className="hero-metric-label">{label}</p>
      <div className="hero-metric-line"></div>
    </div>
  );
};

function Hero() {
  const stats = [
    { value: '+15', label: 'AÑOS TRANSFORMANDO PROFESIONALES Y ORGANIZACIONES' },
    { value: '+2500', label: 'LAZOS CONSTRUIDOS' },
    { value: '+10000', label: 'SOLUCIONES Y ESTRATEGIAS CREADAS' },
    { value: '+3000', label: 'SUEÑOS CUMPLIDOS' },
    { value: '+4', label: 'INDUSTRIAS TRANSFORMADAS' },
    { value: '+5000', label: 'MOMENTOS EN LA MENTE Y CORAZÓN DE NUESTROS CLIENTES' }
  ];

  return (
    <section className="hero-metrics-section" id="inicio">
      <div className="container text-center hero-metrics-container">
        <h1 className="hero-metrics-title">
          TRANSFORMAMOS LÍDERES, MARCAS Y ORGANIZACIONES <br/>
          A TRAVÉS DE ESTRATEGIA, INNOVACIÓN Y EXPERIENCIAS QUE GENERAN IMPACTO GLOBAL.
        </h1>
        <p className="hero-metrics-quote">
          "EL ÉXITO DE UNA MARCA SE MIDE EN LA EXPERIENCIA QUE GENERA"
        </p>

        <div className="hero-metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
          {stats.map((stat, index) => (
            <AnimatedStat 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              delay={0.6} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
