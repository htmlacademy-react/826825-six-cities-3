import {Offers} from './types/offer';
import {SortTypes} from './const';

export const filterByCityOffers = (offers:Offers, cityName:string) => offers.filter(({city}) => city.name === cityName);

export const sortOffers = (offers:Offers, sortType:string) => {
  const popularOffers = offers;
  switch (sortType) {
    case SortTypes.POPULAR:
      return popularOffers;
    case SortTypes.PRICE_LOW_TO_HIGH:
      return popularOffers.sort((first, second) => first.price - second.price);
    case SortTypes.PRICE_HIGH_TO_LOW:
      return popularOffers.sort((first, second) => second.price - first.price);
    case SortTypes.TOP_RATED_FIRST:
      return popularOffers.sort((first, second) => second.rating - first.rating);
    default:
      return popularOffers;
  }
};

export const replaceOffers = (offers: Offers, offerId: string) => {
  const offerIndex = offers.findIndex((offer) => offer.id === offerId);
  offers[offerIndex].isFavorite = !offers[offerIndex].isFavorite;
  return offers;
};
