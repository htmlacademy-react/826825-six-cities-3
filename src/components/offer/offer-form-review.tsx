import {useState, Fragment, FormEvent, ChangeEvent} from 'react';
import { Review } from '../../types/comment';

const MAX_RATING:number = 5;
const ratingTitles:string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

type OfferFormReviewProps = {
  onComment: (formData:Review) => void;
};


function OfferFormReview({onComment}: OfferFormReviewProps) : JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleFieldChange = (evt:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onComment(formData);
      }}
      className="reviews__form form" action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTitles.map((title, index)=>(
          <Fragment key={`${title + index}`}>
            <input
              onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={MAX_RATING - index}
              id={`${MAX_RATING - index}-stars`}
              type="radio"
            />
            <label htmlFor={`${MAX_RATING - index}-stars`}
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
        onChange={handleFieldChange}
        value={formData.review}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
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
