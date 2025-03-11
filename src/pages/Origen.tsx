import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Origen: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <img src="/assets/ORIGEN.jpg" alt="Fondo Vinos" className="background-img" />
        <div className="origen">
          <h1 className="titulo-origen">Nuestro Origen</h1>
          <div className="contenido-origen">
            <div className="imagen-origen">
              <img src="/assets/CEO.jpg" alt="Foto de Manuel Loira" className="ceo-img" />
            </div>
            <div className="texto-origen">
              <p>Manuel Loira es un joven visionario...</p>
              <p>Con una formación rigurosa en enología...</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Origen;