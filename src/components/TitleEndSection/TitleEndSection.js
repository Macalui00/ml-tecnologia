import Separador from "../Separador/Separador"

const TitleEndSection = ({title, clases = "", tamano = "1"}) => {

    return(
        <>
            <Separador clases="m-0"/>
            <h4 className={"text-warning fw-bold bg-dark py-2 fs-"+ tamano +" " + clases}>{title}</h4>
        </>
    )
}
export default TitleEndSection