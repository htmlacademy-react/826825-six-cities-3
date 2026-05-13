import { useEffect } from 'react';
import { fetchOffersAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '.';
import { getOffers } from '../store/offer-data/offer-selectors';

function useOffers() {

  const offers = useAppSelector(getOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction())
  },[]);

  return offers;
}

export default useOffers;
