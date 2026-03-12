import { createAction } from '@reduxjs/toolkit';
import { OfferCity } from '../types/offer';

export const changeCity = createAction<OfferCity>('main/changeCity');

export const fillOffersList = createAction<string>('main/fillOffersList');

export const setCurrentOffer = createAction<string>('map/setCurrentOffer');
