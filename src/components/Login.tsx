import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../controller/userController';

interface LoginProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = getUser();
    if (user && user.username === username && user.password === password) {
      setIsAuthenticated(true);
      navigate('/panel');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
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
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
    </div>
  );
};

export default Login;