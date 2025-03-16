import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../firebase"; // Importa la instancia de auth

interface User {
  email: string;
  username?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  signUp: (email: string, password: string, username?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser({ email: firebaseUser.email || "" });
        setIsAuthenticated(true);
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, username?: string) => {
    try {
      const existingMethods = await fetchSignInMethodsForEmail(auth, email);
      if (existingMethods.length > 0) {
        alert("⚠️ Este correo ya está en uso. Por favor, inicia sesión.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser({ email: userCredential.user.email || "", username });
      setIsAuthenticated(true);
      alert("✅ Registro exitoso");
    } catch (error: any) {
      alert(`⚠️ Error al registrarse: ${error.message}`);
      console.error("Registro fallido:", error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser({ email: userCredential.user.email || "" });
      setIsAuthenticated(true);
      alert("✅ Sesión iniciada con éxito");
    } catch (error: any) {
      alert(`⚠️ Error al iniciar sesión: ${error.message}`);
      console.error("Inicio de sesión fallido:", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setIsAuthenticated(false);
      alert("✅ Has cerrado sesión");
    } catch (error: any) {
      alert(`⚠️ Error al cerrar sesión: ${error.message}`);
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, signUp, signIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};