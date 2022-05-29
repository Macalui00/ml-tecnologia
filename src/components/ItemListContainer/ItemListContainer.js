import './ItemListContainer.css';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemListContainer = ({producto}) => {
    const {nombre, tipo, marca, memoria} = producto;

    const [mostrar, setMostrar] = useState(true);
    const mostrarCounter = () => {
        setMostrar(!mostrar)
    }
    return (
        <section className='productos mt-5'>
            <h2 className='fw-bold'>Nuestros productos</h2>
            <hr/>
            <Card style={{ width: '18rem' }}>
                <Card.Header className='card-header'><Card.Title className='fw-bold text-warning mb-0'>{nombre}</Card.Title></Card.Header>
                <Card.Body>
                    <ul className='m-0 p-0 text-dark'>
                        <li><p className='detalle'>Tipo: {tipo}</p></li>
                        <li><p className='detalle'>Marca: {marca}</p></li>
                        <li><p className='detalle'>Memoria: {memoria}</p></li>
                    </ul>
                    {
                        mostrar ? <Button variant="danger" onClick={mostrarCounter}>Cancelar</Button> : <Button variant="primary" onClick={mostrarCounter}>Comprar</Button>
                    }
                    {
                        mostrar ? <ItemCount stock={4} inicial={1}/> : <div></div>
                    }
                </Card.Body>
            </Card>
            
        </section>
    )
}

export default ItemListContainer