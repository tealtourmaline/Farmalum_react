import React from "react";
import { CatalogView } from "./components/CatalogView";
import RenderNavbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import RenderCategoriesBar from "./components/CategoriesBar"

export const CatalogApp = ({ handlerAddProductCart }) => {
    return (
        <>
            <RenderNavbar />
            <RenderCategoriesBar />
            <MyCarousel/>
            <div className="container my-5">
                <h3>Productos destacados</h3>
                <CatalogView handler={handlerAddProductCart} />
            </div>
        </>
    );
}

