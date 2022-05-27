import { useState, useEffect, useRef } from 'react';
import CarouselCard from './CarouselCard';
import './Carousel.scss';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const handleSlideButtonClick = index => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <section className="carousel">
      <div className="carouselWrapper" ref={slideRef}>
        {CAROUSEL_DATA.map(({ id, src, title }) => (
          <CarouselCard key={id} src={src} title={title} />
        ))}
      </div>
      <div className="buttonContainer">
        {Array.from({ length: 4 }).map((_, index) => (
          <button key={index} onClick={() => handleSlideButtonClick(index)} />
        ))}
      </div>
    </section>
  );
};

const CAROUSEL_DATA = [
  {
    id: 1,
    src: 'https://cdn.pixabay.com/photo/2016/04/27/18/33/minion-1357223_1280.jpg',
    title: '기타치는 미니언',
  },
  {
    id: 2,
    src: 'https://cdn.pixabay.com/photo/2015/10/05/17/09/minion-972908_1280.jpg',
    title: '기타치는 미니언',
  },
  {
    id: 3,
    src: 'https://cdn.pixabay.com/photo/2015/08/14/19/41/minion-888797_1280.jpg',
    title: '바나나 미니언',
  },
  {
    id: 4,
    src: 'https://cdn.pixabay.com/photo/2018/09/01/14/16/minion-3646892_1280.jpg',
    title: '인형 미니언',
  },
  {
    id: 5,
    src: 'https://cdn.pixabay.com/photo/2017/08/25/16/56/minions-2680727_1280.jpg',
    title: '쌍둥이 미니언',
  },
  {
    id: 6,
    src: 'https://cdn.pixabay.com/photo/2016/04/19/15/09/minion-1338816_1280.jpg',
    title: '귀여운 미니언',
  },
  {
    id: 7,
    src: 'https://cdn.pixabay.com/photo/2016/01/29/23/59/minion-1168904_1280.jpg',
    title: '쇼핑카트 미니언',
  },
  {
    id: 8,
    src: 'https://cdn.pixabay.com/photo/2020/04/02/17/30/minion-4996002_1280.jpg',
    title: '돼지 미니언',
  },
  {
    id: 9,
    src: 'https://cdn.pixabay.com/photo/2019/02/09/19/13/minion-3985768_1280.jpg',
    title: '열쇠고리 미니언',
  },
  {
    id: 10,
    src: 'https://cdn.pixabay.com/photo/2016/03/31/18/52/minion-1294707_1280.jpg',
    title: '키위 미니언',
  },
  {
    id: 11,
    src: 'https://cdn.pixabay.com/photo/2015/08/15/08/06/minion-889302_1280.jpg',
    title: '돋보기 미니언',
  },
  {
    id: 12,
    src: 'https://cdn.pixabay.com/photo/2014/06/05/22/27/minions-363019_1280.jpg',
    title: '대화하는 미니언',
  },
];

export default Carousel;
