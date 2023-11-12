import React from "react";
import { CatalogView } from "./components/CatalogView";
import RenderNavbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import RenderCategoriesBar from "./components/CategoriesBar"
import { useCart } from './contexts/CartContext';


export const CatalogApp = ( ) => {
    const { addToCart } = useCart();

    
    return (
        <>
            <RenderNavbar />
            <RenderCategoriesBar />
            <MyCarousel/>
            <div className="container my-5">
                <h3>Productos destacados</h3>
                <CatalogView handler={addToCart} />
            </div>
        </>
    );
}

