import './ItemCount.css';
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";

const ItemCount = ({stock = 4, inicial = 1}) => {

    let [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (stock > contador) {
            setContador(contador + 1);
        } else {alert("Lo sentimos, no hay más stock")}
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } 
    }

    return (
        <div className="mt-3">
            <h3 className="text-dark fw-bold mb-3">Agregar elemento al carrito</h3>
            <InputGroup className="mb-3 d-flex justify-content-center">
                <Button variant="primary" id="button-decrementar" className="pt-0" onClick={decrementar}>
                    <BsDash color='white'/>
                </Button>
                <h4 className='text-dark fw-bold ps-5 pe-5 mb-0 pt-1'>{contador}</h4>
                <Button variant="primary" id="button-incrementar" className="pt-0" onClick={incrementar}>
                    <BsPlus color='white'/>
                </Button>
            </InputGroup>
            <Button variant="primary" id="button-agregarCarrito" className="pt-1">
                Agregar al Carrito
            </Button>
        </div>
    )
}

export default ItemCount