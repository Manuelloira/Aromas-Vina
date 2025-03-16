import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Importa db desde firebase.js
import { ref, get } from "firebase/database"; // Importa funciones de Firebase Realtime Database
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

// Define el tipo de un producto
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Cargar productos desde Firebase al iniciar la aplicación
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = ref(db, "products"); // "products" es el nodo raíz
        const snapshot = await get(productsRef);
        if (snapshot.exists()) {
          const productsData: Product[] = Object.entries(snapshot.val()).map(
            ([id, data]: [string, any]) => ({
              id,
              name: data.name,
              description: data.description,
              price: data.price,
              image: data.image,
              region: data.region,
            })
          );
          setProducts(productsData);
        } else {
          console.log("No hay datos disponibles");
        }
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<Products products={products} />} />
          {/* Otras rutas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;