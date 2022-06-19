import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList.js/ItemList';
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true);

        // 1- armar la referencia donde indico la base y a que coleccion quiero acceder
        const productosRef = collection(db, "productos");
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
        // 2- (async) llamar a firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems( newItems )
            })
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