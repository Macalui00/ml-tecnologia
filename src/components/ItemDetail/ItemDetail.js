import { Container } from "react-bootstrap";
import ItemImage from "./ItemImage";
import ItemCard from './ItemCard';

const ItemDetail = ({item}) => {

    return (
        <Container className='container-sm container-fluid my-5 item-detalle-contenedor'>
                <ItemImage  src={item.img} alt={item.nombre}/>
                <ItemCard item={item}/>
        </Container>
    )
}

export default ItemDetail