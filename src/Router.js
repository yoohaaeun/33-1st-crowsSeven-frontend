import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Nav from './components/Nav/Nav';
import Post from './review/Post';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ReviewPage from './review/ReviewPage';
import PostForm from './review/PostForm';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/review_post" element={<Post />} />
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
