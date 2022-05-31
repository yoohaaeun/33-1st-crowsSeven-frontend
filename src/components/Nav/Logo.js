import { GiAtSea } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  const navigate = useNavigate();

  const handleMoveMain = () => {
    navigate('/');
  };

  return (
    <ul className="logo" onClick={handleMoveMain}>
      <GiAtSea className="logoIcon" />
      <div className="logoText">
        <span>CORWSEVEN</span>
        <span>HOME</span>
        <span>SEOUL KOREA</span>
      </div>
    </ul>
  );
};
export default Logo;
