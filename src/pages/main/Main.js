import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from './Footer';
import SectionImg from './SectionImg';
import MainButton from './MainButton';
import Carousel from './Carousel';
import './Main.scss';

const Main = () => {
  let [slideIndex, setSlideIndex] = useState(0);

  const moveSlide = index => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (slideIndex !== IMG_URLS.length - 1) {
        setSlideIndex(prev => prev + 1);
      } else if (slideIndex === IMG_URLS.length - 1) {
        setSlideIndex(0);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [slideIndex]);

  return (
    <>
      <Nav />
      <div className="main">
        <section id="first" className="mainSection">
          {IMG_URLS.map(({ id, url }, index) => {
            return (
              <div
                className={
                  slideIndex === index ? 'slideImg active' : 'slideImg'
                }
                key={id}
              >
                <img src={url} alt="배경 이미지" />
                <MainButton />
              </div>
            );
          })}
          <div className="containerDots">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                onClick={() => moveSlide(index)}
                className={slideIndex === index ? 'dot active' : 'dot'}
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
          <SectionImg url={SECOND_IMG} />
          <h1>CrowSeven Membership</h1>
          <span>
            크로우세븐의 멤버가 되시고 최대 50%의 추가 적립, 무로배송, 생일할인
            쿠폰 등 혜택을 받아가세요
          </span>
          <button className="secondImgBtn">자세히 보기</button>
        </section>
        <section id="third" className="mainSection">
          <SectionImg url={THIRD_IMG} />
        </section>
        <Carousel />
        <Footer />
      </div>
    </>
  );
};

const IMG_URLS = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1528697070265-780e0cda625f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2168&q=80',
  },
  {
    id: 2,
    url: 'https://velog.velcdn.com/images/yumjongeun/post/425e6c91-a792-4fdf-9277-053e11d1f85a/image.png',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1560052859-7deb492b0baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80',
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
    text: '#forth',
    status: false,
  },
  {
    id: 5,
    text: '#footer',
    status: false,
  },
];

const SECOND_IMG =
  'https://images.unsplash.com/photo-1613243555978-636c48dc653c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
const THIRD_IMG =
  'https://cdn.pixabay.com/photo/2018/08/16/03/06/minion-3609547_1280.jpg';

export default Main;
