import { useEffect } from 'react';
import {getFavoriteOffers} from '../store/favorite-data/favorite-selectors';
import {getAuthorizationStatus} from '../store/user-process/user-selectors';
import { fetchFavoriteOffersAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '.';
import {AuthorizationStatus} from '../const';

function useFavoriteCount() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const count = useAppSelector(getFavoriteOffers).length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  },[dispatch, authorizationStatus]);

  return count;
}

export default useFavoriteCount;
