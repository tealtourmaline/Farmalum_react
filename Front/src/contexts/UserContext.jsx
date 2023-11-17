// UserContext.js
import { createContext, useContext, useReducer, useEffect } from 'react';
import { useUsers } from '../hooks/useUsers'; 

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { users, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, getUsers } = useUsers();

  const userReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }

  };
  
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  
  useEffect(() => {
    const users = localStorage.getItem("users");
    if (users) {
      getUsers(JSON.parse(users));
    }
  }, []);

  const [state, dispatch] = useReducer(userReducer, { users });


  return (
    <UserContext.Provider value={{ state, dispatch, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};

