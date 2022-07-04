
const MensajeAlerta = ({mensaje, clases}) => {

    return(
        <p className={"alert alert-danger " + clases}>{mensaje}</p>
    )
}
export default MensajeAlerta