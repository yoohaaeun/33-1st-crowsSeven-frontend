import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Nav from './components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ModalTest from './pages/ModalTest/ModalTest';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modal-test" element={<ModalTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
