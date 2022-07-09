import { useCartContext } from "../Context/CartContext";
import {Container} from "react-bootstrap";
import CartDetail from "../CartDetail/CartDetail";
import TitleSection from "../TitleSection/TitleSection";
import CartEmpty from "./CartEmpty";
import CartFooter from "./CartFooter";

const Cart = () => {
    const {cart} = useCartContext();
    
    return (
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"Carrito de Compra"}/>
                
                {   (cart.length !== 0 ) ?
                        cart.map((item) => (
                            <CartDetail key={item.id} item={item}/>
                        ))
                    :
                        <CartEmpty/>
                }
                {   (cart.length !== 0 ) ?
                        <CartFooter />
                    :
                        <div></div>
                }
                
            </Container>
        </section>
    )
}
export default Cart