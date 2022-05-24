import { GiAtSea } from 'react-icons/gi';
import './Logo.scss';

const Logo = () => {
  return (
    <ul className="logo">
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
