import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Contacto from "./pages/Contacto";
import Origen from "./pages/Origen";
import ProductList from "./components/ProductList";
import { db } from "./firebase"; // Importa la instancia de Realtime Database
import { ref, onValue } from "firebase/database";

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

  // Cargar productos desde Realtime Database al iniciar la aplicación
  useEffect(() => {
    const productosRef = ref(db, "/"); // Referencia al nodo "products"

    // Escucha cambios en los datos
    onValue(productosRef, (snapshot) => {
      const data = snapshot.val(); // Obtiene los datos
      console.log("Datos recuperados:", data); // Depuración

      if (data) {
        // Convierte el objeto de productos en un array
        const productosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProducts(productosArray);
      } else {
        console.log("No hay productos disponibles.");
      }
    });
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Routes>
              {/* Redirige desde la raíz (/home) */}
              <Route path="/" element={<Navigate to="/home" />} />

              {/* Otras rutas */}
              <Route path="/home" element={<Home products={products} />} />
              <Route path="/products" element={<Products products={products} />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Origen" element={<Origen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/ShoppingCart" element={<ShoppingCart />} />
                            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;