import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './pages/cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
