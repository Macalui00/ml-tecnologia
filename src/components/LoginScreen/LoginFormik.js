import { Formik } from "formik";
import MensajeAlerta from "../MensajeAlerta/MensajeAlerta";

const LoginFormik = ({loggearse, schema, error}) => {
    
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
                    />
                    {formik.errors.email && <MensajeAlerta mensaje={formik.errors.email} clases={"py-1 mt-0 mb-4 fw-bold fs-6"}/>}

                    <input
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        type={"password"}
                        placeholder="Contraseña"
                        className="form-control my-3"
                    />
                    {formik.errors.password && <MensajeAlerta mensaje={formik.errors.password} clases={"py-1 mt-0 mb-4 fw-bold fs-6"}/>}
                    
                    {
                        (!(formik.errors.password || formik.errors.email) && (error.email || error.password)) ? 
                            <MensajeAlerta mensaje={"Usuario o Contraseña Incorrectos"} clases={"py-1 mt-3 mb-4 fw-bold fs-6"}/> 
                        : 
                            <></>
                    }
                    
                    <button type="submit" className="btn btn-warning my-2 fw-bold">Enviar</button>
                </form>
            )}
        </Formik>
    )
}
export default LoginFormik