import { useCartContext } from "../Context/CartContext";
import { Button, Container} from "react-bootstrap";
import CartDetail from "../CartDetail/CartDetail";
import { Link } from "react-router-dom";
import TitleSection from "../TitleSection/TitleSection";

const Cart = () => {
    const {cart, totalPrice, emptyCart} = useCartContext();
    
    return (
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"Carrito de Compra"}/>
                
                {   (cart.length !== 0 ) ?
                        cart.map((item) => (
                            <CartDetail key={item.id} item={item}/>
                        ))
                    :
                        <div>
                            <h5 className="mt-3 mx-3">No tenes items en el carrito.</h5>
                            <h5 className="mb-4 mx-3">Regresa a inicio o navega por nuestro menú para ver nuestros productos.</h5>
                            <hr className="text-warning opacity-100 mb-0" style={{height: '2px'}}/>
                            <Link to={"/"} className="btn btn-warning fw-bold my-3">Ir a Inicio</Link>
                        </div>
                }
                {   (cart.length !== 0 ) ?
                        <div>
                            <h4 className="text-warning fw-bold fs-4 bg-dark mt-0 mb-4 py-2">TOTAL: ${totalPrice()}</h4>
                            <Button onClick={emptyCart} className="btn btn-danger fw-bold">Vaciar Carrito</Button>
                            <br/>
                            <Link to={"/checkout"} className="btn btn-success fw-bold mt-4">Finalizar Compra</Link>
                        </div>
                    :
                        <div></div>
                }
                
            </Container>
        </section>
    )
}
export default Cart