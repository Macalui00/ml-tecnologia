import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useOrden = () => {
    const [orden, setOrden] = useState(null)
    const [loading, setLoading] = useState(true)

    const { ordenId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armar la referencia
        const docRef = doc(db,"ordenes", ordenId)

        //2.- llamar a firestore
        getDoc(docRef)
            .then((doc) => {
                setOrden({id: doc.id, ...doc.data()});
            })
            .finally(() =>{
                setLoading(false);
            })

    }, [ordenId])

    return {
        orden, loading
    }
}