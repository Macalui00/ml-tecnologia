import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore";
import { useCartContext } from "../Context/CartContext";
import { useAuthContext } from '../Context/AuthContext';
import { db } from "../firebase/config";
import { useState } from "react";

export const useCheckout = () => {

    const {cart, totalPrice, emptyCart} = useCartContext();
    const {obtenerUserId} = useAuthContext();

    const [orderId, setOrderId] = useState(null);

    const generarOrden = async (values) => {
 
        const orden = {
            buyer: {...values, userId: obtenerUserId()},
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            date: new Date(),
            total: totalPrice()
        }

        const batch = writeBatch(db);
        const ordenesRef = collection(db, "ordenes");
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)));

        const outOfStock = []
        const productos = await getDocs(q);

        productos.docs.forEach((doc) =>{
            const itemToUpdate = cart.find(prod => prod.id === doc.id);

            if((doc.data().stock - itemToUpdate.cantidad) >= 0){
                 batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                 })
            } else {
                outOfStock.push(itemToUpdate);
            }

        })

        if (outOfStock.length === 0) {
            addDoc(ordenesRef, orden)
            .then((doc) => {
                batch.commit();
                setOrderId(doc.id);
                emptyCart();
            })
            
        } else {
            
            let listado = "";

            outOfStock.forEach((item) => {
                listado = ((listado === "") ? item.nombre : listado + '\n' + item.nombre);
            });

            alert(`Lo sentimos, hay items sin stock:\n${listado}`);
        }
 
    }

    return {
        orderId, generarOrden
    }
}