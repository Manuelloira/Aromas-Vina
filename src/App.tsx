import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductDetail from "./pages/ProductDetail";
import { AuthProvider } from "./context/AuthContext"; // Importa el proveedor
import { CartProvider } from "./context/CartContext"; // Importa el proveedor

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
  const db = getFirestore();

  // Cargar productos desde Firestore al iniciar la aplicación
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products"); // "products" es la colección en Firestore
        const querySnapshot = await getDocs(productsRef);

        if (!querySnapshot.empty) {
          const productsData: Product[] = querySnapshot.docs.map((doc) => ({
            id: doc.id, // El ID del documento
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            image: doc.data().image,
            region: doc.data().region,
          }));
          setProducts(productsData);
        } else {
          console.log("No hay datos disponibles");
        }
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProducts();
  }, [db]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/home" element={<Home products={products} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/Origen" element={<Products products={products} />} />
          <Route path="/Login"element={<Products products={products} />} />
          <Route path="/Registro"element={<Products products={products} />} />
          <Route path="/ShoppingCart"element={<Products products={products} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;