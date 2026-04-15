import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { SortTypes, DEFAUL_CITY, NameSpace } from "../../const";
import { MainProcess } from "../../types/state";
import { OfferCity } from '../../types/offer';

const initialState: MainProcess = {
  currentCity: DEFAUL_CITY,
  sortType: SortTypes.POPULAR,
  mapCurrentOffer: '',
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<OfferCity>) => {
      state.currentCity = action.payload;
      state.sortType = SortTypes.POPULAR;
    },

    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload as SortTypes;
    },

    setMapCurrentOffer: (state, action: PayloadAction<string>) => {
      state.mapCurrentOffer = action.payload;
    },
  },
});

export const {setMapCurrentOffer, changeSortType, changeCity} = mainProcess.actions;