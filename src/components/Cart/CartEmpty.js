import { Link } from "react-router-dom";
import Separador from "../Separador/Separador";

const CartEmpty = () => {

    return (
        <div>
            <h5 className="mt-3 mx-3">No tenes items en el carrito.</h5>
            <h5 className="mb-4 mx-3">Regresa a inicio o navega por nuestro menú para ver nuestros productos.</h5>
            <Separador clases="mb-0"/>
            <Link to={"/"} className="btn btn-warning my-3">Ir a Inicio</Link>
        </div>
    )
}
export default CartEmpty