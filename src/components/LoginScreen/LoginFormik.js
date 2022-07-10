import { Formik } from "formik";
import MensajeAlerta from "../MensajeAlerta/MensajeAlerta";
import { useAuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Separador from "../Separador/Separador";

const LoginFormik = ({loggearse, schema, error}) => {
    const {isRegistrando, setIsRegistrando,iniciarConGoogle} = useAuthContext();
    return(
        <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}         
                onSubmit={loggearse}  
                validationSchema={schema}
            >
            { (formik) => (
                <form onSubmit={formik.handleSubmit} className="mx-5">
                    <input
                        value={formik.values.email}
                        name="email"
                        onChange={formik.handleChange}
                        type={"text"}
                        placeholder="Email de usuario"
                        className="form-control my-3"
                        style={{'width':'400px'}}
                    />
                    {formik.errors.email && <MensajeAlerta mensaje={formik.errors.email} clases={"py-1 mt-0 mb-4 fw-bold fs-6"}/>}

                    <input
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        type={"password"}
                        placeholder="Contraseña"
                        className="form-control my-3"
                        style={{'width':'400px'}}
                    />
                    {formik.errors.password && <MensajeAlerta mensaje={formik.errors.password} clases={"py-1 mt-0 mb-3 fw-bold fs-6"}/>}
                    
                    {
                        (!(formik.errors.password || formik.errors.email) && (error.errorMessage)) ? 
                            <MensajeAlerta 
                                mensaje={(error.errorMessage) ? error.errorMessage : "Usuario o Contraseña Incorrectos"} 
                                clases={"py-1 my-3 fw-bold fs-6"}
                            /> 
                        : 
                            <></>
                    }
                    
                    <button type="submit" className="btn btn-success mt-0"> 
                        {!isRegistrando
                        ? "Iniciar Sesión"
                        : "Registrarse"}
                    </button>
                    <br/>
                    <button onClick={iniciarConGoogle} className="btn btn-primary mt-3 mb-2">Iniciar con Google</button>
                    <br/>
                    <Separador />
                    <button type="button" className="btn btn-warning mt-2 text-black" onClick={() => setIsRegistrando(!isRegistrando)}>
                        {isRegistrando
                        ? "¿Ya tienes cuenta? ¡Inicia sesión"
                        : "¿No tienes cuenta? ¡Regístrate!"}
                    </button>
                    
                    <br/>
                    <Link to={"/changepassword"} className="btn btn-warning mt-3">¿Olvidate tu contraseña?</Link>
                </form>
            )}
        </Formik>
    )
}
export default LoginFormik