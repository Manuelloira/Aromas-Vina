import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="w-1/3">
          <h3 className="text-lg font-bold">Sobre Nosotros</h3>
          <p className="mt-2 text-sm">
            Somos Aromas de Viña, una bodega con encanto que ofrece vinos de calidad...
          </p>
        </div>
        <div className="w-1/3">
          <h3 className="text-lg font-bold">Contacto</h3>
          <ul className="mt-2 text-sm">
            <li>Email: info@aromasdevina.com</li>
            <li>Teléfono: +34 123 456 789</li>
            <li>Dirección: Calle Viña, 20 - A Coruña, España</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="text-lg font-bold">Síguenos</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#">
              <img src="/assets/P7DIW_ICONS/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src="/assets/P7DIW_ICONS/whatsapp.svg" alt="Whatsapp" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p>&copy; 2025 Aromas de Viña | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;