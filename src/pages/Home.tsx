import React from "react";
import HomeImage from "../assets/HOME.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Importa el archivo CSS

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
  const featuredProducts = products.slice(0, 5); // Muestra los primeros 3 productos como destacados

  return (
    <div className="home-container">
      <section className="banner">
        <img src={HomeImage} alt="Fondo Inicio" />
        <div className="banner-content">
          <h1>Aromas de Viña</h1>
          <p>BODEGAS CON ENCANTO</p>
          <Link to="/products">Ver Productos</Link>
        </div>
      </section>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
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