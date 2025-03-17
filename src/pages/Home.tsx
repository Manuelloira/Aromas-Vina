import React from "react";
import HomeImage from "../assets/HOME.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import ProductList from "../components/ProductList";

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
        <img src={HomeImage} alt="Fondo Inicio" />
        <div className="banner-content">
          <h1>Aromas de Viña</h1>
          <p>BODEGAS CON ENCANTO</p>
          <Link to="/products">Ver Productos</Link>
        </div>
      </section>

      {/* Sección de productos destacados */}
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

      {/* Sección de todos los productos usando ProductList */}
      <section className="all-products">
        <h2>Todos Nuestros Productos</h2>
        <ProductList /> {/* No es necesario pasar la prop "products" */}
      </section>
    </div>
  );
};

export default Home;