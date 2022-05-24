import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Store from './pages/store/seulgi';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
