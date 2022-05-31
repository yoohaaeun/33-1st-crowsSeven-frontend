import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Nav from './components/Nav/Nav';
import Post from './pages/review/Post';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ReviewPage from './pages/review/ReviewPage';
import PostForm from './pages/review/PostForm';
import Main from './pages/main/Main';
import Store from './pages/store/Store';
import ProductDetail from './pages/productDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/review_post/:id" element={<Post />} />
        <Route path="/review_page" element={<ReviewPage />} />
        <Route path="/review_form" element={<PostForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
