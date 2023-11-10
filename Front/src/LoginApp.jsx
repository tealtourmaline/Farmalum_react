import React from "react";
import { LogInForm } from "./components/LogInForm";
import RenderNavbar from "./components/Navbar";
import { UserForm } from "./components/UserForm";


export const LogInApp = () => {
  const handleLogin = async (loginData) => {
    try {
      const result = await login(loginData);
      console.log("Inicio de sesión exitoso:", result);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  return (
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
  );
};
