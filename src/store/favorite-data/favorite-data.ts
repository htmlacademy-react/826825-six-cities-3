import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoriteData} from '../../types/state';
import {Offer} from '../../types/offer';
import {
  fetchFavoriteOffersAction,
  favoriteChangeAction} from '../api-actions';

const initialState: FavoriteData = {
  favoriteOffers: [],
  isFavoritesDataLoading: false,
};

export const favoriteData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })

      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoritesDataLoading = false;
      })

      .addCase(favoriteChangeAction.fulfilled, (state, action) => {
        console.log(action.payload.data)
        switch (action.payload.favoriteStatus) {
          case '1':
            state.favoriteOffers.push(action.payload.data);
            break;
          case '0':
            state.favoriteOffers = state.favoriteOffers.filter(({id}) => id !== action.payload.data.id);
        }
      });
  }
});
