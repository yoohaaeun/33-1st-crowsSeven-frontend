import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductDetail from './pages/productDetail/ProductDetail';
import Store from './pages/store/Store';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
