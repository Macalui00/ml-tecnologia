import { Container, Row, Col } from 'react-bootstrap';
import Marca from '../Marca/Marca';
import Copyright from './Copyright';
import './Footer.css';
import SocialMedia from './SocialMedia';

const Footer = () => {

    return(
        <Container>
            <Row>
                <Col className='my-3 col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <Marca tamano='3'/>
                </Col>
                <Col className='my-3 text-left col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <Copyright />
                </Col>
                <Col className='my-3 text-left text-warning col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <SocialMedia />
                </Col>
            </Row>
        </Container>
        
    )
    
}

export default Footer