const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <button>VOLVER</button>
        </div>
    )
}

export default ItemDetail