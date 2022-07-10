import { Form, FormControl, Container} from "react-bootstrap";

const Buscar = ({buscarNombre, setBuscarNombre}) => {

    return (
        <Container className="container-sm container-fluid mb-4">
            <Form className="d-flex text-center justify-content-center">
                    <FormControl
                    type="search"
                    placeholder="Buscar Producto"
                    className="me-2"
                    aria-label="Buscar"
                    value={buscarNombre}
                    onChange={(event) => {
                        setBuscarNombre(event.target.value);
                    }}
                    style={{width:'500px', fontSize:'20px'}}
                    />
            </Form>         
        </Container>
    )
}

export default Buscar