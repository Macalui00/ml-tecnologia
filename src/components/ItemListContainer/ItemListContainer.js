import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';
import ItemList from '../ItemList.js/ItemList';
import { useProductos } from './useProductos';
import { useState } from "react";
import Buscar from '../Buscar/Buscar';

const ItemListContainer = () => {
    
    const [buscarNombre, setBuscarNombre] = useState("");

    const { items, loading } = useProductos()
    
    return (
        <section className='productos mt-3'>
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                : 
                <>
                    <Buscar buscarNombre={buscarNombre} setBuscarNombre={setBuscarNombre}/>
                    <ItemList items={ !buscarNombre ? items : items.filter(
                                        (item) =>
                                            item.nombre.toLowerCase().includes(buscarNombre.toLowerCase())
                                    )
                    }/>
                </>
            }

        </section>
    )
}

export default ItemListContainer