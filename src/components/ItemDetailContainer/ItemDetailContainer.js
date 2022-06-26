import { Spinner } from "react-bootstrap"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useProducto } from "./useProducto"

const ItemDetailContainer = () => {
   
    const { item, loading } = useProducto()

    return (
        <section className='m-0'>
        
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemDetail item={item}/>
            }

        </section>
    )
}

export default ItemDetailContainer