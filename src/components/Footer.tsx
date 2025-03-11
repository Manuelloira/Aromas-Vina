import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>Somos Aromas de Viña, una bodega con encanto...</p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>Email: info@aromasdevina.com</li>
            <li>Teléfono: +34 123 456 789</li>
            <li>Dirección: Calle Viña, 20 - A Coruña, España</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#"><img src="/assets/P7DIW_ICONS/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/assets/P7DIW_ICONS/whatsapp.svg" alt="Whatsapp" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Aromas de Viña | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;