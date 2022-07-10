import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext-Firebase";
import TitleSection from "../TitleSection/TitleSection";
import ChangeFormik from "./ChangeFormik";
import * as Yup from 'yup';
import Marca from "../Marca/Marca";

const schema = Yup.object().shape({
    email: Yup.string()
                .required("Este campo es obligatorio.")
                .email("Formato de email inválido.")
})

const ChangePassword = () => {

    const {cambiarPassword, error, emailEnviado, setEmailEnviado} = useAuthContext();

    const cambioPassword = (e) => {
       
        cambiarPassword(e);

    };

    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <div className="my-5">
                    <Marca/>
                </div>
                <div className="align-items-center justify-content-center">
                    { emailEnviado ? 
                        <>
                            <TitleSection title={"Email Enviado"}/>
                            <p className="px-3">El email ha sido enviado exitosamente.</p>
                            <p className="px-3">No te olvides de también revisar la casilla de spam.</p>
                            <p className="px-3">Si aún así no recibes el mail vuelve a intentarlo cliqueando en el siguiente botón.</p>
                            <button type="button" style={{width:'170px'}} className="btn btn-warning mt-2 fw-bold" onClick={() => setEmailEnviado(!emailEnviado)}>
                                Volver a Intentarlo
                            </button>
                            <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/>  
                        </>
                    :
                        <>
                            <TitleSection title={"Cambiar Contraseña"}/>
                            <ChangeFormik cambioPassword={cambioPassword} schema={schema} error={error}/>
                            <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/> 
                        </>
                    }                  
                </div>
            </Container>
        </section>
    )
}
export default ChangePassword