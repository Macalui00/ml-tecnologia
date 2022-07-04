import { Container } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext";
import FormularioOrden from "./FormularioOrden";
import TitleSection from "../TitleSection/TitleSection";
import * as Yup from 'yup';

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

const FinalizarCompra = ({generarOrden}) => {
    const {emptyCart} = useCartContext();

    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"Checkout"} tamaño={"2"}/>

                <FormularioOrden generarOrden={generarOrden} schema={schema} />
                
                <button className="btn btn-danger mt-3 fw-bold" onClick={emptyCart}>Cancelar Compra</button>
            </Container>
        </section>
    )
}
export default FinalizarCompra;