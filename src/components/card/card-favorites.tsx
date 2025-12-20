import Card from './card';
import {Offer} from '../../types/offer';


type CardListProps = {
  offer: Offer;
  setCurrentOffer: (value: string) => void;
}


function CardFavorites (props:CardListProps) : JSX.Element {

  return (
    <Card
      articleClassName='favorites__card'
      imageWrapperClassName='favorites__image-wrapper'
      {...props}
    />
  );
}

export default CardFavorites;
