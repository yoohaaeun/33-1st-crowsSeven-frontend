import { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from './Footer';
import SecondImg from './SecondImg';
import './Main.scss';

const Main = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveSlide = index => {
    setSlideIndex(index);
  };

  const slideTimer = () => {
    if (slideIndex !== imgUrls.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgUrls.length) {
      setSlideIndex(1);
    }
  };
  useEffect(() => {
    const timer = setInterval(slideTimer, 2000);
    return () => clearInterval(timer);
  }, [slideIndex]);
  //dependency 안 넣으면 안됨 -- 질문

  return (
    <>
      <Nav />
      <section className="mainSection">
        {imgUrls.map((imgUrl, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? 'slideImg active' : 'slideImg'
              }
              key={imgUrl.id}
            >
              <img src={imgUrl.url} alt="배경 이미지" />
            </div>
          );
        })}
      </section>
      <SecondImg />
      <Footer />
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveSlide(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </>
  );
};

const imgUrls = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2017/01/09/19/35/wedding-reception-1967373_1280.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2018/03/20/09/18/food-3242588_1280.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2019/02/25/08/43/cup-4019084_1280.jpg',
  },
];

export default Main;
