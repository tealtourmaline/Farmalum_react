import React from "react";
import RenderNavbar from "./components/Navbar";
import { UsersList } from "./components/UsersList";
import  ProfileView  from "./components/ProfileView"; //
import { UpdateForm } from "./components/UpdateForm"; //

import RenderCategoriesBar from "./components/CategoriesBar";
import { useUsers } from "./hooks/useUsers";
import { findAll } from "./services/userService";
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';  


export const AdminProfileApp = () => {
  const { user, isAdmin } = useContext(AuthContext);
  
  const navigate = useNavigate(); 
  // Si el usuario no está autenticado, se redirige  a la página de inicio de sesión
  if (!user || !isAdmin) {
    alert('Debes iniciar sesión cómo administrador para ver esta página.');
    useEffect(() => {
    navigate("/login");
    })
    return null;
  }
  const getUsers = async () =>{
    const result = await findAll();
    dispatch({
        type: 'loadingUsers',
        payload: result.data
    });
}

const {
    users,
    
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    
} = useUsers();

  return (
    <>
      <RenderNavbar />
      <RenderCategoriesBar />
      <div className="container my-4">
        <div className="row">
            <div className="col">
            <h2>Perfil de Administrador:</h2>
                <ProfileView />
            </div>
            <div className="col">
                    <UsersList
                        handlerUserSelectedForm={handlerUserSelectedForm}
                        handlerRemoveUser={handlerRemoveUser}/>
                    <UpdateForm 
                        userSelected={userSelected} 
                        handlerUpdateUser={handlerAddUser} initialUserForm={initialUserForm} />

                      
                </div>
        </div>
      </div>
    </>
  );
};
