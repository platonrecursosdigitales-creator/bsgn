import React from 'react';
import './Services.css';
import bespokeLogo from '../assets/bespoke.jpeg';
import { 
  UserCheck, 
  MessageSquareShare, 
  TrendingUp, 
  Target, 
  Rocket, 
  Star, 
  ShoppingBag, 
  Compass, 
  HeartHandshake,
  Plane
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    { id: 1, title: 'Consultoría en imagen pública', icon: <UserCheck size={36} /> },
    { id: 2, title: 'Comunicación estratégica', icon: <MessageSquareShare size={36} /> },
    { id: 3, title: 'Desarrollo de negocios', icon: <TrendingUp size={36} /> },
    { id: 4, title: 'Desarrollo personal y profesional', icon: <Target size={36} /> },
    { id: 5, title: 'Startups - Emprende tu negocio', icon: <Rocket size={36} /> },
    { id: 6, title: 'High-End Events & Experiences', icon: <Star size={36} /> },
    { id: 7, title: 'Bespoke Travel Atelier & Concierge', icon: <img src={bespokeLogo} alt="Bespoke Travel" style={{ width: '48px', height: 'auto', maxHeight: '48px', objectFit: 'contain' }} /> },
    { id: 8, title: 'Vida, negocios e imagen y éxito', icon: <Compass size={36} /> },
    { id: 9, title: 'Fundación Únete a la causa', icon: <HeartHandshake size={36} /> },
  ];

  return (
    <section id="servicios" className="section services-section">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        <div className="services-grid">
          {servicesList.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
