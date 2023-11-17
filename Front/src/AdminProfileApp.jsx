import React from "react";
import RenderNavbar from "./components/Navbar";
import { UsersList } from "./components/UsersList";
import  ProfileView  from "./components/ProfileView"; //
import RenderCategoriesBar from "./components/CategoriesBar";
import { useUsers } from "./hooks/useUsers";
import { findAll } from "./services/userService";


export const AdminProfileApp = () => {
  const getUsers = async () =>{
    const result = await findAll();
    dispatch({
        type: 'loadingUsers',
        payload: result.data
    });
}

const {
    users,
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
                      
                </div>
        </div>
      </div>
    </>
  );
};
