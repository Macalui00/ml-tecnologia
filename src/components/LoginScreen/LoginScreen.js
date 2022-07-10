import Container from "react-bootstrap/esm/Container";
import { useAuthContext } from "../Context/AuthContext";
import TitleSection from "../TitleSection/TitleSection";
import LoginFormik from "./LoginFormik";
import Marca from "../Marca/Marca";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string()
                .required("El email es obligatorio.")
                .email("Formato de email inválido."),
    password: Yup.string()
                .required("La contraseña es obligatoria.")
                .min(6, "La contraseña es demasiado corta.")
                .max(20,"Máximo 20 caracteres.")
})

const LoginScreen = () => {

    const {crearUsuario, error, iniciarSesion, isRegistrando} = useAuthContext();

    const loggearse = (e) => {
        
        if (isRegistrando) {
          crearUsuario(e);
        }
    
        if (!isRegistrando) {
          iniciarSesion(e);
        }
      };

    return(
        <section className='d-flex align-items-center justify-content-center'>
            <Container className="container-sm container-fluid my-5">
                <div className="my-4">
                    <Marca/>
                </div>
                <div className="align-items-center justify-content-center">
                    {isRegistrando ? <TitleSection title={"Registrarse"}/> : <TitleSection title={"Iniciar Sesión"}/>}
                    <LoginFormik loggearse={loggearse} schema={schema} error={error}/>
                    <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/>                   
                </div>
            </Container>
        </section>
    )
}
export default LoginScreen