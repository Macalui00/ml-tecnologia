import './CardWidget.css';
import {Card} from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

const CardWidget = () => {
    return (
        <Card className='cardW'>
            <Card.Body className='d-flex p-2 m-0'><BsFillCartFill color='white' className='mb-0'/> <h4 className='mb-0 ms-2'>4</h4></Card.Body>
        </Card>
    )
}

export default CardWidget