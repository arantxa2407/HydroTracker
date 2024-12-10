import { User } from '../types/User';

const getUser = (): User | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const saveUser = (user: User): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

const updateUserWaterConsumption = (amount: number): void => {
  const user = getUser();
  if (user) {
    user.waterConsumed += amount;
    saveUser(user);
  }
};

export { getUser, saveUser, updateUserWaterConsumption };