import { offers } from './mocks/offers';
import { Offers } from './types/offer';

export const setOffers = (cityName:string) => offers.filter(({city}) => city.name === cityName);

export const sortOffers = (offer: Offers, sortType: string) => {
  const popularOffers = offer.slice();

  switch (sortType) {
    case 'Popular':
      return popularOffers;
    case 'Price: low to high':
      return popularOffers.sort((first, second) => first.price - second.price);
    case 'Price: high to low':
      return popularOffers.sort((first, second) => second.price - first.price);
    case 'Top rated first':
      return popularOffers.sort((first, second) => second.rating - first.rating);
    default:
      return popularOffers;
  }
};
