import {createReducer } from '@reduxjs/toolkit';
import {changeCity, fillOffersList, setCurrentOffer, changeSortType, loadOffers, requireAuthorization, setError} from './action';
import {CITIES, SortTypes, AuthorizationStatus} from '../const';
import { setOffers } from '../utils';
import { Offers, OfferCity } from '../types/offer';

type InitalState = {
  currentCity: OfferCity;
  offersList: Offers;
  sortType: SortTypes;
  mapCurrentOffer: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: InitalState = {
  currentCity: CITIES[0],
  offersList: [],
  sortType: SortTypes.POPULAR,
  mapCurrentOffer: '',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
    })

    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.sortType = SortTypes.POPULAR;
    })

    .addCase(fillOffersList, (state, action) => {
      state.offersList = setOffers(action.payload);
    })

    .addCase(setCurrentOffer, (state, action) => {
      state.mapCurrentOffer = action.payload;
    })

    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload as SortTypes;

      switch (action.payload) {
        case SortTypes.POPULAR:
          state.offersList = setOffers(state.currentCity.name);
          return;
        case SortTypes.PRICE_LOW_TO_HIGH:
          state.offersList.sort((first, second) => first.price - second.price);
          return;
        case SortTypes.PRICE_HIGH_TO_LOW:
          state.offersList.sort((first, second) => second.price - first.price);
          return;
        case SortTypes.TOP_RATED_FIRST:
          state.offersList.sort((first, second) => second.rating - first.rating);
          return;
        default:
          state.offersList = setOffers(state.currentCity.name);
      }

    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});

export {reducer};
