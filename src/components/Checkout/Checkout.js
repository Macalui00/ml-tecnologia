import { useCartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import { useCheckout } from "./useCheckout";
import CompraExitosa from "../CompraExitosa/CompraExitosa";
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra";


const Checkout = () => {
    const {cart} = useCartContext();

    const { orderId, generarOrden } = useCheckout()
 
    if (orderId) {
        return(
            <CompraExitosa orderId={orderId}/>
        )
    }
    if (cart.length === 0){
        return <Navigate to="/"/>
    }

    return(
    
        <FinalizarCompra generarOrden={generarOrden}/>
    )
}
export default Checkout;