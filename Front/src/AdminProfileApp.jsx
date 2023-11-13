import React from "react";
import RenderNavbar from "./components/Navbar";
import { UsersList } from "./components/UsersList";
import { useUserContext } from "./contexts/UserContext"; 
import  ProfileView  from "./components/ProfileView"; //
import RenderCategoriesBar from "./components/CategoriesBar";


export const AdminProfileApp = () => {
  const { state, dispatch, handlerRemoveUser, handlerUserSelectedForm } = useUserContext(); 

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
              {state.users.length === 0 ? (
                <div className="alert alert-warning">No hay usuarios en sistema</div>
              ) : (
                <UsersList
                  handlerUserSelectedForm={handlerUserSelectedForm}
                  handlerRemoveUser={handlerRemoveUser}
                  users={state.users}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
};
