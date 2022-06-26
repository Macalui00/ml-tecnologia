import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';
import ItemList from '../ItemList.js/ItemList';
import { useProductos } from './useProductos';

const ItemListContainer = () => {

    const { items, loading } = useProductos()

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