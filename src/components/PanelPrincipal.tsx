import React, { useState, useEffect } from 'react';
import { getUser, updateUserWaterConsumption, saveUser } from '../controller/userController';

const PanelPrincipal: React.FC = () => {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleAddWater = (amount: number) => {
    updateUserWaterConsumption(amount);
    setUser(getUser());
  };

  const handleReset = () => {
    const updatedUser = getUser();
    if (updatedUser) {
      updatedUser.waterConsumed = 0;
      saveUser(updatedUser);
      setUser(updatedUser);
    }
  };

  return (
    <div className="container">
      <h2>Panel Principal</h2>
      <p>Agua consumida hoy: {user?.waterConsumed} ml</p>
      <p>Meta diaria: {user?.dailyGoal} ml</p>
      <button onClick={() => handleAddWater(250)}>Agregar 250ml</button>
      <button onClick={() => handleAddWater(500)}>Agregar 500ml</button>
      <button onClick={handleReset}>Reiniciar Conteo</button>
      {user && user.waterConsumed >= user.dailyGoal && <p>¡Meta diaria alcanzada!</p>}
    </div>
  );
};

export default PanelPrincipal;