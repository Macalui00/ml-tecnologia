import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from '../components/Context/AuthContext';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {

    const {usuario} = useAuthContext();

    return(
        <BrowserRouter>

          {
            usuario
            ? <PrivateRoutes/>
            : <PublicRoutes/>
          }
          
        </BrowserRouter>
    )
}
export default AppRouter