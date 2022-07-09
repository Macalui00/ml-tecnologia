import Separador from "../Separador/Separador"

const TitleSection = ({title, tamano = "3"}) => {

    return(
        <>
            <h2 className={"fw-bold bg-dark py-2 px-5 mb-0 fs-" + tamano} >{title}</h2>
            <Separador clases="mt-0"/>
        </>
    )
}
export default TitleSection