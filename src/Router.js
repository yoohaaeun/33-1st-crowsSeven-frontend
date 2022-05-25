import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Orderpage from './pages/orderPage/OrderPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/order" element={<Orderpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
