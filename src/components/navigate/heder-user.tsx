import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchUserDataAction, fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/offer-data/offer-selectors';
import {getUserData} from '../../store/user-process/user-selectors';

function HeaderUser(): JSX.Element {
  // const dispatch = useAppDispatch();
 

  // dispatch(fetchFavoriteOffersAction());
  // dispatch(fetchUserDataAction());

  const favoriteCount:number = useAppSelector(getFavoriteOffers).length;
  const userData = useAppSelector(getUserData);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={userData.avatarUrl}></img>
        </div>
        <span className="header__user-name user__name">{userData.email}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </Link>
    </li>
  );
}

export default HeaderUser;
