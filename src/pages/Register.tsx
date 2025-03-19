import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Register.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { signUp } = useAuth();

  // Validar si el usuario es mayor de edad
  const isAdult = (date: string): boolean => {
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  };

  // Validar el formulario
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!username) newErrors.username = "El nombre de usuario es obligatorio.";
    if (!password) newErrors.password = "La contraseña es obligatoria.";
    if (!firstName) newErrors.firstName = "El nombre es obligatorio.";
    if (!lastName) newErrors.lastName = "Los apellidos son obligatorios.";
    if (!email) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El email no es válido.";
    }
    if (!birthDate) {
      newErrors.birthDate = "La fecha de nacimiento es obligatoria.";
    } else if (!isAdult(birthDate)) {
      newErrors.birthDate = "Debes ser mayor de edad para registrarte.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await signUp(email, password, username, firstName, lastName, birthDate);
      alert(result.message); 

      if (result.success) {
        navigate("/"); 
      }
    } catch (error) {
      alert("Error en el registro. Inténtalo de nuevo.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Nombre de usuario */}
        <div className="form-group">
          <label>Nombre de usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        {/* Contraseña */}
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {/* Nombre */}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        {/* Apellidos */}
        <div className="form-group">
          <label>Apellidos</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Fecha de nacimiento */}
        <div className="form-group">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
        </div>

        {/* Botón de registro */}
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default Register;