import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Logoimage from "../assets/image.png";
import "../styles/navbar.css";

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="flex flex-col bg-white shadow-md w-screen">
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">ES</button>
          <button className="px-4 py-2 bg-gray-200 rounded">EN</button>
          <button className="px-4 py-2 bg-gray-200 rounded">FR</button>
        </div>
        <div className="flex items-center">
          <img
            src={Logoimage}
            alt="Logo Marca"
            className="w-24 h-24 object-contain opacity-80"
          />
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <Link to="/cart" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              🛒 Carrito ({cart.length})
            </Link>
          )}
          {isLoggedIn ? (
            <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              🔓 Cerrar sesión
            </button>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                🔑 Iniciar sesión
              </Link>
              <Link to="/register" className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                📝 Registrarse
              </Link>
            </div>
          )}
          <div className="flex items-center bg-gray-100 p-2 rounded">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24">
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </svg>
            <input
              type="search"
              placeholder="Buscar"
              className="ml-2 bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
      <nav className="bg-gray-800 py-3 w-full">
        <div className="flex justify-around items-center w-full max-w-5xl mx-auto">
          <Link to="/home" className="px-6 py-2 text-white text-lg font-semibold bg-gray-700 rounded-lg hover:bg-gray-600">
            Inicio
          </Link>
          <Link to="/products" className="px-6 py-2 text-white text-lg font-semibold bg-gray-700 rounded-lg hover:bg-gray-600">
            Productos
          </Link>
          <Link to="/origen" className="px-6 py-2 text-white text-lg font-semibold bg-gray-700 rounded-lg hover:bg-gray-600">
            Origen
          </Link>
          <Link to="/contacto" className="px-6 py-2 text-white text-lg font-semibold bg-gray-700 rounded-lg hover:bg-gray-600">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
