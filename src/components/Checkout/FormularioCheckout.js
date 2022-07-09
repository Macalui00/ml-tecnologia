import TitleSection from "../TitleSection/TitleSection";
import FormularioOrden from "./FormularioOrden";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio.")
                .min(4, "El nombre y Apellido es demasiado corto.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^[a-zA-ZÀ-ÿ,\s*]+$/,"Nombre inválido."),
    telefono: Yup.string()
                .required("Este campo es obligatorio.")
                .min(8, "El número de contacto es demasiado corto.")
                .max(15,"Máximo 15 caracteres.")
                .matches(/^[0-9]+$/,"Nombre inválido."),
    direccion: Yup.string()
                .required("Este campo es obligatorio.")
                .min(4, "La dirección es demasiado corta.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^([a-zA-ZÀ-ÿ,.'-]+\s)+[0-9]+(\s[0-9]+[a-zA-Z]+)*$/,"Dirección inválida.")
})

const FinalizarCompra = ({generarOrden}) => {

    return(
        <div className="p-0 float-end">
            <TitleSection title={"Checkout"} tamano={"2"}/>
            <FormularioOrden generarOrden={generarOrden} schema={schema} />
        </div>
    )
}
export default FinalizarCompra;