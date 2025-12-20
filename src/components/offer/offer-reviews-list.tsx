import { Comments } from '../../types/comment';
import OfferReview from './offer-review';

type OfferReviewsListProps = {
  comments: Comments;
}

function OfferReviewsList({comments}: OfferReviewsListProps) : JSX.Element {

  return (
    <ul className="reviews__list">
      {comments.map((comment) => <OfferReview key={comment.id} currentComment={comment}/>)}
    </ul>
  );

}

export default OfferReviewsList;
