
const MensajePill = ({mensaje, clases}) => {

    return (
        <h2 className={"text-warning rounded-pill fw-bold bg-dark " + clases}>{mensaje}</h2>
    )
}

export default MensajePill