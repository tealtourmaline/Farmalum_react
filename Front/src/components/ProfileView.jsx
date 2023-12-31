import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, updateall } from '../services/userService'; // Ajusta la ruta según la ubicación de tu UserService
import { AuthContext } from '../contexts/AuthContext';  
import { useContext } from 'react';

const ProfileView = () => {
  const [userDetails, setUserDetails] = useState({});
  const [newDetails, setNewDetails] = useState({
    newUsername: '',
    newEmail: '',
    newAddress: '',
    newPassword: '',
    confirmCurrentPassword: '',
  });
  const { userId } = useContext(AuthContext);
  const history = useNavigate();

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
      await updateall(userId, newDetails.newUsername, newDetails.newEmail, newDetails.newPassword);
      alert('Su información ha sido actualizada');

    } catch (error) {
      console.error('Error al actualizar detalles del usuario', error);
      alert('Error al actualizar los detalles');
    }
  };

  return (
    <div>
      <div>
        <p>Usuario: {userDetails.username}</p>
        <p>Correo Electrónico: {userDetails.email}</p>
      </div>
      <div>
      <div>
    <h3>Modificar Detalles</h3>

    <div style={{ marginBottom: '20px' }}>
      <div>
        <label style={{ fontWeight: 'bold' }}>Nuevo usuario:</label>
      </div>
      <div>
        <input type="text" name="newUsername" onChange={handleInputChange} style={{ marginTop: '8px' }} />
      </div>
    </div>

    <div style={{ marginBottom: '20px' }}>
      <div>
        <label style={{ fontWeight: 'bold' }}>Nuevo correo electrónico:</label>
      </div>
    <div>
      <input type="text" name="newEmail" onChange={handleInputChange} style={{ marginTop: '8px' }} />
    </div>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <div>
        <label style={{ fontWeight: 'bold' }}>Nueva dirección:</label>
      </div>
    <div>
      <input type="text" name="newAddress" onChange={handleInputChange} style={{ marginTop: '8px' }} />
    </div>
    </div>

    <div style={{ marginBottom: '20px' }}>
     <div>
      <label style={{ fontWeight: 'bold' }}>Nueva contraseña:</label>
      </div>
    <div>
      <input type="password" name="newPassword" onChange={handleInputChange} style={{ marginTop: '8px' }} />
      </div>
    </div>

    <div style={{ marginBottom: '20px' }}>
      <div>
      <label style={{ fontWeight: 'bold' }}>Confirmar contraseña actual:</label>
    </div>
    <div>
      <input type="password" name="confirmCurrentPassword" onChange={handleInputChange} style={{ marginTop: '8px' }} />
    </div>
    </div>

    <button onClick={handleUpdateDetails}>Actualizar información</button>
    </div>

    </div>
  </div>
  );
};

export default ProfileView;
