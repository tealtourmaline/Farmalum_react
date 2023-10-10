import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

const cartData = sessionStorage.getItem('cart');
const initialCartItems = cartData ? JSON.parse(cartData) : [];
export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if(hasItem){
            
            setCartItems(
                cartItems.map( (i) => {
                    if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )
            
        } else{
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            <div className="container my-5">

                <h3>Cart App</h3>
                {/* carga la vista del catálogo  */}
                <CatalogView handler={ handlerAddProductCart } />

                { cartItems?.length <= 0 || (
                <div className="my-4 w-50">
                    {/* carga la vista del carrito de compras */}
                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>
                </div>)}


            </div>
        </>
    )
}