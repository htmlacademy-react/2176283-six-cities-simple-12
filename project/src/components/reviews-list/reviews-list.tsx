import { Reviews } from '../../types/review';
import ReviewItem from '../review-form/review-item';

type ReviewsListProps ={
  reviews: Reviews;
  starsRating:(item: number) => string;
}

function ReviewsList({reviews, starsRating}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewItem key={`${index + 1}-${review.avatar}`} review={review} starsRating={starsRating}/>
      ))}

    </ul>);
}

export default ReviewsList;
