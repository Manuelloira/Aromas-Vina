// Home.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeImage from "../assets/HOME.jpg";
import { Link } from "react-router-dom";

interface HomeProps {
  products: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    region: string;
  }[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const featuredProducts = products.slice(0, 3); // Muestra los primeros 3 productos como destacados

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-900">
        <img
          src={HomeImage}
          alt="Fondo Inicio"
          className="absolute w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white p-6 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Aromas de Viña</h1>
          <p className="text-lg">BODEGAS CON ENCANTO</p>
          <Link
            to="/products"
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          >
            Ver Productos
          </Link>
        </div>
      </section>
      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;