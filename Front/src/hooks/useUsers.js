import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import { save, update, remove } from "../services/userService";
import { findAll } from "../services/userService";

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

    

    const handlerAddUser = async (user) => {

        let response;

        if(user.id === 0){
            response = await save(user);
        } else{
            response = await update(user);
        }

        dispatch({
            type: (user.id===0) ? 'addUser' : 'updateUser',
            payload: response.data,
        })
    }
    const handlerRemoveUser = (id) => {
        remove(id);
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }
    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
    }
    const handlerAddExternalUser = (user) => {
        dispatch({
          type: 'addUser',
          payload: user,
        });
      };
      const getUsers = async () =>{
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data
        });
    }
    return {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerAddExternalUser,
        getUsers,
    }
}