import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserDetails, updateUserDetails } from '../services/UserService';

const ProfileView = () => {
  const [userDetails, setUserDetails] = useState({});
  const [newDetails, setNewDetails] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDetails();
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error al obtener detalles del usuario', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setNewDetails({
      ...newDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateDetails = async () => {
      if (!newDetails.confirmCurrentPassword) {
      alert('Por favor, ingresa tu contraseña actual para confirmar los cambios.');
      return;
    }

    try {
      await updateUserDetails(newDetails); // Implementa updateUserDetails en UserService.jsx
      alert('Su información ha sido actualizada');

    } catch (error) {
      console.error('Error al actualizar detalles del usuario', error);
        alert('Error al actualizar los detalles');
    }
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div>
        <p>Usuario: {userDetails.username}</p>
        <p>Correo Electrónico: {userDetails.email}</p>
      </div>
      <div>
        <h3>Modificar Detalles</h3>
        <label>Nuevo usuario:</label>
        <input type="text" name="newUsername" onChange={handleInputChange} />
        <label>Nuevo correo Electrónico:</label>
        <input type="text" name="newEmail" onChange={handleInputChange} />
        <label>Nueva dirección:</label>
        <input type="text" name="newAddress" onChange={handleInputChange} />
        <label>Nueva Contraseña:</label>
        <input type="password" name="newPassword" onChange={handleInputChange} />
        <label>Confirmar Contraseña Actual:</label>
        <input type="password" name="confirmCurrentPassword" onChange={handleInputChange} />
        <button onClick={handleUpdateDetails}>Actualizar información</button>
      </div>
    </div>
  );
};

export default ProfileView;
