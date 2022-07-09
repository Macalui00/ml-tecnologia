import { useCartContext } from "../Context/CartContext";
import { Container, Row} from "react-bootstrap";

const DetalleCompra = () => {
    const {cart} = useCartContext();
    
    return (
            cart.map((item) => (
                <>
                    <Container className="container-sm container-fluid my-2">
                        <Row>
                            <p className="px-4"><span className='fw-bold text-warning fs-5'>{item.nombre}</span> - <span className="fw-bold mt-1 fs-5">{item.cantidad} unidades</span></p>
                        </Row>
                    </Container>
                </>
            ))
        
    )
}
export default DetalleCompra