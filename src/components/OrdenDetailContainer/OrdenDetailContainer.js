import { Spinner } from "react-bootstrap"
import OrdenDetail from "../OrdenDetail/OrdenDetail"
import {useOrden} from "../OrdenDetailContainer/useOrden";

const OrdenDetailContainer = () => {
   
    const { orden, loading } = useOrden()

    return (
        <section className='m-0 mt-5'>
        
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <OrdenDetail orden={orden}/>
            }

        </section>
    )
}

export default OrdenDetailContainer