import { LogInForm } from "./components/LogInForm";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import { UserForm } from "./components/UserForm";
import { AuthContext } from './contexts/AuthContext';  
import { useContext } from 'react';
import { useUsers } from "./hooks/useUsers";

export const LogInApp = () => {
    
  const { login } = useContext(AuthContext); 
  
  

  const {
    userSelected,
    initialUserForm,
    handlerAddUser,
} = useUsers();
    
 

  return (
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
              handleLogin={login}
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
  );
}