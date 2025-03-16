import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const { cartItems, emptyCart, totalAmount } = useCart(); // ✅ Obtener el carrito y el total
  const { isAuthenticated } = useAuth(); // ✅ Obtener el estado de autenticación
  const navigate = useNavigate();

  // Si el usuario no está autenticado, mostrar mensaje y botón para iniciar sesión
  if (!isAuthenticated) {
    return (
      <div className="checkout-container">
        <h1>Acceso denegado</h1>
        <p>Debes iniciar sesión para finalizar la compra.</p>
        <button className="login-button" onClick={() => navigate("/login")}>
          Iniciar sesión
        </button>
      </div>
    );
  }

  // Si el carrito está vacío, mostrar mensaje y botón para continuar comprando
  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Carrito vacío</h1>
        <p>No hay productos en tu carrito.</p>
        <button className="continue-shopping-button" onClick={() => navigate("/")}>
          Continuar comprando...
        </button>
      </div>
    );
  }

  // Función para manejar la compra
  const handlePurchase = () => {
    alert("¡Compra realizada con éxito!");
    emptyCart(); // Limpiar el carrito después de la compra
    navigate("/"); // Redirigir al inicio
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra.</h1>
      <h2>Total a pagar: {totalAmount.toFixed(2)}€</h2>
      <button className="confirm-button" onClick={handlePurchase}>
        Confirmar Pago.
      </button>
    </div>
  );
};

export default Checkout;