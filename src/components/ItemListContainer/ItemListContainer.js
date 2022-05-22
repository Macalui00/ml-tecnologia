import './ItemListContainer.css';

const ItemListContainer = ({producto}) => {
    return (
        <section className='productos mt-5'>
            <h2 className='fw-bold'>Nuestros productos</h2>
            <hr/>
            <ul className='m-0 p-0'>
                <li><p className='fw-bold text-warning'>{producto.nombre}</p></li>
                <li><p className='detalle'>Tipo: {producto.tipo}</p></li>
                <li><p className='detalle'>Marca: {producto.marca}</p></li>
                <li><p className='detalle'>Memoria: {producto.memoria}</p></li>
            </ul>
        </section>
    )
}

export default ItemListContainer