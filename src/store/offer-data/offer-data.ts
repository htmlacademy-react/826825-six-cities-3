import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferData} from '../../types/state';
import {
  fetchOffersAction,
  fetchFavoriteOffersAction,
  fetchOfferAction,
  fetchNearByOfferAction} from '../api-actions';

const initialState: OfferData = {
  offersList: [],
  nearByOffer: [],
  currentOffer: null,
  isOffersDataLoading: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.isOffersDataLoading = false;
      })

      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })

      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })

      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOffersDataLoading = false;
      })

      .addCase(fetchNearByOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })

      .addCase(fetchNearByOfferAction.fulfilled, (state, action) => {
        state.nearByOffer = action.payload;
        state.isOffersDataLoading = false;
      });
  }
});
