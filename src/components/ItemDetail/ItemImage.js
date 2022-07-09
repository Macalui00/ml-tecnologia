import { Image } from "react-bootstrap";

const ItemImage = ({src,alt}) => {
   
    return (
        <Image width='450' src={src} alt={alt}></Image>
    )
}

export default ItemImage