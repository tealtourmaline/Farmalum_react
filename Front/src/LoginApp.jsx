import React from "react";
import { LogInForm } from "./components/LogInForm";
import RenderNavbar from "./components/Navbar";

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
        <h5>Iniciar Sesión</h5>
        <div className="row">
          <div className="col">
            <LogInForm
              initialLoginForm={{
                usernameOrEmail: "",
                password: "",
              }}
              handleLogin={handleLogin}
            />
          </div>
        </div>
      </div>
    </>
  );
};
