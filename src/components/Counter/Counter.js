import './Counter.css';
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";

const Counter = ({stock = 4}) => {

    let [contador, setContador] = useState(1);

    const incrementar = () => {
        if (stock > contador) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="mt-3">
            <h4 className="text-dark mb-3">Agregar elemento al carrito</h4>
            <InputGroup className="mb-3">
                <Button variant="primary" id="button-decrementar" className="pt-0" onClick={decrementar}>
                    <BsDash color='white'/>
                </Button>
                <FormControl className="text-center" 
                    aria-label="Incrementador/decrementador de cantidad de items"
                    aria-describedby="basic-addon1"
                    value={contador}
                />
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

export default Counter