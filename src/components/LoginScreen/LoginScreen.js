import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";
import TitleSection from "../TitleSection/TitleSection";
import LoginFormik from "./LoginFormik";
import * as Yup from 'yup';

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

    const {login, error} = useAuthContext()

    const loggearse = (e) => {
        login(e)
    }

    return(
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <Row className="align-items-center justify-content-center">
                    <TitleSection title={"Login"}/>
                    <LoginFormik loggearse={loggearse} schema={schema} error={error}/>
                    <hr className="mt-4 text-warning opacity-100" style={{height: '2px'}}/>                   
                </Row>
            </Container>
        </section>
    )
}
export default LoginScreen