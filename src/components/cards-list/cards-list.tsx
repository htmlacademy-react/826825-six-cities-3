import {Offers} from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  listClassName: string;
  offers: Offers;
  page: string;
}

function CardsList({listClassName, offers, page} : OffersListProps): JSX.Element {

  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <Card key={offer.id}
          offer={offer}
          page = {page}
        />
      ))}
    </div>
  );
}

export default CardsList;
