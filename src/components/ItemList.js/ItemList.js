import Item from "../Item/Item";
import { Container, Row } from "react-bootstrap";
import TitleSection from "../TitleSection/TitleSection";

const ItemList = ({items}) => {

    return(
        <>
            <Container fluid className='container-sm mb-5'>
                <TitleSection title={"Nuestros Productos"} tamano={"2"}/>
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