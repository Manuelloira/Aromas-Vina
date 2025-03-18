import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { Item } from "../types/types";

interface CartContextProps {
  cartItems: Item[];
  addItem: (item: Item, quantity: number) => void;
  removeItem: (itemId: number) => void; // Cambiado a number
  modifyQuantity: (itemId: number, count: number) => void; // Cambiado a number
  emptyCart: () => void;
  totalAmount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, currentUser } = useAuth();
  const [cartItems, setCartItems] = useState<Item[]>([]);

  // Cargar datos desde localStorage cuando el usuario inicia sesión
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      const savedCart = localStorage.getItem(`cart-${currentUser.email}`);
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    } else {
      setCartItems([]); // Reiniciar el carrito si no hay sesión
    }
  }, [isAuthenticated, currentUser]);

  // Guardar cambios en localStorage cuando el carrito se actualiza
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      localStorage.setItem(`cart-${currentUser.email}`, JSON.stringify(cartItems));
    }
  }, [cartItems, isAuthenticated, currentUser]);

  const addItem = (item: Item, quantity: number) => {
    if (!isAuthenticated) {
      alert("Debes estar autenticado para añadir productos al carrito.");
      return;
    }

    setCartItems((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id);
      if (existingItem) {
        return prevCart.map((product) =>
          product.id === item.id ? { ...product, count: product.count + quantity } : product
        );
      }
      return [...prevCart, { ...item, count: quantity }];
    });
  };

  const modifyQuantity = (itemId: number, count: number) => {
    setCartItems((prevCart) =>
      prevCart.map((product) =>
        product.id === itemId ? { ...product, count } : product
      )
    );
  };

  const removeItem = (itemId: number) => {
    setCartItems((prevCart) => prevCart.filter((product) => product.id !== itemId));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce((total, product) => total + product.cost * product.count, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, modifyQuantity, emptyCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe utilizarse dentro de un CartProvider");
  }
  return context;
};