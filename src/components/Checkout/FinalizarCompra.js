import { Container } from "react-bootstrap";
import ListadoCompra from "./ListadoCompra";
import FormularioCheckout from "./FormularioCheckout";

const FinalizarCompra = ({generarOrden}) => {

    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <ListadoCompra/>
                <FormularioCheckout generarOrden={generarOrden}/>
            </Container>
        </section>
    )
}
export default FinalizarCompra;