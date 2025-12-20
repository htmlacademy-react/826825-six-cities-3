import { format } from 'date-fns';
import { Comment } from '../../types/comment';

const HUMAN_DATE_FORMAT:string = 'MMMM yyyy';
const DATA_DATE_FORMAT:string = 'yyyy-MM-dd';
const RATING_WIDTH_MODIFIER:number = 20;

type OfferReviewProps = {
  currentComment: Comment;
}

function OfferReview({currentComment}: OfferReviewProps) : JSX.Element {
  const {date, user, comment, rating} = currentComment;
  const humanDate = format(new Date(date), HUMAN_DATE_FORMAT);
  const dataDate = format(new Date(date), DATA_DATE_FORMAT);
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
          <div className="reviews__stars rating__stars">
            <span style={{width: rating * RATING_WIDTH_MODIFIER}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
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
