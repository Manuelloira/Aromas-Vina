import React from "react";

const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-2xl w-full mx-4">
          <h1 className="text-3xl font-bold mb-4">Contacta con Nosotros</h1>
          <p className="mb-8">¿Tienes alguna pregunta o comentario? ¡Nos encantaría escucharte!</p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre:</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensaje:</label>
              <textarea rows={5} className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
  );
};

export default Contacto;
