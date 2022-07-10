import { Formik } from "formik";
import MensajeAlerta from "../MensajeAlerta/MensajeAlerta";

const ChangeFormik = ({cambioPassword, schema, error}) => {
    
    return(
        <Formik
                initialValues={{
                    email: ''
                }}         
                onSubmit={cambioPassword}  
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
                        className="form-control my-4"
                        style={{'width':'400px'}}
                    />
                    {formik.errors.email && <MensajeAlerta mensaje={formik.errors.email} clases={"py-1 mt-0 mb-4 fw-bold fs-6"}/>}

                    {
                        (!(formik.errors.email) && (error.errorMessage)) ? 
                            <MensajeAlerta 
                                mensaje={(error.errorMessage) ? error.errorMessage : "Usuario Incorrecto"} 
                                clases={"py-1 mt-3 mb-4 fw-bold fs-6"}
                            /> 
                        : 
                            <></>
                    }
                    
                    <button type="submit" className="btn btn-success my-0">Enviar</button>
                </form>
            )}
        </Formik>
    )
}
export default ChangeFormik