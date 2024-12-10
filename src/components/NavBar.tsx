import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../controller/userController';

interface NavbarProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsAuthenticated }) => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav>
      <div>
        <Link to="/panel">Panel</Link>
        <Link to="/configuracion">Configuración</Link>
      </div>
      <div>
        <span>{user?.nombre}</span>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;