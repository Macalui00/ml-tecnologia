import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../Context/CartContext";
import './Item.css';

const Item = ({item}) => {
    const {getQuantityProduct} = useContext(CartContext);
    console.log((item.stock - getQuantityProduct(item.id)) === 0, "stock", item.stock, getQuantityProduct(item.id), item.stock - getQuantityProduct(item.id))
    return(
        <Card style={{ width: '18rem' }} className='ms-3 me-3 mb-3 p-0' key={item.id}>
            <Card.Header className='card-header'><Card.Title className='fw-bold text-warning mb-0'>{item.nombre}</Card.Title></Card.Header>
            <Card.Img variant="top" src={item.img} alt={item.nombre} className="img-fluid"/>
            <Card.Body>
                {
                    ((item.stock - getQuantityProduct(item.id)) === 0) ? 
                        <ul className='m-0 p-0 text-dark'>
                            <li><h2 className="text-warning rounded-pill fw-bold fs-4 bg-dark py-1">SIN STOCK</h2></li>
                            <li><p className='detalle fw-bold text-success fs-4'>Precio: ${item.precio}</p></li>
                        </ul>
                    : 
                        <ul className='m-0 p-0 text-dark'>
                            <li><p className='detalle fw-bold text-success fs-4'>Precio: ${item.precio}</p></li>
                        </ul>
                }
                {/* <ul className='m-0 p-0 text-dark'>
                    <li className={`stock ${((item.stock - getQuantityProduct(item.id)) > 0) ? 'stock-hidden' : ''}`}><h2 className="text-danger fw-bold fs-4">SIN STOCK</h2></li>
                    <li><p className='detalle fw-bold text-success'>Precio: ${item.precio}</p></li>
                </ul> */}
                    
                <Link to={`/item/${item.id}`}>
                    <button className="btn btn-primary my-2">Ver más</button>
                </Link>
            </Card.Body>
        </Card> 
    )
    
}

export default Item