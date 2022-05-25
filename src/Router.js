import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/productDetail/seulgi';
import Store from './pages/store/seulgi';
import Nav from './components/Nav/Nav';

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
