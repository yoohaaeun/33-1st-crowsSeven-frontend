import { useEffect, useState } from 'react';

const ReviewDrawerPage = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(data => {
        setReviewData(data);
      });
  });
  return (
    <div>
      <h2 className="reviewPageTitle">상품후기</h2>
      <ul>
        {reviewData.map(review => (
          <li key={review.id} className="reviewList">
            <span className="reviewId">{review.id}</span>
            <span className="reviewTitle">
              {review.title}
              <span className="reviewHit">Hit</span>
            </span>
            <span className="reviewAuthor">{review.author}</span>
            <span className="reviewDate">{review.date}</span>
            <span>{review.hit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewDrawerPage;
