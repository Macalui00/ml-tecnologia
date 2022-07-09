import { Formik } from "formik";
import { useCartContext } from "../Context/CartContext";

const FormularioOrden = ({generarOrden, schema}) => {
    const {emptyCart} = useCartContext();
    return(
            <Formik
                initialValues={{
                    nombre: '',
                    telefono: '',
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
                            placeholder="Nombre y Apellido"
                            className="form-control my-2"
                            style={{'width':'400px'}}
                        />
                        {formik.errors.nombre && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.nombre}</p>}
                        <input
                            value={formik.values.telefono}
                            name="telefono"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Nro. de Contacto"
                            className="form-control my-2"
                            style={{'width':'400px'}}
                        />
                        {formik.errors.telefono && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.telefono}</p>}
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
                        <button type="submit" className="btn btn-success mt-2 fw-bold">Enviar</button> <button className="btn btn-danger mt-2 fw-bold" onClick={emptyCart}>Cancelar</button>
                    </form>
                )}
            </Formik>
    )
}
export default FormularioOrden;