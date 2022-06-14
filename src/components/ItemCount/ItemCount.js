import './ItemCount.css';
import { InputGroup, Button} from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";

const ItemCount = ({tipo, stock = 4, setContador, contador, handleOps}) => {

    // let [contador, setContador] = useState(inicial);

    const incrementar = () => {
        (stock > contador) && setContador(contador + 1);
    }

    const decrementar = () => {
        (contador > 1) && setContador(contador - 1);
    }

    return (
        <div className="mt-3">
            {
                tipo === 'cart'? <h3 className="text-white mt-0 mb-3 fs-5 fw-bold">Cantidad</h3> : <h3 className="text-white mt-5 mb-3">Agregar elemento al carrito</h3>
            }
            <InputGroup className="mb-3 d-flex justify-content-center">
                <Button variant="primary" id="button-decrementar" className="pt-0" onClick={decrementar}>
                    <BsDash color='white'/>
                </Button>
                <h4 className='text-dark bg-white fw-bold ps-5 pe-5 mb-0 pt-1'>{contador}</h4>
                <Button variant="primary" id="button-incrementar" className="pt-0" onClick={incrementar}>
                    <BsPlus color='white'/>
                </Button>
            </InputGroup>
            {
               tipo === 'cart'?  
                <Button variant="primary" id="button-EditarCantidad" className="pt-1" onClick={handleOps}>
                    Editar Cantidad
                </Button>
                :
                <Button variant="primary" id="button-agregarCarrito" className="pt-1" onClick={handleOps}>
                    Agregar al Carrito
                </Button>
            }
            
        </div>
    )
}

export default ItemCount