import { Setting } from '../../const';
import {memo} from 'react';

type RatingProps = {
  rating: number;
  bemBlock: string | undefined;
}

function Rating (props:RatingProps) : JSX.Element {
  const {rating, bemBlock} = props;

  return (
    <div className={`${bemBlock}__rating rating`}>
      <div
        className={`${bemBlock}__stars rating__stars`}
      >
        <span style={{width: `${rating * Setting.ratingWidthModifier}%`}}></span>
        <span className='visually-hidden'>Rating</span>
      </div>
      {bemBlock === 'offer' &&
        <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

const MemorizedRating = memo(Rating);

export default MemorizedRating;
