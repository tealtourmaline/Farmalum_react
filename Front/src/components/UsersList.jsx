import { UserRow } from "./UserRow"
import { findAll } from '../services/userService'; // 
import React, { useState, useEffect } from 'react';

export const UsersList = ({ handlerUserSelectedForm, handlerRemoveUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await findAll();
         
            setUsers(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData(); // Llama a la función fetchData al montar el componente
    }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso, está vacío para que se ejecute solo una vez al montar el componente
  

    return(
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({id, username, email, password}) =>(
                        <UserRow 
                            key={id} 
                            id={id}  
                            username={username} 
                            email={email}
                            password={password}
                            handlerUserSelectedForm = {handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}/>
                    ))
                }
            </tbody>

        </table>
    )
}