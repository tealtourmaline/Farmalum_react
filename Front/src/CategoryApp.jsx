import { useParams } from 'react-router-dom';
import { getProductsByCategory } from './services/productService';  
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import { CartContext } from './contexts/CartContext';
import { CatalogView } from './components/CatalogView';
import { useContext, useEffect, useState } from 'react';


export const CategoryApp = () => {
  const {addToCart } = useContext(CartContext);
  const { category } = useParams();

  return (
    <div>
      <RenderNavbar />
      <RenderCategoriesBar />
      <div className="container my-5">
      <h2>{category}</h2>
      <CatalogView handler={addToCart} productService={getProductsByCategory(category)} />
      </div>
    </div>
  );
};
