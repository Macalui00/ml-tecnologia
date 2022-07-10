import { Container } from "react-bootstrap";
import ListadoCompra from "../FinalizarCompra/ListadoCompra";
import DetalleCheckout from "./DetalleCheckout";

const FinalizarCompra = ({generarOrden}) => {

    return(
        <section className='d-flex align-items-center justify-content-center'>
            <Container className="container-sm container-fluid my-5 finalizar-compra-contenedor">
                <ListadoCompra/>
                <DetalleCheckout generarOrden={generarOrden}/>
            </Container>
        </section>
    )
}
export default FinalizarCompra;