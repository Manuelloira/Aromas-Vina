import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeImage from "../assets/HOME.jpg";
import"../pages/globals.css";

const Home: React.FC = () => {
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;