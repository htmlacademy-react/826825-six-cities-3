import { createAction } from '@reduxjs/toolkit';
import { OfferCity, Offers, Offer } from '../types/offer';
import {UserData} from '../types/user-data';
import {Comments} from '../types/comment';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<OfferCity>('main/changeCity');

export const changeSortType = createAction<string>('main/changeSortType');

export const setMapCurrentOffer = createAction<string>('map/setCurrentOffer');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadUserData = createAction<UserData>('user/loadUserData');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const getOffer = createAction<Offer>('offer/getOffer');

export const getReviews = createAction<Comments>('offer/getReviews');

export const getNearByOffer = createAction<Offers>('offer/getNearByOffer');

export const loadFavoriteOffers = createAction<Offers>('offer/loadFavoriteOffers');

export const replaceOffer = createAction<string>('offer/replaceOffer');
