import {createSlice, current} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferData} from '../../types/state';
import { Offer } from '../../types/offer';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchNearByOfferAction} from '../api-actions';

const initialState: OfferData = {
  offersList: [],
  nearByOffer: [],
  currentOffer: null,
  isOffersDataLoading: false,
  hasError: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    removeFavorite: (state) => {
      state.offersList = state.offersList.map((offer:Offer) => ({
        ...offer,
        isFavorite: offer.isFavorite ? false : offer.isFavorite,
      }))
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })

      // .addCase(fetchFavoriteOffersAction.pending, (state) => {
      //   state.isOffersDataLoading = true;
      // })

      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })

      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
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

export const {removeFavorite} = offerData.actions;
