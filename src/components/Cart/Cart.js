import { useCartContext } from "../Context/CartContext";
import { Button, Container} from "react-bootstrap";
// import { BsFillTrashFill } from "react-icons/bs";
// import { InputGroup } from "react-bootstrap";
// import { BsPlus, BsDash } from "react-icons/bs";
import CartDetail from "../CartDetail/CartDetail";
import { useState } from "react";

const Cart = () => {
    const {cart, totalPrice, emptyCart, removeItem} = useCartContext();
    const [totalPrecio, setTotalPrecio] = useState(totalPrice());
  
    return (
        <Container className="my-5 container-sm">
            <h2>Mi Carrito de Compra</h2>
            <hr/>
            <div className="text-left">
            {
                cart.map((item) => (
                    // <div key={item.id} className="my-2">
                    //     <h3 className='fw-bold text-warning fs-4'>{item.nombre}</h3>
                    //     <p className="fs-5"><span className='fw-bold'>Cantidad: </span>{item.cantidad}</p>
                    //     <p className="fs-5"><span className='fw-bold'>Precio: </span>${item.precio * item.cantidad}</p>
                    //     <Button onClick={() => {removeItem(item.id)}} className="btn btn-danger">
                    //         <BsFillTrashFill className='m-0 pb-1 fs-5'/> Eliminar
                    //     </Button>
                    //     <hr/>
                    // </div>
                    <CartDetail key={item.id} item={item} setTotalPrecio={setTotalPrecio}/>
                ))
            }</div>
            <h4 className="fs-5 text-warning fw-bold my-4">TOTAL: ${totalPrecio}</h4>
            <Button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</Button>
            
        </Container>
        
    )
}
export default Cart