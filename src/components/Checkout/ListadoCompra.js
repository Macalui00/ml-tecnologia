import TitleSection from "../TitleSection/TitleSection";
import DetalleCompra from "./DetalleCompra";
import { useCartContext } from "../Context/CartContext";
import TitleEndSection from "../TitleEndSection/TitleEndSection";

const ListadoCompra = () => {
    const {totalPrice} = useCartContext();

    return(
        <div className="listado-compra float-start p-0 me-4">
            <TitleSection title={"Listado de Compra"} tamano={"2"}/>
            <DetalleCompra/>
            <TitleEndSection title={"TOTAL: $"+ totalPrice()} tamano={4} clases={"mt-0 mb-4"}/>            
        </div>
    )
}
export default ListadoCompra;