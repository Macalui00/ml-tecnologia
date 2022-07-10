import {Container, Button } from "react-bootstrap";
import DetalleBuyer from "./DetalleBuyer";
import DetalleCompra from "./DetalleCompra";
import { useNavigate } from "react-router-dom";

const OrdenDetail = ({orden}) => {
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    }

    return (
        <Container className="container-sm container-fluid my-1">
            <DetalleBuyer buyer={orden.buyer}/>
            <DetalleCompra orden={orden}/>
            <Button variant="warning" onClick={handleVolver} className='fw-bold'>Volver</Button>
        </Container>

    )
}

export default OrdenDetail