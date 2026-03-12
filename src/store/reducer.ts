import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, setCurrentOffer, changeSortType} from './action';
import {CITIES, SORT_TYPES} from '../const';
import { setOffers } from '../utils';


const initialState = {
  currentCity: CITIES[0],
  offersList: setOffers(CITIES[0].name),
  sortType: SORT_TYPES[0],
  mapCurrentOffer: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.sortType = SORT_TYPES[0];
    })

    .addCase(fillOffersList, (state, action) => {
      state.offersList = setOffers(action.payload);
    })

    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setCurrentOffer, (state, action) => {
      state.mapCurrentOffer = action.payload;
    });
});

export {reducer};
