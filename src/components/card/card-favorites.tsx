import Card from './card';
import {Offer} from '../../types/offer';


type CardFavoritesProps = {
  offer: Offer;
}


function CardFavorites (props:CardFavoritesProps) : JSX.Element {

  return (
    <Card
      imgHeight='110'
      imgWidth='150'
      articleClassName='favorites__card'
      imageWrapperClassName='favorites__image-wrapper'
      {...props}
    />
  );
}

export default CardFavorites;
