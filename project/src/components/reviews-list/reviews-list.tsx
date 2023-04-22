import { Comments } from '../../types/comments';
import ReviewItem from '../review-form/review-item';

type ReviewsListProps ={
  reviews: Comments;
  starsRating: (item:number) => string;
}

function ReviewsList({reviews, starsRating}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewItem key={`${index + 1}-${review.user.avatarUrl}`} review={review} starsRating={starsRating}/>
      ))}

    </ul>);
}

export default ReviewsList;
