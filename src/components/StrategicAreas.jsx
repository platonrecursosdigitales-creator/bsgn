import React from 'react';
import './StrategicAreas.css';
import area1 from '../assets/new_area_1.jpg';
import area2 from '../assets/new_area_2.jpg';
import area3 from '../assets/new_area_3_business.jpg';
import area4 from '../assets/new_area_3.jpg';
import area5 from '../assets/new_area_5.jpg';
import area6 from '../assets/new_area_4.jpg';
import area7 from '../assets/area7.png';
import area8 from '../assets/area8.png';
import uneteImg from '../assets/unete.png';

function StrategicAreas({ onOpenUneteCausa, onOpenStartups, onOpenDesarrollo, onOpenService }) {
  const areas = [
    { id: 1, title: 'Consultoría en\nimagen pública', img: area1 },
    { id: 2, title: 'Comunicación\nestratégica', img: area2 },
    { id: 3, title: 'Desarrollo de\nnegocios', img: area3 },
    { id: 4, title: 'Desarrollo\npersonal y\nprofesional', img: area4 },
    { id: 5, title: 'Startups -\nEmprende tu\npropio negocio', img: area5 },
    { id: 6, title: 'High-end Events\n& experiences', img: area6 },
    { id: 7, title: 'Bespoke Travel\natelier &\nConcierge', img: area7 },
    { id: 8, title: 'Vida Negocios\nImagen y Éxito', img: area8 },
    { id: 9, title: 'Fundación\nÚnete a la causa', img: uneteImg },
  ];

  return (
    <section id="areas" className="section mosaic-section">
      <div className="container">
        <h2 className="mosaic-main-title text-center">Servicios</h2>
        
        <div className="mosaic-grid">
          {areas.map((area) => (
            <div 
              key={area.id} 
              className="mosaic-item"
              onClick={() => {
                if (area.id === 9 && onOpenUneteCausa) {
                  onOpenUneteCausa();
                } else if (area.id === 8) {
                  window.open('https://miexito.com.mx/', '_blank', 'noopener,noreferrer');
                } else if (area.id === 5 && onOpenStartups) {
                  onOpenStartups();
                } else if (area.id === 4 && onOpenDesarrollo) {
                  onOpenDesarrollo();
                } else if ((area.id === 1 || area.id === 2 || area.id === 3) && onOpenService) {
                  onOpenService(area.id);
                }
              }}
              style={(area.id === 9 || area.id === 8 || area.id === 5 || area.id === 4 || area.id === 1 || area.id === 2 || area.id === 3) ? { cursor: 'pointer' } : {}}
            >
              <img src={area.img} alt={area.title.replace('\n', ' ')} className="mosaic-img" />
              <div className="mosaic-overlay"></div>
              <h3 className="mosaic-title">
                {area.title.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategicAreas;
