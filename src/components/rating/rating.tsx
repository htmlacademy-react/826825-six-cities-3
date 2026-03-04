import { Setting } from '../../const';

type RatingProps = {
  rating: number;
  className: string;
}

function Rating (props:RatingProps) : JSX.Element {
  const {className = '', rating} = props;

  return (
    <div
      className={`${className} rating__stars`}
    >
      <span style={{width: `${rating * Setting.ratingWidthModifier}%`}}></span>
      <span className='visually-hidden'>Rating</span>
    </div>
  );
}

export default Rating;
