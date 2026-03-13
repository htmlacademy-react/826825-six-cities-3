import {createReducer } from '@reduxjs/toolkit';
import {changeCity, fillOffersList, setCurrentOffer, changeSortType} from './action';
import {CITIES, SortTypes} from '../const';
import { setOffers } from '../utils';


const initialState = {
  currentCity: CITIES[0],
  offersList: setOffers(CITIES[0].name),
  sortType: SortTypes.POPULAR,
  mapCurrentOffer: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
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
      state.sortType = action.payload;

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

    });

});

export {reducer};
