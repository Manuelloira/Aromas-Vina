import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from "firebase/auth";

interface User {
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  signUp: (
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string,
    birthDate: string
  ) => Promise<{ success: boolean; message: string }>; // Devuelve un objeto con success y message
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

  const signUp = async (
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string,
    birthDate: string
  ): Promise<{ success: boolean; message: string }> => {
    try {
      // Validar la contraseña antes de continuar
      if (password.length < 6) {
        return { success: false, message: "⚠️ La contraseña es demasiado corta. Debe tener al menos 6 caracteres." };
      }

      // Verificar si el correo ya está en uso
      const existingMethods = await fetchSignInMethodsForEmail(auth, email);
      if (existingMethods.length > 0) {
        return { success: false, message: "⚠️ Este correo ya está en uso. Por favor, inicia sesión." };
      }

      // Crear el usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar datos adicionales en Firestore
      const db = getFirestore();
      const userRef = doc(collection(db, "users"), user.uid);
      await setDoc(userRef, {
        email,
        username,
        firstName,
        lastName,
        birthDate,
      });

      // Enviar correo de verificación (opcional)
      await sendEmailVerification(user);

      // Actualizar el estado del usuario
      setCurrentUser({ email, username, firstName, lastName, birthDate });
      setIsAuthenticated(true);

      // Éxito: Retornar mensaje de éxito
      return { success: true, message: "✅ Registro exitoso. Se ha enviado un correo de verificación." };
    } catch (error: any) {
      // Manejar errores de Firebase
      if (error.code === "auth/weak-password") {
        return { success: false, message: "⚠️ La contraseña es demasiado corta. Debe tener al menos 6 caracteres." };
      } else {
        return { success: false, message: `⚠️ Error al registrarse: ${error.message}` };
      }
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