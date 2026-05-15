import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';

type CardTitleProps = {
  offer: Offer;
}

function CardTitle({offer}: CardTitleProps) : JSX.Element {
  const {id, title} = offer;

  return (
    <h2 className="place-card__name">
      <Link to={{pathname: `/offer/${id}`}}>{title}</Link>
    </h2>
  );
}

export default CardTitle;
