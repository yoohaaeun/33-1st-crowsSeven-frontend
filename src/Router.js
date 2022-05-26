import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import OrderCheck from './pages/OrderCheck/OrderCheck';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<OrderCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
