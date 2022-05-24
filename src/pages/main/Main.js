import { useState } from 'react';
import MainButton from './MainButton';
import './Main.scss';

const Img = ({ src }) => {
  return <img src={src} alt="메인페이지 접시" />;
};

const Main = () => {
  const [imgData, setImgData] = useState([
    {
      id: 1,
      url: '',
    },
  ]);
  return (
    <section className="mainSection">
      <Img />
      <MainButton />
    </section>
  );
};

export default Main;
