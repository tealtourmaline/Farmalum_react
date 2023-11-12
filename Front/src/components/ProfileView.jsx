import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserDetails, updateUserDetails } from './services/UserService'; // Ajusta la ruta según la ubicación de tu UserService
import { useAuth } from './contexts/AuthContext';

const ProfileView = () => {
  const [userDetails, setUserDetails] = useState({});
  const [newDetails, setNewDetails] = useState({
    newUsername: '',
    newEmail: '',
    newAddress: '',
    newPassword: '',
    confirmCurrentPassword: '',
  });
  const { userId } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserDetails(userId);
        setUserDetails(response);
      } catch (error) {
        console.error('Error al obtener detalles del usuario', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

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
      // Asegúrate de pasar el ID del usuario a updateUserDetails
      await updateUserDetails(userId, newDetails.newUsername, newDetails.newEmail, newDetails.newPassword);
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
