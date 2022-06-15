import productos from "./productos";

const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(productos)
            
        }, 200) //2 segundos.

    })
}

export default pedirDatos