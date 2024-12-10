import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfiguracionUsuario from './components/ConfiguracionUsuario';
import PanelPrincipal from './components/PanelPrincipal';
import Login from './components/Login';
import Register from './components/Registro';
import Navbar from './components/NavBar';
import { getUser } from './controller/userController';
import './App.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const user = getUser();
    setIsAuthenticated(!!user);
  }, []);

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route path="/configuracion" element={<ConfiguracionUsuario />} />
        <Route path="/panel" element={<PanelPrincipal />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
};

export default App;