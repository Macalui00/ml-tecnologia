import { Container } from "react-bootstrap";
import TitleSection from "../TitleSection/TitleSection";

const CompraExitosa = ({orderId}) => {


    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"¡Gracias por su compra!"} tamaño={"2"}/>
                <p className="px-3">Su número de orden es: <span className='fw-bold text-warning'>{orderId}</span></p>
                <p className="px-3">Estará recibiendo su pedido dentro de los próximos 5 días hábiles.</p>
                <hr className="text-warning opacity-100" style={{height: '2px'}}/>
            </Container>
        </section>
    )
}
export default CompraExitosa;