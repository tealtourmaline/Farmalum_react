import React from "react";
import { LogInForm } from "./components/LogInForm";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import { useAuth } from "./contexts/AuthContext";
import { UserForm } from "./components/UserForm";
import { AuthProvider } from "./contexts/AuthContext";
import { useUsers } from "./hooks/useUsers";

export const LogInApp = () => {
    
  const { login } = useAuth(); 
  const handleLogin = async (loginData) => {
 

    try {
      const result = await login(loginData);
      console.log("Inicio de sesión exitoso: ", result);
    } catch (error) {
      console.error("Error aol iniciar sesión: ", error.message);
      alert("Ha ocurrido un error al iniciar sesión: ", error.message);
    }
  };
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
                        initialUserForm={ initialUserForm }
                        userSelected={userSelected}
                        handlerAddUser={ handlerAddUser }/>
          </div>
        </div>
      </div>
    </>
    </AuthProvider>
  );
};
