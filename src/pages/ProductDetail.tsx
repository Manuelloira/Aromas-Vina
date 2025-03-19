import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import "../styles/productDetail.css";
import { Item, Product } from "../types/types";
import { fotosVino } from "../utils/fotosVino";

// Datos de los productos 
const products: Product[] = [
  {
    id: 1,
    name: "Malleolus de Valderramiro 2016",
    description: "El Malleolus de Valderramiro es un vino tinto de la Denominación de Origen Ribera del Duero, elaborado por Bodegas Emilio Moro. Este vino es un homenaje a la parcela Valderramiro, un viñedo centenario de la familia Moro. Con una crianza de 18 meses en barricas de roble francés, este vino es un ejemplo de elegancia y complejidad.",
    price: "120.00€",
    image: fotosVino[1],
    region: "Ribera del Duero, España",
  },
  {
    id: 2,
    name: "Ramón Do Casar Ribeiro",
    description: "El Ramón Do Casar es un vino blanco de la Denominación de Origen Ribeiro, elaborado con uvas autóctonas como Treixadura, Loureira y Albariño. Este vino destaca por su frescura, elegancia y aromas frutales, siendo un excelente representante de los vinos gallegos.",
    price: "15.00€",
    image: fotosVino[2],
    region: "Ribeiro, Galicia, España",
  },
  {
    id: 3,
    name: "Montrachet Grand Cru",
    description: "El Montrachet Grand Cru es uno de los vinos blancos más exclusivos y prestigiosos del mundo, elaborado en la región de Borgoña, Francia. Producido por Louis Latour, este vino es un ejemplo de elegancia, complejidad y longevidad. Con uvas Chardonnay cultivadas en el célebre viñedo de Montrachet, este vino es un ícono de la enología mundial.",
    price: "500.00€",
    image: fotosVino[3],
    region: "Beaune, Côte-d'Or, Borgoña, Francia",
  },
  {
    id: 4,
    name: "L'Ermita de l'Ermità 2000",
    description: "L'Ermita de l'Ermità es un vino tinto de la Denominación de Origen Priorat, elaborado por la bodega Álvaro Palacios. Este vino, procedente de un viñedo histórico de más de 80 años, es un ejemplo de elegancia y complejidad. Con una crianza prolongada, este Gran Vino de Guarda es una joya de la enología española.",
    price: "€800.00",
    image: fotosVino[4],
    region: "Priorat, Cataluña, España",
  },
  {
    id: 5,
    name: "Vega Sicilia Único 1985",
    description: "Vega Sicilia Único es uno de los vinos más emblemáticos de España, procedente de la Denominación de Origen Ribera del Duero. Este vino, elaborado principalmente con uvas Tinto Fino (Tempranillo), es un ejemplo de elegancia y longevidad. La añada 1985 es considerada una de las mejores, con un equilibrio perfecto entre fruta, taninos y acidez. Ideal para coleccionistas y amantes de los grandes vinos.",
    price: "€1,200.00",
    image: fotosVino[5],
    region: "Ribera del Duero, Castilla y León, España",
  },
  {
    id: 6,
    name: "Château Angélus 1er Grand Cru Classé 1999",
    description: "Château Angélus es uno de los más prestigiosos vinos de Saint-Émilion, en la región de Burdeos. La añada 1999 es un blend de Merlot y Cabernet Franc, que ofrece una complejidad aromática con notas de frutas negras, especias y toques de roble. Este vino es un ejemplo de la excelencia bordelesa, con un potencial de guarda excepcional.",
    price: "€900.00",
    image: fotosVino[6],
    region: "Saint-Émilion, Burdeos, Francia",
  },
  {
    id: 7,
    name: "Weingut Kanzemer Berg Maximilian von Othegraven Kanzem",
    description: "Este vino blanco es un Riesling de la región de Saar, en Alemania, elaborado por la bodega von Othegraven. Es un vino de gran elegancia, con notas cítricas, minerales y un toque de petricor. Perfecto para maridar con mariscos o platos ligeros, este Riesling es un ejemplo de la finura y precisión de los vinos alemanes.",
    price: "€150.00",
    image: fotosVino[7],
    region: "Saar, Alemania",
  },
  {
    id: 8,
    name: "Emilio Moro Clon de la Familia 2011",
    description: "El Clon de la Familia es uno de los vinos más exclusivos de Bodegas Emilio Moro, en la Denominación de Origen Ribera del Duero. Este vino, elaborado con uvas Tinto Fino (Tempranillo) de viñedos centenarios, es un ejemplo de potencia y elegancia. Con notas de frutas negras, especias y un toque de vainilla, es un vino ideal para guardar y disfrutar en ocasiones especiales.",
    price: "€300.00",
    image: fotosVino[8],
    region: "Ribera del Duero, Castilla y León, España",
  },
  {
    id: 9,
    name: "Clos Sainte-Sophie Blanc de Blancs Brut Nature 2014",
    description: "Este champán es un Blanc de Blancs elaborado por Jacques Lassaigne en la región de Champagne, Francia. Proveniente de viñedos de Chardonnay, es un vino espumoso de gran pureza, con notas cítricas, florales y un toque mineral. Brut Nature, sin adición de azúcar, lo que lo convierte en un champán fresco y vibrante.",
    price: "€200.00",
    image: fotosVino[9],
    region: "Champagne, Francia",
  },
  {
    id: 10,
    name: "La Nieta 2016",
    description: "La Nieta es un vino tinto de la Denominación de Origen Rioja, elaborado por la bodega Viñedos de Páganos. Este vino, hecho con uvas Tempranillo de viñedos viejos, es un ejemplo de elegancia y frescura. Con notas de frutas rojas, especias y un toque de roble, es un vino perfecto para disfrutar en su juventud o guardar durante algunos años.",
    price: "€180.00",
    image: fotosVino[10],
    region: "Rioja, España",
  },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart(); 
  const { isAuthenticated } = useAuth(); 

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