import './ItemListContainer.css';
import { Spinner, Button } from 'react-bootstrap';
import ItemList from '../ItemList.js/ItemList';
import { useProductos } from './useProductos';
import Buscar from '../Buscar/Buscar';

const ItemListContainer = () => {

    const {items, loading, buscarNombre,  setBuscarNombre, orderPrice, buscarPorNombre, ordenarAsc, 
        ordenarDesc, orderByPriceAsc, orderByPriceDesc, orderByStock} = useProductos();

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
                    <div className='mb-3'>  
                        <span className="fw-bold me-3" style={{fontSize:'18px'}}>Ordenar por:</span>
                        <Button variant={(orderPrice === "ASC") ? "warning" : "light"} className='fw-bold me-3' onClick={ordenarAsc}>Precio Asc.</Button>
                        <Button variant={(orderPrice !== "ASC") ? "warning" : "light"} className='fw-bold' onClick={ordenarDesc}>Precio Desc.</Button>
                    </div>
                    <ItemList items={
                        (orderPrice === "ASC") ?
                            orderByStock(orderByPriceAsc(buscarPorNombre(buscarNombre, items)))
                        : 
                            orderByStock(orderByPriceDesc(buscarPorNombre(buscarNombre, items)))
                    }/>
                </>
            }

        </section>
    )
}

export default ItemListContainer