import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageService from './Pages/ManageService/ManageService';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path='/addService' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } />
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
