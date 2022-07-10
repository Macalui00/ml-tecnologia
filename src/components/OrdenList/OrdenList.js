import Orden from "../Orden/Orden";
import { Container, Row } from "react-bootstrap";
import TitleSection from "../TitleSection/TitleSection";

const OrdenList = ({ordenes}) => {
 
    return(
        <>
            <Container fluid className='container-sm mb-5'>
                <TitleSection title={"Compras Realizadas"}/>
                <Row className='justify-content-center'>
                    { (ordenes.length) ?
                        ordenes.map((orden) => <Orden key={orden.id} orden={orden}/>)
                        : <h3 className="text-warning fs-4">Por el momento no tienes compras realizadas.</h3>
                    }                    
                </Row>
            </Container>
        </>
    )
}

export default OrdenList