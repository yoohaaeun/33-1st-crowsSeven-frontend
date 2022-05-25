import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import OrderCheck from './pages/OrderCheck/OrderCheck';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/order" element={<OrderCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
