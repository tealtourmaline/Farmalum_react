// UserContext.js
import { createContext, useContext, useReducer } from 'react';
import { useUsers } from '/home/valespinal/Farmalum_react/Front/src/hooks/useUsers.js'; 

const UserContext = createContext();

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

  const [state, dispatch] = useReducer(userReducer, { users });

  return (
    <UserContext.Provider value={{ state, dispatch, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
    const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext debe ser utilizado dentro de un UserProvider");
  }

    console.log('Contexto:' , context); 

    return context;
    };
