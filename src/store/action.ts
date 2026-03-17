import { createAction } from '@reduxjs/toolkit';
import { OfferCity, Offers, Offer } from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<OfferCity>('main/changeCity');

export const changeSortType = createAction<string>('main/changeSortType');

export const setCurrentOffer = createAction<string>('map/setCurrentOffer');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const getOffer = createAction<Offer>('offer/getOffer');
