
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import pedirDatos from "../../mock/pedirDatos"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItem( resp.find((item) => item.id === Number(itemId)) )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <section className='productos mt-5'>
        
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