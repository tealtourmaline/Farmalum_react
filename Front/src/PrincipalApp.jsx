import React, { useState, useEffect } from "react";
import { CatalogView } from "./components/CatalogView";
import RenderNavbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import RenderCategoriesBar from "./components/CategoriesBar";
import { getLatestProducts } from "./services/productService"; // Agrega la función getLatestProducts
import { useCart } from './contexts/CartContext';

export const PrincipalApp = ( ) => {
 
  const { addToCart } = useCart();
/*
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const products = await getLatestProducts();
        setLatestProducts(products);
      } catch (error) {
        console.error("Error al obtener los últimos productos", error);
      }
    };

    fetchLatestProducts();
  }, []);
*/
  return (
    <>
      <RenderNavbar />
      <RenderCategoriesBar />
      <MyCarousel />
      <div className="container my-5">
        <h3>Productos destacados</h3>
        <CatalogView handler={addToCart} productService={getLatestProducts()} />
      </div>
    </>
  );
};
