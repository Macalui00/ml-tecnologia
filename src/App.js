import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <NavBar/>
            <main className='App-main'>
              <h1 className='mt-5 text-warning'>Tu lugar favorito para comprar tecnología</h1>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categorias/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                <Route path='/ItemDetailContainer' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<Navigate to={"/"}/>}/>
              </Routes>
            </main>
            <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
