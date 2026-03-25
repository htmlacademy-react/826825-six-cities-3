import {Offers} from './types/offer';

export const filterByCityOffers = (offers:Offers, cityName:string) => offers.filter(({city}) => city.name === cityName);

export const replaceOffers = (offers: Offers, offerId: string) => {
  const offerIndex = offers.findIndex((offer) => offer.id === offerId);
  offers[offerIndex].isFavorite = !offers[offerIndex].isFavorite;
  return offers;
};
