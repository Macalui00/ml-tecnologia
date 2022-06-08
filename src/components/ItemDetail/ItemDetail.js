import { useNavigate } from "react-router-dom";
import { Button, Col } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Card, Container,Row} from "react-bootstrap";
import { Image } from "react-bootstrap";

const ItemDetail = ({item}) => {

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1)
    }

    const [mostrar, setMostrar] = useState(true);

    const mostrarCounter = () => {
        setMostrar(!mostrar)
    }

    return (
        <Container fluid classname='ms-3'>
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
                            mostrar ? <ItemCount stock={item.stock} inicial={1}/> : <div className='m-0 p-0'></div>
                        }
                        <Button variant="warning" onClick={handleVolver} className='mt-3 mt-5 fw-bold'>Volver</Button>
                    </Card.Body>
                </Card> 
            </Row>
            
        </Container>
    )
}

export default ItemDetail