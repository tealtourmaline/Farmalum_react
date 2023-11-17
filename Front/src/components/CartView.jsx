import { useEffect, useState } from "react";

export const CartView = ({ handlerDelete, items, total }) => {

    const onDeleteProduct = (id) =>{
        handlerDelete(id);
    }

  return (
    <>
        <h3>Carro de compras</h3>
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                { items.map( item =>(
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.product.price}</td>
                        <td><button 
                            className="btn btn-danger"
                            onClick={() => onDeleteProduct(item.product.id)}>eliminar</button></td>
                    </tr>
                ))}

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-end fw-bold">Total</td>
                    <td colSpan="2" className="text-start fw-bold">{ total }</td>
                </tr>
            </tfoot>
        </table>     
    </>
  )
}
