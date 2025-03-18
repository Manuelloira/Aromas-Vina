import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import "../styles/productDetail.css";
import { Item, Product } from "../types/types";

// Datos de los productos (simulados)
const products: Product[] = [
  {
    id: 1,
    name: "Malleolus de Valderramiro 2016",
    description: "El Malleolus de Valderramiro es un vino tinto de la Denominación de Origen Ribera del Duero, elaborado por Bodegas Emilio Moro. Este vino es un homenaje a la parcela Valderramiro, un viñedo centenario de la familia Moro. Con una crianza de 18 meses en barricas de roble francés, este vino es un ejemplo de elegancia y complejidad.",
    price: "120.00€",
    image: "./src/assets/vino1.jpg",
    region: "Ribera del Duero, España",
  },
  // Agrega los demás productos aquí...
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart(); // Contexto del carrito
  const { isAuthenticated } = useAuth(); // Estado de autenticación

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id)) || null;
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>No hay en stock.</p>;

  // Función para agregar al carrito
  const handleAddToCart = (product: Product) => {
    if (!isAuthenticated) {
      alert("INICIA SESIÓN PARA AGREGAR PRODUCTOS AL CARRITO");
      navigate("/login");
      return;
    }

    // Convertir el producto a Item
    const item: Item = {
      id: product.id,
      title: product.name,
      cost: parseFloat(product.price.replace("€", "")), // Convertir el precio a número
      imageUrl: product.image,
      count: 1,
    };

    addItem(item, 1); // Agregar al carrito
    alert("Producto agregado al carrito");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="product-detail-container">
        {/* Imagen del producto */}
        <div className="product-detail-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        {/* Información del producto */}
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">{product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-region">
            <strong>Región:</strong> {product.region}
          </p>

          {/* Botones de acción */}
          <div className="product-detail-buttons">
            <button className="back-button" onClick={() => navigate("/productos")}>
              ← Volver a Productos
            </button>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;