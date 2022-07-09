import { Container } from "react-bootstrap";
import Separador from "../Separador/Separador";
import TitleSection from "../TitleSection/TitleSection";

const CompraExitosa = ({orderId}) => {


    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"¡Gracias por su compra!"} tamano={"2"}/>
                <p className="px-3">Su número de orden es: <span className='fw-bold text-warning'>{orderId}</span></p>
                <p className="px-3">Estará recibiendo su pedido dentro de los próximos 5 días hábiles.</p>
                <Separador clases=""/>
            </Container>
        </section>
    )
}
export default CompraExitosa;