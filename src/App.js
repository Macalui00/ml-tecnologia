import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/Context/CartContext';
import { AuthProvider } from './components/Context/AuthContext';
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>      
    </AuthProvider>
    
  );
}

export default App;
