import React from 'react';
import { X } from 'lucide-react';
import './Startups.css';

import imgRocket from '../assets/startup_rocket_1783133923072.png';
import imgBulb from '../assets/startup_bulb_1783133929613.png';
import imgArrow from '../assets/startup_arrow_1783133935532.png';
import imgPhone from '../assets/startup_phone_1783133942335.png';

function Startups({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="startups-modal-overlay">
      <div className="startups-modal-content">
        <button className="startups-modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        <div className="startups-collage-container">
          
          {/* Top Left */}
          <img src={imgRocket} alt="Rocket Sketch" className="su-rocket-img" />
          <h2 className="su-title-main font-sans-bold">STARTUPS</h2>

          {/* Top Center */}
          <h3 className="su-subtitle-hand font-handwriting">Emprende tu propio negocio</h3>

          {/* Top Right */}
          <div className="su-corp-text font-sans-bold">
            Colaboramos con empresas y empresarios de toda índole y sector en el desarrollo de estrategias y procesos corporativos generadores de éxito empresarial.
          </div>

          {/* Middle Left */}
          <img src={imgBulb} alt="Bulb Sketch" className="su-bulb-img" />

          {/* Center */}
          <h2 className="su-main-phrase font-handwriting">
            Somos especialistas en planeación estratégica, apoyando a desarrollar cualquier idea y convirtiéndola en un negocio rentable.
          </h2>

          {/* Middle Right */}
          <button className="su-btn-cita font-sans-bold">Concertar una cita</button>
          <img src={imgArrow} alt="Arrow Sketch" className="su-arrow-img" />

          {/* Bottom Row */}
          <div className="su-bottom-row">
            {/* Bottom Left */}
            <div className="su-paper-note">
              <h4 className="su-paper-title font-handwriting">Cómo hacer un Business Plan</h4>
              <button className="su-btn-download font-sans-bold">Download</button>
            </div>

            {/* Bottom Center */}
            <div className="su-sticker-note">
              <div className="su-sticker-tape"></div>
              <p className="su-sticker-text font-sans-bold">Todas las cotizaciones se adaptan a las necesidades de tu negocio.</p>
            </div>

            {/* Bottom Right */}
            <div className="su-bottom-center-block">
              <p className="su-bottom-text font-sans-bold">
                Apoyamos a empresas en todos los niveles, tamaños y áreas a desarrollar estrategias y mejoras en sus procesos de innovación y gestión.
              </p>
              <button className="su-btn-asesoria">Asesoría Gratuita</button>
            </div>
          </div>

          {/* Bottom Right */}
          <img src={imgPhone} alt="Phone Sketch" className="su-phone-img" />

        </div>
      </div>
    </div>
  );
}

export default Startups;
