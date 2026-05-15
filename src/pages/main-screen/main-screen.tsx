import {Helmet} from 'react-helmet-async';
import classnames from 'classnames';
import {memo} from 'react';
import CardsList from '../../components/cards-list/cards-list';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Sort from '../../components/sort/sort';
import { filterByCityOffers, sortOffers } from '../../utils';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import { getCurrentCity, getSortType} from '../../store/main-process/main-selectors';
import {getAuthCheckedStatus} from '../../store/user-process/user-selectors';
import {getOffersDataLoadingStatus} from '../../store/offer-data/offer-selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {BemBlocks} from '../../const';
import MainEmpty from './main-empty';
import useOffers from '../../hooks/use-offers';

function MainScreen(): JSX.Element {
  const offers = useOffers();
  const currentCity = useAppSelector(getCurrentCity);
  const currenSortType = useAppSelector(getSortType);
  const offersByCity = filterByCityOffers(offers, currentCity.name);
  const curretnOffers = sortOffers(offersByCity, currenSortType);
  const placeCount:number = offersByCity.length;

  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);


  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className={classnames('page__main page__main--index', {'page__main--index-empty': curretnOffers.length === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs/>
        <div className="cities">
          {curretnOffers.length === 0 ?
            <MainEmpty
              cityName = {currentCity.name}
            /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placeCount} places to stay in {currentCity.name}</b>
                <Sort/>
                <div className='cities__places-list places__list tabs__content'>
                  <CardsList
                    offers={curretnOffers}
                    bemBlock={BemBlocks.cities}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  offers={curretnOffers}
                  currentCity={currentCity}
                  bemBlock={BemBlocks.cities}
                />
              </div>
            </div>}
        </div>
      </main>
    </>
  );
}

export default memo(MainScreen);
