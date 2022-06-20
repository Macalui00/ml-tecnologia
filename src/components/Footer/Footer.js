import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    return(
        <Container>
            <Row>
                <Col className='my-3 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <h3 className='text-warning'>
                        ML-Tecnologia
                    </h3> 
                </Col>
                <Col className='my-3 text-left col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <h4>
                    Copyright 2022 |<br/>
                    Todos los derechos reservados Ml-Tecnologia.com. ML-Tecnología S.A.<br/>| Capital Federal | Argentina
                    </h4> 
                </Col>
                <Col className='my-3 text-left text-warning col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
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