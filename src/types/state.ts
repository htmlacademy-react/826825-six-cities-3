import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Offers, Offer} from './offer';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OfferData = {
    offersList: Offers;
    favoriteOffers: Offers;
    nearByOffer: Offers;
    currentOffer: Offer;
    isOffersDataLoading: boolean;
  }

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
