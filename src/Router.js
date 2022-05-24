import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Post from './review/Post';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/reviewPage" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
