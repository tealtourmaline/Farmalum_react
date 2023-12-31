import axios from "axios"

const BASE_URL = 'http://localhost:8080/users'
export const findAll = async() => {
    try{
        const response = await axios.get(BASE_URL);
        return response;
    }
    catch(error){
        console.error(error);
    }
    return undefined;
}

export const save = async ({username, email, password}) =>{
    try{
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
        });
    } catch(error){
        console.error(error.response.data);
    }
    return undefined;
}

export const update = async ({ id, username, email }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const updateall = async ({ id, username, email, password }) => {
  try {
      return await axios.put(`${BASE_URL}/${id}`, {
          username,
          email,
          password,
      });
  } catch (error) {
      console.error(error);
  }
  return undefined;
}


export const remove = async (id) =>{
    try{
        await axios.delete(`${BASE_URL}/${id}`);
    }catch(error){
        console.error(error);
    }
}
//conseguir los detalles de un usuario en específico
export const getUserDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`, {
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener detalles del usuario', error);
      throw error; 
    }
  };
  export const isUserAdmin = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/isAdmin/${username}`, {
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener detalles del usuario', error);
      throw error; 
    }
  };
  
export const login = async ({username, password}) => {
    try {
      return await axios.post(`${BASE_URL}/login`, {username, password,});
      
    } catch (error) {
      console.error('Error al iniciar sesión', error.response.data);
     
    }
  };