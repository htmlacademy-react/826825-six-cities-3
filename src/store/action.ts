import { createAction } from '@reduxjs/toolkit';
import { OfferCity, Offers } from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<OfferCity>('main/changeCity');

export const fillOffersList = createAction<string>('main/fillOffersList');

export const changeSortType = createAction<string>('main/changeSortType');

export const setCurrentOffer = createAction<string>('map/setCurrentOffer');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
