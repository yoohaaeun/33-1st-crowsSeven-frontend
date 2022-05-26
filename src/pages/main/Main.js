import { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from './Footer';
import SectionImg from './SectionImg';
import MainButton from './MainButton';
import './Main.scss';

const Main = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveSlide = index => {
    setSlideIndex(index);
  };

  const slideTimer = () => {
    if (slideIndex !== IMG_URLS.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === IMG_URLS.length) {
      setSlideIndex(1);
    }
  };

  useEffect(() => {
    const timer = setInterval(slideTimer, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [slideIndex]);

  return (
    <>
      <Nav />
      <div className="fullPageContainer">
        <section id="first" className="mainSection">
          {IMG_URLS.map(({ id, url }, index) => {
            return (
              <div
                className={
                  slideIndex === index + 1 ? 'slideImg active' : 'slideImg'
                }
                key={id}
              >
                <img src={url} alt="배경 이미지" />
                <MainButton />
              </div>
            );
          })}
          <div className="containerDots">
            {Array.from({ length: 3 }).map((empty, index) => (
              <div
                key={index}
                onClick={() => moveSlide(index + 1)}
                className={slideIndex === index + 1 ? 'dot active' : 'dot'}
              />
            ))}
          </div>
        </section>
        <div className="rightContainerDots">
          {RIGHT_DOTS.map(({ id, text }) => (
            <a className="rightDots" key={id} href={text}>
              {' '}
            </a>
          ))}
        </div>
        <section id="second" className="mainSection">
          <SectionImg url={secondImg} />
        </section>
        <section id="third" className="mainSection">
          <SectionImg url={thirdImg} />
        </section>
        <Footer />
      </div>
    </>
  );
};

const IMG_URLS = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2016/01/29/23/48/minion-1168873_1280.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2016/04/29/15/54/minions-1361171_1280.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2017/02/24/21/03/minions-2096369_1280.jpg',
  },
];

const RIGHT_DOTS = [
  {
    id: 1,
    text: '#first',
    status: true,
  },
  {
    id: 2,
    text: '#second',
    status: false,
  },
  {
    id: 3,
    text: '#third',
    status: false,
  },
  {
    id: 4,
    text: '#footer',
    status: false,
  },
];

const secondImg =
  'https://cdn.pixabay.com/photo/2016/05/17/12/15/minions-guitar-1398006_1280.jpg';
const thirdImg =
  'https://cdn.pixabay.com/photo/2018/08/16/03/06/minion-3609547_1280.jpg';

export default Main;
