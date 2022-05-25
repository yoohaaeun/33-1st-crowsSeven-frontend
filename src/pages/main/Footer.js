import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h1>010-9483-5869</h1>
      <span>CS 고객센터 운영시간 평일 13:00 - 18:00</span>
      <span>주말 및 공휴일 휴무</span>
      <span>XX은행 123-456-7891011 예금주: 스코프컴퍼니(주)</span>
      <ul className="footerNav">
        {FOOTER_LIST.map(item => (
          <li key={item.id}>{item.list}</li>
        ))}
      </ul>
      <div className="footerBottom">
        <FaFacebookF className="footerIcon" />
        <FaInstagram className="footerIcon" />
        <FaYoutube className="footerIcon" />
        <span className="footerBottomText">
          크로우세븐 주식회사|세븐|12345 강원도 동해시 평원로 하나리움 하나리움
          아파트|K.i.m: 김창식(dhks2869@gmail.com) |License:
          [123-45-67890]|Online License:
          [1234-강원동해-1234][사업자정보확인]|Hosting by 카페24(주)
        </span>
      </div>
    </footer>
  );
};

const FOOTER_LIST = [
  {
    id: 1,
    list: 'guide',
  },
  {
    id: 2,
    list: 'privacy',
  },
  {
    id: 3,
    list: 'agreement',
  },
  {
    id: 4,
    list: 'about us',
  },
];

export default Footer;
