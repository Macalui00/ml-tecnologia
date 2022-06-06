import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Card } from "react-bootstrap";

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
        <div className="container">
            <Card style={{ width: '50rem' }} className='me-3 ms-3 mb-3 p-0'>
                <Card.Header className='card-header'><Card.Title className='fw-bold text-warning mb-0 fs-2'>{item.nombre}</Card.Title></Card.Header>
                <Card.Body>
                    <p className="text-dark">{item.desc}</p>
                    <h3 className='fw-bold text-success'>Precio: ${item.precio}</h3>
                    {
                        mostrar ? <ItemCount stock={4} inicial={1}/> : <div className='m-0 p-0'></div>
                    }

                    <Button variant="warning" onClick={handleVolver} className='mt-3'>Volver</Button>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default ItemDetail