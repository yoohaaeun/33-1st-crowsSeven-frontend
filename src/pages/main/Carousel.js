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
    <section id="forth" className="carousel">
      <h1>Magazine</h1>
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
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '기타치는 미니언',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '기타치는 미니언',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '바나나 미니언',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '인형 미니언',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '쌍둥이 미니언',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '귀여운 미니언',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '쇼핑카트 미니언',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '돼지 미니언',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '열쇠고리 미니언',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '키위 미니언',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '돋보기 미니언',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '대화하는 미니언',
  },
];

export default Carousel;
