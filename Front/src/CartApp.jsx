import React, { useState } from "react";
import { CartView } from "./components/CartView";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar"
import { CatalogApp } from "./CatalogApp"; 

export const CartApp = () => {
    const [cartItems, setCartItems] = useState([]);

    const handlerAddProductCart = (product) => {
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
    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            <RenderNavbar />
            <RenderCategoriesBar />
            <div className="container my-5">
                <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>
            </div>
        </>
    );
}


/*
import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import RenderNavbar from "./components/Navbar"
import MyCarousel from "./components/Carousel";

const cartData = sessionStorage.getItem('cart');
const initialCartItems = cartData ? JSON.parse(cartData) : [];
export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

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
    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            <RenderNavbar />
            <div className="container-fluid" style={{backgroundColor: "#F8A5B9", height: "2.5rem", margin: "0", display: "flex", justifyContent: "center", alignItems: "center"}} >
            <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Cosméticos</span>
            <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Cuidado personal</span>
            <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Salud y medicamentos</span>
            <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Maternidad y bebés</span>
            <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Nutrición</span>
            <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Todos los productos</span>
            </div>
            <MyCarousel/>
            <div className="container my-5">
                <h3>Productos destacados</h3>
                {/* carga la vista del catálogo  *//*}
                <CatalogView handler={ handlerAddProductCart } />

                { cartItems?.length <= 0 || (
                <div className="my-4 w-50">
                    {/* carga la vista del carrito de compras *//*}
                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>
                </div>)}
            </div>
            
        </>
    )
}
*/