import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    return(
        <Card style={{ width: '18rem' }} className='ms-3 me-3 mb-3 p-0' key={item.id}>
            <Card.Header className='card-header'><Card.Title className='fw-bold text-warning mb-0'>{item.nombre}</Card.Title></Card.Header>
            <Card.Img variant="top" src={item.img} alt={item.nombre} className="img-fluid"/>
            <Card.Body>
                <ul className='m-0 p-0 text-dark'>
                    {/* <li><p className='detalle'>{item.desc}</p></li> */}
                    <li><p className='detalle fw-bold text-success'>Precio: ${item.precio}</p></li>
                </ul>
                    
                <Link to={`/item/${item.id}`}>
                    <button className="btn btn-primary my-2">Ver más</button>
                </Link>
            </Card.Body>
        </Card> 
    )
    
}

export default Item