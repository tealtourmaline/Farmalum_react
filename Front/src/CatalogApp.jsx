import React from "react";
import { useContext, useEffect, useState } from 'react'

import { CatalogView } from "./components/CatalogView";
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar"

import { getProducts, } from "./services/productService";
import { CartContext } from './contexts/CartContext';



export const CatalogApp = ( ) => {
    const {addToCart } = useContext(CartContext);



    
    return (
        
        <>
            <RenderNavbar />
            <RenderCategoriesBar />
            <div className="container my-5">
                <h3>Todos los productos</h3>
                <CatalogView handler={addToCart} productService={getProducts()} />
            </div>
        </>
        
    );
}

