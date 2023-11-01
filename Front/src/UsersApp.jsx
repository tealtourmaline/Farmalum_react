import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";
import { findAll } from "./services/userService";
import { useUsers } from "./hooks/useUsers";


export const UsersApp = () => {

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

    return(
        <div className="container my-4">
            <h5>UsersApp</h5>
            <div className="row">
                <div className="col">
                    <UserForm 
                        initialUserForm={ initialUserForm }
                        userSelected={userSelected}
                        handlerAddUser={ handlerAddUser }/>
                </div>
                <div className="col">
                    { users.length === 0
                    ? <div className="alert alert-warning">No hay usuario en sistema</div>
                    : <UsersList
                        handlerUserSelectedForm={handlerUserSelectedForm}
                        handlerRemoveUser={handlerRemoveUser}
                        users={users}/>
                    }   
                </div>
            </div>
        </div>
    )
}