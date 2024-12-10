import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser, getUser } from '../controller/userController';

const ConfiguracionUsuario: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState<number>(getUser()?.dailyGoal || 0);
  const navigate = useNavigate();

  const handleSave = () => {
    const user = getUser();
    if (user) {
      user.dailyGoal = dailyGoal * 1000; // Convert liters to milliliters
      saveUser(user);
      navigate('/panel');
    }
  };

  return (
    <div className="container">
      <h2>Configuración de Usuario</h2>
      <p>Agregue su meta diaria en litros</p>
      <input
        type="number"
        value={dailyGoal}
        onChange={(e) => setDailyGoal(Number(e.target.value))}
        placeholder="Meta diaria en litros"
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default ConfiguracionUsuario;