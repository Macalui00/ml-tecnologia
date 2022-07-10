import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import NavBar from '../components/NavBar/NavBar.js';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Footer from '../components/Footer/Footer';
import Perfil from '../components/Perfil/Perfil';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Banner from '../components/Banner/Banner';

const PrivateRoutes = () => {

    return(
        <div className="App">
            <NavBar/>
            <main className='App-main'>
                <Banner/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/categorias/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                    <Route path='/ItemDetailContainer' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/Perfil' element={<Perfil/>}/>
                    <Route path='*' element={<Navigate to={"/"}/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}
export default PrivateRoutes