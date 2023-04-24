import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { UserComment } from '../../types/user-comment';
import { addNewComment } from '../../store/api-actions';
import { REVIEW_SYMBOL_QUANTITY } from '../../const';

type CommentSubmissionFormProps = {
  currentOfferId: number;
}

function CommentSubmitForm({currentOfferId}: CommentSubmissionFormProps ): JSX.Element {

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const dispatch = useAppDispatch();

  const onSubmit = (userComment: UserComment) => {
    dispatch(addNewComment(userComment));
  };

  const submitButtonOnClick = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.review !== null && formData.rating !== null) {
      onSubmit({
        comment: formData.review,
        rating: Number(formData.rating),
        id: currentOfferId
      });
    }
    setFormData({rating: '', review: ''});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitButtonOnClick}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

      </div>
      <textarea onChange={fieldChangeHandle} className="reviews__textarea form__textarea" id="review" value={formData.review} name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.review.length >= REVIEW_SYMBOL_QUANTITY.min && formData.review.length <= REVIEW_SYMBOL_QUANTITY.max && formData.rating.length > 0)}>Submit</button>
      </div>
    </form>
  );}

export default CommentSubmitForm;