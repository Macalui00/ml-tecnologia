import { createContext, useContext, useState, useEffect } from "react"
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../firebase/config'

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

  const [usuario, setUsuario] = useState(null);
  const [isRegistrando, setIsRegistrando] = useState(false);
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [error, setError] = useState("");

  const crearUsuario = (values) => {
    const {email, password} = values
    createUserWithEmailAndPassword(auth, email, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        setUsuario(usuarioFirebase);
      }).catch((error) => {

        if(error.code === "auth/email-already-in-use"){
          setError({
              errorCode: error.code,
              errorMessage: "Existe un usuario registrado con ese mail."
            });
        } else if(error.code === "auth/invalid-email"){
          setError({
            errorCode: error.code,
            errorMessage: "Dirección de email inválida."
          })
        } else if (error.code === "auth/operation-not-allowed"){
          setError({
                errorCode: error.code,
                errorMessage: "El usuario o contraseña no estan habilitados."
              });
        } else if (error.code === "auth/weak-password"){
          setError({
                errorCode: error.code,
                errorMessage: "La contraseña no es lo suficientemente segura."
              });
        } else {
          setError({
            errorCode: "Others",
            errorMessage: "Lo sentimos, ha ocurrido un error."
          });
        }

      });
  };

  const iniciarSesion = (values) => {
    const {email, password} = values
    signInWithEmailAndPassword(auth, email, password)
      .then((usuarioFirebase) => {
        
        setUsuario(usuarioFirebase);

      }).catch((error) => {
        
        if(error.code === "auth/invalid-email" || error.code === "auth/wrong-password" ){
          setError({
              errorCode: error.code,
              errorMessage: "Email o contraseña inválida."
            });
        } else if(error.code === "auth/user-disabled"){
          setError({
            errorCode: error.code,
            errorMessage: "El usuario está deshabilitado."
          })
        } else if (error.code === "auth/user-not-found"){
          setError({
                errorCode: error.code,
                errorMessage: "Usted no tiene un usuario registrado."
              });
        } else {
          setError({
            errorCode: "Others",
            errorMessage: "Ha habido un error, revise sus datos o intente registrarse."
          });
        }   

      });
  };

  const cerrarSesion = () => {
    signOut(auth).then(() => {
      console.log("cerrar")
    }).catch((error) => {
      console.log(error)
    });
  };

  const cambiarPassword = (values) => {
    const {email} = values
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setEmailEnviado(true);
    })
    .catch((error) => {
      setError({
        errorCode: error.code,
        errorMessage: error.message
      });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth,(usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

    return (
        <AuthContext.Provider value={{usuario, error, crearUsuario, iniciarSesion, isRegistrando, setIsRegistrando, cerrarSesion, cambiarPassword, emailEnviado, setEmailEnviado}}>
            {children}
        </AuthContext.Provider>
    )
}