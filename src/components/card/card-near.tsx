import Card from './card';
import {Offer} from '../../types/offer';


type CardNearProps = {
  offer: Offer;
  setCurrentOffer?: (value: string) => void;
}


function CardNear (props:CardNearProps) : JSX.Element {

  return (
    <Card
      imgHeight='200'
      imgWidth='260'
      articleClassName='near-places__card'
      imageWrapperClassName='near-places__image-wrapper'
      {...props}
    />
  );
}

export default CardNear;
