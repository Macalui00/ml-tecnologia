import TitleSection from "../TitleSection/TitleSection";
import FormularioOrden from "./FormularioOrden";
import * as Yup from 'yup';
import Separador from "../Separador/Separador";

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("El Nombre y Apellido es obligatorio.")
                .min(4, "El Nombre y Apellido es demasiado corto.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^[a-zA-ZÀ-ÿ,\s*]+$/,"Nombre inválido."),
    telefono: Yup.string()
                .required("El teléfono es obligatorio.")
                .min(8, "El número de contacto es demasiado corto.")
                .max(15,"Máximo 15 caracteres.")
                .matches(/^[0-9]+$/,"Nombre inválido."),
    email: Yup.string()
                .required("Este campo es obligatorio.")
                .email("Formato de email inválido."),
    direccion: Yup.string()
                .required("La dirección es obligatoria.")
                .min(4, "La dirección es demasiado corta.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^([a-zA-ZÀ-ÿ,.'-]+\s)+[0-9]+(\s[0-9]+[a-zA-Z]+)*$/,"Dirección inválida.")
})

const DetalleCheckout = ({generarOrden}) => {

    return(
        <div className="formulario-checkout float-end p-0">
            <TitleSection title={"Checkout"} tamano={"2"}/>
            <FormularioOrden generarOrden={generarOrden} schema={schema} />
            <Separador/>
        </div>
    )
}
export default DetalleCheckout;