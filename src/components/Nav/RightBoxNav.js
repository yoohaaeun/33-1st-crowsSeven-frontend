import { GrClose } from 'react-icons/gr';
import './RightBoxNav.scss';

const RightBoxNav = ({ isToggle, handleClick }) => {
  return (
    <div className={`rightNavBox ${isToggle ? 'widthZero' : ''}`}>
      <GrClose onClick={handleClick} className="cancel" />
      <ul className="rightBoxText">
        <li>로그인</li>
        <li>장바구니</li>
        <li>주문조회</li>
        <li>마이쇼핑</li>
        <span>최근 상품</span>
      </ul>
      <div />
    </div>
  );
};

export default RightBoxNav;
