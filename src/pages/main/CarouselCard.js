import './CarouselCard.scss';

const CarouselCard = ({ src, title }) => {
  return (
    <div className="carouselCard">
      <img src={src} alt="상품" />
      <span>{title}</span>
    </div>
  );
};

export default CarouselCard;
