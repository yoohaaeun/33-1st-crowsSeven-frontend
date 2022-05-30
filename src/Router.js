import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Main from './pages/main/Main';
import Login from './pages/Login/Login';
=======
import ProductDetail from './pages/productDetail/ProductDetail';
import Store from './pages/store/Store';
import Cart from './pages/Cart/Cart';
>>>>>>> main
import Nav from './components/Nav/Nav';
import Post from './review/Post';
import Signup from './pages/Signup/Signup';
import ProductDetail from './pages/productDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/product-detail" element={<ProductDetail />} />
=======
        <Route path="/" element={<Nav />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/review_post" element={<Post />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
