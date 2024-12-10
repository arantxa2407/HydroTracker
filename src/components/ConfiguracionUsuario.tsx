import React, { useState } from 'react';
import { saveUser, getUser } from '../controller/userController';

const ConfiguracionUsuario: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState<number>(getUser()?.dailyGoal || 0);

  const handleSave = () => {
    const user = getUser();
    if (user) {
      user.dailyGoal = dailyGoal;
      saveUser(user);
    }
  };

  return (
    <div className="container">
      <h2>Configuración de Usuario</h2>
      <input
        type="number"
        value={dailyGoal}
        onChange={(e) => setDailyGoal(Number(e.target.value))}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default ConfiguracionUsuario;