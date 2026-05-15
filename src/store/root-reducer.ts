import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offerData} from './offer-data/offer-data';
import {reviewsData} from './reviews-data/reviews-data';
import {mainProcess} from './main-process/main-process';
import {userProcess} from './user-process/user-process';
import { favoriteData } from './favorite-data/favorite-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.Review]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Main]: mainProcess.reducer,
  [NameSpace.Favorites]: favoriteData.reducer,
});
