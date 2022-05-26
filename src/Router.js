import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Post from './review/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/review_post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
