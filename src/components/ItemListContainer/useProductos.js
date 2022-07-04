import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';


export const useProductos = () => {
    const [items, setItems] = useState([])
      
    const [buscarNombre, setBuscarNombre] = useState("");

    const [orderPrice, setOrderPrice] = useState("ASC");

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    const buscarPorNombre = (nombre, listado) => {
        return !nombre ? listado : listado.filter(
            (item) =>
                item.nombre.toLowerCase().includes(nombre.toLowerCase())
        )
    }

    const ordenarAsc = () => {
        setOrderPrice("ASC")
    }

    const ordenarDesc = () => {
        setOrderPrice("DESC")
    }
        
    const orderByStock = (items) => {
        return items.sort(function (a, b) {
            if (a.stock === 0) {
              return 1;
            }
            if (b.stock === 0) {
              return -1;
            }
            return 0;
        })
    }

    const orderByName = (items) => {
        return items.sort(function (a, b) {
            if (a.nombre > b.nombre) {
              return 1;
            }
            if (a.nombre < b.nombre) {
              return -1;
            }
            return 0;
        })
    }

    const orderByPriceDesc = (items) => {
        return items.sort(function (a, b) {
            return (b.precio - a.precio)
        })
    }
    const orderByPriceAsc = (items) => {
        return items.sort(function (a, b) {
            return (a.precio - b.precio)
        })
    }

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

    return {
        items, 
        loading, 
        buscarNombre, 
        setBuscarNombre, 
        orderPrice, 
        buscarPorNombre,
        ordenarAsc, 
        ordenarDesc, 
        orderByName, 
        orderByPriceAsc,
        orderByPriceDesc,
        orderByStock
    }
}