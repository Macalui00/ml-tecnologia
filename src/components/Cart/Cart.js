import { useCartContext } from "../Context/CartContext";
import { Button, Container} from "react-bootstrap";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, totalPrice, emptyCart} = useCartContext();
    console.log(cart.length)
  
    return (
        <Container className="container-sm my-5 container-fluid">
            <h2>Mi Carrito de Compra</h2>
            <hr/>
           
            {   (cart.length !== 0 ) ?
                    cart.map((item) => (
                        <CartDetail key={item.id} item={item}/>
                    ))
                :
                    <div>
                        <h5  className="mt-3">No tenes items en el carrito.</h5>
                        <h5>Regresa a inicio o navega por nuestro menú para ver nuestros productos.</h5>
                        <Link to={"/"} className="btn btn-warning my-3">Ir a Inicio</Link>
                    </div>
            }
            {   (cart.length !== 0 ) ?
                    <div>
                        <h4 className="fs-5 text-warning fw-bold my-4">TOTAL: ${totalPrice()}</h4>
                        <Button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</Button>
                    </div>
                :
                    <div></div>
            }
            
        </Container>
        
    )
}
export default Cart