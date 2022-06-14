import { useNavigate } from "react-router-dom";
import { Button, Col } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Card, Container,Row} from "react-bootstrap";
import { Image } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem, isInCart, editItem} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }
        addItem(itemToCart);
    }

    const handleEditar = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }
        editItem(itemToCart);
    }

    return (
        <Container fluid className='ms-3'>
            <Row className="justify-content-center">
                <Col>
                    <Image width='450' src={item.img} alt={item.nombre} ></Image>
                </Col>
                <Card style={{ width: '30rem' }} className='me-3 ms-3 mb-3 p-0 card2'>
                    <Card.Header className='card-header card-header2'><Card.Title className='fw-bold text-warning mb-0 fs-3'>{item.nombre}</Card.Title></Card.Header>
                    {/* <Card.Img variant="top" src={item.img} alt={item.nombre}/>  */}
                    <Card.Body className="ms-5 me-5">
                        <p className="text-white fs-5">{item.desc}</p>
                        <h3 className='fw-bold text-success fs-4'>Precio: ${item.precio}</h3>
                        {
                            <ItemCount 
                                tipo={'item'}
                                stock={item.stock} 
                                setContador={setCantidad} 
                                contador={cantidad}
                                handleOps={ (isInCart(item.id)) ? handleEditar : handleAgregar}
                            /> 
                        }
                        <Button variant="warning" onClick={handleVolver} className='mt-3 fw-bold'>Volver</Button>
                    </Card.Body>
                </Card> 
            </Row>
            
        </Container>
    )
}

export default ItemDetail