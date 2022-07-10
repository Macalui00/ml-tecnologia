import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import MensajePill from "../MensajePill/MensajePill";
import { useItemCard } from "./useItemCard";


const ItemCard = ({item}) => {
    const {isInCart, getQuantityProduct} = useContext(CartContext);

    const { cantidad, setCantidad, handleVolver, handleAgregar, handleEditar } = useItemCard(item)

    return (
        <div className="detalle-item p-0 float-end">
            <Card style={{ width: '30rem' }} className='me-3 ms-3 mb-3 p-0 card2'>
                <Card.Header className='card-header card-header2'>
                    <Card.Title className='fw-bold text-warning mb-0 fs-3'>
                        {item.nombre}
                    </Card.Title>
                </Card.Header>
                <Card.Body className="ms-5 me-5">
                    <p className="text-white fs-5">{item.desc}</p>
                    <h3 className='fw-bold text-success fs-4'>Precio: ${item.precio}</h3>
                    {
                        isInCart(item.id)
                        ?   <>
                                <Link to="/cart" className="btn btn-success my-4">Terminar Compra</Link>
                                <br/>
                            </>
                        :
                            ((item.stock - getQuantityProduct(item.id)) > 0) 
                            ?
                                <ItemCount 
                                    tipo={'item'}
                                    stock={item.stock - getQuantityProduct(item.id)} 
                                    setContador={setCantidad} 
                                    contador={cantidad}
                                    handleOps={ (isInCart(item.id)) ? handleEditar : handleAgregar}
                                /> 
                            : 
                                <MensajePill mensaje={"SIN STOCK"} clases={"fs-4 my-3 py-2"}/>
                    }
                    <Button variant="warning" onClick={handleVolver} className='fw-bold'>Volver</Button>
                </Card.Body>
            </Card>                     
        </div>
    )
}

export default ItemCard