import Item from "../Item/Item";
import { Container, Row } from "react-bootstrap";

const ItemList = ({items}) => {

    return(
        <>
            <Container fluid>
                <h2 className='fw-bold'>Nuestros productos</h2>
                <hr/>
                <Row className='justify-content-md-center'>
                    { (items.length) ?
                        items.map((item) => <Item key={item.id} item={item}/>)
                        : <h3 className="fs-4 text-warning">Lo sentimos, por el momento no tenemos productos para esta categoria.</h3>
                    }                    
                </Row>
            </Container>
        </>
    )
}

export default ItemList