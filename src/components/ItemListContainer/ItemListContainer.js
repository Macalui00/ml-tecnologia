import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import pedirDatos from '../../mock/pedirDatos'; 
import ItemList from '../ItemList.js/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        pedirDatos(false)
            .then((resp) => {
                setItems(resp);
            })
            .catch((error) => {
                console.log("ERROR: ", error);
            } )
            .finally(() => {
                setLoading(false);
            })

    }, [])

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