import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {memo} from 'react';
import {useAppSelector} from '../../hooks';
import {getUserData} from '../../store/user-process/user-selectors';
import useFavoriteCount from '../../hooks/use-favorite-count';

function HeaderUser(): JSX.Element {
  const favoriteCount = useFavoriteCount();

  const userData = useAppSelector(getUserData);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={userData?.avatarUrl}></img>
        </div>
        <span className="header__user-name user__name">{userData?.email}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </Link>
    </li>
  );
}

export default memo(HeaderUser);
