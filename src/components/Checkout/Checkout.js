import { Container } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import * as Yup from 'yup';
import FormularioOrden from "./FormularioOrden";
import { useCheckout } from "./useCheckout";

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio.")
                .min(4, "El nombre es demasiado corto.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^[a-zA-ZÀ-ÿ,\s*]+$/,"Nombre inválido."),
    email: Yup.string()
                .required("Este campo es obligatorio.")
                .email("Formato de email inválido."),
    direccion: Yup.string()
                .required("Este campo es obligatorio.")
                .min(4, "La dirección es demasiado corta.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^([a-zA-ZÀ-ÿ,.'-]+\s)+[0-9]+(\s[0-9]+[a-zA-Z]+)*$/,"Dirección inválida.")
})

const Checkout = () => {
    const {cart, emptyCart} = useCartContext();

    const { orderId, generarOrden } = useCheckout()
 
    if (orderId) {
        return(
            <section className=''>
                <Container className="container-sm container-fluid my-5">
                    <h2 className='fw-bold px-5'>¡Gracias por su compra!</h2>
                    <hr className="text-warning opacity-100" style={{height: '2px'}}/>
                    <p>Su número de orden es: {orderId}</p>
                </Container>
            </section>
        )
    }
    if (cart.length === 0){
        return <Navigate to="/"/>
    }

    return(
    
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <h2 className='fw-bold bg-dark py-2 mb-0 px-5'>Checkout</h2>
                <hr className="text-warning opacity-100 mt-0" style={{height: '2px'}}/>

                <FormularioOrden generarOrden={generarOrden} schema={schema} />
                
                <button className="btn btn-danger mt-3 fw-bold" onClick={emptyCart}>Cancelar Compra</button>
            </Container>
        </section>
    )
}
export default Checkout;