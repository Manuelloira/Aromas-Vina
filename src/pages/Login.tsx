import React, { useState } from "react";
import "../styles/Login.css";
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
    <div className="login-container">
    <div className="login-card">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
  );
};

export default Login;