import { createContext, useContext, useState, useEffect } from "react"
import { application } from "../firebase/config";

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

  const [usuario, setUsuario] = useState(null);
  const [isRegistrando, setIsRegistrando] = useState(false);
  const [error, setError] = useState("");

  const crearUsuario = (values) => {
    const {email, password} = values
    application
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        // setUsuario(usuarioFirebase.user);
      }).catch((error) => {
        setError({
          errorCode: error.code,
          errorMessage: error.message
        })
      });
  };

  const iniciarSesion = (email, password) => {
    application
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        // setUsuario(usuarioFirebase.user);
      }).catch((error) => {
        setError({
          errorCode: error.code,
          errorMessage: error.message
        })
      });
  };

  useEffect(() => {
    application.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      // setUsuario(usuarioFirebase);
    });
  }, []);

    return (
        <AuthContext.Provider value={{usuario, error, crearUsuario, iniciarSesion, isRegistrando, setIsRegistrando}}>
            {children}
        </AuthContext.Provider>
    )
}