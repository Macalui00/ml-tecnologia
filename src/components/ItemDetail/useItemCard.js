import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


export const useItemCard = (item) => {
    const {addItem, editItem} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }
        addItem(itemToCart);
    }

    const handleEditar = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }
        editItem(itemToCart);
    }
    return {
        cantidad, setCantidad, handleVolver, handleAgregar, handleEditar
    }
}