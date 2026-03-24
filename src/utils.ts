import { offers } from './mocks/offers';
import {Offers} from './types/offer'; 

export const setOffers = (cityName:string) => offers.filter(({city}) => city.name === cityName);

export const replaceOffers = (offers: Offers, offerId: string) => {
    const offerIndex = offers.findIndex((offer) => offer.id === offerId);
    offers[offerIndex].isFavorite = !offers[offerIndex].isFavorite;
    return offers;
}
