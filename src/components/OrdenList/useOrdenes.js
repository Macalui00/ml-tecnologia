import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useOrdenes = () => {
    const [ordenes, setOrdenes] = useState([])
   
    const [loading, setLoading] = useState(true);

    const {userId} = useParams();

    useEffect(() => {
        setLoading(true);

        const ordenesRef = collection(db, "ordenes");
        
        getDocs(ordenesRef)
            .then((resp) => {
                const newOrdernes = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setOrdenes( newOrdernes )
            })
            .finally(() => {
                setLoading(false);
            })

    }, [userId])


    return {
        ordenes, 
        loading
    }
}