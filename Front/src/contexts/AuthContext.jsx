import React, { createContext, useContext, useState } from 'react';
import { login as apiLogin } from '../services/userService'; // Ajusta la ruta según la ubicación de tu servicio de autenticación
import { isUserAdmin } from '../services/userService';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigateTo = useNavigate();

  const login = async (user) => {
    try {
      let result;
      result = await apiLogin(user);
      setUser(result);
      const isAdmin = await isUserAdmin(result.username);
      setIsAdmin(isAdmin);
      if (isAdmin) {
        navigateTo('/profile/admin');
      } else {
        navigateTo('/profile');
      }
      // Retorna el resultado para que el componente que llamó a login pueda manejarlo si es necesario
      return result;
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  };

  const logout = () => {
    // Limpiar el usuario al cerrar sesión
    setUser(null);
    navigateTo('/');
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
