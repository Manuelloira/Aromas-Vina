import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SerchContext"; // Importa el contexto de búsqueda
import Logoimage from "../assets/image.png";
import "../styles/Header.css";

const Header: React.FC = () => {
  const { isAuthenticated, signOutUser } = useAuth();
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch(); // Usa el contexto de búsqueda

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Actualiza el término de búsqueda
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="language-buttons">
          <button className="language-button">ES</button>
          <button className="language-button">EN</button>
          <button className="language-button">FR</button>
        </div>
        <div className="logo-container">
          <img src={Logoimage} alt="Logo Marca" className="logo" />
        </div>
        <div className="header-actions">
          {isAuthenticated && (
            <Link to="/shopping-cart" className="cart-button">
            🛒 Carrito ({cartItems.length})
          </Link>
          )}
          {isAuthenticated ? (
            <button onClick={signOutUser} className="logout-button">
              🔓 Cerrar sesión
            </button>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-button">
                🔑 Iniciar sesión
              </Link>
              <Link to="/register" className="register-button">
                📝 Registrarse
              </Link>
            </div>
          )}
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </svg>
            <input
              type="search"
              placeholder="Buscar"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange} // Maneja el cambio en el campo de búsqueda
            />
          </div>
        </div>
      </div>
      <nav className="navigation">
        <div className="nav-links">
          <Link to="/home" className="nav-link">
            Inicio
          </Link>
          <Link to="/products" className="nav-link">
            Productos
          </Link>
          <Link to="/origen" className="nav-link">
            Origen
          </Link>
          <Link to="/contacto" className="nav-link">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;