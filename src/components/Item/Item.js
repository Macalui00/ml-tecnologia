import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const Item = ({item}) => {

    const [mostrar, setMostrar] = useState(true);

    const mostrarCounter = () => {
        setMostrar(!mostrar)
    }

    return(
        <Card style={{ width: '18rem' }} className='me-3 ms-3 mb-3 p-0' key={item.id}>
            <Card.Header className='card-header'><Card.Title className='fw-bold text-warning mb-0'>{item.nombre}</Card.Title></Card.Header>
            <Card.Body>
                <ul className='m-0 p-0 text-dark'>
                    <li><p className='detalle'>{item.desc}</p></li>
                    <li><p className='detalle fw-bold text-success'>Precio: ${item.precio}</p></li>
                </ul>
                {
                    mostrar ? <Button variant="danger" onClick={mostrarCounter}>Cancelar</Button> : <Button variant="primary" onClick={mostrarCounter}>Comprar</Button>
                }
                {
                    mostrar ? <ItemCount stock={4} inicial={1}/> : <div className='m-0 p-0'></div>
                }
            </Card.Body>
        </Card> 
    )
}

export default Item