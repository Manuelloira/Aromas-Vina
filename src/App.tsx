import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Origen from "./pages/Origen";
import Vinos from "./pages/Products";
import Contacto from "./pages/ProductDetail";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origen" element={<Origen />} />
        <Route path="/vinos" element={<Vinos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;