import { Titles } from '../../types/reviews-star';
import ReviewsRatingItem from '../reviews-rating-item/reviews-rating-item';

type ReviewsRatingFormProps = {
titles: Titles;
setStars: string;
onChange: React.ChangeEventHandler<HTMLInputElement>;
disabled: boolean;
}

function ReviewsRatingForm({titles, setStars, onChange, disabled}: ReviewsRatingFormProps): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">

      {titles.map((title) => (
        <ReviewsRatingItem key={title.id} titles={title} onChange={onChange} disabled={disabled} setStars={setStars}/>
      ))}

    </div>
  );
}

export default ReviewsRatingForm;
