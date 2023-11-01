import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',

}
export const UsersApp = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) => {
        let type;
        if(user.id === 0){
            type = 'addUser';
        } else{
            type = 'updateUser';
        }
        dispatch({
            type,
            payload: user,
        })
    }
    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }
    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
    }
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