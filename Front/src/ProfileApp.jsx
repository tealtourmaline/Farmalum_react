import React, { useEffect } from "react";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import  ProfileView  from "./components/ProfileView"; //
import { AuthContext } from './contexts/AuthContext';  
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


export const ProfileApp = () => {
  const { user } = useContext(AuthContext);
  
  const navigate = useNavigate(); 
  // Si el usuario no está autenticado, se redirige  a la página de inicio de sesión
  if (!user) {
    alert('Debes iniciar sesión para ver esta página.');
    useEffect(() => {

    navigate("/login");
    })
    return null;
  }
  
    return (
      <>
        <RenderNavbar />
        <RenderCategoriesBar />
        <div className="container my-5">
        <h2>Perfil de Usuario:</h2>
        <ProfileView />
        </div>
      </>
    );
  };
  