import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../controller/userController';
import { User } from '../types/User';

const Register: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const newUser: User = {
      nombre,
      username,
      password,
      dailyGoal: 0, // Default value
      waterConsumed: 0,
    };
    saveUser(newUser);
    console.log('Usuarios registrados:', JSON.parse(localStorage.getItem('users') || '[]'));
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Registrarse</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
    </div>
  );
};

export default Register;