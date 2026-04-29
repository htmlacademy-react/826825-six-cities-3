import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Favorites].favoriteOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].isFavoritesDataLoading;
// export const getFavoritesByCity = (state: State): Offers => state[NameSpace.Favorites].favoriteOffers.reduce((acc: string, offer: Offer) => {
//   const city:string = offer.city.name;

//   if (!acc[city]) {
//   acc[city] = [];
//   }

//   acc[city].push(offer);

//   return acc;
// }, {})
