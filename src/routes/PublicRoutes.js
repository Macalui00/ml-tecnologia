import { Navigate } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import { Routes, Route } from 'react-router-dom';
import ChangePassword from '../components/LoginScreen/ChangePassword';

const PublicRoutes = () => {

    return(
        <div className="App">
            <main className='App-main'>
                <Routes>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/changepassword' element={<ChangePassword/>}/>
                    <Route path='*' element={<Navigate to='/login'/>}/>
                </Routes>
            </main>
        </div>
    )
}
export default PublicRoutes