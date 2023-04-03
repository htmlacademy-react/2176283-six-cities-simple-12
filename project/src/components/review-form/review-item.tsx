import { Review } from '../../types/review';

type ReviewItemProps = {
  review: Review;
  starsRating:(item: number) => string;
}

function ReviewItem({review, starsRating}: ReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starsRating(review.estimation)}}></span>
            <span className="visually-hidden">{review.estimation}</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date}>April 2019</time>
      </div>
    </li>);
}

export default ReviewItem;
