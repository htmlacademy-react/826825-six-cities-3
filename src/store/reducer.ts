import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffersList, setCurrentOffer} from './action';
import {CITIES} from '../const';
import { setOffers } from '../utils';


const initialState = {
  currentCity: CITIES[0],
  offersList: setOffers(CITIES[0].name),
  mapCurrentOffer: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })

    .addCase(fillOffersList, (state, action) => {
      state.offersList = setOffers(action.payload);
    })

    .addCase(setCurrentOffer, (state, action) => {
      state.mapCurrentOffer = action.payload;
    });
});

export {reducer};
