import {Offers} from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offers;
  bemBlock?: string;
}

function CardsList({offers, bemBlock} : OffersListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id}
          offer={offer}
          bemBlock = {bemBlock}
        />
      ))}
    </>
  );
}

export default CardsList;
