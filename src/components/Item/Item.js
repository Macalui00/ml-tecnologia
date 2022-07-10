import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import './Item.css';
import MensajePill from '../MensajePill/MensajePill';

const Item = ({item}) => {
    const {getQuantityProduct} = useContext(CartContext);

    return(
        <Card style={{ width: '18rem' }} className='ms-3 me-3 mb-3 p-0' key={item.id}>
            <Card.Header className='card-header'>
                <Card.Title className='fw-bold text-warning mb-0'>{item.nombre}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={item.img} alt={item.nombre} className="img-fluid mx-auto d-block"/>
            <Card.Body className='row align-items-center justify-content-center'>
                {
                    ((item.stock - getQuantityProduct(item.id)) === 0) ? 
                        <ul className='m-0 p-0 text-dark align-items-center'>
                            <li><MensajePill mensaje={"SIN STOCK"} clases={"fs-5 py-1 mx-3"}/></li>
                            <li><p className='detalle fw-bold text-success fs-5'>Precio: ${item.precio}</p></li>
                        </ul>
                    : 
                        <ul className='m-0 p-0 text-dark align-items-center'>
                            <li><p className='detalle fw-bold text-success fs-5'>Precio: ${item.precio}</p></li>
                        </ul>
                }
                    
                <Link to={`/item/${item.id}`}>
                    <button className="btn btn-primary my-2">Ver más</button>
                </Link>
            </Card.Body>
        </Card> 
    )
    
}

export default Item