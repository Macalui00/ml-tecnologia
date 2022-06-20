import { useCartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const CartDetail = ({item}) => {

    const {removeItem, alterQuantity} = useCartContext();

    const [cantidad, setCantidad] = useState(item.cantidad);

    const [precio,setPrecio] = useState(item.precio * item.cantidad);
   
    const handleCambiar = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }
        alterQuantity(itemToCart);
        setPrecio(itemToCart.precio * itemToCart.cantidad);
    }
    
    return (
        <div key={item.id} className="my-2">
            <h3 className='fw-bold text-warning fs-4'>{item.nombre}</h3>
            {
                <ItemCount 
                    tipo={'cart'}
                    stock={item.stock} 
                    setContador={setCantidad} 
                    contador={cantidad}
                    handleOps={handleCambiar}
                /> 
            }
            <p className="fs-5 mt-4"><span className='fw-bold'>Precio: </span>${precio}</p>
            <Button onClick={() => {removeItem(item.id);}} className="btn btn-danger fw-bold">
                <BsFillTrashFill className='m-0 pb-1 fs-4'/> Eliminar
            </Button>
            <hr/>
        </div>
)
}
export default CartDetail