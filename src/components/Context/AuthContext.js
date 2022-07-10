import { createContext, useContext, useState, useEffect } from "react"
import { onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail , 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";
import {auth} from '../firebase/config'

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

  const [usuario, setUsuario] = useState(null);
  const [isRegistrando, setIsRegistrando] = useState(false);
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [error, setError] = useState({});

  const crearUsuario = (values) => {
    const {email, password} = values;

    setError({});

    createUserWithEmailAndPassword(auth, email, password)
      .then((usuarioFirebase) => {
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
    const {email, password} = values;
    
    setError({});
    
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

  const iniciarConGoogle = () => {
    const provider = new GoogleAuthProvider();

    auth.languageCode = 'es_ES';

    signInWithPopup(auth, provider)
      .then((result) => {

        const user = result.user;
        
        setUsuario(user);
        
      }).catch((error) => {

        if(error.code === "auth/account-exists-with-different-credential"){
          setError({
              errorCode: error.code,
              errorMessage: "Ya existe una cuenta con el mismo email."
            });
        } else if(error.code === "auth/operation-not-allowed"){
          setError({
            errorCode: error.code,
            errorMessage: "Tipo de cuenta no habilitada."
          })
        } else if(error.code === "auth/operation-not-supported-in-this-environment"){
          setError({
            errorCode: error.code,
            errorMessage: "Operacion no compatible con el entorno de ejecución."
          })
        }  else if(error.code === "auth/popup-blocked"){
          setError({
            errorCode: error.code,
            errorMessage: "Pop-Up bloqueado por el explorador."
          })
        }  else if(error.code === "auth/popup-closed-by-user"){
          setError({
            errorCode: error.code,
            errorMessage: "Se cerró el Pop-Up sin completar el inicio de sesión."
          })
        } else {
          setError({
            errorCode: "Others",
            errorMessage: "Ha habido un error, vuelva a intentarlo."
          });
        }   

      });
  }

  const cerrarSesion = () => {
    setError({});
    
    signOut(auth).then(() => {
      console.log("Cierre de Sesión Exitosa.")
    }).catch((error) => {
      setError({
        errorCode: "Others",
        errorMessage: "Ha habido un error en el cierre de sesión."
      });
    });
  };

  const cambiarPassword = (values) => {
    const {email} = values;
    
    setError({});
    
    auth.languageCode = 'es_ES';

    sendPasswordResetEmail(auth, email)
    .then(() => {
      setEmailEnviado(true);
    })
    .catch((error) => {

      if(error.code === "auth/invalid-email"){
        setError({
            errorCode: error.code,
            errorMessage: "El email ingresado es inválido."
          });
      } else if(error.code === "auth/user-not-found"){
        setError({
          errorCode: error.code,
          errorMessage: "Usuario no encontrado."
        })
      } else {
        setError({
          errorCode: "Others",
          errorMessage: "Ha habido un error, vuelva a intentarlo."
        });
      }   

    });
  };

  const obtenerUserId = () => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      return user.uid;
    }
    return '';
  } 

  const obtenerDisplayName = () => {
    const user = auth.currentUser;
    if (user !== null) {
      return user.displayName;
    }
    return '';
  } 
  
  const obtenerEmail = () => {
    const user = auth.currentUser;
    if (user !== null) {
      return user.email;
    }
    return '';
  } 

  useEffect(() => {
    onAuthStateChanged(auth,(usuarioFirebase) => {

      setUsuario(usuarioFirebase);

    });
  }, []);

    return (
        <AuthContext.Provider 
          value={{
            usuario, 
            error, 
            crearUsuario, 
            iniciarSesion, 
            iniciarConGoogle,
            isRegistrando, 
            setIsRegistrando, 
            cerrarSesion, 
            cambiarPassword, 
            emailEnviado, 
            setEmailEnviado,
            obtenerDisplayName,
            obtenerEmail,
            obtenerUserId
        }}>
            {children}
        </AuthContext.Provider>
    )
}