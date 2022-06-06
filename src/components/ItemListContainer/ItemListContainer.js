import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import pedirDatos from '../../mock/pedirDatos'; 
import ItemList from '../ItemList.js/ItemList';
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true);

        pedirDatos()
            .then((resp) => {

                if (!categoryId){
                    setItems(resp);
                } else {
                    setItems(resp.filter((item) => item.categoria.toUpperCase() === categoryId.toUpperCase()))
                }
                
            })
            .catch((error) => {
                console.log("ERROR: ", error);
            } )
            .finally(() => {
                setLoading(false);
            })

    }, [categoryId])

    return (
        <section className='productos mt-5'>
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                : 
                <ItemList items={items}/>
            }

            

            
        </section>
    )
}

export default ItemListContainer