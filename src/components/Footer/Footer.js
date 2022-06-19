import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    return(
        <Container>
            <Row>
                <Col className='my-3'>
                    <h3 className='text-warning'>
                        ML-Tecnologia
                    </h3> 
                </Col>
                <Col className='my-3 text-left'>
                    <h4>
                    Copyright 2022 | Todos los derechos reservados Ml-Tecnologia.com. ML-Tecnología S.A. | Capital Federal | Argentina
                    </h4> 
                </Col>
                <Col className='my-3 text-left text-warning'>
                    <h3 className='pb-0 mb-0'>
                        Redes Sociales:
                    </h3> 
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href='facebook.com'><h4 className='text-warning'>Facebook</h4></a></li>
                        <li className="list-inline-item"><a href='instagram.com'><h4 className='text-warning'>Instagram</h4></a></li>
                        <li className="list-inline-item"><a href='twitter.com'><h4 className='text-warning'>Twitter</h4></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
        
    )
    
}

export default Footer