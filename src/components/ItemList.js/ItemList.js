import Item from "../Item/Item";
import { Container, Row } from "react-bootstrap";

const ItemList = ({items}) => {

    return(
        <>
            <Container fluid>
                <h2 className='fw-bold'>Nuestros productos</h2>
                <hr/>
                <Row className='justify-content-md-center'>
                    {
                        items.map((item) => <Item key={item.id} item={item}/>)
                    }                    
                </Row>
            </Container>
        </>
    )
}

export default ItemList