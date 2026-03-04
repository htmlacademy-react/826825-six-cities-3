import { format } from 'date-fns';
import { Comment } from '../../types/comment';
import { DateFormat } from '../../const';
import Rating from '../rating/rating';

type OfferReviewProps = {
  currentComment: Comment;
}

function OfferReview({currentComment}: OfferReviewProps) : JSX.Element {
  const {date, user, comment, rating} = currentComment;
  const humanDate = format(new Date(date), DateFormat.Human);
  const dataDate = format(new Date(date), DateFormat.Data);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <Rating
            className='reviews__stars'
            rating={rating}
          />
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dataDate}>{humanDate}</time>
      </div>
    </li>
  );

}

export default OfferReview;
