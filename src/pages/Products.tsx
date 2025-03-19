import React from "react";
import { fotosVino } from "../utils/fotosVino";
import "../styles/Products.css"; // Importa el archivo CSS
import { useSearch } from "../context/SerchContext"; // Importa el contexto de búsqueda
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { searchTerm } = useSearch(); // Obtén el término de búsqueda del contexto
  const navigate = useNavigate(); // Usa el hook useNavigate

  // Filtra los productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="products-container">
      <h2 className="products-title">Nuestros Vinos</h2>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            {/* Imagen del producto */}
            <div className="image-container">
              <img
                src={fotosVino[product.id]}
                alt={product.name}
                className="product-image"
              />
            </div>

            {/* Información del producto */}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button onClick={() => navigate(`/product/${product.id}`)}>
                Más información
              </button>
            </div>

            {/* Etiqueta de región */}
            <div className="region-tag">{product.region}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;