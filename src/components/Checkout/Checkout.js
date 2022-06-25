import { Container } from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
    const {cart, totalPrice, emptyCart} = useCartContext();
    
    const [orderId, setOrderId] = useState(null);
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues (
            {
                ...values,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (values.nombre.length <5) {
            alert("El nombre es demasiado corto.")
            return
        }
        if (values.email.length <5) {
            alert("El email es inválido.")
            return
        }
        if (values.direccion.length <5) {
            alert("La dirección no es correcta.")
            return
        }
 
        const orden = {
            buyer: values,
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
            console.log(outOfStock);
            alert("Hay items sin stock");
        }
 
    }
    if (orderId) {
        return(
            <section className=''>
                <Container className="container-sm container-fluid my-5">
                    <h2 className='fw-bold px-5'>¡Gracias por su compra!</h2>
                    <hr className="text-warning opacity-100" style={{height: '2px'}}/>
                    <p>Su número de orden es: {orderId}</p>
                </Container>
            </section>
        )
    }
    if (cart.length === 0){
        return <Navigate to="/"/>
    }

    return(
    
        <section className=''>
            <Container className="container-sm container-fluid my-5">
                <h2 className='fw-bold bg-dark py-2 mb-0 px-5'>Checkout</h2>
                <hr className="text-warning opacity-100 mt-0" style={{height: '2px'}}/>
                <form onSubmit={handleSubmit} className="mx-5">
                    <input
                        value={values.nombre}
                        name="nombre"
                        onChange={handleInputChange}
                        type={"text"}
                        placeholder="Tu nombre"
                        className="form-control my-2"
                    />
                    <input
                        value={values.email}
                        name="email"
                        onChange={handleInputChange}
                        type={"text"}
                        placeholder="email@example.com"
                        className="form-control my-2"
                    />
                    <input
                        value={values.direccion}
                        name="direccion"
                        onChange={handleInputChange}
                        type={"text"}
                        placeholder="Tu direccion"
                        className="form-control my-2"
                    />
                    <button type="submit" className="btn btn-success mt-2 fw-bold">Enviar</button>
                </form>
                <button className="btn btn-danger mt-3 fw-bold" onClick={emptyCart}>Cancelar Compra</button>
            </Container>
        </section>
    )
}
export default Checkout;