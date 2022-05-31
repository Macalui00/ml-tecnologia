import productos from "./productos";

const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(productos)
            
        }, 2000) //2 segundos.

    })
}

export default pedirDatos