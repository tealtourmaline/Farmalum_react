import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from './services/productService';  
import RenderNavbar from "./components/Navbar";
import RenderCategoriesBar from "./components/CategoriesBar";
import { useCart } from './contexts/CartContext';
import { CatalogView } from './components/CatalogView';


export const CategoryApp = () => {
  const { addToCart } = useCart();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsByCategory(category);
        setProducts(productsData);
      } catch (error) {
        console.error(`Error al obtener productos de la categoría ${category}`, error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
       <RenderNavbar />
      <RenderCategoriesBar />
      <div className="container my-5">
      <h2>{category}</h2>
      <CatalogView handler={addToCart} productService={getProductsByCategory} />
      </div>
    </div>
  );
};
