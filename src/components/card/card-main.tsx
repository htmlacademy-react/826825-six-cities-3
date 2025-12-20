import Card from './card';
import {Offer} from '../../types/offer';


type CardListProps = {
  offer: Offer;
  setCurrentOffer: (value: string) => void;
}


function CardMain (props:CardListProps) : JSX.Element {

  return (
    <Card
      articleClassName='cities__card'
      imageWrapperClassName='cities__image-wrapper'
      {...props}
    />
  );
}

export default CardMain;
