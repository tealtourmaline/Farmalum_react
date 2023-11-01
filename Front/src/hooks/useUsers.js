import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

const initialUsers = [];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',

}

export const useUsers = () => {
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

    return {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    }
}