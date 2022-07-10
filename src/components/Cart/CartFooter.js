import { useCartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TitleEndSection from "../TitleEndSection/TitleEndSection";

const Cart = () => {
    const {totalPrice, emptyCart} = useCartContext();
    
    return (
        <div>
            <TitleEndSection title={"TOTAL: $"+ totalPrice()} tamano={4} clases={"mt-0 mb-4"}/>      
            <Button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</Button>
            <br/>
            <Link to={"/checkout"} className="btn btn-success mt-4">Finalizar Compra</Link>
        </div>
    )
}
export default Cart