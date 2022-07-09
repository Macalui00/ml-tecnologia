import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/Context/CartContext';
// import { AuthProvider } from './components/Context/AuthContext-Firebase';
import { useAuthContext } from './components/Context/AuthContext-Firebase';
import AppRouter from './routes/AppRouter';

function App() {
  console.log( useAuthContext())
  return (
    // <AuthProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>      
    // </AuthProvider>
    
  );
}

export default App;
