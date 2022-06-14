import { useCartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
// import { InputGroup } from "react-bootstrap";
// import { BsPlus, BsDash } from "react-icons/bs";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const CartDetail = ({item}) => {

    const {removeItem, alterQuantity} = useCartContext();
   // console.log(item, item.cantidad)

    const [cantidad, setCantidad] = useState(item.cantidad);
    // console.log(item.cantidad,cantidad)
   
    const handleCambiar = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }
        alterQuantity(itemToCart);
    }

  
    return (
        <div key={item.id} className="my-2">
            <h3 className='fw-bold text-warning fs-4'>{item.nombre}</h3>
            {/* <p className="fs-5"><span className='fw-bold'>Cantidad: </span>{cantidad}</p> */}
            {
                <ItemCount 
                    tipo={'cart'}
                    stock={item.stock} 
                    setContador={setCantidad} 
                    contador={cantidad}
                    handleOps={handleCambiar}
                /> 
            }
            <p className="fs-5 mt-4"><span className='fw-bold'>Precio: </span>${item.precio * item.cantidad}</p>
            <Button onClick={() => {removeItem(item.id)}} className="btn btn-danger">
                <BsFillTrashFill className='m-0 pb-1 fs-5'/> Eliminar
            </Button>
            <hr/>
        </div>
)
}
export default CartDetail