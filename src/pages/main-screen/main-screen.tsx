import {Helmet} from 'react-helmet-async';
import {useEffect} from 'react';
import CardsList from '../../components/cards-list/cards-list';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Sort from '../../components/sort/sort';
import {PAGES} from '../../const';
import { filterByCityOffers, sortOffers } from '../../utils';
import Map from '../../components/map/map';
import {useAppSelector, useAppDispatch} from '../../hooks';
import { getOffers } from '../../store/offer-data/offer-selectors';
import { getCurrentCity, getSortType } from '../../store/main-process/main-selectors';
import {fetchOffersAction} from '../../store/api-actions';
import {getAuthCheckedStatus} from '../../store/user-process/user-selectors';
import {getOffersDataLoadingStatus} from '../../store/offer-data/offer-selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {BemBlocks} from '../../const';

const offersListClassName: string = 'cities__places-list places__list tabs__content';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const currenSortType = useAppSelector(getSortType);
  const offersByCity = filterByCityOffers(offers, currentCity.name);
  const curretnOffers = sortOffers(offersByCity, currenSortType);
  const placeCount:number = offersByCity.length;

  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction())
  },[isAuthChecked]);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeCount} places to stay in {currentCity.name}</b>
              <Sort/>
              <CardsList
                listClassName={offersListClassName}
                offers={curretnOffers}
                bemBlock={BemBlocks.cities}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={curretnOffers}
                currentCity={currentCity}
                bemBlock={BemBlocks.cities}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
