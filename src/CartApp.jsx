import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

const initialCartItems = [
    // {
    //     product: {},
    //     quantity: 0,
    //     total: 0
    // }
]
export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

    }
    return (
        <>
            <div className="container">

                <h3>Cart App</h3>
                {/* carga la vista del catálogo  */}
                <CatalogView />

                <div className="my-4 w-50">
                    {/* carga la vista del carrito de compras */}
                    <CartView items={cartItems}/>
                </div>

            </div>
        </>
    )
}