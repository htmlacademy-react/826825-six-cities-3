import {Helmet} from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Sort from '../../components/sort/sort';
import {PAGES} from '../../const';
import { sortOffers } from '../../utils';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';

const offersListClassName: string = 'cities__places-list places__list tabs__content';

function MainScreen(): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offersList);
  const currentCity = useAppSelector((state) => state.currentCity);
  const currentSortType = useAppSelector((state) => state.sortType);
  const placeCount:number = offersByCity.length;

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
                offers={sortOffers(offersByCity, currentSortType)}
                page={PAGES.main}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offersByCity}
                currentCity={currentCity}
                mapClassName='cities__map map'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
