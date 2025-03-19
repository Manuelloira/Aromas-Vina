import React from "react";
import HomeImage from "../assets/HOME.jpg";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SerchContext"; // Importa el contexto de búsqueda
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
  const { searchTerm } = useSearch(); // Usa el término de búsqueda

  // Filtrar productos destacados según el término de búsqueda
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5); // Muestra los primeros 5 productos filtrados

  return (
    <div className="home-container">
      <section className="container">
        <div className="banner-content">
          <h1>Aromas de Viña</h1>
          <p>BODEGAS CON ENCANTO</p>
          <Link to="/products" className="banner-link">
            Ver Productos
          </Link>
        </div>
      </section>


      {/* Sección de productos destacados */}
      <section className="featured-products" style={{ marginTop: "40px" }}>
        <h2>Productos Destacados</h2>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
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
        ) : (
          <p className="no-results">No se encontraron productos.</p>
        )}
      </section>
    </div>
  );
};

export default Home;