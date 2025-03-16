import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/globals.css";

// Importa la imagen del vino (puedes cambiarla por la correspondiente)
import vinoImage from "../assets/vino1.jpg";

const Vino1: React.FC = () => {
  // Datos del vino Malleolus de Valderramiro 2016
  const wine = {
    id: 1,
    name: "Malleolus de Valderramiro 2016",
    description:
      "El Malleolus de Valderramiro es un vino tinto de la Denominación de Origen Ribera del Duero, elaborado por Bodegas Emilio Moro. Este vino es un homenaje a la parcela Valderramiro, un viñedo centenario de la familia Moro. Con una crianza de 18 meses en barricas de roble francés, este vino es un ejemplo de elegancia y complejidad.",
    price: "€120.00",
    image: vinoImage,
    region: "Ribera del Duero, España",
    type: "Tinto",
    alcohol: "15%",
    pairing:
      "Ideal para acompañar carnes rojas asadas, caza mayor y quesos curados.",
    tastingNotes:
      "En nariz, destaca por sus intensos aromas a frutos negros maduros, ciruelas, regaliz y notas tostadas de roble. En boca, es potente y estructurado, con taninos sedosos y un final largo y persistente. Un vino con gran capacidad de envejecimiento.",
    vineyard: "Viñedo Valderramiro (más de 80 años)",
    aging: "18 meses en barricas de roble francés",
    servingTemperature: "16-18°C",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Sección de detalle del vino */}
      <section className="p-8 bg-gray-50 flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            {wine.name}
          </h1>
          {/* Contenido principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Imagen del vino */}
            <div className="flex justify-center">
              <img
                src={wine.image}
                alt={wine.name}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
            {/* Detalles del vino */}
            <div className="space-y-6">
              {/* Descripción */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Descripción
                </h2>
                <p className="text-gray-600">{wine.description}</p>
              </div>
              {/* Información adicional */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Región</h3>
                  <p className="text-gray-600">{wine.region}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Tipo</h3>
                  <p className="text-gray-600">{wine.type}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Alcohol</h3>
                  <p className="text-gray-600">{wine.alcohol}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Maridaje</h3>
                  <p className="text-gray-600">{wine.pairing}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Viñedo</h3>
                  <p className="text-gray-600">{wine.vineyard}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Crianza</h3>
                  <p className="text-gray-600">{wine.aging}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Temperatura de servicio
                  </h3>
                  <p className="text-gray-600">{wine.servingTemperature}</p>
                </div>
              </div>
              {/* Notas de cata */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Notas de Cata
                </h2>
                <p className="text-gray-600">{wine.tastingNotes}</p>
              </div>
              {/* Precio y botón de compra */}
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-blue-600">{wine.price}</p>
                <button
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={() => alert(`Comprar ${wine.name}`)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Vino1;