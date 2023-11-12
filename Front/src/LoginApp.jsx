import React from "react";
import { LogInForm } from "./components/LogInForm";
import RenderNavbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";
import { UserForm } from "./components/UserForm";
import { AuthProvider } from "./contexts/AuthContext";

export const LogInApp = () => {
  const { login } = useAuth(); 
  const handleLogin = async (loginData) => {
     
    try {
      const result = await login(loginData);
      console.log("Inicio de sesión exitoso: ", result);
    } catch (error) {
      console.error("Error al iniciar sesión: ", error.message);
      alert("Ha ocurrido un error al iniciar sesión: ", error.message);
    }
  };

  return (
    <AuthProvider>
    <>
      <RenderNavbar />
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
            />
          </div>
        </div>
      </div>
    </>
    </AuthProvider>
  );
};
