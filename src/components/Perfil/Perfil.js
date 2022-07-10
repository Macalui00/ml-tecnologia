import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { useAuthContext } from "../Context/AuthContext";
import TitleSection from "../TitleSection/TitleSection";
import OrdenList from "../OrdenList/OrdenList";
import { useOrdenes } from "../OrdenList/useOrdenes"

const Perfil = () => {
   
    const { ordenes, loading } = useOrdenes();
    const {cerrarSesion, obtenerEmail, obtenerDisplayName} = useAuthContext();
    const nombre = obtenerDisplayName();
    const email = obtenerEmail();

    const {userId} = useParams();
    
    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <TitleSection title={"Mi Perfil"}/>
                {(nombre) ? <p className="px-5">Nombre: {nombre}</p> : <></>}
                <p className="px-5">Email: {email}</p>
                <button className='btn btn-danger' onClick={cerrarSesion}>Cerrar Sesión</button>
                <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/> 

                {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                : 
                <>
                    <OrdenList ordenes={
                        (!userId) ? [] : ordenes.filter(
                            (orden) =>
                                orden.buyer.userId === userId)
                    }/>
                </>
                }
            </Container>
        </section>
    )
}
export default Perfil