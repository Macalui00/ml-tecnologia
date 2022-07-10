import {Container} from "react-bootstrap";
import DetalleBuyer from "./DetalleBuyer";
import DetalleCompra from "./DetalleCompra";

const OrdenDetail = ({orden}) => {

    return (
        <Container className="container-sm container-fluid my-1">
            <DetalleBuyer buyer={orden.buyer}/>
            <DetalleCompra orden={orden}/>
        </Container>

    )
}

export default OrdenDetail