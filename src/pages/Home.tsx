import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <img src="/assets/HOME.jpg" alt="Fondo Inicio" className="background-img" />
        <div className="overlay">
          <h1>Aromas de Viña</h1>
          <p>BODEGAS CON ENCANTO</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;