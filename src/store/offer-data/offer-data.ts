import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferData} from '../../types/state';
import {Offer} from '../../types/offer';
import { 
    fetchOffersAction,
    fetchFavoriteOffersAction,
    fetchOfferAction,
    fetchNearByOfferAction} from '../api-actions';
import { replaceOffers } from '../../utils';

const initialState: OfferData = {
  offersList: [],
  favoriteOffers: [],
  nearByOffer: [],
  currentOffer: {} as Offer,
  isOffersDataLoading: false,
};

export const offerData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        replaceOffer: (state, action: PayloadAction<string>) => {
            state.offersList = replaceOffers(state.offersList, action.payload);
        },
    },
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

        .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
            state.favoriteOffers = action.payload;
            state.isOffersDataLoading = false;
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

  export const {replaceOffer} = offerData.actions;
