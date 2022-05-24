import { useEffect, useState } from 'react';
import { BsDot } from 'react-icons/bs';
import Footer from './Footer';
import MainButton from './MainButton';
import Img from './Img';
import './Main.scss';

let length = 0;
const Main = () => {
  const [imgData, setImgData] = useState({
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2019/02/25/08/43/cup-4019084_1280.jpg',
  });

  useEffect(() => {
    setInterval(() => {
      setImgData({
        id: imgUrl[length].id,
        url: imgUrl[length].url,
      });
      length += 1;
      if (length >= 3) length = 0;
    }, 5000);
  }, []);

  return (
    <>
      <section className="mainSection">
        <Img className="renderTest" src={imgData.url} />
        <MainButton />
        <div className="slideDot">
          <BsDot />
          <BsDot />
          <BsDot />
        </div>
      </section>
      <Footer />
    </>
  );
};

const imgUrl = [
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2017/01/09/19/35/wedding-reception-1967373_1280.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2018/03/20/09/18/food-3242588_1280.jpg',
  },
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2019/02/25/08/43/cup-4019084_1280.jpg',
  },
];

export default Main;
