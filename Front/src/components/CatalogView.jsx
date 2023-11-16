import { useEffect } from "react";
import { useState } from "react";
import { getProducts, getLatestProducts, getProductsByCategory } from "../services/productService"
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler, productService }) => {

    const [products, setProducts] = useState([]);

    const findAll = async () =>{
        try {
            const prods = await productService;
            setProducts(prods);
          } catch (error) {
            console.error("Error al obtener productos", error);
          }
    };

    useEffect(
        () => {
            findAll();  
        }, []);

    return (
        <>
            <div className="row">
                {products.map(prod => (
                    <div className="col-3 my-2" key={prod.id}>
                            <ProductCardView
                                handler={ handler }
                                id={prod.id}
                                photo={prod.photo} 
                                name={prod.name} 
                                price={prod.price}
                            />
                        </div>
                ))}

            </div>
        </>
    );
}