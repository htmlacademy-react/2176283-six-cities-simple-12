import { Title } from '../../types/reviews-star';

type ReviewsRatingItemProps = {
  titles: Title;
  setStars: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

function ReviewsRatingItem({titles, setStars, onChange, disabled}: ReviewsRatingItemProps): JSX.Element {

  return (
    <>
      <input onChange={onChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={titles.id}
        id={`${titles.id}`}
        type="radio"
        disabled={disabled}
        checked={Number(setStars) === titles.id}
      />
      <label
        htmlFor={`${titles.id}`}
        className="reviews__rating-label form__rating-label"
        title={titles.title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewsRatingItem;
