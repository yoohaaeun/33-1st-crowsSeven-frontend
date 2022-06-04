import './ReviewItem.scss';

const ReviewItem = props => {
  const { number, img, product, subject, author, date, hit, title } = props;
  return (
    <div className="reviewItem">
      <span className="itemNumber">{number}</span>
      <img className="itemImg" src={img} alt="이미지" />
      <span className="itemProduct">{product}</span>
      <span className="itemSubject">{title}</span>
      <span className="itemName">{author}</span>
      <span className="itemDate">{date}</span>
      <span className="itemHit">{hit}</span>
    </div>
  );
};

export default ReviewItem;
