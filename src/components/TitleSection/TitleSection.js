
const TitleSection = ({title, tamaño = "3"}) => {

    return(
        <>
            <h2 className={"fw-bold bg-dark py-2 px-5 mb-0 fs-" + tamaño} >{title}</h2>
            <hr className="mt-0 text-warning opacity-100" style={{height: '2px'}}/>
        </>
    )
}
export default TitleSection