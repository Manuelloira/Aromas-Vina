import React from "react";
import "../styles/Footer.css"; // Importa el archivo CSS

const Footer: React.FC = () => {
  return (
<footer>
  <div className="footer-container">
    <div className="footer-headers">
      <h3 className="footer-header">Sobre Nosotros</h3>
      <h3 className="footer-header">Contacto</h3>
      <h3 className="footer-header">Síguenos</h3>
    </div>
    <div className="footer-content">
      <div>
        <p>
          Somos Aromas de Viña, una bodega con encanto que ofrece vinos de calidad.
        </p>
      </div>
      <div>
        <ul>
          <li>Email: info@aromasdevina.com</li>
          <li>Teléfono: +34 123 456 789</li>
          <li>Dirección: Calle Viña, 20 - A Coruña, España</li>
        </ul>
      </div>
      <div>
        <div className="social-icons">
          <a href="#">
            <img src="/assets/P7DIW_ICONS/instagram.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/assets/P7DIW_ICONS/whatsapp.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <p>&copy; 2025 Aromas de Viña | Todos los derechos reservados</p>
  </div>
</footer>
  );
};

export default Footer;