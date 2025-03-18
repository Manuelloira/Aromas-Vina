import React from "react";
import HomeImage from "../assets/HOME.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { fotosVino } from "../utils/fotosVino";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
}

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const featuredProducts = products.slice(0, 5); // Muestra los primeros 5 productos como destacados

  return (
    <div className="home-container">
      {/* Sección del banner */}
      <section className="banner">
        <img src={HomeImage} alt="Fondo Inicio" className="banner-image" />
        <div className="banner-content">
          <h1>Aromas de Viña</h1>
          <p>BODEGAS CON ENCANTO</p>
          <Link to="/products" className="banner-link">
            Ver Productos
          </Link>
        </div>
      </section>

      {/* Sección de productos destacados */}
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img
                  src={fotosVino[product.id]}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;