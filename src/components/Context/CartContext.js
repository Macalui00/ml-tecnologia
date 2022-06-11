import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
   
    const [cart, setCart] = useState([])
    const addItem = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
      // return cart.find((prod) => prod.id === id) me retorna el producto si lo encuentra
      return cart.some((prod) => prod.id === id) // me retorna verdadero o falso si lo encuentra o no.
    }
    
    const totalPrice = () => {
      return cart.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0);
    }
  
    const totalQuantity = () => {
      return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
  
    const emptyCart = () => {
      setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    return(
        <CartContext.Provider value={
            {
                cart, 
                addItem, 
                isInCart, 
                totalPrice, 
                totalQuantity, 
                emptyCart,
                removeItem
            }
        }>
            {children}
        </CartContext.Provider>
    )
}