import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import Nosotros from './components/Nosotros/Nosotros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          
          <main className='App-main'>
            <h1 className='mt-5 text-warning'>Tu lugar favorito para comprar tecnología</h1>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categorias/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/ItemDetailContainer' element={<ItemDetailContainer/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
            </Routes>
          </main>
          <footer>
            
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
