import { useCartContext } from "../Context/CartContext";
import { Button, Container} from "react-bootstrap";
// import { BsFillTrashFill } from "react-icons/bs";
// import { InputGroup } from "react-bootstrap";
// import { BsPlus, BsDash } from "react-icons/bs";
import CartDetail from "../CartDetail/CartDetail";
import { useState } from "react";

const Cart = () => {
    const {cart, totalPrice, emptyCart} = useCartContext();
    // const [totalPrecio, setTotalPrecio] = useState(totalPrice());
  
    return (
        <Container className="my-5 container-sm">
            <h2>Mi Carrito de Compra</h2>
            <hr/>
            <div className="text-left">
            {
                cart.map((item) => (
                    <CartDetail key={item.id} item={item}/>
                ))
            }</div>
            <h4 className="fs-5 text-warning fw-bold my-4">TOTAL: ${totalPrice()}</h4>
            <Button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</Button>
            
        </Container>
        
    )
}
export default Cart