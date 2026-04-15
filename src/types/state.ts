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
  favoriteOffers: Offers;
  nearByOffer: Offers;
  currentOffer: Offer;
  isOffersDataLoading: boolean;
}

export type ReviewsData = {
  reviews: Comments;
}

export type MainProcess = {
  currentCity: OfferCity,
  sortType: SortTypes,
  mapCurrentOffer: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
