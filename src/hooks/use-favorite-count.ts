import { useEffect } from 'react';
import {getFavoriteOffers, getOffersDataLoadingStatus} from '../store/favorite-data/favorite-selectors';
import { fetchFavoriteOffersAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '.';

function useFavoriteCount() {
  const status = useAppSelector(getOffersDataLoadingStatus);
  const count = useAppSelector(getFavoriteOffers).length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  },[dispatch]);

  return count;
}

export default useFavoriteCount;
