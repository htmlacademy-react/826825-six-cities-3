import {useState, Fragment, FormEvent} from 'react';
import { Setting } from '../../const';
import { reviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
// import { store } from '../../store/index';

const ratingTitles:string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

type OfferFormReviewProps = {
  offerId: string;
};


function OfferFormReview({offerId}: OfferFormReviewProps) : JSX.Element | string {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('1');

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((store) => store.authorizationStatus);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(reviewAction({
      id: offerId,
      comment: text,
      rating: Number(rating),
    }));
    setText('');
    setRating('1');
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return '';
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form" action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTitles.map((title, index)=>(
          <Fragment key={`${title + index}`}>
            <input
              onChange={(evt) => setRating(evt.target.value)}
              className="form__rating-input visually-hidden"
              name="rating"
              value={Setting.maxRating - index}
              id={`${Setting.maxRating - index}-stars`}
              type="radio"
            />
            <label htmlFor={`${Setting.maxRating - index}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={(evt) => setText(evt.target.value)}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value = {text}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );

}

export default OfferFormReview;
