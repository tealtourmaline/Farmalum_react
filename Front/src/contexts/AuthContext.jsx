import React, { createContext, useContext, useState } from 'react';
import { login as apiLogin } from '/home/valespinal/Farmalum_react/Front/src/services/userService.js'; // Ajusta la ruta según la ubicación de tu servicio de autenticación

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (loginData) => {
    try {
      const result = await apiLogin(loginData);

      setUser(result);

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
    history.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
