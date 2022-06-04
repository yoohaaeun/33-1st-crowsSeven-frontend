import { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';
import './ReviewList.scss';

const ReviewList = () => {
  const [reviewItem, setReviewItem] = useState([]);

  useEffect(() => {
    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(data => setReviewItem(data));
  });
  return (
    <section className="reviewList">
      <h1>상품 후기</h1>
      <div className="reviewTitle">
        <span>모든리뷰</span>
        <hr />
        <div className="reviewCategory">
          <span className="number">NO</span>
          <span className="product">PRODUCT</span>
          <span className="subject">SUBJECT</span>
          <span className="name">NAME</span>
          <span className="date">DATE</span>
          <span className="hit">HIT</span>
        </div>
        <hr />
      </div>
      {reviewItem.map(item => (
        <ReviewItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ReviewList;
