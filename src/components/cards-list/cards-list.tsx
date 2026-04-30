import {Offers} from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  listClassName: string;
  offers: Offers;
  bemBlock?: string;
}

function CardsList({listClassName, offers, bemBlock} : OffersListProps): JSX.Element {

  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <Card key={offer.id}
          offer={offer}
          bemBlock = {bemBlock}
        />
      ))}
    </div>
  );
}

export default CardsList;
