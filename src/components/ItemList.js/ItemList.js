import Item from "../Item/Item";

const ItemList = ({items}) => {

    return(
        <>
            <h2 className='fw-bold'>Nuestros productos</h2>
            <hr/>
            <div className='row'>
                               
                {
                    items.map((item) => <Item key={item.id} item={item}/>)
                }
                
            </div>
        </>
    )
}

export default ItemList