import {createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setCurrentOffer,
  changeSortType,
  loadOffers,
  requireAuthorization,
  // setError,
  getOffer,
  setOffersDataLoadingStatus} from './action';
import {SortTypes, AuthorizationStatus, DEFAUL_CITY} from '../const';
import { Offers, OfferCity, Offer } from '../types/offer';

type InitalState = {
  currentCity: OfferCity;
  offersList: Offers;
  offersByCity: Offers;
  currentOffer: Offer;
  sortType: SortTypes;
  mapCurrentOffer: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
}

const initialState: InitalState = {
  currentCity: DEFAUL_CITY,
  offersList: [],
  offersByCity: [],
  currentOffer: {} as Offer,
  sortType: SortTypes.POPULAR,
  mapCurrentOffer: '',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
      state.offersByCity = action.payload.filter(({city}) => city.name === state.currentCity.name);
    })

    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.sortType = SortTypes.POPULAR;
      state.offersByCity = state.offersList.filter(({city}) => city.name === action.payload.name);
    })

    .addCase(getOffer, (state, action) => {
      state.currentOffer = action.payload;
    })

    .addCase(setCurrentOffer, (state, action) => {
      state.mapCurrentOffer = action.payload;
    })

    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload as SortTypes;

      switch (action.payload) {
        case SortTypes.POPULAR:
          state.offersByCity = state.offersList.filter(({city}) => city.name === state.currentCity.name);
          return;
        case SortTypes.PRICE_LOW_TO_HIGH:
          state.offersByCity.sort((first, second) => first.price - second.price);
          return;
        case SortTypes.PRICE_HIGH_TO_LOW:
          state.offersByCity.sort((first, second) => second.price - first.price);
          return;
        case SortTypes.TOP_RATED_FIRST:
          state.offersByCity.sort((first, second) => second.rating - first.rating);
          return;
        default:
          state.offersByCity = state.offersList.filter(({city}) => city.name === state.currentCity.name);
      }

    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });

    // .addCase(setError, (state, action) => {
    //   state.error = action.payload;
    // });

});

export {reducer};
