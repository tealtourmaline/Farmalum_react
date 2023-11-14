import React from "react";
import { CatalogView } from "./components/CatalogView";
import RenderNavbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import RenderCategoriesBar from "./components/CategoriesBar"
import { useCart } from './contexts/CartContext';
import { getProducts, getLatestProducts, getProductsByCategory } from "./services/productService";



export const CatalogApp = ( ) => {
    const { addToCart } = useCart();


    
    return (
        <>
            <RenderNavbar />
            <RenderCategoriesBar />
            <div className="container my-5">
                <h3>Todos los productos</h3>
                <CatalogView handler={addToCart} productService={getProducts} />
            </div>
        </>
    );
}

