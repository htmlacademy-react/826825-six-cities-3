import { createAction } from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
// export const removeFavorite = createAction('data/removeFavorite')

