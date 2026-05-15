import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Favorites].favoriteOffers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].isFavoritesDataLoading;
