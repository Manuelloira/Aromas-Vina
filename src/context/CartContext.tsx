import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./AuthContext";

interface Item {
  id: string;
  title: string;
  cost: number;
  imageUrl: string;
  count: number;
}

interface CartContextProps {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  modifyQuantity: (itemId: string, count: number) => void;
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

  const addItem = (item: Item) => {
    if (!isAuthenticated) {
      alert("Debes estar autenticado para añadir productos al carrito.");
      return;
    }

    setCartItems((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id);
      if (existingItem) {
        return prevCart.map((product) =>
          product.id === item.id ? { ...product, count: product.count + 1 } : product
        );
      }
      return [...prevCart, { ...item, count: 1 }];
    });
  };

  const modifyQuantity = (itemId: string, count: number) => {
    setCartItems((prevCart) =>
      prevCart.map((product) =>
        product.id === itemId ? { ...product, count } : product
      )
    );
  };

  const removeItem = (itemId: string) => {
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
