import TitleSection from "../TitleSection/TitleSection"

const DetalleBuyer = ({buyer}) => {

    return (
        <>
            <TitleSection title={"Detalle Comprador"}/>
            <div className="ms-5 me-5">
                <p className="text-white fs-5">Nombre del Comprador: {buyer.nombre}</p>
                <p className="text-white fs-5">Dirección de Envío: {buyer.direccion}</p>
                <p className="text-white fs-5">Teléfono de Contacto: {buyer.telefono}</p>
            </div>
        </>
    )
}

export default DetalleBuyer