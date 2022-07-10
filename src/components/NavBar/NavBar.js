import './NavBar.css';
import CardWidget from './../CardWidget/CardWidget.js';
import { useAuthContext } from '../Context/AuthContext';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {cerrarSesion, obtenerEmail, obtenerUserId} = useAuthContext();

    return <header>
                <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
                    <Container>
                        <Navbar.Brand id="titulo" className="ms-3 mt-1"><Link to={"/"} className= 'text-decoration-none fw-bold fs-4 text-warning font-Bungee'>ML Tecnología</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="TV, Audio y Video" id="basic-nav-dropdown" className='fw-bold fs-5 pt-1'>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/tv"}>TV</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/proyectores"}>Proyectores</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/soporte"}>Soporte</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/audio"}>Audio</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/camaras"}>Cámaras y Video Cámaras</Link>
                                </NavDropdown>
                                <NavDropdown title="Celulares, Notebooks e Informática" id="basic-nav-dropdown" className='fw-bold fs-5 pt-1'>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/celulares"}>Celulares</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/tablets"}>Tablets</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/notebooks"}>Notebooks</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/monitores"}>Monitores</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/impresoras"}>Impresoras</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/cartuchos"}>Cartuchos</Link>
                                </NavDropdown>
                                <NavDropdown title="Accesorios" id="basic-nav-dropdown" className='fw-bold fs-5 pt-1'>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/teclados"}>Teclados</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/pads"}>Pads</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/parlantes"}>Parlantes</Link>
                                    <Link className='fw-bold dropdown-item' to={"/categorias/estabilizadores"}>Estabilizadores</Link>
                                </NavDropdown>
                            </Nav>
                            <Nav className="me-5 justify-content-end">
                                <CardWidget/>
                                <NavDropdown title={obtenerEmail()} id="basic-nav-dropdown" className='fw-bold ms-2 fs-5 pt-1'>
                                    <Link className='fw-bold dropdown-item' to={"/perfil/"+obtenerUserId()}>Mi Perfil</Link>
                                    <NavDropdown.Item className='fw-bold' href="#action/3.2">Configuración</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='fw-bold text-danger logout' onClick={cerrarSesion}>Cerrar Sesión</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </header> 

}

export default NavBar