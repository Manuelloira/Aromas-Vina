import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { fotosVino } from "../utils/fotosVino";
import "../styles/ShoppingCart.css"; // Importa el archivo CSS

const ShoppingCart = () => {
  const { cartItems, removeItem, modifyQuantity, totalAmount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.title} className="cart-image" />
                <div>
                  <h2>{item.title}</h2>
                  <p>€{item.cost.toFixed(2)}</p>
                </div>
                <div className="quantity-container">
                  <div className="quantity-controls">
                    <button onClick={() => modifyQuantity(item.id, Math.max(1, item.count - 1))}>-</button>
                    <span>{item.count}</span>
                    <button onClick={() => modifyQuantity(item.id, item.count + 1)}>+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <h2 className="total-price">Total: €{totalAmount.toFixed(2)}</h2>
          <button className="checkout-button" onClick={() => navigate("/checkout")}>
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;