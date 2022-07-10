import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/Context/CartContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (

    <CartProvider>
      <AppRouter/>
    </CartProvider>     

  );
}

export default App;
