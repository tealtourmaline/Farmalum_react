import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if(hasItem){
        
        setCartItems(
            cartItems.map( (i) => {
                if(i.product.id === product.id){
                    i.quantity = i.quantity + 1;
                }
                return i;
            })
        )
        
    } else{
        setCartItems([
            ...cartItems,
            {
                product,
                quantity: 1,
            }
        ]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems([
        ...cartItems.filter((i) => i.product.id !== id)
    ]);
}


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('la función useCart debe ser usada dentro de un CartProvider');
  }
  return context;
};
