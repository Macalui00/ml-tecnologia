import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";
import TitleSection from "../TitleSection/TitleSection";
import LoginFormik from "./LoginFormik";
import Marca from "../Marca/Marca";
import * as Yup from 'yup';
import Separador from "../Separador/Separador";

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

    const {login, error} = useAuthContext()

    const loggearse = (e) => {
        login(e)
    }

    return(
        <section className='d-flex align-items-center justify-content-center'>
            <Container className="container-sm container-fluid my-5">
                <Row className="my-4">
                    <Marca/>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <TitleSection title={"Login"}/>
                    <LoginFormik loggearse={loggearse} schema={schema} error={error}/>
                    <Separador clases="mt-4"/>            
                </Row>
            </Container>
        </section>
    )
}
export default LoginScreen