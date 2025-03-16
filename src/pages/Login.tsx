import React, { useState } from "react";
import { AuthCredential, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error al iniciar sesión: " + (error as Error).message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="mt-8 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mt-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;