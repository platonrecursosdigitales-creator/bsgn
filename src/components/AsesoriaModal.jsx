import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AsesoriaModal.css';

function AsesoriaModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    tipo: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, empresa, tipo } = formData;
    
    let mensaje = `Hola, quiero una asesoría.`;
    if (nombre) mensaje += ` Mi nombre es ${nombre}.`;
    if (empresa) mensaje += ` Vengo de la empresa/negocio: ${empresa}.`;
    if (tipo) mensaje += ` Me interesa el tema de: ${tipo}.`;

    const encodedMessage = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/529984408796?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose(); // Close modal after sending
  };

  return (
    <div className="asesoria-modal-overlay" onClick={onClose}>
      <div className="asesoria-modal-content glass-card" onClick={e => e.stopPropagation()}>
        <button className="asesoria-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h3 className="asesoria-modal-title">Solicitar Asesoría</h3>
        <p className="asesoria-modal-desc">
          Por favor, compártenos unos datos breves antes de ir a WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="asesoria-form">
          <div className="asesoria-form-group">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Tu nombre" 
              required 
            />
          </div>
          
          <div className="asesoria-form-group">
            <label htmlFor="empresa">Empresa o Negocio</label>
            <input 
              type="text" 
              id="empresa" 
              name="empresa" 
              value={formData.empresa} 
              onChange={handleChange} 
              placeholder="Nombre de tu empresa" 
            />
          </div>

          <div className="asesoria-form-group">
            <label htmlFor="tipo">¿Qué tipo de asesoría buscas?</label>
            <input 
              type="text" 
              id="tipo" 
              name="tipo" 
              value={formData.tipo} 
              onChange={handleChange} 
              placeholder="Ej. Imagen pública, startups, etc." 
            />
          </div>

          <button type="submit" className="btn-agenda-rosa w-100 asesoria-submit-btn">
            Ir a WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default AsesoriaModal;
