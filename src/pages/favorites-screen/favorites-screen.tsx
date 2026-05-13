import {Helmet} from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import CardsList from '../../components/cards-list/cards-list';
import {BemBlocks, AppRoute} from '../../const';
// import {useAppSelector} from '../../hooks';
// import { getFavoriteOffers } from '../../store/favorite-data/favorite-selectors';
import { Offer } from '../../types/offer';
import FavoritesEmpty from "./favorites-empty";

function FavoritesScreen() : JSX.Element {
  // const favoriteOffers = useAppSelector(getFavoriteOffers);
  const context = useOutletContext();

  const {isEmpty, favoriteOffers} = context;

  const favoritesByCity = favoriteOffers.reduce((acc: string, offer: Offer) => {
    const city:string = offer.city.name;
  
    if (!acc[city]) {
    acc[city] = [];
    }
  
    acc[city].push(offer);
  
    return acc;
  }, {})

  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <main className={classnames('page__main page__main--favorites', {'page__main--favorites-empty': isEmpty})}>
        <div className="page__favorites-container container">
          
            { isEmpty ?
              <FavoritesEmpty/> :
              <section className='favorites'>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.entries(favoritesByCity).map(([cityName, offers], index) => (
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
                        <div className='favorites__places'>
                          <CardsList
                            offers={offers}
                            bemBlock={BemBlocks.favorites}
                          />
                        </div>
                      </li>
                  ))}
                </ul>
              </section>
            }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </>
  );
}

export default FavoritesScreen;
