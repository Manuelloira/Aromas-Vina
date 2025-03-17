import React from "react";
import "../styles/Contacto.css"; // Importa el archivo CSS

const Contacto: React.FC = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-form-container">
        <h1>Contacta con Nosotros</h1>
        <p>¿Tienes alguna pregunta o comentario? ¡Nos encantaría escucharte!</p>
        <form className="contacto-form">
          <div>
            <label>Nombre:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea rows={5} required />
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;