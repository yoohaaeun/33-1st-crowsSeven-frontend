import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Nav from './components/Nav/Nav';
import Orderpage from './pages/Order/OrderPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/order" element={<Orderpage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
