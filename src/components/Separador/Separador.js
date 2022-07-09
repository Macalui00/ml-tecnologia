
const Separador = ({clases = ""}) => {

    return(
        <>
            <hr className={"text-warning opacity-100 " + clases} style={{height: '2px'}}/>
        </>
    )
}
export default Separador