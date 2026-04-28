import {store} from '../store/index';
import {AuthorizationStatus, SortTypes} from '../const';
import { Offers, Offer} from './offer';
import { Comments } from './comment';
import { OfferCity } from './offer';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type OfferData = {
  offersList: Offers;
  nearByOffer: Offers;
  currentOffer: Offer | null;
  isOffersDataLoading: boolean;
}

export type FavoriteData = {
  favoriteOffers: Offers;
  isFavoritesDataLoading: boolean;
}

export type ReviewsData = {
  reviews: Comments;
}

export type MainProcess = {
  currentCity: OfferCity;
  sortType: SortTypes;
  mapCurrentOffer: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
