import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/globals.css";

// Importa la imagen del vino (puedes cambiarla por la correspondiente)
import vinoImage from "../assets/vino2.jpg";

const Vino2: React.FC = () => {
  // Datos del vino Ramón Do Casar Ribeiro
  const wine = {
    id: 2,
    name: "Ramón Do Casar Ribeiro",
    description:
      "El Ramón Do Casar es un vino blanco de la Denominación de Origen Ribeiro, elaborado con uvas autóctonas como Treixadura, Loureira y Albariño. Este vino destaca por su frescura, elegancia y aromas frutales, siendo un excelente representante de los vinos gallegos.",
    price: "€15.00",
    image: vinoImage,
    region: "Ribeiro, Galicia, España",
    type: "Blanco",
    alcohol: "12.5%",
    pairing:
      "Ideal para acompañar mariscos, pescados, ensaladas y platos ligeros.",
    tastingNotes:
      "En nariz, presenta aromas intensos a frutas blancas como manzana y pera, con toques cítricos y florales. En boca, es fresco, ligero y equilibrado, con una acidez vibrante y un final largo y refrescante.",
    vineyard: "Viñedos de la zona de Ribeiro",
    aging: "Fermentado en acero inoxidable para preservar su frescura",
    servingTemperature: "8-10°C",
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

export default Vino2;