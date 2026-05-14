import {createSelector} from '@reduxjs/toolkit';
import {NameSpace, SortTypes} from '../../const';
import {State} from '../../types/state';
import { OfferCity } from '../../types/offer';
import {filterByCityOffers, sortOffers} from '../../utils';

export const getCurrentCity = (state: State): OfferCity => state[NameSpace.Main].currentCity;
export const getSortType = (state: State): OfferCity => state[NameSpace.Main].sortType;
export const getMapCurrentOffer = (state: State): string => state[NameSpace.Main].mapCurrentOffer;
// export const getOffersByCity = (state: State): string => state[NameSpace.Data].offersList.filter(({city}) => city.name === state[NameSpace.Main].currentCity.name);

// export const getSortedOffers = (state: State) => {
//     const offers = state[NameSpace.Data].offersList;
//     const sortType = state[NameSpace.Main].sortType;
//     const cityName = state[NameSpace.Main].currentCity.name;

    
//     const popularOffers = offers.filter(({city}) => city.name === cityName);
//     switch (sortType) {
//         case SortTypes.POPULAR:
//          return popularOffers;
//         case SortTypes.PRICE_LOW_TO_HIGH:
//          return popularOffers.sort((first, second) => first.price - second.price);
//         case SortTypes.PRICE_HIGH_TO_LOW:
//          return popularOffers.sort((first, second) => second.price - first.price);
//         case SortTypes.TOP_RATED_FIRST:
//          return popularOffers.sort((first, second) => second.rating - first.rating);
//         default:
//           return popularOffers;
//     }


// };

// export const filterByCityOffers = (offers:Offers, cityName:string) => offers.filter(({city}) => city.name === cityName);

// export const sortOffers = (offers:Offers, sortType:string) => {
//   const popularOffers = offers;
//   switch (sortType) {
//     case SortTypes.POPULAR:
//       return popularOffers;
//     case SortTypes.PRICE_LOW_TO_HIGH:
//       return popularOffers.sort((first, second) => first.price - second.price);
//     case SortTypes.PRICE_HIGH_TO_LOW:
//       return popularOffers.sort((first, second) => second.price - first.price);
//     case SortTypes.TOP_RATED_FIRST:
//       return popularOffers.sort((first, second) => second.rating - first.rating);
//     default:
//       return popularOffers;
//   }
// };
