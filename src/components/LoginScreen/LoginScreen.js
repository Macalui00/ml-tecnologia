import Container from "react-bootstrap/esm/Container";
import { useAuthContext } from "../Context/AuthContext-Firebase";
import TitleSection from "../TitleSection/TitleSection";
import LoginFormik from "./LoginFormik";
import * as Yup from 'yup';
import Marca from "../Marca/Marca";

const schema = Yup.object().shape({
    email: Yup.string()
                .required("Este campo es obligatorio.")
                .email("Formato de email inválido."),
    password: Yup.string()
                .required("Este campo es obligatorio.")
                .min(6, "La contraseña es demasiado corta.")
                .max(20,"Máximo 20 caracteres.")
})

const LoginScreen = () => {

    const {crearUsuario, error, iniciarSesion, isRegistrando} = useAuthContext();

    const loggearse = (e) => {
        console.log(isRegistrando)
        if (isRegistrando) {
          crearUsuario(e);
        }
    
        if (!isRegistrando) {
            console.log("iniciar sesion")
          iniciarSesion(e);
        }
      };

    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <div className="my-4">
                    <Marca/>
                </div>
                <div className="align-items-center justify-content-center">
                    {isRegistrando ? <TitleSection title={"Singup"}/> : <TitleSection title={"Login"}/>}
                    <LoginFormik loggearse={loggearse} schema={schema} error={error}/>
                    <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/>                   
                </div>
            </Container>
        </section>
    )
}
export default LoginScreen