import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserComment } from '../../types/user-comment';
import { addNewComment } from '../../store/api-actions';
import { REVIEW_SYMBOL_QUANTITY, titles } from '../../const';
import ReviewsRatingForm from '../reviews-rating-form/-reviews-rating-form';

type CommentSubmissionFormProps = {
  currentOfferId: number;
}

function CommentSubmitForm({currentOfferId}: CommentSubmissionFormProps ): JSX.Element {

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (userComment: UserComment) => {
    dispatch(addNewComment(userComment));
  };

  const isCommentDataLoading = useAppSelector((state) => state.isCommentDataLoading);

  const submitButtonOnClick = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.rating !== null && formData.review !== null) {
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

      <ReviewsRatingForm titles={titles} setStars={formData.rating} onChange={fieldChangeHandle} disabled={isCommentDataLoading} />

      <textarea onChange={fieldChangeHandle} className="reviews__textarea form__textarea" id="review" value={formData.review} name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={300} disabled={isCommentDataLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.review.length >= REVIEW_SYMBOL_QUANTITY.min && formData.review.length <= REVIEW_SYMBOL_QUANTITY.max && formData.rating.length > 0 && !isCommentDataLoading)}>Submit</button>
      </div>
    </form>
  );}

export default CommentSubmitForm;
