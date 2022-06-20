import Item from "../Item/Item";
import { Container, Row } from "react-bootstrap";

const ItemList = ({items}) => {

    return(
        <>
            <Container fluid className='container-sm mb-5'>
                <h2 className='fw-bold bg-dark py-2 mb-0 px-5'>Nuestros Productos</h2>
                <hr className="text-warning opacity-100 mt-0" style={{height: '2px'}}/>
                <Row className='justify-content-center'>
                    { (items.length) ?
                        items.map((item) => <Item key={item.id} item={item}/>)
                        : <h3 className="text-warning fs-4">Lo sentimos, por el momento no tenemos productos para esta categoria.</h3>
                    }                    
                </Row>
            </Container>
        </>
    )
}

export default ItemList