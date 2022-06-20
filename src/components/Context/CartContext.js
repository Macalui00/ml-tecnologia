import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
   
    const [cart, setCart] = useState([]);

    const [totalCantidad, setCantidad] = useState(0);

    const [totalPrecio, setPrecio] = useState(0);

    const addItem = (item) => {
      setCart([...cart, item])
      setTotalQuantity();
      setTotalPrice();
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id) // me retorna verdadero o falso si lo encuentra o no.
    }
    
    const totalPrice = () => {
      return cart.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0);
    }

    const setTotalPrice = () => {
      setPrecio(totalPrice);
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
      setTotalPrice();
    }

    const removeItem = (id) => {
      setCart(cart.filter((prod) => prod.id !== id))
      setTotalQuantity();
      setTotalPrice();
    }

    const editItem = (item) => {
      
      const prod = cart.find((prod) => prod.id === item.id); // me retorna el producto si lo encuentra

      if (cart.indexOf(prod) >= 0) {
        cart[cart.indexOf(prod)].cantidad = cart[cart.indexOf(prod)].cantidad + item.cantidad;
        setTotalQuantity();
        setTotalPrice();
      }
    }

    const alterQuantity = (item) =>{
      const prod = cart.find((prod) => prod.id === item.id); // me retorna el producto si lo encuentra

      if (cart.indexOf(prod) >= 0) {
        cart[cart.indexOf(prod)].cantidad = item.cantidad;
        setTotalQuantity();
        setTotalPrice();
      }
    }

    const getQuantityProduct = (id) => {
      const producto = cart.find((prod) => prod.id === id); // me retorna la cantidad del producto si lo encuentra

      return (cart.indexOf(producto) >= 0) ? producto.cantidad : 0 ;
    }
    
    return(
        <CartContext.Provider value={
            {
                cart, 
                totalCantidad,
                totalPrecio,
                addItem, 
                isInCart, 
                totalPrice,
                setTotalPrice,
                totalQuantity, 
                setTotalQuantity, 
                emptyCart,
                removeItem,
                editItem,
                alterQuantity,
                getQuantityProduct
            }
        }>
            {children}
        </CartContext.Provider>
    )
}