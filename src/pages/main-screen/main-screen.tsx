// import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import {PAGES} from '../../const';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';

type MainScreenProps = {
  placeCount: number;
}

const offersListClassName: string = 'cities__places-list places__list tabs__content';

function MainScreen({placeCount,} : MainScreenProps): JSX.Element {
  // const [currentOffer, setCurrentOffer] = useState('');
  const offersByCity = useAppSelector((state) => state.offersList);
  const currentCity = useAppSelector((state) => state.currentCity);

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
              <b className="places__found">{placeCount}places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList
                listClassName={offersListClassName}
                offers={offersByCity}
                // setCurrentOffer={setCurrentOffer}
                page={PAGES.main}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offersByCity}
                currentCity={currentCity}
                // currentOffer={currentOffer}
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
