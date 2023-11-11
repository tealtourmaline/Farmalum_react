import axios from 'axios';

export const getProducts = async() => {
    try {
        const response = await axios.get('http://localhost:8080/products');
        return response.data; // Utiliza response.data para obtener los datos
      } catch (error) {
        console.error(error);
        throw error; // Re-lanza el error para manejarlo en el componente
      }
    //const response = await fetch('http://localhost:8080/products');
    //const products = response.json();
    //return products;
}
export const getLatestProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/products/latest');
    return response.data; // Utiliza response.data para obtener los datos
  } catch (error) {
    console.error("Error al obtener los últimos productos", error);
    throw error; // Re-lanza el error para manejarlo en el componente
  }
};


export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}