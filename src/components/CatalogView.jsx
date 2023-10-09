import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../services/productService"
import { ProductCardView } from "./ProductCardView";

export const CatalogView = () =>{

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            setProducts(getProducts());
        }, []);

    return (
        <>
            <div className="row">
                {products.map(prod => (

                    <div className="col-4 my-2" key={prod.id}>
                            <ProductCardView 
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