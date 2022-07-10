import Container from "react-bootstrap/esm/Container";
import { useAuthContext } from "../Context/AuthContext-Firebase";
import TitleSection from "../TitleSection/TitleSection";

const Perfil = () => {
    const {cerrarSesion, obtenerEmail} = useAuthContext();

    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"Mi Perfil"}/>
                <p className="px-5">Email: {obtenerEmail()}</p>
                <button className='btn btn-danger fw-bold' onClick={cerrarSesion}>Cerrar Sesión</button>
                <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/> 
            </Container>
        </section>
    )
}
export default Perfil