import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {

  const producto = {
    nombre: "Motorola One Vision",
    tipo: "Celular",
    marca: "Motorola",
    memoria: "128GB"
  }

  return (
    <div className="App">
        <NavBar/>
        <main className='App-main'>
          <h1 className='mt-5 text-warning'>Tu lugar favorito para comprar tecnología</h1>
          <ItemListContainer producto={producto}/>
        </main>
        <footer>
          
        </footer>
    </div>
  );
}

export default App;
