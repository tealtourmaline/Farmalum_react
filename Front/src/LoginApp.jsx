import React from "react";
import { LogInForm } from "./components/LogInForm";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import { useAuth } from "./contexts/AuthContext";
import { UserForm } from "./components/UserForm";
import { AuthProvider } from "./contexts/AuthContext";
import { useUserContext } from "./contexts/UserContext"; // Ajusta la ruta según tu estructura

export const LogInApp = () => {
  
  const { dispatch, handlerAddUser } = useUserContext(); 
  
  const { login } = useAuth(); 
  const handleLogin = async (loginData) => {
  const { dispatch, handlerAddUser } = useUserContext(); // Usa el contexto global de usuarios

    try {
      const result = await login(loginData);
      console.log("Inicio de sesión exitoso: ", result);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error.message);
      alert("Ha ocurrido un error al iniciar sesión: ", error.message);
    }
  };
    
  const handleRegister = (user) => {
    handlerAddUser(user);
  };

  return (
    <AuthProvider>
    <>
      <RenderNavbar />
      <RenderCategoriesBar />  
      <div className="container my-4">
        
        <div className="row">
          <div className="col">
          <h5>Iniciar sesión</h5>
            <LogInForm
              initialLoginForm={{
                usernameOrEmail: "",
                password: "",
              }}
              handleLogin={handleLogin}
            />
          </div>
          
          <div className="col">
          <h5>Registrarse</h5>
            <UserForm
              initialUserForm={{
                id: 0,
                username: "",
                password: "",
                email: "",
              }}
              userSelected={null}
              handlerAddUser={handleRegister}
            />
          </div>
        </div>
      </div>
    </>
    </AuthProvider>
  );
};
