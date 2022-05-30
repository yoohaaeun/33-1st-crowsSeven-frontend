import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import './RightBoxNav.scss';

const RightBoxNav = ({ isToggle, handleClick }) => {
  const navigate = useNavigate();

  const handleMoveLogin = () => {
    navigate('/login');
  };

  const handleMoveCart = () => {
    navigate('/cart');
  };
  return (
    <>
      <section
        onClick={handleClick}
        className={`rigthBoxWrapper ${isToggle ? 'opacityZero' : ''}`}
      />
      <div className={`rightNavBox ${isToggle ? 'widthZero' : ''}`}>
        <GrClose onClick={handleClick} className="cancel" />
        <ul className="rightBoxText" onClick={handleClick}>
          <li onClick={handleMoveLogin}>로그인</li>
          <li onClick={handleMoveCart}>장바구니</li>
          <li>주문조회</li>
          <li>마이쇼핑</li>
          <span>최근 상품</span>
        </ul>
        <div />
      </div>
    </>
  );
};

export default RightBoxNav;
