import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
   
    const [cart, setCart] = useState([]);

    const [totalCantidad, setCantidad] = useState(0);

    const addItem = (item) => {
      setCart([...cart, item])
      setTotalQuantity();
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id) // me retorna verdadero o falso si lo encuentra o no.
    }
    
    const totalPrice = () => {
      return cart.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0);
    }
  
    const totalQuantity = () => {
      return cart.reduce((acc, prod) => acc += prod.cantidad, 0);
    }

    const setTotalQuantity = () => {
      setCantidad(totalQuantity());
    }
  
  
    const emptyCart = () => {
      setCart([])
      setTotalQuantity();
    }

    const removeItem = (id) => {
      setCart(cart.filter((prod) => prod.id !== id))
      setTotalQuantity();
    }

    const editItem = (item) => {
      
      const prod = cart.find((prod) => prod.id === item.id); // me retorna el producto si lo encuentra

      if (cart.indexOf(prod) >= 0) {
        cart[cart.indexOf(prod)].cantidad = cart[cart.indexOf(prod)].cantidad + item.cantidad;
        setTotalQuantity();
      }
    }

    const alterQuantity = (item) =>{
      const prod = cart.find((prod) => prod.id === item.id); // me retorna el producto si lo encuentra

      if (cart.indexOf(prod) >= 0) {
        cart[cart.indexOf(prod)].cantidad = item.cantidad;
        setTotalQuantity();
      }
    }
    
    return(
        <CartContext.Provider value={
            {
                cart, 
                totalCantidad,
                addItem, 
                isInCart, 
                totalPrice, 
                totalQuantity, 
                setTotalQuantity, 
                emptyCart,
                removeItem,
                editItem,
                alterQuantity
            }
        }>
            {children}
        </CartContext.Provider>
    )
}