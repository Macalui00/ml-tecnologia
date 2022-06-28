import { Formik } from "formik";

const FormularioOrden = ({generarOrden, schema}) => {

    return(
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    direccion: ''
                }}         
                onSubmit={generarOrden}  
                validationSchema={schema}
            >
                { (formik) => (
                    <form onSubmit={formik.handleSubmit} className="mx-5">
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Tu nombre"
                            className="form-control my-2"
                            style={{'width':'400px'}}
                        />
                        {formik.errors.nombre && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.nombre}</p>}
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="email@example.com"
                            className="form-control my-2"
                            style={{'width':'400px'}}
                        />
                        {formik.errors.email && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.email}</p>}
                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Tu direccion"
                            className="form-control my-2"
                            style={{'width':'400px'}}
                        />
                        {formik.errors.direccion && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.direccion}</p>}
                        <button type="submit" className="btn btn-success mt-2 fw-bold">Enviar</button>
                    </form>
                )}
            </Formik>
    )
}
export default FormularioOrden;