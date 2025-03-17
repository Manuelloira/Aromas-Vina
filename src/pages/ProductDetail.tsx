import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";


import "../styles/productDetail.css";

// Importa las imágenes de los vinos
import vino1 from "../assets/vino1.jpg";
import vino2 from "../assets/vino2.jpg";
import vino3 from "../assets/vino3.jpg";
import vino4 from "../assets/vino4.jpg";
import vino5 from "../assets/vino5.jpg";
import vino6 from "../assets/vino6.jpg";
import vino7 from "../assets/vino7.jpg";
import vino8 from "../assets/vino8.jpg";
import vino9 from "../assets/vino9.jpg";
import vino10 from "../assets/vino10.jpg";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number;
}

// Datos de los productos (simulados)
const FeatProducts: Product[] = [
  {
    id: 1,
    name: "Malleolus de Valderramiro 2016",
    price: 120,
    image: vino1,
    description:
      "El Malleolus de Valderramiro es un vino tinto de la Denominación de Origen Ribera del Duero, elaborado por Bodegas Emilio Moro. Este vino es un homenaje a la parcela Valderramiro, un viñedo centenario de la familia Moro. Con una crianza de 18 meses en barricas de roble francés, este vino es un ejemplo de elegancia y complejidad.",
    category: "Vinos Tintos",
  },
  {
    id: 2,
    name: "Ramón Do Casar Ribeiro",
    price: 15,
    image: vino2,
    description:
      "El Ramón Do Casar es un vino blanco de la Denominación de Origen Ribeiro, elaborado con uvas autóctonas como Treixadura, Loureira y Albariño. Este vino destaca por su frescura, elegancia y aromas frutales, siendo un excelente representante de los vinos gallegos.",
    category: "Vinos Blancos",
  },
  {
    id: 3,
    name: "Montrachet Grand Cru",
    price: 500,
    image: vino3,
    description:
      "El Montrachet Grand Cru es uno de los vinos blancos más exclusivos y prestigiosos del mundo, elaborado en la región de Borgoña, Francia. Producido por Louis Latour, este vino es un ejemplo de elegancia, complejidad y longevidad. Con uvas Chardonnay cultivadas en el célebre viñedo de Montrachet, este vino es un ícono de la enología mundial.",
    category: "Vinos Blancos",
  },
  {
    id: 4,
    name: "L'Ermita de l'Ermità 2000",
    price: 800,
    image: vino4,
    description:
      "L'Ermita de l'Ermità es un vino tinto de la Denominación de Origen Priorat, elaborado por la bodega Álvaro Palacios. Este vino, procedente de un viñedo histórico de más de 80 años, es un ejemplo de elegancia y complejidad. Con una crianza prolongada, este Gran Vino de Guarda es una joya de la enología española.",
    category: "Vinos Tintos",
  },
  {
    id: 5,
    name: "Vega Sicilia Único 1985",
    price: 1200,
    image: vino5,
    description:
      "Vega Sicilia Único es uno de los vinos más emblemáticos de España, procedente de la Denominación de Origen Ribera del Duero. Este vino, elaborado principalmente con uvas Tinto Fino (Tempranillo), es un ejemplo de elegancia y longevidad. La añada 1985 es considerada una de las mejores, con un equilibrio perfecto entre fruta, taninos y acidez. Ideal para coleccionistas y amantes de los grandes vinos.",
    category: "Vinos Tintos",
  },
  {
    id: 6,
    name: "Château Angélus 1er Grand Cru Classé 1999",
    price: 900,
    image: vino6,
    description:
      "Château Angélus es uno de los más prestigiosos vinos de Saint-Émilion, en la región de Burdeos. La añada 1999 es un blend de Merlot y Cabernet Franc, que ofrece una complejidad aromática con notas de frutas negras, especias y toques de roble. Este vino es un ejemplo de la excelencia bordelesa, con un potencial de guarda excepcional.",
    category: "Vinos Tintos",
  },
  {
    id: 7,
    name: "Weingut Kanzemer Berg Maximilian von Othegraven Kanzem",
    price: 150,
    image: vino7,
    description:
      "Este vino blanco es un Riesling de la región de Saar, en Alemania, elaborado por la bodega von Othegraven. Es un vino de gran elegancia, con notas cítricas, minerales y un toque de petricor. Perfecto para maridar con mariscos o platos ligeros, este Riesling es un ejemplo de la finura y precisión de los vinos alemanes.",
    category: "Vinos Blancos",
  },
  {
    id: 8,
    name: "Emilio Moro Clon de la Familia 2011",
    price: 300,
    image: vino8,
    description:
      "El Clon de la Familia es uno de los vinos más exclusivos de Bodegas Emilio Moro, en la Denominación de Origen Ribera del Duero. Este vino, elaborado con uvas Tinto Fino (Tempranillo) de viñedos centenarios, es un ejemplo de potencia y elegancia. Con notas de frutas negras, especias y un toque de vainilla, es un vino ideal para guardar y disfrutar en ocasiones especiales.",
    category: "Vinos Tintos",
  },
  {
    id: 9,
    name: "Clos Sainte-Sophie Blanc de Blancs Brut Nature 2014",
    price: 200,
    image: vino9,
    description:
      "Este champán es un Blanc de Blancs elaborado por Jacques Lassaigne en la región de Champagne, Francia. Proveniente de viñedos de Chardonnay, es un vino espumoso de gran pureza, con notas cítricas, florales y un toque mineral. Brut Nature, sin adición de azúcar, lo que lo convierte en un champán fresco y vibrante.",
    category: "Espumosos",
  },
  {
    id: 10,
    name: "La Nieta 2016",
    price: 180,
    image: vino10,
    description:
      "La Nieta es un vino tinto de la Denominación de Origen Rioja, elaborado por la bodega Viñedos de Páganos. Este vino, hecho con uvas Tempranillo de viñedos viejos, es un ejemplo de elegancia y frescura. Con notas de frutas rojas, especias y un toque de roble, es un vino perfecto para disfrutar en su juventud o guardar durante algunos años.",
    category: "Vinos Tintos",
  },
];


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const addItem = (item: Product & { quantity: number }) => {
    // Lógica para agregar el item al carrito
    console.log("Producto agregado:", item);
  };
  const { isAuthenticated } = useAuth(); // Estado de autenticación
  const [product, setProduct] = useState<Product | null>(null);

  // Buscar el producto por ID
  useEffect(() => {
    const foundProduct = FeatProducts.find((p) => p.id === Number(id)) || null;
    setProduct(foundProduct);
  }, [id]);

  // Si no hay producto, mostrar mensaje
  if (!product) return <p>No hay en stock.</p>;

  // Función para agregar al carrito
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("INIICIA SESIÓN PARA AGREGAR PRODUCTOS AL CARRITO");
      navigate("/login");
      return;
    }
    if (!product) return;

    addItem({ ...product, quantity: 1 });
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
          <p className="product-detail-price">€{product.price.toFixed(2)}</p>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-category">
            <strong>Categoría:</strong> {product.category}
          </p>


          {/* Botones de acción */}
          <div className="product-detail-buttons">
            <button
              className="back-button"
              onClick={() => navigate("/productos")}
            >
              ← Volver a Productos
            </button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;