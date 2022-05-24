import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductDetail from './pages/productDetail/seulgi';
import Store from './pages/store/seulgi';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
