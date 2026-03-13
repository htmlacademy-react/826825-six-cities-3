import { offers } from './mocks/offers';

export const setOffers = (cityName:string) => offers.filter(({city}) => city.name === cityName);
