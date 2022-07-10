import {Container,Row} from "react-bootstrap";
import TitleEndSection from "../TitleEndSection/TitleEndSection";
import TitleSection from "../TitleSection/TitleSection";

const DetalleCompra = ({orden}) => {

    return (
        <>
            <TitleSection title={"Listado de Compra"}/>
                {orden.items.map((item) => (
                    <>
                        <Container className="container-sm container-fluid my-2">
                            <Row key={item.id}>
                                <p className="px-4">
                                    <span className='fw-bold text-warning fs-5'>{item.nombre}</span> - 
                                    <span className="fw-bold mt-1 fs-5"> {item.cantidad} unidades</span> - 
                                    <span className="fw-bold text-success mt-1 fs-5"> $ {item.precio}</span>
                                </p>
                            </Row>
                        </Container>
                    </>
                ))}
            <TitleEndSection title={"TOTAL: $"+ orden.total} tamano={4} clases={"mt-0 mb-4"}/> 
        </>
    )
}

export default DetalleCompra