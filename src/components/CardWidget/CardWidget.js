import './CardWidget.css';
import {Card} from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const {totalQuantity} = useCartContext();

    return (
        <Link to={"/cart"}>
            <Card className={`widget mt-1 ${totalQuantity() === 0 ? 'widget-hidden' : '' }`}>
                <Card.Body className='d-flex p-2 m-0  justify-content-center'>
                    <BsFillCartFill color='white' className='mb-0 fs-5'/>
                    <h4 className='mb-0 ms-2 text-warning'>{totalQuantity()}</h4>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CardWidget