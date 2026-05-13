import {Outlet} from 'react-router-dom';
import classnames from 'classnames';
import {useAppSelector} from '../../hooks';
import { getFavoriteOffers } from '../../store/favorite-data/favorite-selectors';
import Header from '../header/header';

function FavoritesLayout(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isEmpty = favoriteOffers.length === 0;
  return (
    <div className={classnames('page', {'page--favorites-empty': isEmpty})}>
      <Header/>
      <Outlet context={{isEmpty, favoriteOffers}}/>
    </div>
  );
}

export default FavoritesLayout;