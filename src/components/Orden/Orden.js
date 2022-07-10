import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Orden = ({orden}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const fecha = orden.date.toDate().toLocaleDateString("es-ES", options);

    return(
        <Card style={{ width: '18rem' }} className='ms-3 me-3 mb-3 p-0' key={orden.id}>
            <Card.Header className='card-header'>
                <Card.Title className='fw-bold text-warning mb-0'>Orden de Compra</Card.Title>
            </Card.Header>
            <Card.Body className=''>
                <p className='detalle fw-bold text-black fs-5'>Fecha: {fecha}</p>
                <p className='detalle fw-bold text-black fs-5'>Dirección: {orden.buyer.direccion}</p>
                <p className='detalle fw-bold text-success fs-5'>Total: ${orden.total}</p>
                <Link to={`/ordenDetail/${orden.id}`} className="btn btn-primary my-3">Ver Detalle</Link>
            </Card.Body>
        </Card> 
    )
    
}

export default Orden