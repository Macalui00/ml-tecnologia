import { Container } from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore";
import { db } from "../firebase/config";
import { Formik } from "formik";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio.")
                .min(4, "El nombre es demasiado corto.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^[a-zA-ZÀ-ÿ,\s*]+$/,"Nombre inválido."),
    email: Yup.string()
                .required("Este campo es obligatorio.")
                .email("Formato de email inválido."),
    direccion: Yup.string()
                .required("Este campo es obligatorio.")
                .min(4, "La dirección es demasiado corta.")
                .max(50,"Máximo 50 caracteres.")
                .matches(/^([a-zA-ZÀ-ÿ,.'-]+\s)+[0-9]+(\s[0-9]+[a-zA-Z]+)*$/,"Dirección inválida.")
})

const Checkout = () => {
    const {cart, totalPrice, emptyCart} = useCartContext();
    
    const [orderId, setOrderId] = useState(null);

    const generarOrden = async (values) => {
 
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
            
            let listado = "";

            outOfStock.forEach((item) => {
                listado = ((listado === "") ? item.nombre : listado + '\n' + item.nombre);
            });

            alert(`Lo sentimos, hay items sin stock:\n${listado}`);
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

                <Formik
                    initialValues={{
                        nombre: '',
                        email: '',
                        direccion: ''
                    }}         
                    onSubmit={generarOrden}  
                    validationSchema={schema}
                >
                    { (formik) => (
                        <form onSubmit={formik.handleSubmit} className="mx-5">
                            <input
                                value={formik.values.nombre}
                                name="nombre"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder="Tu nombre"
                                className="form-control my-2"
                                style={{'width':'400px'}}
                            />
                            {formik.errors.nombre && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.nombre}</p>}
                            <input
                                value={formik.values.email}
                                name="email"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder="email@example.com"
                                className="form-control my-2"
                                style={{'width':'400px'}}
                            />
                            {formik.errors.email && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.email}</p>}
                            <input
                                value={formik.values.direccion}
                                name="direccion"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder="Tu direccion"
                                className="form-control my-2"
                                style={{'width':'400px'}}
                            />
                            {formik.errors.direccion && <p className="alert alert-danger py-1 mt-1 mb-2" style={{fontSize:'16px'}}>{formik.errors.direccion}</p>}
                            <button type="submit" className="btn btn-success mt-2 fw-bold">Enviar</button>
                        </form>
                    )}
                </Formik>
                
                <button className="btn btn-danger mt-3 fw-bold" onClick={emptyCart}>Cancelar Compra</button>
            </Container>
        </section>
    )
}
export default Checkout;