import React from 'react';
import './StrategicAreas.css';
import { 
  Camera, 
  MessageSquare, 
  Briefcase, 
  Users, 
  GraduationCap, 
  UserPlus, 
  Rocket, 
  Star, 
  Heart 
} from 'lucide-react';

function StrategicAreas() {
  const areas = [
    { id: 1, title: 'Consultoría en Imagen Pública', icon: <Camera size={28} /> },
    { id: 2, title: 'Comunicación Estratégica Integral', icon: <MessageSquare size={28} /> },
    { id: 3, title: 'Consultoría y Desarrollo de Negocios', icon: <Briefcase size={28} /> },
    { id: 4, title: 'Representaciones Corporativas & Networking', icon: <Users size={28} /> },
    { id: 5, title: 'Cursos & Capacitación', icon: <GraduationCap size={28} /> },
    { id: 6, title: 'Desarrollo Personal & Empresarial', icon: <UserPlus size={28} /> },
    { id: 7, title: 'Startups: Emprende tu propio negocio', icon: <Rocket size={28} /> },
    { id: 8, title: 'Eventos / Tout de Luxe', icon: <Star size={28} /> },
    { id: 9, title: 'Únete a la Causa A.C.', icon: <Heart size={28} /> }
  ];

  return (
    <section id="areas" className="strategic-areas">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Áreas Estratégicas</h2>
          <p className="section-subtitle">
            Soluciones integrales diseñadas para impulsar el crecimiento y posicionamiento en todos los niveles.
          </p>
        </div>

        <div className="mosaic-container">
          <div className="mosaic-center">
            <div className="center-content">
              <h3>BSGN</h3>
              <p>Consulting Group</p>
            </div>
          </div>
          
          <div className="mosaic-nodes">
            {areas.map((area, index) => (
              <div key={area.id} className={`mosaic-node node-${index + 1}`}>
                <div className="node-line"></div>
                <div className="node-card">
                  <div className="node-icon">{area.icon}</div>
                  <h4 className="node-title">{area.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicAreas;
