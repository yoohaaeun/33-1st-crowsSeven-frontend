import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/productDetail/ProductDetail';
import Store from './pages/store/Store';
import Cart from './pages/Cart/Cart';
import Nav from './components/Nav/Nav';
import Post from './review/Post';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import StoreModal from './components/storeModal/StoreModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storeModal" element={<StoreModal />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/review_post" element={<Post />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
