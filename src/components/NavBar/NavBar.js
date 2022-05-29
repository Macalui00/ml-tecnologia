import {Navbar, Container, Nav, NavDropdown, InputGroup, FormControl, Button} from 'react-bootstrap';
import './NavBar.css';
import CardWidget from './../CardWidget/CardWidget.js';

const NavBar = () => {
    return <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className="ms-3 mt-1 fw-bold text-warning" href="#home">ML Tecnología</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="TV, Audio y Video" id="basic-nav-dropdown" className='fw-bold'>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.1">TV</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.2">Proyectores</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.3">Soporte</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.2">Audio</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.3">Cámaras y Video Cámaras</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Celulares, Notebooks e Informática" id="basic-nav-dropdown" className='fw-bold'>
                                    <NavDropdown.Item  className='fw-bold' href="#action/3.1">Celulares</NavDropdown.Item>
                                    <NavDropdown.Item  className='fw-bold' href="#action/3.2">Tablets</NavDropdown.Item>
                                    <NavDropdown.Item  className='fw-bold' href="#action/3.3">Notebooks</NavDropdown.Item>
                                    <NavDropdown.Item  className='fw-bold' href="#action/3.2">Monitores</NavDropdown.Item>
                                    <NavDropdown.Item  className='fw-bold' href="#action/3.3">Impresoras</NavDropdown.Item>
                                    <NavDropdown.Item  className='fw-bold' href="#action/3.3">Cartuchos</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Accesorios" id="basic-nav-dropdown" className='fw-bold'>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.1">Teclados</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.2">Pads</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.3">Parlantes</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.2">Estabilizadores</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="me-5 justify-content-end">
                                <CardWidget/>
                                <NavDropdown title="CoderHouse" id="basic-nav-dropdown" className='fw-bold ms-2'>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.1">Mi Perfil</NavDropdown.Item>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.2">Configuración</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='fw-bold text-danger' href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </header> 

}

export default NavBar