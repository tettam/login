import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Notfound from './pages/NotFound/NotFound';
import RequiredAuth from './context/Auth/RequiredAuth';
import RegisterAccount from './pages/RegisterAccount/RegisterAccount';

function App() {

  return ( 
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to={"/login"} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register-account' element={<RegisterAccount />} />
        <Route path='/*' element={<RequiredAuth> <Home /> </RequiredAuth>} />;
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
