import { Formik } from "formik";

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
                    {formik.errors.email && <p className="alert alert-danger py-1 mt-0 mb-4 fw-bold fs-6">{formik.errors.email}</p>}
                    {error.email && <p className="alert alert-danger py-1 mt-1 mb-3 fw-bold" style={{fontSize:'16px'}}>{error.email}</p>}

                    <input
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        type={"password"}
                        placeholder="Contraseña"
                        className="form-control my-3"
                    />
                    {formik.errors.password && <p className="alert alert-danger py-1 mt-0 mb-4 fw-bold fs-6">{formik.errors.password}</p>}
                    {error.password && <p className="alert alert-danger py-1 mt-0 mb-4 fw-bold" style={{fontSize:'16px'}}>{error.password}</p>}
                    
                    <button type="submit" className="btn btn-warning my-2 fw-bold">Enviar</button>
                </form>
            )}
        </Formik>
    )
}
export default LoginFormik