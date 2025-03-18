import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "../src/context/SerchContext"; 
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Contacto from "./pages/Contacto";
import Origen from "./pages/Origen";
import ProductList from "./components/ProductList";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

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

  useEffect(() => {
    const productosRef = ref(db, "/");
    onValue(productosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProducts(productosArray);
      }
    });
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider> {/* Envuelve con SearchProvider */}
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home products={products} />} />
                <Route path="/products" element={<Products products={products} />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/origen" element={<Origen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;