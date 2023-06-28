import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Notfound from './pages/NotFound/NotFound';
import RequiredAuth from './context/Auth/RequiredAuth';

function App() {

  return ( 
    <div className="App">
      <header>
        <h1>Menu</h1>
      </header>
      <hr />


      <Routes>
        <Route path='/' element={<RequiredAuth> <Home /> </RequiredAuth>} />;
        <Route path='/home' element={<RequiredAuth> <Home /> </RequiredAuth>} />;
        <Route path='/*' element={<Notfound />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
