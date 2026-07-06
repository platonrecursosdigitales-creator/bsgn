import React, { useState, useEffect, useRef } from 'react';
import './Metrics.css';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Extract number from string (e.g. "+2500" -> 2500)
  const target = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const isPlus = value.includes('+');

  useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const step = (now) => {
            if (!active) return;
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out quad formula
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * target));
            
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {isPlus ? `+${count.toLocaleString('es-MX')}` : count.toLocaleString('es-MX')}
    </span>
  );
};

const Metrics = () => {
  const metricsData = [
    { number: '+15', label: 'Años de experiencia' },
    { number: '+2500', label: 'Clientes satisfechos' },
    { number: '+10000', label: 'Soluciones creadas' },
    { number: '+3000', label: 'Sueños cumplidos' },
    { number: '+50', label: 'Eventos corporativos' }
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metricsData.map((metric, index) => (
            <div key={index} className="metric-card">
              <h3 className="metric-number">
                <AnimatedNumber value={metric.number} />
              </h3>
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
