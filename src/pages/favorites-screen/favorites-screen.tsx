import {Helmet} from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import {Offers} from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offers;
}

const offersListClassName: string = 'favorites__places';

function FavoritesScreen({offers} : FavoritesScreenProps) : JSX.Element {
  const favoritesOffers:Offers = offers.filter(({isFavorite}) => isFavorite === true);
  const favoritesCitys:string[] = Array.from(new Set(favoritesOffers.map(({city}) => city.name)));
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesCitys.map((cityName, index) => {
                const favoritesOffersByCity:Offers = offers.
                  filter(({city}) => city.name === cityName);
                return (
                  <li
                    key={`${cityName + index}`}
                    className="favorites__locations-items"
                  >
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <CardsList
                      listClassName={offersListClassName}
                      offers={favoritesOffersByCity}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
