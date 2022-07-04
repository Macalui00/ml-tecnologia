
const LoginForm = ({values, error, handleSubmit, handleInputChange}) => {

    return(
        <form onSubmit={handleSubmit} className="align-items-center justify-content-center">
            <input 
                type={"email"}
                name="email"
                value={values.email}
                onChange={handleInputChange}
                className="form-control my-3" 
                placeholder="Email de usuario"
            />
            {error.email && <p className="alert alert-danger py-1 mt-1 mb-3 fw-bold" style={{fontSize:'16px'}}>{error.email}</p>}

            <input 
                type={"password"}
                name="password"
                value={values.password}
                onChange={handleInputChange}
                className="form-control my-3" 
                placeholder="Contraseña"
            />
            {error.password && <p className="alert alert-danger py-1 mt-0 mb-4 fw-bold" style={{fontSize:'16px'}}>{error.password}</p>}
            
            <button type="submit" className="btn btn-warning my-2 fw-bold">Enviar</button>
        </form> 
    )
}
export default LoginForm