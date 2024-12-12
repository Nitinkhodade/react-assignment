import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Serverlisting from './Component/Serverlisting';
import Addserver from './Component/Addserver';
import Updateserver from './Component/Updateserver';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
 
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className='header'>
          <Link to={'/'}>Home</Link>
          <Link to={'/server'}>Server</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/server' element={<Serverlisting></Serverlisting>}></Route>
          <Route path='/server/add' element={<Addserver></Addserver>}></Route>
          <Route path='/server/edit/:code' element={<Updateserver></Updateserver>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
