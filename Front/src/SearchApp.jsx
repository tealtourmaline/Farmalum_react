import { useParams } from 'react-router-dom';
import { searchProductsByName } from './services/productService';  
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import { CartContext } from './contexts/CartContext';
import { CatalogView } from './components/CatalogView';
import { useContext, useEffect, useState } from 'react';


export const SearchApp = () => {
  const {addToCart } = useContext(CartContext);
  const { word } = useParams();

  return (
    <div>
      <RenderNavbar />
      <RenderCategoriesBar />
      <div className="container my-5">
      <h2>{word}</h2>
      <CatalogView handler={addToCart} productService={searchProductsByName(word)} />
      </div>
    </div>
  );
};
