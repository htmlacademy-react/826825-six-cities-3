import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offersList;
export const getNearByOffer = (state: State): Offers => state[NameSpace.Data].nearByOffer;
export const getCurrentOffer = (state: State): Offer => state[NameSpace.Data].currentOffer;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
