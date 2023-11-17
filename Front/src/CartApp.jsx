import React from "react";
import { CartView } from "./components/CartView";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import RenderTablaPagar from "./components/TablaPagar";
import { CartContext } from './contexts/CartContext';
import { useContext, useEffect, useState } from 'react'
import { calculateTotal } from "./services/productService";



export const CartApp = () => {
    const { cartItems, removeFromCart } = useContext(CartContext); // Usa las funciones del contexto directamente
    const [total, setTotal] = useState(0);

    useEffect(() => {
    setTotal(calculateTotal(cartItems));
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    return (
       
        <>
        
            <RenderNavbar />
            <RenderCategoriesBar />
            <div style={{ display: "flex" }}>
                <div style={{ flex: "1", marginRight: "20px" }}>
                    {/* Carrito de compras */}
                    <div className="container my-5">
                        <CartView handlerDelete={removeFromCart} items={cartItems} total={total}/>
                    </div>
                </div>
                <div style={{ flex: "0" }}>
                    {/* Tabla para pagar */}
                    <div className="container my-5">
                        <RenderTablaPagar total = {total}/>
                    </div>
                </div>
            </div>
        </>
       
    );
}
