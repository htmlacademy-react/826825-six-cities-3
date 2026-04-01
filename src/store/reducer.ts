import {createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setMapCurrentOffer,
  changeSortType,
  loadOffers,
  requireAuthorization,
  getReviews,
  getOffer,
  setOffersDataLoadingStatus,
  getNearByOffer,
  loadFavoriteOffers,
  replaceOffer,
  loadUserData,
  addReview} from './action';
import {SortTypes, AuthorizationStatus, DEFAUL_CITY} from '../const';
import { Offers, OfferCity, Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import {Comments} from '../types/comment';
import {replaceOffers} from '../utils';

type InitalState = {
  currentCity: OfferCity;
  offersList: Offers;
  favoriteOffers: Offers;
  nearByOffer: Offers;
  // offersByCity: Offers;
  currentOffer: Offer;
  reviews: Comments;
  sortType: SortTypes;
  mapCurrentOffer: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  userData: UserData;
}

const initialState: InitalState = {
  currentCity: DEFAUL_CITY,
  offersList: [],
  favoriteOffers: [],
  nearByOffer: [],
  // offersByCity: [],
  currentOffer: {} as Offer,
  reviews: [],
  sortType: SortTypes.POPULAR,
  mapCurrentOffer: '',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userData: {} as UserData,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
      // state.offersByCity = action.payload.filter(({city}) => city.name === state.currentCity.name);
      // state.offersList = action.payload.filter(({city}) => city.name === state.currentCity.name);
    })

    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      // state.offersByCity = action.payload.filter(({city}) => city.name === state.currentCity.name);
    })

    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.sortType = SortTypes.POPULAR;
      // state.offersByCity = state.offersList.filter(({city}) => city.name === action.payload.name);
    })

    .addCase(getOffer, (state, action) => {
      state.currentOffer = action.payload;
    })

    .addCase(getNearByOffer, (state, action) => {
      state.nearByOffer = action.payload;
    })

    .addCase(setMapCurrentOffer, (state, action) => {
      state.mapCurrentOffer = action.payload;
    })

    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload as SortTypes;

    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })

    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })

    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })

    .addCase(replaceOffer, (state, action) => {
      state.offersList = replaceOffers(state.offersList, action.payload);
    });

});

export {reducer};
